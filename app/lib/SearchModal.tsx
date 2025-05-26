import {
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
} from "@heroui/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Constants } from "../utils/constants";
import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

const flattenSideMenu = () => {
  const seen = new Set();
  const flatItems: { title: string; route: string; parent: string }[] = [];

  Object.entries(Constants.SIDEMENU).forEach(([parent, sections]) => {
    sections.forEach((group) => {
      group.items.forEach((item) => {
        const key = `${parent}-${item.route}`;
        if (!seen.has(key)) {
          seen.add(key);
          flatItems.push({
            title: item.title,
            route: item.route,
            parent: parent,
          });
        }
      });
    });
  });

  return flatItems;
};

export default function SearchModal({ isOpen, onOpenChange }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  // debounce search term with 200ms delay
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedTerm(searchTerm), 200);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const allItems = useMemo(() => flattenSideMenu(), []);

  const filteredItems = useMemo(() => {
    const filtered = allItems.filter((item) =>
      item.title.toLowerCase().includes(debouncedTerm.toLowerCase())
    );
    return filtered.slice(0, 5);
  }, [debouncedTerm, allItems]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        setActiveIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        setActiveIndex((prev) =>
          prev === 0 ? filteredItems.length - 1 : prev - 1
        );
      } else if (e.key === "Enter") {
        const selected = filteredItems[activeIndex];
        if (selected) {
          router.push(`/${selected.parent}${selected.route}`);
          onOpenChange(false);
        }
      } else if (e.key === "Escape") {
        onOpenChange(false);
      }
    },
    [filteredItems, activeIndex, isOpen, onOpenChange]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setActiveIndex(0);
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [searchTerm, isOpen]);

  // Open modal on Ctrl/Cmd + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onOpenChange]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      size="xl"
      //   backdrop="blur"
      hideCloseButton={true}
      classNames={{
        backdrop: "bg-black/70",
        base: "w-full max-w-xl",
      }}
    >
      <ModalContent>
        <ModalBody className="p-4 gap-4">
          {/* Search Input Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center w-full">
              <FiSearch className="text-default-400 mr-2" />
              <input
                autoFocus
                type="text"
                placeholder="Type to search..."
                className="w-full text-sm bg-transparent outline-none border-none ring-0 focus:outline-none focus:ring-0 focus:border-none placeholder:text-default-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <span className="ml-4 text-xs text-default-500 border border-default-300 rounded px-2 py-1">
              ESC
            </span>
          </div>

          {/* Results List */}
          <Listbox
            aria-label="Search Results"
            onAction={(key) => {
              const selected = filteredItems.find((item) => item.route === key);
              if (selected) {
                router.push(`/${selected.parent}${selected.route}`);
                onOpenChange(false);
              }
            }}
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <ListboxItem
                  key={item.route + item.parent}
                  title={item.title}
                  description={
                    Constants.PROJECTS.find(
                      (e) => e?.route === `/${item.parent}`
                    )?.name
                  }
                  startContent={
                    <FiSearch
                      size={28}
                      color={index === activeIndex ? "white" : undefined}
                    />
                  }
                  endContent={<FaChevronRight />}
                  onPress={() => {
                    router.push(`/${item.parent}${item.route}`);
                    onOpenChange(false);
                  }}
                  classNames={{
                    description:
                      index === activeIndex
                        ? "text-white/90"
                        : "text-default-500",
                  }}
                  className={`px-4 py-3 text-sm rounded-md transition-all ${
                    index === activeIndex
                      ? "bg-blue-600 text-white hover:bg-blue-600"
                      : "hover:bg-default-200"
                  }`}
                />
              ))
            ) : (
              <ListboxItem
                key="no-results"
                isDisabled
                className="px-4 py-3 text-sm"
              >
                No results found
              </ListboxItem>
            )}
          </Listbox>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
