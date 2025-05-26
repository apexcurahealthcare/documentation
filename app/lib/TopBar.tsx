"use client";

import { Button, Navbar, NavbarBrand, NavbarContent, useDisclosure } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import FIGMA from "../../public/assets/figma.svg";
import LOGOSM from "../../public/assets/logo-sm.svg";
import SearchModal from "./SearchModal";

export default function TopBar() {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const openInNewTab = () => {
    const url =
      "https://www.figma.com/design/bdvo3Y0I2jITEZoUSiOYTR/Apex-Cura-APPS-REV?node-id=146-2080&t=Uzr2BXaC3tG3kk5Q-1";
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
      <Navbar isBordered maxWidth="full" className="border-none">
        <NavbarContent justify="start">
          <NavbarBrand>
            <div
              className="flex items-center justify-start cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image src={LOGOSM} alt="Logo" />
              <div className="ml-1">
                <p className="font-[550] text-lg leading-none text-primary">
                  Apex
                </p>
                <p className="text-lg font-medium">Documentation</p>
              </div>
            </div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent as="div" className="items-center gap-2" justify="end">
          <Button
            className="max-w-[15rem] min-w-[15rem] h-10 sm:hidden px-4 text-xs font-normal text-default-500 bg-default-400/10 dark:bg-default-500/20 shadow-none justify-between"
            startContent={<FiSearch />}
            variant="flat"
            size="sm"
            onPress={onOpen}
          >
            <span className="flex-1 text-left">Search...</span>
            <span className="ml-2 px-1.5 py-0.5 rounded bg-default-200 text-xs text-default-600 shadow-sm">
              ctrl + k
            </span>
          </Button>

          <Button
            isIconOnly
            className="p-2 border-[1px]"
            radius="full"
            onPress={openInNewTab}
            variant="bordered"
          >
            <Image
              src={FIGMA}
              alt="FIGMA"
              className="w-full h-full object-contain"
            />
          </Button>
        </NavbarContent>
      </Navbar>

      <SearchModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
