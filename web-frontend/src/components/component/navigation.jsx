import React from 'react'
import Link from "next/link"
import { Package2Icon } from '@/components/ui/logo';
import { SearchIcon } from '@/components/ui/search';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';

export default function DashboardNav() {
    return (
        <header className="flex flex-col justify-between items-center px-4 border-r min-h-[100%] space-y-8 p-5 shrink-0 md:px-6">
            <div className={"flex-col h-max space-y-8"}>
            <div className="flex items-center w-full gap-4 md:gap-2 lg:gap-4">
                <Link
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    href="/">
                    <Package2Icon className="w-6 h-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <form className="flex-1 ml-auto sm:flex-initial">
                    <div className="relative">
                        <SearchIcon
                            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input
                            className="pl-8 flex flex-col w-auto md:w-[200px] lg:w-[200px]"
                            placeholder="Search items or people..."
                            type="search" />
                    </div>
                </form>
                

            </div>
            <nav className="gap-6 text-lg font-medium flex flex-col md:items-center md:gap-5 md:text-sm lg:gap-6">

                <Link className="text-gray-500 dark:text-gray-400" href="#">
                    Inventory
                </Link>
                <Link className="text-gray-500 dark:text-gray-400" href="#">
                    People
                </Link>
                <Link className="text-gray-500 dark:text-gray-400" href="#">
                    Analytics
                </Link>
            </nav>
            </div>
            <div className={"mt-auto"}>
                <Button className="rounded-full" size="icon" variant="ghost">
                    <img
                        alt="Avatar"
                        className="rounded-full"
                        height="32"
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                        }}
                        width="32" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </div>

        </header>

    )
}


