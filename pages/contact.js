export default function Contact(){
return (
<div className="container py-12" id="contact">
<h1 className="text-3xl font-bold">Contact Sales</h1>
<p className="mt-3 text-slate-700">Fill this form and our sales team will get back to you.</p>
<form className="mt-6 grid md:grid-cols-2 gap-4 max-w-3xl">
<input className="border p-3 rounded" placeholder="Name" />
<input className="border p-3 rounded" placeholder="Email" />
<input className="border p-3 rounded" placeholder="Phone" />
<select className="border p-3 rounded">
<option>Product Interest</option>
<option>Rotary Screw</option>
<option>Reciprocating</option>
<option>Oil-free / Vacuum</option>
</select>
<textarea className="border p-3 rounded md:col-span-2" placeholder="Message"></textarea>
<button type="submit" className="px-4 py-3 bg-brand text-white rounded md:col-span-2">Send enquiry</button>
</form>
</div>
)
}