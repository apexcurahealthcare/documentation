"use client";
import { Image, Snippet } from "@heroui/react";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";
import React, { ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
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

interface SnippetNode extends BaseNode {
  text: string;
}
interface CodeNode extends BaseNode {
  code: ReactNode;
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
  | CodeNode
  | SnippetNode
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
    if (isApplyMotion !== false) {
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
        <h1
          id={id}
          className={`text-4xl sm:font-semibold font-bold ${outfit.className} ${className}`}
        >
          {(schema as TextNode).text}
        </h1>
      );
    case "h2":
      return renderElement(
        <h2
          id={id}
          className={`text-3xl sm:font-semibold font-bold ${outfit.className} ${className}`}
        >
          {(schema as TextNode).text}
        </h2>
      );
    case "h3":
      return renderElement(
        <h3
          id={id}
          className={`text-2xl sm:font-semibold font-bold ${outfit.className} ${className}`}
        >
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
    case "snippet":
      const snippetNode = schema as SnippetNode;
      return renderElement(<Snippet size="sm" fullWidth>{snippetNode?.text}</Snippet>);
    case "code":
      const codeNode = schema as CodeNode;
      return renderElement(
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          customStyle={{ borderRadius: "10px", padding: "15px" }}
        >
          {String(codeNode?.code)}
        </SyntaxHighlighter>
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
