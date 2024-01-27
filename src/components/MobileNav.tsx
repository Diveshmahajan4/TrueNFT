import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
        </SheetHeader>
        <div className="flex flex-col justify-center items-center gap-5">
            <Link href='/'><p className="text-2xl hover:underline hover:underline-offset-4">Home</p></Link>
            <Link href='/browse'><p className="text-2xl hover:underline hover:underline-offset-4">Browse</p></Link>
            <Link href='/create/new'><p className="text-2xl hover:underline hover:underline-offset-4">Create</p></Link>
            <Link href='/docs'><p className="text-2xl hover:underline hover:underline-offset-4">Documentation</p></Link>
            <Link href='/about'><p className="text-2xl hover:underline hover:underline-offset-4">About</p></Link>
            <Link href='/contact'><p className="text-2xl hover:underline hover:underline-offset-4">Contact</p></Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
