"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-4 py-3 flex justify-between items-center">
      <span className="font-bold text-lg">BaniWeb Studio</span>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/teams">Teams</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
