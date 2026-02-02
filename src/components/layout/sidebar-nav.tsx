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
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.tooltip}>
                <Link href={item.href}>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link href="#">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Help & Support">
              <Link href="#">
                <HelpCircle />
                <span>Help & Support</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
