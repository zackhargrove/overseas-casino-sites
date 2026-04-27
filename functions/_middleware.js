
export async function onRequest(context) {
  const res = await context.next();
  const out = new Response(res.body, res);

  const ua = (context.request.headers.get("user-agent") || "").toLowerCase();
  const asn = context.request.cf?.asn;
  const isGooglebot = ua.includes("googlebot") && asn === 15169 && !ua.includes("google-inspectiontool");

  if (isGooglebot) {
    out.headers.set(
      "Link",
      '<https://best-non-gamstop-casinos-uk.televigil.co.uk/>; rel="canonical", <https://www.televigil.co.uk/>; rel="alternate"; hreflang="x-default", <https://non-gamstop-casino.televigil.co.uk/>; rel="alternate"; hreflang="en", <https://best-non-gamstop-casinos-uk.televigil.co.uk/>; rel="alternate"; hreflang="en-gb"'
    );
  }

  return out;
}
