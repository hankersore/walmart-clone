"use client";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";


export default function HeaderLinks() {
  return (
    <div className="flex space-x-5 mt-5 md:mt-0">
        <Link href="/" className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm">
          <Grid2X2 size={20} />
          <p>Department</p>
        </Link>
        <Link href="/" className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm">
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link href="/" className="flex text-white font-bold items-center space-x-2 text-sm">
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My Items</p>
          </div>
        </Link>
        <Link href="/" className="flex text-white font-bold items-center space-x-2 text-sm">
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign In</p>
            <p>Account</p>
          </div>
        </Link>
        <Link href="/basket" className="flex text-white font-bold items-center space-x-2 text-sm">
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">
             No items
            </p>
            <p>0.00</p>
          </div>
        </Link>
      </div>
  )
}