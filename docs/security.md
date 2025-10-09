# BM-App-Token Authentication

The **BM-App-Token** is a secure authentication method used to call the BikeMatrix APIs from client applications. Instead of exposing a static API key in browser-based JavaScript apps, we use a short-lived, HMAC-signed token to authorize each API call.

## How It Works

- Your backend app generates a **BM-App-Token**, which contains:

  - `appId` – Your assigned application ID (e.g., `radbikeparts`)
  - `timestamp` – The current UTC time in **Unix seconds**
  - `signature` – A base64-encoded HMAC-SHA256 signature of `{appId}|{timestamp}`, signed using your shared secret

- The token is passed in the request header (`bm-app-token`) when calling the API.
- Bike Matrix will validates the token.
- Tokens expire after a short period of time, and when the page refreshes a new token will be generated.

### Example

If your `appId` is `radbikeparts` and your shared secret is `abc12345`, then:

1. **Create the payload (appId and timestamp):**

```plaintext
radbikeparts|1716901532
```

2. **Sign the payload using HMAC-SHA256**, with your shared secret key and encode the result in Base64. Your secret key is provided by us, and is Base64-encoded. Decode it before signing.

```plaintext
YAbc123ExampleSignature==
```

3. **Assemble the token:**

```plaintext
radbikeparts|1716901532|YAbc123ExampleSignature==
```

4. **Pass the token as the apiToken property in the data-bikematrix-config script element**

This will pass the token in the `bm-app-token` header for all API requests made by the BikeMatrix SDK.

See more about the configuration options in our [Configuration Documentation](configuration.md).

## Benefits

- No static API keys exposed in the frontend
- Strong cryptographic validation of requests

## When to Use

Use the bm-app-token if:

- You're calling the API from a browser-based JavaScript app

If you're calling from a secure backend server (e.g. Node.js, Next.js server routes), use your bm-subscription-key (API key) instead.

## Example Usage

### PHP Example

```php
$appId = '<your_app_id>'; // e.g., 'radbikeparts'
$base64Secret = '<your_base64_encoded_secret>';

// Decode the Base64 secret
$secret = base64_decode($base64Secret);

// Current Unix timestamp
$timestamp = time();

// Create payload
$payload = "{$appId}|{$timestamp}";

// Generate HMAC-SHA256 and encode as base64
$signature = base64_encode(hash_hmac('sha256', $payload, $secret, true));

// Build token
$token = "{$appId}|{$timestamp}|{$signature}";

echo "bm-app-token: " . $token;
```

### C# Example

```csharp
using System;
using System.Security.Cryptography;
using System.Text;

class Program
{
    static void Main()
    {
        string appId = "<your_app_id>"; // e.g., "radbikeparts"
        string base64Secret = "<your_base64_encoded_secret>";

        // Decode the Base64 secret
        byte[] secretBytes = Convert.FromBase64String(base64Secret);

        // Get current Unix timestamp
        long timestamp = DateTimeOffset.UtcNow.ToUnixTimeSeconds();

        // Create payload
        string payload = $"{appId}|{timestamp}";
        byte[] payloadBytes = Encoding.UTF8.GetBytes(payload);

        // Compute HMAC-SHA256
        using var hmac = new HMACSHA256(secretBytes);
        byte[] hashBytes = hmac.ComputeHash(payloadBytes);
        string signature = Convert.ToBase64String(hashBytes);

        // Build token
        string token = $"{appId}|{timestamp}|{signature}";

        Console.WriteLine("bm-app-token: " + token);
    }
}
```
