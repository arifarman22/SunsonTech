import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-enterprise py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Sunson Technology</h3>
            <p className="text-sm text-slate-400">
              Leading provider of self-service terminal solutions for global enterprises.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/banking" className="hover:text-white transition-colors">Banking Solutions</Link></li>
              <li><Link href="/products/healthcare" className="hover:text-white transition-colors">Healthcare Kiosks</Link></li>
              <li><Link href="/products/security" className="hover:text-white transition-colors">Security Systems</Link></li>
              <li><Link href="/products/payment" className="hover:text-white transition-colors">Payment Terminals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/solutions/cdm" className="hover:text-white transition-colors">Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@sunsontech.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Global Headquarters</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Sunson Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
