import { Link } from "@heroui/link";
import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <main className="container max-w-full px-2 flex-grow pt-2 pb-3">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://linkedin.com/in/jerryochieng"
          title="linkedin | Jerry Ochieng Anyumba"
        >
          <span className="text-default-600">Designed by</span>
          <p className="text-primary">Jerry O. </p>
        </Link>
      </footer>
    </div>
  );
}
