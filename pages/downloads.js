export default function Downloads(){
return (
<div className="container py-12">
<h1 className="text-3xl font-bold">Downloads</h1>
<p className="mt-3 text-slate-700">All product brochures, price sheets and corporate materials.</p>
<ul className="mt-6 list-disc list-inside">
<li><a href="/downloads/L-Series-catalogue.pdf" className="text-brand underline">L-Series Catalogue (PDF)</a></li>
<li><a href="/downloads/T30-prices.pdf" className="text-brand underline">T30 Pricing (PDF)</a></li>
<li><a href="/downloads/CompAir-Corporate.pdf" className="text-brand underline">Corporate Presentation (PDF)</a></li>
</ul>
</div>
)
}