"use client";

import { usePreferences } from "@/contexts/preferences-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Contrast, CaseSensitive as TextSizeIcon, Settings } from "lucide-react";

export function SettingsControls() {
  const { theme, setTheme, textSize, setTextSize } = usePreferences();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Accessibility Settings">
          <Settings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("contrast")}>
          <Contrast className="mr-2" />
          <span>High Contrast</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Text Size</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTextSize("sm")}>
            <TextSizeIcon className="mr-2" />
            <span>Small</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTextSize("base")}>
            <TextSizeIcon className="mr-2" />
            <span>Default</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTextSize("lg")}>
            <TextSizeIcon className="mr-2" />
            <span>Large</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
