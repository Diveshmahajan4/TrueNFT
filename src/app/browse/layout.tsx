"use client"
import { SidebarNav } from "@/components/SidebarNav"
import { Separator } from "@/components/ui/separator"

const sidebarNavItems = [
    {
      title: "Browse",
      href: "/browse",
    },
    {
      title: "Cart",
      href: "/cart",
    },
    {
      title: "New Launches",
      href: "/new",
    },
  ]

interface BrowseLayoutProps {
    children: React.ReactNode
  }

const layout = ({children} : BrowseLayoutProps) => {
  return (
    <section className="m-6 md:mx-12 md:my-6">
    <div>
        <h1 className="text-4xl font-semibold">Browse</h1>
        <p className="text-muted-foreground text-lg mt-2">Shop for the latest memberships here.</p>
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
</section>
  )
}

export default layout