export default function Services(){
return (
<div className="container py-12">
<h1 className="text-3xl font-bold">Services & Aftermarket</h1>
<p className="mt-3 text-slate-700">We offer warranty programs, spares, AMC, proactive monitoring via iConn and trained technicians for installation & commissioning.</p>


<section className="mt-6 grid md:grid-cols-3 gap-6">
<div className="p-4 border rounded">
<h4 className="font-semibold">Warranty Programs</h4>
<p className="text-sm mt-2">Extend 5: up to 40,000 hours / 5 years. Assure 10: extended airend warranty options.</p>
</div>
<div className="p-4 border rounded">
<h4 className="font-semibold">iConn Monitoring</h4>
<p className="text-sm mt-2">Realtime monitoring and predictive diagnostics to minimize downtime.</p>
</div>
<div className="p-4 border rounded">
<h4 className="font-semibold">Spare Parts & AMC</h4>
<p className="text-sm mt-2">Genuine parts, local stock and scheduled maintenance plans.</p>
</div>
</section>
</div>
)
}