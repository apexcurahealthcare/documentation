import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";

export const UIComponentsRadio: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Radio Buttons",
    },
    {
      type: "p",
      text: "Radio buttons are used to select one option from a set of options. They are typically used in forms and surveys.",
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
                  className: "flex sm:flex-col sm:items-start sm:gap-3 justify-between items-center gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "button-radio-group",
                      element: "input-radio",
                      label: "Button",
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
                      value: {
                        label: "Option 1",
                        value: "option_1",
                      },
                    },
                    {
                      name: "divider",
                      element: "div",
                      className: "w-[1px] h-[25px] border sm:w-full sm:h-[1px]",
                    },
                    {
                      name: "circled-radio-group",
                      element: "input-radio",
                      variant: "circled",
                      label: "Circled",
                      options: [
                        {
                          label: "Option 1",
                          value: "c_option_1",
                        },
                        {
                          label: "Option 2",
                          value: "c_option_2",
                        },
                        {
                          label: "Option 3",
                          value: "c_option_3",
                        },
                      ],
                      value: {
                        label: "Option 1",
                        value: "c_option_1",
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
                code: `// Button
{
  name: "button-radio-group",
  element: "input-radio",
  label: "Button",
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
  value: {
    label: "Option 1",
    value: "option_1",
  },
}
// Circled
{
  name: "circled-radio-group",
  element: "input-radio",
  variant: "circled",
  label: "Circled",
  options: [
    {
      label: "Option 1",
      value: "c_option_1",
    },
    {
      label: "Option 2",
      value: "c_option_2",
    },
    {
      label: "Option 3",
      value: "c_option_3",
    },
  ],
  value: {
    label: "Option 1",
    value: "c_option_1",
  },
}
`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "size",
      type: "h3",
      text: "Size",
    },
    {
      id: "tabs-size",
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
                  className: "flex sm:flex-col sm:items-start sm:gap-3 justify-between items-end gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "small-radio-group",
                      element: "input-radio",
                      label: "Small",
                      size: "small",
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
                      value: {
                        label: "Option 1",
                        value: "option_1",
                      },
                    },
                    {
                      name: "divider",
                      element: "div",
                      className: "w-[1px] h-[25px] border sm:w-full sm:h-[1px]",
                    },
                    {
                      name: "middle-radio-group",
                      element: "input-radio",
                      label: "Middle",
                      size: "middle",
                      options: [
                        {
                          label: "Option 1",
                          value: "m_option_1",
                        },
                        {
                          label: "Option 2",
                          value: "m_option_2",
                        },
                        {
                          label: "Option 3",
                          value: "m_option_3",
                        },
                      ],
                      value: {
                        label: "Option 1",
                        value: "m_option_1",
                      },
                    },
                    {
                      name: "divider",
                      element: "div",
                      className: "w-[1px] h-[25px] border sm:w-full sm:h-[1px]",
                    },
                    {
                      name: "large-radio-group",
                      element: "input-radio",
                      label: "Large",
                      options: [
                        {
                          label: "Option 1",
                          value: "c_option_1",
                        },
                        {
                          label: "Option 2",
                          value: "c_option_2",
                        },
                        {
                          label: "Option 3",
                          value: "c_option_3",
                        },
                      ],
                      value: {
                        label: "Option 1",
                        value: "c_option_1",
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
                code: `
{
  name: "small-radio-group",
  element: "input-radio",
  label: "Small",
  size: "small", // or "middle" or "large"
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
  value: {
    label: "Option 1",
    value: "option_1",
  },
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
          type: <Code className="text-xs font-semibold">Class that will be applied to each radio option</Code>,
          default: "--",
        },
        {
          prop: "containerClassName",
          type: <Code className="text-xs font-semibold">Class that will be applied to the label with radio group</Code>,
          default: "--",
        },
        {
          prop: "labelClassName",
          type: <Code className="text-xs font-semibold">Class that will be applied to the label</Code>,
          default: "--",
        },
        {
          prop: "radioGroupClassName",
          type: <Code className="text-xs font-semibold">Class that will be applied to the radio group except label</Code>,
          default: "--",
        },
        {
          prop: "element",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "input-radio",
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
              small | middle | large
            </Code>
          ),
          default: "large",
        },
        {
          prop: "variant",
          type: (
            <Code className="text-xs font-semibold">
              button | circled
            </Code>
          ),
          default: "button",
        },
      ],
    },
  ],
};
