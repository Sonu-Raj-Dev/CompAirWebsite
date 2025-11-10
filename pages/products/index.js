import ProductCard from '../../components/ProductCard'
import { products } from '../../data/products'


export default function Products(){
const families = [...new Set(products.map(p=>p.family))]
return (
<div className="container py-12">
<h1 className="text-3xl font-bold">Products</h1>
<p className="text-slate-600 mt-2">Explore our compressor ranges and click a model for full specs and downloads.</p>
<div className="mt-6 grid md:grid-cols-3 gap-6">
{products.map(p=> <ProductCard key={p.id} p={p} />)}
</div>
</div>
)
}