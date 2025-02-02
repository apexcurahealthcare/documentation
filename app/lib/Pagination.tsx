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
            size="lg"
            className="place-self-start"
            startContent={<FaChevronLeft className="text-primary" />}
            onPress={() => {
              Utils.scrollToTop();
              router.push(previous.href);
            }}
          >
            <div className="flex flex-col items-start justify-center">
              <p className="font-medium"> {previous?.label}</p>
              <p className="leading-3 text-gray-500 text-[10px]">Previous</p>
            </div>
          </Button>
        ) : (
          <div></div>
        )}
        {next?.label ? (
          <Button
            variant="light"
            size="lg"
            className="place-self-end"
            endContent={<FaChevronRight className="text-primary" />}
            onPress={() => {
              Utils.scrollToTop();
              router.push(next.href);
            }}
          >
            <div className="flex flex-col items-end justify-center">
              <p className="font-medium"> {next?.label}</p>
              <p className="leading-3 text-gray-500 text-[10px]">Next</p>
            </div>
          </Button>
        ) : (
          <div></div>
        )}
      </div>
    </RevealWrapper>
  );
};

export default Pagination;
