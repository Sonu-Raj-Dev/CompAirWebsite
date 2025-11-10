import { products } from '../../data/products'
import { useRouter } from 'next/router'


export default function ProductPage(){
const router = useRouter();
const { slug } = router.query;
const p = products.find(x=> x.slug === slug);
if(!p) return <div className="container py-12">Loading...</div>;
return (
<div className="container py-12">
<h1 className="text-2xl font-bold">{p.title}</h1>
<p className="text-slate-600 mt-2">{p.short}</p>


<section className="mt-6">
<h3 className="font-semibold">Specifications</h3>
<table className="w-full mt-3 table-auto border-collapse">
<tbody>
{Object.entries(p.specs).map(([k,v])=> (
<tr key={k} className="border-t">
<td className="py-2 font-medium">{k.replace(/_/g,' ')}</td>
<td className="py-2">{Array.isArray(v)? v.join(' / ') : String(v)}</td>
</tr>
))}
</tbody>
</table>
<div className="mt-4">
<a href={p.pdf} download className="px-4 py-2 border rounded">Download PDF</a>
</div>
</section>
</div>
)
}