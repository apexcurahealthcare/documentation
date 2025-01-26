"use client";
import {
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { MdOutlineLightMode } from "react-icons/md";
import FIGMA from "../../public/assets/figma.svg";
import LOGOSM from "../../public/assets/logo-sm.svg";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const router = useRouter();
  const openInNewTab = () => {
    const url = "https://www.figma.com/design/bdvo3Y0I2jITEZoUSiOYTR/Apex-Cura-APPS-REV?node-id=146-2080&t=Uzr2BXaC3tG3kk5Q-1";
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <Navbar isBordered maxWidth="full" className="border-none">
      <NavbarContent justify="start">
        <NavbarBrand>
          <div
            className="flex items-center justify-start cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image src={LOGOSM} alt="Logo" />
            <div className="ml-1">
              <p className="font-[650] text-xl text-primary">
                Apex<span className="font-semibold">Cura</span>
              </p>
              <p className="text-default-700 font-medium text-xs leading-none">
                Documentation
              </p>
            </div>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center gap-2" justify="end">
        <Input
          classNames={{
            base: "max-w-[15rem] h-10 sm:hidden",
            mainWrapper: "h-full",
            input: "text-xs",
            inputWrapper:
              "h-full font-normal px-4 text-default-500 bg-default-400/20 dark:bg-default-500/20 shadow-none",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<FiSearch />}
          type="search"
        />
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
        <Button
          isIconOnly
          variant="bordered"
          radius="full"
          className="border-[1px]"
        >
          <MdOutlineLightMode />
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
