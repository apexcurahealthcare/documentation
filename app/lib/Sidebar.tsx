"use client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Constants, ISideMenuSection } from "../utils/constants";
import { PageName } from "../utils/schemas";

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">{children}</div>
);

export default function Sidebar({
  page,
  slug,
}: {
  page: PageName;
  slug: string[];
}) {
  const SIDEMENU: ISideMenuSection[] = Constants.SIDEMENU[page] || [];
  const [selectedKey, setSelectedKey] = useState(slug?.[1] || "");
  const router = useRouter();
  return (
    <div className="p-6 sticky top-[64px] h-screen sm:hidden flex flex-col gap-2">
      {SIDEMENU.map((section) => (
        <div key={section.key}>
          <h3 className="text-md text-dark font-medium leading-8">
            {section.title}
          </h3>
          {section.items.map((item) => (
            <Button
              variant="light"
              size="sm"
              fullWidth={true}
              key={item.title}
              className={` ${
                `/${selectedKey}` === item.route
                  ? "text-primary font-medium"
                  : "text-gray-700"
              }`}
              onPress={() => {
                router.push(`/${page}${item.route}`);
                setSelectedKey(item.route);
              }}
            >
              <span className="flex gap-2 w-full">
                <span>&bull;</span>
                <span>{item.title}</span>
              </span>
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}
