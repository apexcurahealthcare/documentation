import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";
import Link from "next/link";

export const UIComponentsTabs: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Tabs",
    },
    {
      type: "p",
      text: "Tabs organize content into multiple sections and allow users to navigate between them.",
    },
    {
      id: "plain_variant",
      type: "h3",
      text: "Plain Variant",
    },
    {
      id: "tabs-plain_variant",
      type: "tabs",
      items: [
        {
          key: "preview",
          title: "Preview",
          schema: {
            type: "div",
            children: [
              {
                type: "element-executor",
                schema: {
                  className: "flex flex-col p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "plain-tabs",
                      element: "tabs",
                      containerClassName: "mb-2",
                      options: [
                        {
                          key: "tab1",
                          label: "Tab 1",
                        },
                        {
                          key: "tab2",
                          label: "Tab 2",
                        },
                      ],
                      value: {
                        key: "tab1",
                        label: "Tab 1",
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
                code: `{
  name: "plain-tabs",
  element: "tabs",
  containerClassName: "mb-2",
  options: [
    {
      key: "tab1",
      label: "Tab 1",
    },
    {
      key: "tab2",
      label: "Tab 2",
    }
  ],
  value: {
    key: "tab1",
    label: "Tab 1",
  },
}`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "nested_variant",
      type: "h3",
      text: "Nested Variant",
    },
    {
      id: "tabs-nested_variant",
      type: "tabs",
      items: [
        {
          key: "preview",
          title: "Preview",
          schema: {
            type: "div",
            children: [
              {
                type: "element-executor",
                schema: {
                  className: "flex flex-col p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "nested-tabs",
                      element: "tabs",
                      hasChildren: true,
                      fields: [
                        {
                          name: "tab-1",
                          label: "Tab 1",
                          className: "flex flex-col gap-2 pt-2",
                          fields: [
                            {
                              name: "nested-div-1-content-1",
                              label: "Tab 1 Child content 1",
                              element: "div",
                              className: "text-sm",
                            },
                            {
                              name: "nested-div-1-content-2",
                              label: "Tab 1 Child content 2",
                              element: "div",
                              className: "text-sm",
                            },
                          ],
                        },
                        {
                          name: "tab-2",
                          label: "Tab 2",
                          className: "flex flex-col gap-2 pt-2",
                          fields: [
                            {
                              name: "nested-div-2-content-1",
                              label: "Tab 2 Child content 1",
                              element: "div",
                              className: "text-sm",
                            },
                            {
                              name: "nested-div-2-content-2",
                              label: "Tab 2 Child content 2",
                              element: "div",
                              className: "text-sm",
                            },
                          ],
                        },
                      ],
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
                code: `{
  name: "nested-tabs",
  element: "tabs",
  containerClassName: "mb-2",
  hasChildren: true,
  fields: [
    {
      name: "tab-1",
      label: "Tab 1",
      className: "flex flex-col gap-2 pt-1",
      fields: [
        {
          name: "nested-div-1-content-1",
          label: "Tab 1 Child content 1",
          element: "div",
          className: "text-sm",
        },
        {
          name: "nested-div-1-content-2",
          label: "Tab 1 Child content 2",
          element: "div",
          className: "text-sm",
        },
      ],
    },
    {
      name: "tab-2",
      label: "Tab 2",
      className: "flex flex-col gap-2 pt-1",
      fields: [
        {
          name: "nested-div-2-content-1",
          label: "Tab 2 Child content 1",
          element: "div",
          className: "text-sm",
        },
        {
          name: "nested-div-2-content-2",
          label: "Tab 2 Child content 2",
          element: "div",
          className: "text-sm",
        },
      ],
    }
  ],
}`,
              },
            ],
          },
        },
      ],
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
          prop: "element",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "button",
        },
        {
          prop: "iconsClassName",
          type: (
            <Code className="text-xs font-semibold">
              Icon name from{" "}
              <Link className="text-primary underline" href="/apex-icons/list">
                ApexIcons
              </Link>{" "}
              along with typescript classnames{" "}
            </Code>
          ),
          default: "--",
        },
        {
          prop: "label",
          type: (
            <Code className="text-xs font-semibold">string | ReactNode</Code>
          ),
          default: "--",
        },
        {
          prop: "name",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "--",
        },
        {
          prop: "tooltip",
          type: (
            <Code className="text-xs font-semibold">{`{ title: string, placement: "top" | "bottom" | "left" | "right" }`}</Code>
          ),
          default: "--",
        },
        {
          prop: "variant",
          type: (
            <Code className="text-xs font-semibold">
              solid | outlined | light
            </Code>
          ),
          default: "solid",
        },
      ],
    },
  ],
};
