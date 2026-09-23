# API Introduction

:::danger[Warning]
Due to security and contractual considerations please speak to the Bike Matrix team first before building elements that directly call our API.

There are specific headers that we require for security and rate limiting purposes (such as client IP address). Please refer to the [Required Headers](docs/api-integration/required_headers.md) documentation for detailed guidance on these headers.
:::

The **API** integration with Bike Matrix allows for creation of a fully customisable compatibility solution.

Our production API URL is `"https://api.bikematrix.io/proxy/v3/"`.

Theres are two main steps to using our API:

- [Setting up authentication](docs/api-integration/authentication.md) with our API.
- [Querying our endpoints](docs/api-integration/endpoints/overview.md) to find compatibility.
