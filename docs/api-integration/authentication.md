# API Authentication

We support two methods of authentication of requests.

- API Key
- API Token

The **API Key** can be used for internal purposes, such as for initial testing and integration, or on an internal server (e.g. Node.js backend, Next.js API routes, Nuxt server routes).

When providing API access to external users (e.g., HTML/Javascript, Vue.js, React, or browser-only Next.js pages), you will need to use the **API Token** to provide time limited access to our API.

All of this information is detailed on the [security page](docs/security.md).

## API Key Authentication

You must target endpoints under our Bike API `"https://api.bikematrix.io/bike/v3/"`.

You must add the header `bm-subscription-key` to your requests. Setting the value to the API Key we sent as part of onboarding.

## API Token Authentication

You should target endpoints under our Bike API `"https://api.bikematrix.io/proxy/v3/"`.

You should add the header `bm-app-token` to your requests. Setting the value to the API Token you generated and passed to the user.

Generating the API Token is detailed on the [security page](docs/security.md).

## Obtaining Credentials

In order to generate the API token you will need Bike Matrix to provide credentials.

Please [contact us](https://www.bikematrix.io/contact) to obtain the credentials. We will create your subscription and provide you with access to our Staging environment APIs allowing you to explore and test functionality. Our Staging environment has a subset of the full bike database.

When you’re ready, we can activate your licence and provide access to the entire bike database.
