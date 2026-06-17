"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

interface RouteChromeProps {
  children: ReactNode;
}

export function RouteChrome({ children }: RouteChromeProps) {
  const pathname = usePathname();
  const hideChrome =
    pathname === "/" ||
    pathname === "/alt-home" ||
    pathname === "/home-enhanced" ||
    pathname === "/isp";

  return (
    <>
      {!hideChrome && <SiteHeader />}
      <div className="flex min-h-screen flex-col">
        <div className="flex-1 flex flex-col">{children}</div>
        {!hideChrome && <SiteFooter />}
      </div>
    </>
  );
}
