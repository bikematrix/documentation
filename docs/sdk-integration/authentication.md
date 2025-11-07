# SDK Configuration

As explained on the [security page](docs/security.md), We support two methods of authentication of requests.

- API Key
- API Token

The **API Key** can be used for internal purposes, such as for initial testing and integration, or on an internal server (e.g. Node.js backend, Next.js API routes, Nuxt server routes).

When providing API access to external users (e.g., HTML/Javascript, Vue.js, React, or browser-only Next.js pages), you will need to use the **API Token** to provide time limited access to our API.

:::info

This information is also detailed on [the configuration page](docs/sdk-integration/configuration#apikey-and-apitoken-explained).

:::

## API Key

This key is set in the [configuration](/docs/configuration.md).

- `apiKey` should be set to the API Key we sent as part of onboarding.
- `apiUrl` should be set to the Bike API, for example `"https://api.bikematrix.io/bike/v3/"`.

## API Token

This token is set in the [configuration](/docs/sdk-integration/configuration.md).

- `apiToken` should be set to the API Token generated and passed to the user. The [security page](docs/security.md) explains how to generate the token.
- `apiUrl` should be set to the Proxy API, for example `"https://api.bikematrix.io/Proxy/v3/"`.
