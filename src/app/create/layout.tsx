"use client"
import { SidebarNav } from "@/components/SidebarNav"
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/toaster"

const sidebarNavItems = [
    {
      title: "New Membership",
      href: "/create/new",
    },
    {
      title: "Your Memberships",
      href: "/create/yourmem",
    },
    {
      title: "Created Memberships",
      href: "/create/createdmem",
    },
  ]

interface CreateLayoutProps {
    children: React.ReactNode
  }

const layout = ({children} : CreateLayoutProps) => {
  return (
    <section className="m-6 md:mx-12 md:my-6">
    <div>
        <h1 className="text-4xl font-semibold">Create</h1>
        <p className="text-muted-foreground text-lg mt-2">Explore your own memberships here.</p>
    </div>
    <Separator className="my-6" />
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside className="-mx-4 lg:w-1/5">
        <SidebarNav items={sidebarNavItems} />
      </aside>
      <div className="flex-1 lg:max-w-6xl">
        {children}
      </div>
    </div>
    <Toaster/>
</section>
  )
}

export default layout
