## Additional Required Headers

In order for Bike Matrix to function properly, we require a combination of the following four headers to be sent with each request to our API.

1. `bm-request-type`:
Possible values: ProxyServerApi, DirectClientApi, ServerApi.
There are 3 different approaches to using the Bike Matrix API. The value sent within`bm-request-type` depends upon which of these the customer implementation uses. These are:

* A customer uses a client website which has a standalone Bike Matrix implementation. In this scenario the server acts as a proxy for the customer, collecting the information, sending it to Bike Matrix and then processing the reply. If this is your use case, send `ProxyServerApi` in `bm-request-type`.

* A customer uses a client website. That website has a custom server side SDK implementation which sends requests from the ccustomer browser to the Bike Matrix API asynchronously. In this scenario the client server does not directly collect information or process the Bike Matrix response. If this is your use case, send `DirectClientApi` in `bm-request-type`.

* A client server sends a request to the Bike Matrix independently of any customer based or initiated action. If this is your use case, send `ServerApi` in `bm-request-type`.

2. `bm-client-ip`:
The IP address of the shopper's browser as your server sees it, not the IP of your server. If you sit behind a WAF or load balancer, this is the client IP that arrives at your application.

3. `bm-ja4`: X-Azure-JA4-Fingerprint
The JA4 TLS fingerprint of the shopper. This is a highly secure and trustworthy method of identifying individual clients on the Internet. If your Web Application Framework (WAF) or firewall collects this, pass it through as-is within the `bm-ja4` header. Contact Bike Matrix if the JA4 fingerprint is unavailable within your infrastructure.

4. `bm-url`:
The full URL of the page the shopper is on when the call is triggered. Ex. https://domain.com/path/to/page 

Please note that these four headers are required for a server-side API based Bike Matrix integration to function. Failure to provide these will result in an error message from the Bike Matrix API.
