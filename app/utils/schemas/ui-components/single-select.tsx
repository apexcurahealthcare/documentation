import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";

export const UIComponentsSingleSelect: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Select Dropdown",
    },
    {
      type: "p",
      text: "A dropdown menu for displaying choices.",
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
                      name: "input-default",
                      label: "Default",
                      element: "single-select",
                      placeholder: "Select an option",
                      options: [
                        {
                          label: "Option 1",
                          value: "option_1",
                        },
                        {
                          label: "Option 2",
                          value: "option_2",
                        },
                        {
                          label: "Option 3",
                          value: "option_3",
                        },
                      ],
                    },
                    {
                      name: "input-primary",
                      label: "Primary",
                      element: "single-select",
                      color: "primary",
                      placeholder: "Select an option",
                      options: [
                        {
                          label: "Option 1",
                          value: "option_1",
                        },
                        {
                          label: "Option 2",
                          value: "option_2",
                        },
                        {
                          label: "Option 3",
                          value: "option_3",
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
                code: `// Default dropdown
{
  name: "input-default",
  label: "Default",
  element: "single-select",
  placeholder: "Select an option",
  options: [
    {
      label: "Option 1",
      value: "option_1",
    },
    {
      label: "Option 2",
      value: "option_2",
    },
    {
      label: "Option 3",
      value: "option_3",
    },
  ]
},
// Primary colored dropdown
{
  name: "input-primary",
  label: "Primary",
  element: "single-select",
  color: "primary",
  placeholder: "Select an option",
  options: [
    {
      label: "Option 1",
      value: "option_1",
    },
    {
      label: "Option 2",
      value: "option_2",
    },
    {
      label: "Option 3",
      value: "option_3",
    },
  ]
}
`,
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
          type: (
            <Code className="text-xs font-semibold">
              Class that will be applied to each radio option
            </Code>
          ),
          default: "--",
        },
        {
          prop: "containerClassName",
          type: (
            <Code className="text-xs font-semibold">
              Class that will be applied to the label with radio group
            </Code>
          ),
          default: "--",
        },
        {
          prop: "labelClassName",
          type: (
            <Code className="text-xs font-semibold">
              Class that will be applied to the label
            </Code>
          ),
          default: "--",
        },
        {
          prop: "color",
          type: (
            <Code className="text-xs font-semibold">primary | default</Code>
          ),
          default: "default",
        },
        {
          prop: "element",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "single-select",
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
      ],
    },
    {
      type: "p",
      text: (
        <>
          And other props from{" "}
          <a
            href="https://ant.design/components/select#api"
            target="_blank"
            className="text-primary border-b border-primary border-dotted font-medium"
          >
            AntD Select Component
          </a>
          .
        </>
      ),
    },
  ],
};
