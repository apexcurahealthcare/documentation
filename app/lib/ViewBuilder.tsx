"use client";
import React, { ReactNode } from "react";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Zain } from "next/font/google";
const zain = Zain({
  weight: ["200", "300", "400", "700", "800", "900"],
  variable: "--font-zain",
})
interface BaseNode {
  type: string;
  className?: string;
  id?: string;
  isApplyMotion?: boolean;
}

interface TextNode extends BaseNode {
  type: "h1" | "h2" | "h3" | "p" | "li";
  text: string | ReactNode;
}

interface ImageNode extends BaseNode {
  type: "image";
  src: string;
  alt: string;
  isBlurred?: boolean;
  isZoomed?: boolean;
}

interface ContainerNode extends BaseNode {
  type: "div" | "ul";
  children: NodeSchema[];
}

interface ListNode extends BaseNode {
  type: "ul";
  children: ListItemNode[];
}

interface ListItemNode extends BaseNode {
  type: "li";
  text: string;
}

export type NodeSchema =
  | TextNode
  | ImageNode
  | ContainerNode
  | ListNode
  | ListItemNode;

interface ViewBuilderProps {
  schema: NodeSchema;
}

const ViewBuilder: React.FC<ViewBuilderProps> = ({ schema }) => {
  const { type, className, id, isApplyMotion } = schema;

  const renderChildren = () => {
    if ("children" in schema) {
      return schema.children.map((child, index) => (
        <ViewBuilder key={index} schema={child} />
      ));
    }
    return null;
  };

  const renderElement = (element: ReactNode) => {
    if (isApplyMotion) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {element}
        </motion.div>
      );
    }
    return element;
  };

  switch (type) {
    case "h1":
      return renderElement(
        <h1 id={id} className={`text-5xl sm:font-bold font-extrabold ${zain.className} ${className}`}>
          {(schema as TextNode).text}
        </h1>
      );
    case "h2":
      return renderElement(
        <h2 id={id} className={`text-4xl sm:font-bold font-extrabold ${zain.className} ${className}`}>
          {(schema as TextNode).text}
        </h2>
      );
    case "h3":
      return renderElement(
        <h3 id={id} className={`text-3xl sm:font-bold font-extrabold ${zain.className} ${className}`}>
          {(schema as TextNode).text}
        </h3>
      );
    case "p":
      return renderElement(
        <p id={id} className={`leading-8 ${className}`}>
          {(schema as TextNode).text}
        </p>
      );
    case "li":
      return renderElement(
        <li id={id} className={`leading-8 ${className}`}>
          {(schema as TextNode).text}
        </li>
      );
    case "image":
      const imageNode = schema as ImageNode;
      return renderElement(
        <Image
          src={imageNode.src}
          alt={imageNode.alt}
          classNames={{ wrapper: "w-full !max-w-full" }}
          className={`h-[300px] w-full object-cover ${className}`}
          isZoomed={imageNode.isZoomed}
          isBlurred={imageNode.isBlurred}
        />
      );
    case "div":
      return renderElement(
        <div id={id} className={className}>
          {renderChildren()}
        </div>
      );
    case "ul":
      return renderElement(
        <ul id={id} className={`list-disc ml-8 ${className}`}>
          {renderChildren()}
        </ul>
      );
    default:
      console.warn(`Unknown element type: ${type}`);
      return null;
  }
};

export default ViewBuilder;
