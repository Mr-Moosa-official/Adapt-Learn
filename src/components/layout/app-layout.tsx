import type { ReactNode } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebarNav } from "./sidebar-nav";
import { AppHeader } from "./header";
import { AppFooter } from "./footer";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <AppSidebarNav />
      </Sidebar>
      <SidebarInset>
        <AppHeader />
        <main>{children}</main>
        <AppFooter />
      </SidebarInset>
    </SidebarProvider>
  );
}
