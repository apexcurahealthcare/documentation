import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code, Divider } from "@heroui/react";
import Link from "next/link";
const COLORS = [
  "Primary",
  "Secondary",
  "Success",
  "Warning",
  "Danger",
  "Facebook",
  "Instagram",
  "Yellow",
  "Turquoise",
  "Blue-green",
  "Violet",
  "Default",
];
export const UIComponentsGradientCardGroup: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Gradient Card Group",
    },
    {
      type: "p",
      text: "Used to display as top cards for real time counts in list pages.",
    },
    {
      id: "usage",
      type: "h3",
      text: "Usage",
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
                      element: "gradient-card-group",
                      name: "gradient",
                      value: "plain",
                      cols: 2,
                      options: [
                        {
                          name: "plain",
                          title: "Plain",
                          color: "primary",
                        },
                        {
                          name: "suffix",
                          title: "Suffix Text",
                          color: "secondary",
                          suffixText: "20",
                        },
                        {
                          name: "prefix",
                          title: "Prefix Icon",
                          color: "danger",
                          prefixIcon: "aci-calls-answered",
                          suffixText: "20",
                        },
                        {
                          name: "non-clickable",
                          title: "Non Clickable",
                          color: "warning",
                          suffixText: "35",
                          prefixIcon: "aci-calls-call-quality",
                          prefixIconClassName: "aci-no-colorize",
                          clickable: false,
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
                theme: "railscasts",
                code: `{
  element: "gradient-card-group",
  name: "gradient",
  value: "plain",
  cols: 2,
  options: [
    {
      name: "plain",
      title: "Plain",
      color: "primary",
    },
    {
      name: "suffix",
      title: "Suffix Text",
      color: "secondary",
      suffixText: "20"
    },
    {
      name: "prefix",
      title: "Prefix Icon",
      color: "danger",
      prefixIcon: "aci-calls-answered",
      suffixText: "20"
    },
    {
      name: "non-clickable",
      title: "Non Clickable",
      color: "warning",
      suffixText: "35",
      prefixIcon: "aci-calls-call-quality",
      prefixIconClassName: "aci-no-colorize",
      clickable: false
    }
  ]
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
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      element: "gradient-card-group",
                      name: "gradient",
                      value: "primary",
                      cols: 3,
                      options: COLORS.map((c) => ({
                        name: c?.toLowerCase(),
                        title: c?.replaceAll("-", " "),
                        color: c?.toLowerCase(),
                      })),
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
  element: "gradient-card-group",
  name: "gradient",
  value: "total",
  cols: 3,
  options: [
    {
      name: "primary",
      title: "Primary",
      color: "primary", // secondary | success | warning | danger | facebook | instagram | yellow | turquoise | blue-green | violet
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
      id: "group-props",
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
          prop: "cols",
          type: "Number of columns in the grid layout",
          default: 4,
        },
        {
          prop: "element",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "button",
        },

        {
          prop: "name",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "--",
        },
        {
          prop: "options",
          type: "List of cards that should be displayed in the group",
          default: "--",
        },
        {
          prop: "value",
          type: (
            <Code className="text-xs font-semibold">
              Default | Selected value
            </Code>
          ),
          default: "--",
        },
      ],
    },
    {
      id: "option-props",
      type: "h3",
      text: "Option Props",
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
          prop: "clickable",
          type: <Code className="text-xs font-semibold">boolean</Code>,
          default: "true",
        },
        {
          prop: "color",
          type: (
            <div className="flex flex-wrap gap-2">
              {COLORS.map((c, i) => (
                <div key={c} className="flex items-center gap-2">
                  <Code
                    key={c}
                    className="text-xs font-semibold break-words lowercase"
                  >
                    {c}
                  </Code>
                  {i !== COLORS?.length - 1 && (
                    <Divider orientation="vertical" />
                  )}
                </div>
              ))}
            </div>
          ),
          default: "default",
        },
        {
          prop: "name",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "--",
        },
        {
          prop: "prefixIcon",
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
          prop: "prefixIconClassName",
          type: "Normal tailwind utility classnames or custom classnames",
          default: "--",
        },
        {
          prop: "suffixText",
          type: <Code className="text-xs font-semibold">string | number</Code>,
          default: "--",
        },
        {
          prop: "title",
          type: "Title of the card",
          default: "--",
        },
      ],
    },
  ],
};
