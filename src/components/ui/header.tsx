"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header1() {
    const navigationItems = [
        {
            title: "Products",
            description: "Explore our adhesive product range",
            items: [
                {
                    title: "Fluted Glue",
                    href: "/products",
                },
                {
                    title: "Hot Stamping Glue",
                    href: "/products",
                },
                {
                    title: "WPC Glue",
                    href: "/products",
                },
                {
                    title: "PVC Pannel Glue",
                    href: "/products",
                },
            ],
        },
        {
            title: "Company",
            description: "Learn more about us",
            items: [
                {
                    title: "About us",
                    href: "/about",
                },
                {
                    title: "Why Choose Us",
                    href: "/services",
                },
                {
                    title: "Testimonials",
                    href: "/testimonials",
                },
                {
                    title: "Contact us",
                    href: "/contact",
                },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-white border-b-2 border-blue-600 shadow-lg">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center min-h-14 md:min-h-20">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center flex-shrink-0">
                        <Image 
                            src="/logo.png" 
                            alt="Baba Adhesive Logo" 
                            width={60} 
                            height={60}
                            className="w-12 md:w-16 h-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden lg:block">
                        <NavigationMenuList className="flex gap-1">
                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    href="/" 
                                    className="font-semibold text-sm text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                                >
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuTrigger className="font-semibold text-sm text-gray-700 hover:text-blue-600 transition-colors px-2 py-1">
                                        {item.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!w-[450px] p-4 bg-white rounded-lg">
                                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                            <div className="flex flex-col h-full justify-between">
                                                <div className="flex flex-col">
                                                <p className="text-base font-bold text-gray-700">{item.title}</p>
                                                    <p className="text-slate-600 text-sm">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <Button size="sm" className="mt-10 bg-gray-700 hover:bg-blue-600">
                                                    Learn more
                                                </Button>
                                            </div>
                                            <div className="flex flex-col text-sm h-full justify-end space-y-2">
                                                {item.items?.map((subItem) => (
                                                    <NavigationMenuLink
                                                        href={subItem.href}
                                                        key={subItem.title}
                                                        className="flex flex-row justify-between items-center hover:bg-slate-100 py-2 px-3 rounded text-gray-700 font-medium hover:text-blue-600 transition-colors"
                                                    >
                                                        <span>{subItem.title}</span>
                                                        <MoveRight className="w-4 h-4 text-slate-400" />
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Desktop CTA Button */}
                    <Link href="/quote" className="hidden md:block">
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded-lg transition transform hover:scale-105 shadow-md text-sm md:text-base">
                            Get a Quote
                        </button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <Button 
                        variant="ghost" 
                        onClick={() => setOpen(!isOpen)}
                        className="lg:hidden text-gray-700 hover:text-blue-600"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden bg-red-50 border-t border-red-200 py-3 space-y-2 rounded-b-lg max-h-[calc(100vh-60px)] overflow-y-auto">
                        <div className="px-4">
                            <Link
                                href="/"
                                className="flex items-center text-gray-700 hover:text-blue-600 py-2 px-2 transition-colors font-bold text-base"
                                onClick={() => setOpen(false)}
                            >
                                Home
                            </Link>
                        </div>
                        {navigationItems.map((item) => (
                            <div key={item.title} className="px-4">
                                <p className="text-gray-700 font-bold text-base mb-2">{item.title}</p>
                                <div className="ml-4 space-y-1">
                                    {item.items?.map((subItem) => (
                                        <Link
                                            key={subItem.title}
                                            href={subItem.href}
                                            className="flex items-center text-slate-700 hover:text-blue-600 py-1 px-2 transition-colors font-medium text-sm"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span>{subItem.title}</span>
                                            <MoveRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-red-200 pt-3 px-4">
                            <Link href="/quote" className="block w-full">
                                <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg transition text-sm">
                                    Get a Quote
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export { Header1 };
