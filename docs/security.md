import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Security

Authentication is required to connect to the Bike Matrix API.

- **Shopify** handles this automatically.
- **SDK** and **API** integrations require specific setup to authenticate with our API.

## API Authentication Methods

We currently have two methods of authentication for the Bike Matrix API:

- [API Key](#api-key-authentication)
- [API Token](#api-token-authentication)

The **API Key** can be used for internal purposes, such as for initial testing and integration, or on an internal server (e.g. Node.js backend, Next.js API routes, Nuxt server routes).

When providing API access to external users (e.g., HTML/Javascript, Vue.js, React, or browser-only Next.js pages), you will need to use the **API Token** to provide time limited access to our API.

## API Key Authentication

This is a static private key to authenticate with our API. This key should only be used and shared internally as this key provides access to the API without a time limit.

This is typically used for initial testing / integration of our solution.

We will send your API Key as part of onboarding.

### SDK Integration

This key is set in the [configuration](/docs/configuration.md).

- `apiKey` should be set to the API Key we sent as part of onboarding.
- `apiUrl` should be set to the Bike API, for example `"https://api.bikematrix.io/bike/v3/"`.

### API Integration

You should target endpoints under our Bike API `"https://api.bikematrix.io/bike/v3/"`.

You should add the header `bm-subscription-key` to your requests. Setting the value to the API Key we sent as part of onboarding.

## API Token Authentication

This is a token which provides the user time limited access to the Bike Matrix API, therefore the token will expire. This is designed to be given to your service's users.

This is typically used on e-commerce websites.

We will provide you with the necessary details to generate the API Token as part of onboarding prior to going live.

### API Token Details

The **API Token** has the format of `appId|timestamp|signature`.

- `appId` - Your assigned application ID (e.g. `radbikeparts`)
- `timestamp` – The current UTC time in **Unix seconds**
- `signature` – A base64-encoded HMAC-SHA256 signature of `appId|timestamp`, signed using your shared secret which we will provide as part of your onboarding.

An example **API Token**: `radbikeparts|012345678912345|abcdefghijklmnopqrstuvwxyz=`.

As this token expires, a new token should be generated on each page refresh.

### Generating the API Token

For the following values:

- `appId` is `radbikeparts`
- Shared secret key is `abc12345` (Shared secret key is sent as part of onboarding and is used to generate the signature)

Lets walk through the process of generating the API Token:

1. **Create the payload (appId and timestamp)**

```plaintext
radbikeparts|1716901532
```

2. **Create payload signature**

Use HMAC-SHA256 to generate a signature with your shared secret key. Then encode the result in Base64.

Your secret key is provided by us and is Base64-encoded. **Decode it before signing**.

```plaintext
YAbc123ExampleSignature==
```

3. **Assemble the token**

```plaintext
radbikeparts|1716901532|YAbc123ExampleSignature==
```

4. **Use API Token**

You can now use this API token to contact the Bike Matrix API through [SDK Integration](#sdk-integration-1) or [API Integration](#api-integration-1).

#### Token Generation Examples

<Tabs>
  <TabItem value="php" label="PHP">

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

  </TabItem>
  <TabItem value="cs" label="C#">

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

  </TabItem>
</Tabs>

### SDK Integration

This key is set in the [configuration](/docs/configuration.md).

- `apiToken` should be set to the API Token generated and passed to the user.
- `apiUrl` should be set to the Proxy API, for example `"https://api.bikematrix.io/Proxy/v3/"`.

### API Integration

You should target endpoints under our Bike API `"https://api.bikematrix.io/proxy/v3/"`.

You should add the header `bm-app-token` to your requests. Setting the value to the API Token you generated and passed to the user.
