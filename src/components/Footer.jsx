import React from "react";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 w-full bg-[#181F2A] text-white pt-10 pb-4 border-t border-[#232B3A] mt-8">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-2">
            <span className="text-[#F59E42] text-2xl font-bold mr-2">&#60;&#62;</span>
            <span className="text-xl font-bold">HackCode</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">The best platform to enhance your coding skills, expand your knowledge and prepare for technical interviews.</p>
        </div>
        <div className="flex flex-1 flex-wrap gap-12 justify-between">
          <div>
            <div className="font-semibold mb-2">Resources</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li><a href="/problems" className="hover:text-white">Problems</a></li>
              <li><a href="/playground" className="hover:text-white">Playground</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Support</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/help" className="hover:text-white">Help Center</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Legal</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-[#232B3A]" />
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-xs text-gray-400">2025 HackCode. All rights reserved.</div>
      </div>
    </footer>
  );
}
