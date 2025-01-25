"use client";
import React, { ReactNode } from "react";
import { Image } from "@heroui/react";

interface BaseNode {
  type: string;
  className?: string;
  id?: string;
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
  const { type, className, id } = schema;

  // Render nested children recursively
  const renderChildren = () => {
    if ("children" in schema) {
      return schema.children.map((child, index) => (
        <ViewBuilder key={index} schema={child} />
      ));
    }
    return null;
  };

  switch (type) {
    case "h1":
      return (
        <h1 id={id} className={`text-4xl font-bold ${className}`}>
          {(schema as TextNode).text}
        </h1>
      );
    case "h2":
      return (
        <h2 id={id} className={`text-3xl font-bold ${className}`}>
          {(schema as TextNode).text}
        </h2>
      );
    case "h3":
      return (
        <h3 id={id} className={`text-2xl font-bold ${className}`}>
          {(schema as TextNode).text}
        </h3>
      );
    case "p":
      return (
        <p id={id} className={`leading-8 ${className}`}>
          {(schema as TextNode).text}
        </p>
      );
    case "li":
      return (
        <li id={id} className={`leading-8 ${className}`}>
          {(schema as TextNode).text}
        </li>
      );
    case "image":
      const imageNode = schema as ImageNode;
      return (
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
      return (
        <div id={id} className={className}>
          {renderChildren()}
        </div>
      );
    case "ul":
      return (
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
