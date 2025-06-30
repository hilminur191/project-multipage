"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulasi login dengan 2 role
    if (email === "admin@example.com" && password === "password") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("role", "admin");
      router.push("/blog/create");
    } else if (email === "user@example.com" && password === "password") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("role", "user");
      router.push("/blog");
    } else {
      alert("Invalid credentials");
    }
  };
    
  return (
    <main className="py-12 px-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </main>
  );
}
