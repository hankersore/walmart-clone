"use client";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../../store";
import { getCartTotal } from "@/lib/getCartTotal";


export default function HeaderLinks() {
  const cart = useCartStore((state)=> state.cart);
  const total = getCartTotal(cart);
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
              {cart.length > 0 ? `${cart.length} items` : `No items`}
            </p>
            <p>{cart.length > 0 ? `${total}` : "0"}</p>
          </div>
        </Link>
      </div>
  )
}