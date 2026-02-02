import { SidebarTrigger } from "@/components/ui/sidebar";
import { SettingsControls } from "@/components/settings-controls";
import { GraduationCap } from "lucide-react";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex items-center gap-2">
        <GraduationCap className="h-6 w-6 text-primary" />
        <h1 className="font-headline text-xl font-bold">AdaptLearn</h1>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <SettingsControls />
      </div>
    </header>
  );
}
