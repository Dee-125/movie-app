"use client";

import Link from "next/link";
import DarkModeSwitch from "@/components/DarkModeSwitch";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto border-b border-gray-200 dark:border-purple-900 rounded-b-lg">
        <nav>
            <ul className="flex gap-4">
                
                <SignedIn>
                    <li>
                        <UserButton />
                    </li>
                </SignedIn>
                <SignedOut>
                    <li>
                        <Link href="/sign-in">Sign-In</Link>
                    </li>
                </SignedOut>
                
                <li className="hidden sm:block">
                    <Link href="/">Home</Link>
                </li>
                <li className="hidden sm:block">
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
        <div className="flex gap-4">
            
            <DarkModeSwitch />

            <Link href={"/"}>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-900 via-red-500 to-pink-700 text-transparent bg-clip-text">
                            Dwezealler Ent.
                    </span>
            </Link>
        </div>
    </div>
);
}
