"use client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Utils } from "../utils";
import RevealWrapper from "./Motion";
type props = {
  previous: {
    href: string;
    label: string;
  };
  next: {
    href: string;
    label: string;
  };
};
const Pagination = ({ previous, next }: props) => {
  const router = useRouter();
  return (
    <RevealWrapper>
      <div className="grid grid-cols-2">
        {previous?.label ? (
          <Button
            variant="light"
            className="place-self-start"
            startContent={<FaChevronLeft />}
            onPress={() => {
              Utils.scrollToTop();
              router.push(previous.href);
            }}
          >
            {previous?.label}
          </Button>
        ) : (
          <div></div>
        )}
        {next?.label ? (
          <Button
            variant="light"
            className="place-self-end"
            endContent={<FaChevronRight />}
            onPress={() => {
              Utils.scrollToTop();
              router.push(next.href);
            }}
          >
            {next?.label}
          </Button>
        ) : (
          <div></div>
        )}
      </div>
    </RevealWrapper>
  );
};

export default Pagination;
