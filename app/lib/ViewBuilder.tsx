"use client";
import React, { ReactNode } from "react";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";

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

  const renderElement = (element: ReactNode, isApplyMotion?: boolean) => {
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
        <h1 id={id} className={`text-4xl font-bold ${className}`}>
          {(schema as TextNode).text}
        </h1>,
        schema.isApplyMotion
      );
    case "h2":
      return renderElement(
        <h2 id={id} className={`text-3xl font-bold ${className}`}>
          {(schema as TextNode).text}
        </h2>,
        schema.isApplyMotion
      );
    case "h3":
      return renderElement(
        <h3 id={id} className={`text-2xl font-bold ${className}`}>
          {(schema as TextNode).text}
        </h3>,
        schema.isApplyMotion
      );
    case "p":
      return renderElement(
        <p id={id} className={`leading-8 ${className}`}>
          {(schema as TextNode).text}
        </p>,
        schema.isApplyMotion
      );
    case "li":
      return renderElement(
        <li id={id} className={`leading-8 ${className}`}>
          {(schema as TextNode).text}
        </li>,
        schema.isApplyMotion
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
        />,
        schema.isApplyMotion
      );
    case "div":
      return renderElement(
        <div id={id} className={className}>
          {renderChildren()}
        </div>,
        schema.isApplyMotion
      );
    case "ul":
      return renderElement(
        <ul id={id} className={`list-disc ml-8 ${className}`}>
          {renderChildren()}
        </ul>,
        schema.isApplyMotion
      );
    default:
      console.warn(`Unknown element type: ${type}`);
      return null;
  }
};

export default ViewBuilder;
