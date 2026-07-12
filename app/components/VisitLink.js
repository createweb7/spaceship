"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function VisitLink({ className, children }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTo", "visit");
      router.push("/");
    }
  };

  return (
    <Link href="/#visit" className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
