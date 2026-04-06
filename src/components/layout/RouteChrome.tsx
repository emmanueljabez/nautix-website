"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

interface RouteChromeProps {
  children: ReactNode;
}

export function RouteChrome({ children }: RouteChromeProps) {
  const pathname = usePathname();
  const hideChrome = pathname === "/";

  return (
    <>
      {!hideChrome && <Navbar />}
      <div className="flex min-h-screen flex-col">
        <div className="flex-1 flex flex-col">{children}</div>
        {!hideChrome && <Footer />}
      </div>
    </>
  );
}
