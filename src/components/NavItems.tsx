import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import Link from "next/link"
  
  export function NavItems() {
    return (
      <Menubar className="py-6 px-2 gap-8 text-muted-foreground">
        <MenubarMenu>
          <Link href='/'>
          <MenubarTrigger className="text-md text-medium">Home</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href='/browse'>
          <MenubarTrigger className="text-md text-medium">Browse</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href='/create/new'>
          <MenubarTrigger className="text-md text-medium">Create</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href='/docs'>
          <MenubarTrigger className="text-md text-medium">Documentation</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
        <Link href='/about'>
          <MenubarTrigger  className="text-md text-medium">About</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
        <Link href='/contact'>
          <MenubarTrigger className="text-md text-medium">Contact</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
    )
  }
  