"use client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Constants, ISideMenuSection } from "../utils/constants";
import { PageName } from "../utils/schemas";
import { motion } from "framer-motion"; // Fixed import

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">{children}</div>
);

const sectionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      delay: index * 0.01,
    },
  }),
};

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
      {SIDEMENU.map((section, sectionIndex) => (
        <motion.div
          key={section.key}
          custom={sectionIndex} // Pass index to variants
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
        >
          <h3 className="text-md text-dark font-medium leading-8">
            {section.title}
          </h3>
          {section.items.map((item, itemIndex) => (
            <motion.div
              key={item.title}
              custom={sectionIndex + itemIndex / 10} // Slightly stagger items
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
            >
              <Button
                variant="light"
                size="md"
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
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
