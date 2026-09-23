# Additional Required Headers

In order for Bike Matrix to function properly, we require a combination of the following four headers to be sent with each request to our API.

1. `bm-request-type`:
Possible values: `ProxyServerApi`, `DirectClientApi`, `ServerApi`.
There are 3 different approaches to using the Bike Matrix API. The value you send within `bm-request-type` depends upon which of these your implementation uses. These are:

   * `ProxyServerApi`: A shopper uses your website, which has a standalone Bike Matrix implementation using a backend server. In this scenario your server acts as a proxy for the shopper, collecting the information, sending it to Bike Matrix and then processing the reply.

   * `DirectClientApi`: A shopper uses your website. Your website has a custom client-side implementation which sends requests from the shopper's browser direct to the Bike Matrix API without using the Bike Matrix SDK.

   * `ServerApi`: One of your service jobs, such as a scheduled or background process, sends a request to Bike Matrix independently of any shopper initiated action.

2. `bm-client-ip`:
The IP address of the shopper's browser as your website sees it, not the IP of your server. If you sit behind a WAF or load balancer, this is the client IP that arrives at your application.

3. `bm-ja4`:
The JA4 TLS fingerprint of the shopper. This is a highly secure and trustworthy method of identifying individual clients on the Internet. If your Web Application Framework (WAF) or firewall collects this, pass it through as-is within the `bm-ja4` header.

4. `bm-url`:
The full URL of the page the shopper is on when the call is triggered. Eg. https://domain.com/path/to/page 

Please note that these four headers are required for direct API based Bike Matrix integration to function and allow Bike Matrix to determine if the shopper is a legitimate user. Contact Bike Matrix if you are unable to provide any of these headers. 
