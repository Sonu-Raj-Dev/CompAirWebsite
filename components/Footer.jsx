export default function Footer(){
return (
<footer className="bg-gray-900 text-white">
<div className="container mx-auto px-4 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
C
</div>
<div className="flex flex-col">
<span className="font-bold text-xl">CompAir India</span>
<span className="text-sm text-gray-400">Compressed Air Solutions</span>
</div>
</div>
<p className="text-gray-300 leading-relaxed mb-4 max-w-md">
CompAir is committed to providing superior compressed air solutions across India. 
We deliver reliable, efficient systems for industrial applications with comprehensive support.
</p>
<div className="flex space-x-4">
<span className="text-sm text-gray-400">Follow us:</span>
{/* Social links placeholder */}
</div>
</div>
<div>
<h5 className="font-semibold text-lg mb-4">Quick Links</h5>
<ul className="space-y-3 text-gray-300">
<li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
<li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
<li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
<li><a href="/downloads" className="hover:text-white transition-colors">Downloads</a></li>
<li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-lg mb-4">Contact Info</h5>
<div className="space-y-3 text-gray-300">
<div>
<p className="font-medium">Corporate Office:</p>
<p className="text-sm">Manufacturing: Naroda, Ahmedabad</p>
<p className="text-sm">Sales & Service across India</p>
</div>
<div>
<p className="font-medium">Customer Care:</p>
<p className="text-sm">Phone: +91-XXXX-XXXXXX</p>
<p className="text-sm">Email: info@compair.in</p>
</div>
<div>
<p className="font-medium">Support Hours:</p>
<p className="text-sm">24/7 Technical Support</p>
</div>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-800">
<div className="container mx-auto px-4 py-6">
<div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
<p>© {new Date().getFullYear()} CompAir India. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
<a href="#" className="hover:text-white transition-colors">Terms of Service</a>
<a href="#" className="hover:text-white transition-colors">Warranty</a>
</div>
</div>
</div>
</div>
</footer>
)
}