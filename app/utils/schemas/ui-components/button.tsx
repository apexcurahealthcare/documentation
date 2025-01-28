import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";

export const UIComponentsButton: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
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
      type: "h4",
      text: "Import",
    },
    {
      type: "snippet",
      text: `import { Button } from '@apexcura/ui-components`,
    },
    {
      type: "h4",
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
                  className: "flex gap-2 px-2",
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
          key: "code",
          title: "Code",
          schema: {
            type: "div",
            children: [
              {
                type: "code",
                code: `import { Button } from '@apexcura/ui-components';
              
const MyComponent = () => {
    return (
        <div className="flex gap-2">
          <Button variant="solid">Solid</Button>
          <Button variant="light">Light</Button>
          <Button variant="outlined">Outlined</Button>
        </div>
    );
};`,
              },
            ],
          },
        },
      ],
    },
  ],
};
