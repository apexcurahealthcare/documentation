"use client";
import { Listbox, ListboxItem, ListboxSection } from "@heroui/react";
import { Constants, ISideMenuSection } from "../utils/constants";
import { useState } from "react";
import { PageName } from "../utils/schemas";

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">{children}</div>
);

export default function Sidebar({ page }: { page: PageName}) {
  const SIDEMENU: ISideMenuSection[] = Constants.SIDEMENU[page];
  const [selectedKeys, setSelectedKeys] = useState(
    new Set([SIDEMENU[0]?.items[0]?.title])
  );

  return (
    <ListboxWrapper>
      <Listbox
        className="p-6 sticky top-[64px] h-screen sm:hidden"
        selectedKeys={selectedKeys}
        selectionMode="single"
        aria-label="Sidebar"
        onSelectionChange={(e: any) => {
          setSelectedKeys(new Set([e?.currentKey]));
        }}
      >
        {SIDEMENU.map((section) => (
          <ListboxSection
            key={section.key}
            title={section.title}
            classNames={{ heading: "text-md text-dark font-medium leading-8" }}
          >
            {section.items.map((item) => {
              const isSelected = selectedKeys.has(item.title);
              return (
                <ListboxItem
                  key={item.title}
                  textValue="sidebar menu"
                  selectedIcon={<></>}
                  title={
                    <span
                      className={`ml-2 text-[13px] flex gap-2 ${
                        isSelected
                          ? "text-primary font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      <span>&bull;</span>
                      <span>{item.title}</span>
                    </span>
                  }
                  className="!bg-white hover:!bg-primary/10"
                ></ListboxItem>
              );
            })}
          </ListboxSection>
        ))}
      </Listbox>
    </ListboxWrapper>
  );
}
