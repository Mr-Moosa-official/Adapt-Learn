"use client";

import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  BookCopy,
  Settings,
  HelpCircle,
  Users,
  Info
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebarNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: <LayoutDashboard />, label: "Dashboard", tooltip: "Dashboard" },
    { href: "/courses", icon: <BookCopy />, label: "Courses", tooltip: "Courses" },
    { href: "/reviews", icon: <Users />, label: "Reviews", tooltip: "Reviews" },
    { href: "/about", icon: <Info />, label: "About Us", tooltip: "About Us" },
  ];

  return (
    <>
      <SidebarHeader>
        {/* Can add a logo or title here if needed in the future */}
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref legacyBehavior>
                <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.tooltip}>
                  <a>
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
             <Link href="#" passHref legacyBehavior>
                <SidebarMenuButton href="#" tooltip="Settings">
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="#" passHref legacyBehavior>
              <SidebarMenuButton href="#" tooltip="Help & Support">
                <HelpCircle />
                <span>Help & Support</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
