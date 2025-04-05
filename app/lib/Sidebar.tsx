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
    <div className="p-6 sticky top-[64px] h-screen sm:hidden flex flex-col gap-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
      <OtherProjects page={page} />
      {SIDEMENU.map((section) => (
        <div
          key={section.key}
          // custom={sectionIndex} // Pass index to variants
          // initial="hidden"
          // whileInView="visible"
          // variants={sectionVariants}
        >
          <h3 className="text-md text-dark font-medium leading-8">
            {section.title}
          </h3>
          {section.items.map((item) => (
            // <motion.div
            //   key={item.title}
            //   custom={sectionIndex + itemIndex / 10} // Slightly stagger items
            //   initial="hidden"
            //   whileInView="visible"
            //   variants={sectionVariants}
            // >
            <Button
              variant="light"
              size="md"
              key={item.title}
              fullWidth={true}
              className={`${
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
            // </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

import { Select, SelectItem } from "@heroui/react";

export const SelectorIcon = (props: any) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M8 9l4 -4l4 4" />
      <path d="M16 15l-4 4l-4 -4" />
    </svg>
  );
};

function OtherProjects({ page }: { page: PageName }) {
  const router = useRouter();
  return (
    <Select
      disableSelectorIconRotation
      label=""
      defaultSelectedKeys={[`/` + page]}
      onSelectionChange={(key: any) => {
        router.push(key?.anchorKey);
      }}
      selectorIcon={<SelectorIcon />}
    >
      {Constants.PROJECTS.map((project) => (
        <SelectItem
          key={project.route}
          classNames={{
            title: `${
              project?.route?.includes(page) ? "font-medium" : "text-gray-600"
            } text-xs`,
          }}
        >
          {project?.name}
        </SelectItem>
      ))}
    </Select>
  );
}
