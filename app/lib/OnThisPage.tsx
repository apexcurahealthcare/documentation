"use client";
import { Button } from "@heroui/react";
import { useState, useEffect } from "react";
import Schema, { AllPages, PageName } from "../utils/schemas";
import { motion } from "motion/react";

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">{children}</div>
);

const sectionVariants = {
  hidden: { opacity: 0, x: 100 },
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

export default function OnThisPage({
  page,
  slug,
}: {
  page: PageName;
  slug: string[];
}) {
  const schemaSlug = slug.join("/");
  const schema = Schema.get(schemaSlug as AllPages);
  const headings = Schema.getH3Texts(schema);
  const [selectedKey, setSelectedKey] = useState<string | undefined>("");

  const scrollToId = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 64; // Adjust for the top bar height
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });

        // Update the URL hash
        window.history.pushState(null, "", `#${id}`);
      }
    }, 300); // Delay to ensure the element is in the DOM
  };

  // Scroll to hash on page load/reload
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // Remove the '#' from the hash

      // Wait until the elements are available in the DOM
      const checkElement = setInterval(() => {
        if (document.getElementById(id)) {
          scrollToId(id);
          setSelectedKey(id);
          clearInterval(checkElement);
        }
      }, 500);

      // Stop checking after 3 seconds
      setTimeout(() => clearInterval(checkElement), 3000);
    }
  }, []);

  return headings?.length ? (
    <div className="p-6 sticky top-[64px] h-screen sm:hidden flex flex-col gap-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
      <div>
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
        >
          <h3 className="text-md text-dark font-medium leading-8">
            On this page
          </h3>
        </motion.div>
        {headings.map((item, i: number) => (
          <motion.div
            key={i}
            custom={1 + i / 10}
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
          >
            <Button
              variant="light"
              size="sm"
              fullWidth={true}
              key={i}
              className={`text-start truncate line-clamp-1 flex justify-start ${
                selectedKey === item.id
                  ? "text-primary font-medium"
                  : "text-gray-700"
              }`}
              onPress={() => {
                scrollToId(item?.id || "");
                setSelectedKey(item.id);
              }}
            >
              {item.text}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  ) : null;
}
