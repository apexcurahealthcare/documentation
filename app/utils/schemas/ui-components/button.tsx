import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";
import Link from "next/link";

export const UIComponentsButton: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Button",
    },
    {
      type: "p",
      text: "Buttons allow users to perform actions and choose with a single tap.",
    },
    {
      id: "variants",
      type: "h3",
      text: "Variants",
    },
    {
      id: "tabs-variants",
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
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-solid",
                      label: "Solid",
                      element: "button",
                      variant: "solid",
                    },
                    {
                      name: "btn-light",
                      label: "Light",
                      element: "button",
                      variant: "light",
                    },
                    {
                      name: "btn-outlined",
                      label: "Outlined",
                      element: "button",
                      variant: "outlined",
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
                code: `// Solid button
{
  name: "btn-solid",
  label: "Solid",
  element: "button",
  variant: "solid",
},
// Light Button
{
  name: "btn-light",
  label: "Light",
  element: "button",
  variant: "light",
},
// Outlined Button
{
  name: "btn-outlined",
  label: "Outlined",
  element: "button",
  variant: "outlined",
}`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "sizes",
      type: "h3",
      text: "Sizes",
    },
    {
      id: "tabs-sizes",
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
                  className: "flex items-end gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-small",
                      label: "Small",
                      element: "button",
                      variant: "solid",
                      size: "small"
                    },
                    {
                      name: "btn-medium",
                      label: "Medium",
                      element: "button",
                      variant: "solid",
                    },
                    {
                      name: "btn-large",
                      label: "Large",
                      element: "button",
                      variant: "solid",
                      size: "large"
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
                code: `// Small button
{
  name: "btn-small",
  label: "Small",
  element: "button",
  variant: "solid",
  size: "small"
},
// Medium Button
{
  name: "btn-medium",
  label: "Medium",
  element: "button",
  variant: "solid",
},
// Large Button
{
  name: "btn-large",
  label: "Large",
  element: "button",
  variant: "solid",
  size: "large"
}`,
              },
            ],
          },
        },
      ],
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
                type: "element-executor",
                schema: {
                  className:
                    "flex gap-2 p-4 rounded-md border-[1.5px] flex-wrap items-center",
                  schema: [
                    {
                      name: "btn-solid",
                      label: "Primary",
                      element: "button",
                      variant: "solid",
                      color: "primary",
                    },
                    {
                      name: "btn-light",
                      label: "Primary",
                      element: "button",
                      variant: "light",
                      color: "primary",
                    },
                    {
                      name: "btn-outlined",
                      label: "Primary",
                      element: "button",
                      variant: "outlined",
                      color: "primary",
                    },
                    {
                      name: "divider",
                      element: "div",
                      className: "w-[1px] h-[25px] border sm:w-full sm:h-[1px]",
                    },
                    {
                      name: "btn-solid",
                      label: "Danger",
                      element: "button",
                      variant: "solid",
                      color: "danger",
                    },
                    {
                      name: "btn-light",
                      label: "Danger",
                      element: "button",
                      variant: "light",
                      color: "danger",
                    },
                    {
                      name: "btn-outlined",
                      label: "Danger",
                      element: "button",
                      variant: "outlined",
                      color: "danger",
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
  name: "btn-solid",
  label: "Primary",
  element: "button",
  variant: "solid",
  color: "primary",
},
{
  name: "btn-light",
  label: "Primary",
  element: "button",
  variant: "light",
  color: "primary",
},
{
  name: "btn-outlined",
  label: "Primary",
  element: "button",
  variant: "outlined",
  color: "primary",
},
{
  name: "btn-solid",
  label: "Danger",
  element: "button",
  variant: "solid",
  color: "danger",
},
{
  name: "btn-light",
  label: "Danger",
  element: "button",
  variant: "light",
  color: "danger",
},
{
  name: "btn-outlined",
  label: "Danger",
  element: "button",
  variant: "outlined",
  color: "danger",
},
                `,
              },
            ],
          },
        },
      ],
    },
    {
      id: "with-icons",
      type: "h3",
      text: "With Icons",
    },
    {
      id: "tabs-with_icons",
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
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-solid",
                      label: "Add New",
                      element: "button",
                      iconsClassName: "aci-add aci-dynamic-size size-[14px]",
                      variant: "solid",
                    },
                    {
                      name: "btn-light",
                      label: "Go Back",
                      element: "button",
                      variant: "light",
                      iconsClassName:
                        "aci-left-arrow aci-dynamic-size size-[14px]",
                    },
                    {
                      name: "btn-outlined",
                      label: "Download",
                      element: "button",
                      variant: "outlined",
                      iconsClassName:
                        "aci-download aci-dynamic-size size-[18px]",
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
  name: "btn-solid",
  label: "Add New",
  element: "button",
  iconsClassName: "aci-add aci-dynamic-size size-[14px]",
  variant: "solid",
},
{
  name: "btn-light",
  label: "Go Back",
  element: "button",
  variant: "light",
  iconsClassName: "aci-left-arrow aci-dynamic-size size-[14px]",
},
{
  name: "btn-outlined",
  label: "Download",
  element: "button",
  variant: "outlined",
  iconsClassName: "aci-download aci-dynamic-size size-[18px]",
}`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "icon-only",
      type: "h3",
      text: "Icon Only",
    },
    {
      id: "tabs-icon_only",
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
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-solid",
                      element: "button",
                      iconsClassName: "aci-add aci-dynamic-size size-[14px]",
                      variant: "solid",
                    },
                    {
                      name: "btn-light",
                      element: "button",
                      variant: "light",
                      iconsClassName:
                        "aci-left-arrow aci-dynamic-size size-[14px]",
                    },
                    {
                      name: "btn-outlined",
                      element: "button",
                      variant: "outlined",
                      iconsClassName:
                        "aci-download aci-dynamic-size size-[14px]",
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
                code: `// No need to pass label
{
  name: "btn-solid",
  element: "button",
  iconsClassName: "aci-add aci-dynamic-size size-[14px]",
  variant: "solid",
},
{
  name: "btn-light",
  element: "button",
  variant: "light",
  iconsClassName: "aci-left-arrow aci-dynamic-size size-[14px]",
},
{
  name: "btn-outlined",
  element: "button",
  variant: "outlined",
  iconsClassName: "aci-download aci-dynamic-size size-[14px]",
}`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "icon-only-with-tooltip",
      type: "h3",
      text: "Icon Only (Tooltip)",
    },
    {
      id: "tabs-icon_only_with_tooltip",
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
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-solid",
                      element: "button",
                      iconsClassName: "aci-add aci-dynamic-size size-[14px]",
                      variant: "solid",
                      tooltip: {
                        title: "Add New",
                        placement: "bottom",
                      },
                    },
                    {
                      name: "btn-light",
                      element: "button",
                      variant: "light",
                      tooltip: {
                        title: "Go back",
                        placement: "top",
                      },
                      iconsClassName:
                        "aci-left-arrow aci-dynamic-size size-[14px]",
                    },
                    {
                      name: "btn-outlined",
                      element: "button",
                      variant: "outlined",
                      iconsClassName:
                        "aci-download aci-dynamic-size size-[14px]",
                      tooltip: {
                        title: "Download",
                        placement: "bottom",
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
                code: `// Pass tooltip props tilte and placement
{
  name: "btn-solid",
  element: "button",
  iconsClassName: "aci-add aci-dynamic-size size-[14px]",
  variant: "solid",
  tooltip: {
    title: "Add New",
    placement: "bottom",
  },
},
{
  name: "btn-light",
  element: "button",
  variant: "light",
  tooltip: {
    title: "Go back",
    placement: "top",
  },
  iconsClassName: "aci-left-arrow aci-dynamic-size size-[14px]",
},
{
  name: "btn-outlined",
  element: "button",
  variant: "outlined",
  iconsClassName: "aci-download aci-dynamic-size size-[14px]",
  tooltip: {
    title: "Download",
    placement: "bottom",
  },
},`,
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
          type: <Code className="text-xs font-semibold">primary | danger</Code>,
          default: "primary",
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
          prop: "size",
          type: (
            <Code className="text-xs font-semibold">
              small | medium | large
            </Code>
          ),
          default: "medium",
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
