"use client";
import { Alert, Input, Skeleton } from "@heroui/react";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TbIcons } from "react-icons/tb";
import { FaImages } from "react-icons/fa";
import RevealWrapper from "./Motion";
import { Segmented } from "antd";

declare global {
  interface Window {
    acIcons: { [key: string]: string };
  }
}

const LIGHTICONS = [
  "aci-leads-converted",
  "aci-leads-discarded",
  "aci-leads-total",
  "aci-leads-qualified",
  "aci-calls-answered",
  "aci-calls-calledback",
  "aci-calls-call-quality",
  "aci-calls-missed",
  "aci-calls-rounded",
];

const IconsList = () => {
  const [icons, setIcons] = useState<{ [key: string]: string }>({});
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [viewType, setViewType] = useState<"icon" | "image">("icon");

  useEffect(() => {
    const script = document.createElement("script");
    const timestamp = new Date().getTime();
    script.src = `https://suite.apexcura.com/api/public/scripts/apexcura.icons.js?t=${timestamp}`;
    script.onload = () => {
      if (window?.acIcons) {
        setIcons(window.acIcons);
        setIsLoading(false);
      }
    };
    script.onerror = () => {
      console.error("Failed to load the icons script.");
      setIsLoading(false);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  const handleCopy = useCallback((className: string) => {
    navigator.clipboard.writeText(className).then(() => {
      setCopied(className);
      toast(
        <span>
          <span className="font-semibold">{className}</span> Copied to clipboard
        </span>,
        {
          icon: <IoIosCheckmarkCircle color="#25D366" size={20} />,
          style: { fontSize: "14px", fontWeight: "500", paddingLeft: "16px" },
        }
      );
      setTimeout(() => setCopied(null), 1500);
    });
  }, []);

  const iconEntries = useMemo(() => {
    const entries = Object.entries(icons);
    const iconTypeEntries = entries.filter(
      ([key]) => !LIGHTICONS.includes(key)
    );
    const imageTypeEntries = entries.filter(([key]) =>
      LIGHTICONS.includes(key)
    );
    return { icon: iconTypeEntries, image: imageTypeEntries };
  }, [icons]);

  const filteredIconEntries = useMemo(() => {
    return iconEntries.icon.filter(([className]) =>
      className.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [iconEntries, debouncedSearch]);

  const filteredImageEntries = useMemo(() => {
    return iconEntries.image.filter(([className]) =>
      className.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [iconEntries, debouncedSearch]);

  const filteredIcons = useMemo(() => {
    const current =
      viewType === "icon" ? filteredIconEntries : filteredImageEntries;
    return current.sort(([a], [b]) => a.localeCompare(b));
  }, [filteredIconEntries, filteredImageEntries, viewType]);

  const SEGMENTS = useMemo(
    () => [
      {
        label: (
          <div className="flex items-center gap-1">
            <TbIcons />
            <p className="font-medium">Icons ({filteredIconEntries.length})</p>
          </div>
        ),
        value: "icon",
      },
      {
        label: (
          <div className="flex items-center gap-1">
            <FaImages size={14} />
            <p className="font-medium">
              Images ({filteredImageEntries.length})
            </p>
          </div>
        ),
        value: "image",
      },
    ],
    [filteredIconEntries, filteredImageEntries]
  );

  const totalFilteredCount =
    filteredIconEntries.length + filteredImageEntries.length;

  return (
    <div className="space-y-4 relative">
      <RevealWrapper>
        <Alert
          color="warning"
          title="Some icons may not be visible clearly below as they are in white color. Hover can help you."
        />
      </RevealWrapper>

      <RevealWrapper>
        <Input
          classNames={{
            base: "w-full h-10 sticky top-[66px]",
            mainWrapper: "h-full",
            input: "text-xs",
            inputWrapper:
              "h-full font-normal px-4 text-default-500 bg-default-400/10 dark:bg-default-500/20 shadow-none",
          }}
          placeholder="Search by class name..."
          size="sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startContent={<FiSearch />}
          type="search"
        />
      </RevealWrapper>

      <RevealWrapper>
        <div className="flex items-center justify-between">
          <Segmented
            options={SEGMENTS}
            onChange={(value) => setViewType(value as "icon" | "image")}
            value={viewType}
          />
          <p className="text-gray-800 font-medium text-sm">
            {totalFilteredCount} items found
          </p>
        </div>
      </RevealWrapper>

      <div className="grid grid-cols-5 sm:grid-cols-2 gap-2">
        {filteredIcons?.length > 0 ? (
          filteredIcons.map(([className, svg], i) => (
            <RevealWrapper key={i}>
              <div
                key={i}
                className={`d-center gap-4 hover:shadow-lg cursor-pointer rounded-md border h-28 p-2 bg-primary/5 hover:bg-[#ffe4c4] transition-all ease-in-out duration-300 ${
                  copied === className ? "border-green-500 bg-green-100" : ""
                } ${
                  LIGHTICONS?.includes(className)
                    ? "bg-sky-700 hover:bg-sky-600 text-white"
                    : ""
                }`}
                onClick={() => handleCopy(className)}
              >
                <span dangerouslySetInnerHTML={{ __html: svg }}></span>
                <p
                  className={`text-[8px] text-center font-semibold ${
                    LIGHTICONS?.includes(className)
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                >
                  {className}
                </p>
              </div>
            </RevealWrapper>
          ))
        ) : isLoading ? (
          Array(20)
            .fill(0)
            .map((_, i) => (
              <Skeleton className="rounded-lg" key={i}>
                <div className="h-28"></div>
              </Skeleton>
            ))
        ) : (
          <RevealWrapper>
            <p className="col-span-5 text-sm font-medium text-center text-gray-500">
              No {viewType === "icon" ? "icons" : "images"} found
            </p>
          </RevealWrapper>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default IconsList;
