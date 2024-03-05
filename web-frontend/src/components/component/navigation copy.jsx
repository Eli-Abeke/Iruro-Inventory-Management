import React from 'react'
import Link from "next/link"
import Navigation from "./navigation";
import { Package2Icon } from '../ui/logo';

export default function StandardNav() {
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
    <DashboardNav/>
    <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <form className="flex-1 ml-auto sm:flex-initial">
        <div className="relative">
          <SearchIcon
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            placeholder="Search items or people..."
            type="search" />
        </div>
      </form>
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


