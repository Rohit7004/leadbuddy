import Link from 'next/link';

function Navigation() {
  return (
    <nav className="flex justify-center items-center px-10 py-3 font-sans text-base">
      <ul className="flex space-x-8 list-none">
        <li>
          <Link href="/" className="text-purple-700 font-bold hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/property-leads" className="text-gray-800 font-bold hover:underline">
            Property Leads
          </Link>
        </li>
        <li>
          <Link href="/hni" className="text-gray-800 font-normal hover:underline">
            HNI Leads (Acquisition)
          </Link>
        </li>
        <li>
          <Link href="/pages/audience" className="text-gray-800 font-normal hover:underline">
            Audience Reach Program
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-800 font-normal hover:underline">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-800 font-normal hover:underline">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;