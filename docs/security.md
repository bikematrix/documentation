# BM-App-Token Authentication

The **BM-App-Token** is a secure authentication method used to call the BikeMatrix APIs from client applications. Instead of exposing a static API key in browser-based JavaScript apps, we use a short-lived, HMAC-signed token to authorize each API call.

## How It Works
- Your backend app generates a **BM-App-Token**, which contains:
  - The application ID
  - A timestamp
  - A cryptographic signature (HMAC-SHA256)
- The token is passed in the request header (`bm-app-token`) when calling the API.
- Azure API Management (APIM) validates the token before forwarding the request to the backend.
- Tokens expire after a short period of time, and when the page refreshes a new token will be generated.

## Benefits
- No static API keys exposed in the frontend
- Strong cryptographic validation of requests

