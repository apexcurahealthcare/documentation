"use client";
import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";
import GIT from "@/public/assets/github.svg";
import STYLES from "@/public/assets/tailwind.svg";

import Image from "next/image";
import Link from "next/link";

export const UIBuilderButton: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Button",
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
              "https://github.com/ApexCura/apexcura-ui-builder/blob/main/src/Components/ACButton.tsx",
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
                type: "ui-builder",
                schema: {
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
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
                    {
                      name: "btn-ghost",
                      label: "Ghost",
                      element: "button",
                      variant: "ghost",
                    },
                    {
                      name: "btn-solid",
                      label: "Solid",
                      element: "button",
                      variant: "solid",
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
  label: "Solid",
  element: "button",
  variant: "solid", // light | outlined | ghost
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
                type: "ui-builder",
                schema: {
                  className:
                    "flex items-end gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-small",
                      label: "Small",
                      element: "button",
                      variant: "solid",
                      size: "small",
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
                      size: "large",
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
  name: "btn-small",
  label: "Small",
  element: "button",
  variant: "solid",
  size: "small" // middle | large
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
                type: "ui-builder",
                schema: {
                  className:
                    "flex gap-2 p-4 rounded-md border-[1.5px] flex-wrap items-center",
                  schema: [
                    {
                      name: "btn-light",
                      label: "Primary",
                      element: "button",
                      variant: "light",
                      color: "primary",
                    },
                    {
                      name: "btn-solid",
                      label: "Primary",
                      element: "button",
                      variant: "solid",
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
                      name: "btn-outlined",
                      label: "Primary",
                      element: "button",
                      variant: "ghost",
                      color: "primary",
                    },
                    {
                      name: "divider",
                      element: "div",
                      className: "w-[1px] h-[25px] border sm:w-full sm:h-[1px]",
                    },
                    {
                      name: "btn-light",
                      label: "Success",
                      element: "button",
                      variant: "light",
                      color: "success",
                    },
                    {
                      name: "btn-solid",
                      label: "Success",
                      element: "button",
                      variant: "solid",
                      color: "success",
                    },
                    {
                      name: "btn-outlined",
                      label: "Success",
                      element: "button",
                      variant: "outlined",
                      color: "success",
                    },
                    {
                      name: "btn-outlined",
                      label: "Success",
                      element: "button",
                      variant: "ghost",
                      color: "success",
                    },
                    {
                      name: "divider",
                      element: "div",
                      className: "w-[1px] h-[25px] border sm:w-full sm:h-[1px]",
                    },
                    {
                      name: "btn-light",
                      label: "Danger",
                      element: "button",
                      variant: "light",
                      color: "danger",
                    },
                    {
                      name: "btn-solid",
                      label: "Danger",
                      element: "button",
                      variant: "solid",
                      color: "danger",
                    },
                    {
                      name: "btn-outlined",
                      label: "Danger",
                      element: "button",
                      variant: "outlined",
                      color: "danger",
                    },
                    {
                      name: "btn-outlined",
                      label: "Danger",
                      element: "button",
                      variant: "ghost",
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
                type: "ui-builder",
                schema: {
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-light",
                      label: "Go Back",
                      element: "button",
                      variant: "light",
                      iconClassName:
                        "aci-left-arrow aci-dynamic-size size-[14px]",
                    },
                    {
                      name: "btn-solid",
                      label: "Add New",
                      element: "button",
                      iconClassName: "aci-add aci-dynamic-size size-[14px]",
                      variant: "solid",
                    },
                    {
                      name: "btn-outlined",
                      label: "Download",
                      element: "button",
                      variant: "outlined",
                      iconClassName:
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
  iconClassName: "aci-add aci-dynamic-size size-[14px]",
  variant: "solid",
},
{
  name: "btn-light",
  label: "Go Back",
  element: "button",
  variant: "light",
  iconClassName: "aci-left-arrow aci-dynamic-size size-[14px]",
},
{
  name: "btn-outlined",
  label: "Download",
  element: "button",
  variant: "outlined",
  iconClassName: "aci-download aci-dynamic-size size-[18px]",
}`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "icon-position",
      type: "h3",
      text: "Icon Position",
    },
    {
      id: "tabs-icon-position",
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
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-solid",
                      label: "Add New",
                      element: "button",
                      iconClassName: "aci-add aci-dynamic-size size-[14px]",
                      variant: "solid",
                      iconPosition: "left",
                    },
                    {
                      name: "btn-light",
                      label: "Save & Next",
                      element: "button",
                      variant: "outlined",
                      iconClassName:
                        "aci-right-arrow aci-dynamic-size size-[13px]",
                      iconPosition: "right",
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
  iconClassName: "aci-add aci-dynamic-size size-[14px]",
  variant: "solid",
  iconPosition: "left" // right
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
                type: "ui-builder",
                schema: {
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-light",
                      element: "button",
                      variant: "light",
                      iconClassName:
                        "aci-left-arrow aci-dynamic-size size-[14px]",
                    },
                    {
                      name: "btn-solid",
                      element: "button",
                      iconClassName: "aci-add aci-dynamic-size size-[14px]",
                      variant: "solid",
                    },
                    {
                      name: "btn-outlined",
                      element: "button",
                      variant: "outlined",
                      iconClassName:
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
  iconClassName: "aci-add aci-dynamic-size size-[14px]",
  variant: "solid",
},
{
  name: "btn-light",
  element: "button",
  variant: "light",
  iconClassName: "aci-left-arrow aci-dynamic-size size-[14px]",
},
{
  name: "btn-outlined",
  element: "button",
  variant: "outlined",
  iconClassName: "aci-download aci-dynamic-size size-[14px]",
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
                type: "ui-builder",
                schema: {
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-light",
                      element: "button",
                      variant: "light",
                      tooltip: {
                        title: "Go back",
                        placement: "top",
                      },
                      iconClassName:
                        "aci-left-arrow aci-dynamic-size size-[14px]",
                    },
                    {
                      name: "btn-solid",
                      element: "button",
                      iconClassName: "aci-add aci-dynamic-size size-[14px]",
                      variant: "solid",
                      tooltip: {
                        title: "Add New",
                        placement: "bottom",
                      },
                    },
                    {
                      name: "btn-outlined",
                      element: "button",
                      variant: "outlined",
                      iconClassName:
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
  iconClassName: "aci-add aci-dynamic-size size-[14px]",
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
  iconClassName: "aci-left-arrow aci-dynamic-size size-[14px]",
},
{
  name: "btn-outlined",
  element: "button",
  variant: "outlined",
  iconClassName: "aci-download aci-dynamic-size size-[14px]",
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
          prop: "iconClassName",
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
          prop: "iconPosition",
          type: <Code className="text-xs font-semibold">left | right</Code>,
          default: "left",
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
        {
          prop: "handlers",
          type: (
            <Code className="text-xs font-semibold">
              Handlers are actions on click of the button. Check out{" "}
              <Link
                className="text-primary underline"
                href="/ui-builder/handlers"
              >
                Handlers
              </Link>{" "}
            </Code>
          ),
          default: "--",
        },
      ],
    },
  ],
};
