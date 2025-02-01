"use client";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RevealWrapper from "./Motion";
// Define the BreadcrumbItem type
type BreadcrumbItemType = {
  key: string;
  label: string;
};

// Define the Props type
type Props = {
  items: BreadcrumbItemType[];
};

const Breads = ({ items }: Props) => {
  const last = items[items.length - 1];
  const [currentPage, setCurrentPage] = useState<string>(last.key);
  const router = useRouter();
  return (
    <RevealWrapper>
      <Breadcrumbs
        underline="active"
        onAction={(e: any) => {
          setCurrentPage(e);
          router.push(e);
        }}
      >
        {items.map((item) => (
          <BreadcrumbItem key={item.key} isCurrent={currentPage === item.key}>
            {item.label}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </RevealWrapper>
  );
};

export default Breads;
