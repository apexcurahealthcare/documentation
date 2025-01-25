"use client";
import { Listbox, ListboxItem, ListboxSection } from "@heroui/react";
import { Constants, ISideMenuSection } from "../utils/constants";
import { useState } from "react";
import Schema, { PageName } from "../utils/schemas";

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">{children}</div>
);

export default function OnThisPage({ page }: { page: PageName }) {
  const schema = Schema.get(page);
  const headings = Schema.getH3Texts(schema);
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
        aria-label="On this page"
        onSelectionChange={(e: any) => {
          setSelectedKeys(new Set([e?.currentKey]));
        }}
      >
        <ListboxSection
          title={"On this page"}
          classNames={{ heading: "text-md text-dark font-medium leading-8" }}
        >
          {headings.map((item) => {
            const isSelected = selectedKeys.has(item.text);
            return (
              <ListboxItem
                key={item.text}
                textValue="on this page heading"
                selectedIcon={<></>}
                title={
                  <span
                    className={`ml-2 text-[13px] flex gap-2 ${
                      isSelected ? "text-primary font-medium" : "text-gray-700"
                    }`}
                  >
                    <span>{item.text}</span>
                  </span>
                }
                className="!bg-white hover:!bg-primary/10"
              ></ListboxItem>
            );
          })}
        </ListboxSection>
      </Listbox>
    </ListboxWrapper>
  );
}
