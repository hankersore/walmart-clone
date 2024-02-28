'use client';
import {
    Search,
  } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";


export default function SearchBar() {
    const router = useRouter();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.currentTarget.input.value;
        console.log("checking");
        router.push(`/search?q=${input}`);
      };
  return (
    <form
    onSubmit={handleSubmit}
    className="flex items-center bg-white rounded-full w-full flex-1"
  >
    <input
      type="text"
      name="input"
      className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black"
      placeholder="Search for product"
    />
    <button type="submit">
      <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
    </button>
  </form>
  )
}
