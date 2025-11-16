import Link from 'next/link';
import CompAirLogo from './CompAirLogo';

export default function Header(){
return (
<header className="bg-white shadow-sm sticky top-0 z-50">
<div className="container mx-auto px-4 flex items-center justify-between py-4">
<Link href="/" className="flex items-center">
<CompAirLogo className="h-12" />
</Link>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors">
Home
</Link>
<Link href="/products" className="text-gray-700 hover:text-blue-900 transition-colors">
Products
</Link>
<Link href="/about" className="text-gray-700 hover:text-blue-900 transition-colors">
About
</Link>
<Link href="/services" className="text-gray-700 hover:text-blue-900 transition-colors">
Services
</Link>
<Link href="/downloads" className="text-gray-700 hover:text-blue-900 transition-colors">
Downloads
</Link>
<Link href="/contact" className="px-4 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors">
Contact
</Link>
</nav>
<div className="md:hidden">
{/* Mobile menu button */}
<button className="p-2">
<span className="sr-only">Open menu</span>
<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
</button>
</div>
</div>
</header>
)
}