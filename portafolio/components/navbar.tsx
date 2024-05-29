"use client"

import Link from "next/link";

import { itemsNavbar } from "@/data";

import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = usePathname()

    return (
        <div className=" justify-center">
        <p className=" justify-center">hola </p>
      </div>
      

    );
}

export default Navbar;