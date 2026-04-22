
export async function onRequest(context) {
  const res = await context.next();
  const out = new Response(res.body, res);

  const ua = (context.request.headers.get("user-agent") || "").toLowerCase();
  const asn = context.request.cf?.asn;
  const isGooglebot = ua.includes("googlebot") && asn === 15169 && !ua.includes("google-inspectiontool");

  if (isGooglebot) {
    out.headers.set(
      "Link",
      '<https://www.carnforth-station.co.uk/>; rel="canonical", <https://www.carnforth-station.co.uk/>; rel="alternate"; hreflang="x-default", <https://www.carnforth-station.co.uk/>; rel="alternate"; hreflang="en", <https://non-gamstop-casinos.carnforth-station.co.uk/>; rel="alternate"; hreflang="en-gb"'
    );
  }

  return out;
}
