"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="bg-black text-white px-4 py-3 flex justify-between items-center">
      <span className="font-bold text-lg">BaniWeb Studio</span>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/teams">Teams</Link>
        <Link href="/blog">Blog</Link>
        {!isLoggedIn && <Link href="/login">Login</Link>}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-600 px-2 py-1 rounded text-sm"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
