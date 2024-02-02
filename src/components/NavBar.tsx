import Link from "next/link";
import React, { ForwardedRef } from "react";

interface NavItemsProps {
  label: string;
  href?: string;
}

const NavItem: React.FC<NavItemsProps> = React.forwardRef(
  (props, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <a href={props.href} className="text-2xl cursor-pointer" ref={ref}>
        {props.label}
      </a>
    );
  }
);

NavItem.displayName = "NavItem";

export default function NavBar() {
  return (
    <nav className="sm:fixed sm:z-10 top-0 w-full text-center flex flex-col sm:flex-row gap-2 justify-center p-2 bg-white">
      <Link href="/" legacyBehavior passHref>
        <NavItem label="Home" />
      </Link>
      <Link href="/catalog" legacyBehavior passHref>
        <NavItem label="Catalog" />
      </Link>
      <Link href="/contacts" legacyBehavior passHref>
        <NavItem label="Contacts" />
      </Link>
    </nav>
  );
}
