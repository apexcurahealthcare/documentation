"use client";
import { HiLink } from "react-icons/hi";

import { ElementExecutor } from "@apexcura/core";
import {
  Alert,
  AlertProps,
  Button,
  ButtonProps,
  cn,
  Divider,
  Image,
  Snippet,
  User,
} from "@heroui/react";
import React, { ReactNode } from "react";
import toast from "react-hot-toast";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  railscasts,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import useScreenDimensions from "../(hooks)/useScreenDimensions";
import IconsList from "./IconsList";
import RevealWrapper from "./Motion";
import TableComponent from "./TableComponent";
import TabsComponent from "./TabsComponent";

interface BaseNode {
  children?: NodeSchema[]; // Add optional children property
  className?: string;
  id?: string;
  isApplyMotion?: boolean;
  type: string;
}

interface AlertNode extends BaseNode {
  type: "alert";
  color: "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "side-border" | "normal";
  text: string | ReactNode;
}
interface ButtonNode extends BaseNode, Omit<ButtonProps, "children"> {
  type: "button";
  text: string;
}
interface DividerNode extends BaseNode {
  type: "divider";
  variant?: "line" | "dotted";
}
interface TextNode extends BaseNode {
  type: "h1" | "h2" | "h3" | "h4" | "p";
  text: string | ReactNode;
}

interface SnippetNode extends BaseNode {
  text: string;
}
interface CodeNode extends BaseNode {
  code: ReactNode;
  theme?: "atomOneDark" | "railscasts";
}

export interface TabNode {
  key: string;
  title: string;
  schema: NodeSchema;
}

interface TabsNode extends BaseNode {
  id: string;
  items: TabNode[];
}
export type TableRowKeys = "prop" | "type" | "default";
export type TableRowTitles = "Prop" | "Type" | "Default";

export interface TableColumn {
  key: TableRowKeys;
  title: TableRowTitles;
}

// Strictly allow only defined keys in TableRow
export type TableRow = {
  [K in TableRowKeys]: string | number | ReactNode;
};

export interface TableNode extends BaseNode {
  type: "table";
  columns: TableColumn[];
  rows: TableRow[];
}

interface ExecutorNode extends BaseNode {
  schema: any;
}

interface IconsListNode extends BaseNode {
  type: "icons";
}
interface UserNode extends BaseNode {
  type: "user";
  avatar?: string;
  url?: string;
  name: string;
  urlName?: string;
}

interface ImageNode extends BaseNode {
  type: "image";
  src: string;
  alt: string;
  isBlurred?: boolean;
  isZoomed?: boolean;
}

interface ContainerNode extends BaseNode {
  type: "div";
  children: NodeSchema[];
}

interface ListNode extends BaseNode {
  type: "ul" | "ol";
  children: ListItemNode[];
}

interface ListItemNode {
  id?: string;
  isApplyMotion?: boolean;
  type: "li";
  text: string | ReactNode;
}

export type NodeSchema =
  | AlertNode
  | ButtonNode
  | CodeNode
  | ContainerNode
  | DividerNode
  | ExecutorNode
  | IconsListNode
  | ImageNode
  | ListItemNode
  | ListNode
  | SnippetNode
  | TableNode
  | TabsNode
  | TextNode
  | UserNode;

interface ViewBuilderProps {
  schema: NodeSchema;
}

const ViewBuilder: React.FC<ViewBuilderProps> = ({ schema }) => {
  const { type, isApplyMotion } = schema;
  const className = "className" in schema ? schema.className : undefined;
  const dimensions = useScreenDimensions();

  const renderChildren = () => {
    if ("children" in schema && Array.isArray(schema.children)) {
      return schema.children.map((child, index) => (
        <ViewBuilder key={index} schema={child} />
      ));
    }
    return null;
  };

  const renderElement = (element: ReactNode) => {
    if (isApplyMotion !== false) {
      return <RevealWrapper>{element}</RevealWrapper>;
    }
    return element;
  };

  switch (type) {
    case "alert":
      const alertNode = schema as AlertNode;
      const CustomAlert = ({
        children,
        variant,
        color,
        className,
        classNames,
        ...props
      }: AlertProps) => {
        const colorClass = React.useMemo(() => {
          switch (color) {
            case "default":
              return "before:bg-default-300";
            case "primary":
              return "before:bg-primary";
            case "secondary":
              return "before:bg-secondary";
            case "success":
              return "before:bg-success";
            case "warning":
              return "before:bg-warning";
            case "danger":
              return "before:bg-danger";
            default:
              return "before:bg-default-200";
          }
        }, [color]);

        return (
          <Alert
            classNames={{
              ...classNames,
              base: cn(
                [
                  "bg-slate-50 dark:bg-background",
                  "relative before:content-[''] before:absolute before:z-10",
                  "before:left-0 before:top-[-1px] before:bottom-[-1px] before:w-1.5",
                  "rounded-[4px] overflow-hidden border-l-0",
                  colorClass,
                ],
                classNames?.base,
                className
              ),
              mainWrapper: cn("pt-1", classNames?.mainWrapper),
              iconWrapper: cn("dark:bg-transparent", classNames?.iconWrapper),
            }}
            color={color}
            variant={variant}
            {...props}
          >
            {children}
          </Alert>
        );
      };

      CustomAlert.displayName = "CustomAlert";
      return renderElement(
        alertNode?.variant === "side-border" ? (
          <CustomAlert
            key={alertNode.color}
            color={alertNode.color}
            description={alertNode.text}
          />
        ) : (
          <Alert color={alertNode?.color} title={alertNode?.text} />
        )
      );
    case "button":
      const buttonNode = schema as ButtonNode;
      return renderElement(
        <Button {...buttonNode} className={`w-full ${className}`}>
          {buttonNode?.text}
        </Button>
      );
    case "divider":
      const dividerNode = schema as DividerNode;
      return renderElement(
        dividerNode?.variant === "dotted" ? (
          <div className="w-full my-4 flex gap-2 items-center justify-center">
            {[1, 2, 3].map((e) => (
              <div key={e} className="size-1 bg-gray-500 rounded-full"></div>
            ))}
          </div>
        ) : (
          <Divider className="bg-gray-100" />
        )
      );
    case "h1":
      const h1Node = schema as TextNode;
      return renderElement(
        <h1
          id={h1Node?.id}
          className={`text-4xl sm:font-semibold font-bold font-inter ${className}`}
        >
          {(schema as TextNode).text}
        </h1>
      );
    case "h2":
      const h2Node = schema as TextNode;
      return renderElement(
        <h2
          id={h2Node?.id}
          className={`text-3xl sm:font-semibold font-bold font-inter ${className}`}
        >
          {(schema as TextNode).text}
        </h2>
      );
    case "h3":
      const h3Node = schema as TextNode;
      return renderElement(
        <h3
          id={h3Node?.id}
          className={`text-2xl flex items-center gap-1 sm:font-semibold font-bold font-inter cursor-pointer ${className}`}
          onClick={() =>
            h3Node?.id ? (window.location.hash = h3Node?.id) : {}
          }
        >
          {(schema as TextNode).text} <HiLink />
        </h3>
      );
    case "h4":
      const h4Node = schema as TextNode;
      return renderElement(
        <h4
          id={h4Node?.id}
          className={`text-lg sm:font-semibold font-bold font-inter ${className}`}
        >
          {(schema as TextNode).text}
        </h4>
      );
    case "p":
      const pNode = schema as TextNode;
      return renderElement(
        <>
          <p id={pNode?.id} className={`leading-8 ${className}`}>
            {(schema as TextNode).text}
          </p>
          {(schema as CodeNode)?.code && renderCode(schema as CodeNode)}
        </>
      );
    case "li":
      const liNode = schema as ListItemNode;
      return renderElement(
        <li id={liNode?.id} className={`leading-8 ${className}`}>
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
      return renderElement(
        <div className="w-full overflow-x-auto">
          <Snippet size={dimensions?.width < 639 ? "sm" : "md"}>
            {snippetNode?.text}
          </Snippet>
        </div>
      );
    case "code":
      const codeNode = schema as CodeNode;
      return renderElement(renderCode(codeNode));
    case "user":
      const userNode = schema as UserNode;
      return renderElement(
        <User
          className="border font-medium w-full p-4 justify-start"
          avatarProps={{
            src: userNode?.avatar,
            name: userNode?.name,
            color: "primary",
          }}
          description={
            <p className="text-xs font-medium text-primary">
              {userNode?.urlName || userNode?.url}
            </p>
          }
          name={userNode?.name}
        />
      );
    case "tabs":
      const tabsNode = schema as TabsNode;
      return renderElement(<TabsComponent items={tabsNode.items} />);
    case "table":
      const tableNode = schema as TableNode;
      return renderElement(
        <TableComponent
          type={tableNode.type}
          columns={tableNode.columns}
          rows={tableNode.rows}
        />
      );
    case "element-executor":
      const executorNode = schema as ExecutorNode;
      return <ElementExecutor data={executorNode?.schema} />;
    case "icons":
      return renderElement(<IconsList />);
    case "div":
      const divNode = schema as ContainerNode;
      return renderElement(
        <div id={divNode?.id} className={className}>
          {renderChildren()}
        </div>
      );
    case "ul":
      const ulNode = schema as ListNode;
      return renderElement(
        <ul id={ulNode?.id} className={`list-disc ml-8 ${className}`}>
          {renderChildren()}
        </ul>
      );
    case "ol":
      const olNode = schema as ListNode;
      return renderElement(
        <ol id={olNode?.id} className={`list-decimal ml-8 ${className}`}>
          {renderChildren()}
        </ol>
      );
    default:
      console.warn(`Unknown element type: ${type}`);
      return null;
  }

  function renderCode(codeNode: CodeNode): React.ReactNode {
    const themes = {
      atomOneDark,
      railscasts,
    };
    return (
      <div style={{ position: "relative" }}>
        <SyntaxHighlighter
          language="javascript"
          style={codeNode?.theme ? themes?.[codeNode?.theme] : atomOneDark}
          customStyle={{
            borderRadius: "10px",
            fontSize: "14px",
            padding: "12px",
          }}
        >
          {String(codeNode?.code)}
        </SyntaxHighlighter>
        <Button
          onPress={() => {
            toast("Copied to clipboard", {
              icon: <IoIosCheckmarkCircle color="#25D366" size={20} />,
              style: {
                fontSize: "14px",
                fontWeight: "500",
                paddingLeft: "16px",
              },
            });
            navigator.clipboard.writeText(String(codeNode?.code));
          }}
          isIconOnly={true}
          size="sm"
          className="absolute top-1.5 right-1 bg-transparent"
        >
          <IoCopyOutline size={14} color="white" />
        </Button>
      </div>
    );
  }
};

export default ViewBuilder;
