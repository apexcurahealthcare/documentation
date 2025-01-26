"use client";
import { Button } from "@heroui/react";
import { useState } from "react";
import Schema, { PageName } from "../utils/schemas";

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">{children}</div>
);

export default function OnThisPage({ page }: { page: PageName }) {
  const schema = Schema.get(page);
  const headings = Schema.getH3Texts(schema);
  const [selectedKey, setSelectedKey] = useState<string | undefined>("");

  return headings?.length ? (
    <div className="p-6 sticky top-[64px] h-screen sm:hidden flex flex-col gap-2">
      <div>
        <h3 className="text-md text-dark font-medium leading-8">
          On this page
        </h3>
        {headings.map((item) => (
          <Button
            variant="light"
            size="sm"
            fullWidth={true}
            key={item.id}
            className={`text-start flex justify-start ${
              `/${selectedKey}` === item.id
                ? "text-primary font-medium"
                : "text-gray-700"
            }`}
            onPress={() => {
              setSelectedKey(item.id);
            }}
          >
            {item.text}
          </Button>
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
}
