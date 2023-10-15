import React from 'react';
import { useState } from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
} from '@nextui-org/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { text: 'Home', href: '/profile' },
    { text: 'About', href: '/dashboard' },
    { text: 'Contact', href: '/activity' },
    { text: 'Portfolio', href: '/analytics' },
    { text: 'Services', href: '/system' },
    { text: 'Terms', href: '/deployments' },
  ];

  return (
    <Navbar
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarMenu className="flex  justify-center items-center xl:items-left max-h-[100vh] xl:h-[100vh] ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item.text}>
            <Link
              className="w-full text-terinary hover:text-primary hover:underline tracking-wide xl:justify-start uppercase flex items-center  cursor-pointer py-2 active:text-red text-xl md:text-3xl lg:text-4xl xl:text-4xl  "
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href={item.href}
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
