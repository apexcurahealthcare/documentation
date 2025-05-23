"use client";
import { NodeSchema } from "@/app/lib/ViewBuilder";
import GIT from "@/public/assets/github.svg";
import STYLES from "@/public/assets/tailwind.svg";
import { Code } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export const UIBuilderChip: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Chip",
    },
    {
      type: "div",
      className: "flex gap-2",
      children: [
        {
          type: "button",
          text: "Component",
          color: "default",
          size: "sm",
          startContent: (
            <Image src={GIT.src} alt="Git file path" width={16} height={16} />
          ),
          onPress: () =>
            window.open(
              "https://github.com/ApexCura/apexcura-ui-builder/blob/main/src/Components/ACChip.tsx",
              "_blank"
            ),
          className: "bg-gray-200/30 text-gray-800",
        },
        {
          type: "button",
          text: "Styles",
          color: "default",
          size: "sm",
          startContent: (
            <Image
              src={STYLES.src}
              alt="Styles file path"
              width={16}
              height={16}
            />
          ),
          onPress: () =>
            window.open(
              "https://github.com/ApexCura/apexcura-ui-builder/blob/main/src/styles.css",
              "_blank"
            ),
          className: "bg-gray-200/30 text-gray-800",
        },
      ],
    },
    {
      type: "p",
      text: "A Chip is a small block of essential information that represent an input, attribute, or action.",
    },
    {
      id: "colors",
      type: "h3",
      text: "Colors",
    },
    {
      id: "tabs-colors",
      type: "tabs",
      items: [
        {
          key: "preview",
          title: "Preview",
          schema: {
            type: "div",
            children: [
              {
                type: "ui-builder",
                schema: {
                  className:
                    "grid grid-cols-6 gap-2 p-4 rounded-md border-[1.5px] items-center",
                  schema: [
                    { element: "chip", label: "Primary", color: "primary" },
                    { element: "chip", label: "Cyan", color: "cyan" },
                    { element: "chip", label: "Fuchsia", color: "fuchsia" },
                    { element: "chip", label: "Green", color: "green" },
                    { element: "chip", label: "Orange", color: "orange" },
                    { element: "chip", label: "Pink", color: "pink" },
                    { element: "chip", label: "Purple", color: "purple" },
                    { element: "chip", label: "Red", color: "red" },
                    { element: "chip", label: "Sky Blue", color: "skyBlue" },
                    { element: "chip", label: "Teal", color: "teal" },
                    { element: "chip", label: "Violet", color: "violet" },
                    { element: "chip", label: "Yellow", color: "yellow" },
                    { element: "chip", label: "Default" },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "schema",
          title: "Schema",
          schema: {
            type: "div",
            children: [
              {
                type: "code",
                theme: "railscasts",
                code: `{
  name: "status",
  label: "Unpaid",
  element: "chip",
  color: "primary", // "green" | "pink" | ...any other
}`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "colors-obj",
      type: "h3",
      text: "Pass Colors as object",
    },
    {
      type: "p",
      text: "When you need to display statuses in a table with dynamic coloring (where status labels aren't known in advance), you can implement this flexible approach:",
    },
    {
      id: "tabs-colors-obj",
      type: "tabs",
      items: [
        {
          key: "preview",
          title: "Preview",
          schema: {
            type: "div",
            children: [
              {
                type: "ui-builder",
                schema: {
                  className:
                    "grid grid-cols-6 gap-2 p-4 rounded-md border-[1.5px] items-center",
                  schema: [
                    {
                      element: "chip",
                      label: "Paid",
                      colors: {
                        "un-paid": "red",
                        paid: "green",
                      },
                    },
                    {
                      element: "chip",
                      label: "Un Paid",
                      colors: {
                        "un-paid": "red",
                        paid: "green",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "schema",
          title: "Schema",
          schema: {
            type: "div",
            children: [
              {
                type: "code",
                theme: "railscasts",
                code: ` {
  element: "chip",
  label: "Paid", // or Un Paid
  colors: {
    "un-paid": "red",
    paid: "green",
  },
},`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "icons",
      type: "h3",
      text: "Icons",
    },
    {
      id: "tabs-icons",
      type: "tabs",
      items: [
        {
          key: "preview",
          title: "Preview",
          schema: {
            type: "div",
            children: [
              {
                type: "ui-builder",
                schema: {
                  className:
                    "grid grid-cols-6 gap-2 p-4 rounded-md border-[1.5px] items-center",
                  schema: [
                    {
                      element: "chip",
                      label: "Operator",
                      color: "fuchsia",
                      icon: "aci-operator",
                    },
                    {
                      element: "chip",
                      label: "Success",
                      color: "green",
                      icon: "aci-check",
                    },
                    {
                      element: "chip",
                      label: "Danger",
                      color: "red",
                      icon: "aci-emergency",
                      iconClassName:
                        "aci-no-colorize aci-dynamic-size size-[13px]",
                    },
                    {
                      element: "chip",
                      label: "Default",
                      icon: "aci-google-colored",
                      iconClassName:
                        "aci-no-colorize aci-dynamic-size size-[12px]",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "schema",
          title: "Schema",
          schema: {
            type: "div",
            children: [
              {
                type: "code",
                theme: "railscasts",
                code: `{
  element: "chip",
  label: "Danger",
  color: "red",
  icon: "aci-emergency",
  iconClassName: "aci-no-colorize aci-dynamic-size size-[13px]",
}`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "icons-obj",
      type: "h3",
      text: "Pass Icons as object",
    },
    {
      type: "p",
      text: "When you need to display statuses in a table with dynamic icons (where status labels aren't known in advance), you can implement this flexible approach:",
    },
    {
      id: "tabs-icons-obj",
      type: "tabs",
      items: [
        {
          key: "preview",
          title: "Preview",
          schema: {
            type: "div",
            children: [
              {
                type: "ui-builder",
                schema: {
                  className:
                    "grid grid-cols-6 gap-2 p-4 rounded-md border-[1.5px] items-center",
                  schema: [
                    {
                      element: "chip",
                      label: "Success",
                      colors: {
                        success: "green",
                        danger: "red",
                      },
                      icons: {
                        success: {
                          icon: "aci-check",
                        },
                        danger: {
                          icon: "aci-emergency",
                          className:
                            "aci-no-colorize aci-dynamic-size size-[13px]",
                        },
                      },
                    },
                    {
                      element: "chip",
                      label: "Danger",
                      colors: {
                        success: "green",
                        danger: "red",
                      },
                      icons: {
                        success: {
                          icon: "aci-check",
                        },
                        danger: {
                          icon: "aci-emergency",
                          className:
                            "aci-no-colorize aci-dynamic-size size-[13px]",
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "schema",
          title: "Schema",
          schema: {
            type: "div",
            children: [
              {
                type: "code",
                theme: "railscasts",
                code: ` {
  element: "chip",
  label: "Success",
  colors: {
    success: "green",
    danger: "red",
  },
  icons: {
    success: {
      icon: "aci-check"
    },
    danger: {
      icon: "aci-emergency",
      className: "aci-no-colorize aci-dynamic-size size-[13px]",
    }
  }
}`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "props",
      type: "h3",
      text: "Props",
    },
    {
      type: "table",
      columns: [
        {
          key: "prop",
          title: "Prop",
        },
        {
          key: "type",
          title: "Type",
        },
        {
          key: "default",
          title: "Default",
        },
      ],
      rows: [
        {
          prop: "className",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "--",
        },
        {
          prop: "color",
          type: <Code className="text-xs font-semibold">Shown above</Code>,
          default: "default",
        },
        {
          prop: "colors",
          type: (
            <Code className="text-xs font-semibold">
              {`{"LOWERCASED_COMMA-SEPERATED_LABEL": "COLOR"}`}{" "}
            </Code>
          ),
          default: "--",
        },
        {
          prop: "element",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "chip",
        },
        {
          prop: "icon",
          type: (
            <Code className="text-xs font-semibold">
              Icon name from{" "}
              <Link className="text-primary underline" href="/apex-icons/list">
                ApexIcons
              </Link>{" "}
            </Code>
          ),
          default: "--",
        },
        {
          prop: "icons",
          type: (
            <Code className="text-xs font-semibold">
              {`{"LOWERCASED_COMMA-SEPERATED_LABEL": { icon: ICON_NAME, className?: "" }}`}{" "}
            </Code>
          ),
          default: "--",
        },
        {
          prop: "iconClassName",
          type: (
            <Code className="text-xs font-semibold">
              string. If icon.className not exists in icons, this will be the
              default
            </Code>
          ),
          default: "--",
        },
        {
          prop: "label",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "--",
        },
        {
          prop: "name",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "--",
        },
      ],
    },
  ],
};
