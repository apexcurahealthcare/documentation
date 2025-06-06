"use client";
import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";
import GIT from "@/public/assets/github.svg";
import STYLES from "@/public/assets/tailwind.svg";

import Image from "next/image";
import Link from "next/link";

export const UIBuilderCard: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Card",
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
      text: "Card is a container for text, photos, and actions in the context of a single subject.",
    },
    {
      id: "plain",
      type: "h3",
      text: "Plain",
    },
    {
      id: "tabs-plain",
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
                  className: "border rounded-md p-2",
                  schema: [
                    {
                      name: "patients_details",
                      initial_states: {
                        patient: {
                          patientId: "P003",
                          firstName: "Jon Doe",
                          lastName: "Kumar",
                          gender: "Male",
                          dateOfBirth: "1985-12-10",
                          phone: "+91-9876543210",
                        },
                      },
                      className:
                        "grid grid-cols-3 sm:grid-cols-1 bg-gray-100 rounded-md p-4 space-y-2",
                      fields: [
                        {
                          name: "item",
                          className:
                            "bg-white rounded-lg shadow-lg p-4 border flex flex-col gap-2 items-center justify-center",
                          element: "card",
                          fields: [
                            {
                              name: "image",
                              element: "image",
                              alt: "userpic",
                              imgClassName:
                                "w-[80px] h-[80px] overflow-hidden object-cover rounded-full",
                              img: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            },
                            {
                              name: "name",
                              element: "typography",
                              type: "h4",
                              labelSource: {
                                storedLocation: "patient.firstName",
                              },
                            },
                            {
                              name: "phone",
                              element: "typography",
                              type: "small",
                              labelSource: {
                                storedLocation: "patient.phone",
                              },
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
                theme: "railscasts",
                code: `{
  className: "border rounded-md p-2",
  schema: [
    {
      name: "patients_details",
      initial_states: {
        patient: {
          patientId: "P003",
          firstName: "Jon Doe",
          lastName: "Kumar",
          gender: "Male",
          dateOfBirth: "1985-12-10",
          phone: "+91-9876543210",
        },
      },
      className:
        "grid grid-cols-3 sm:grid-cols-1 bg-gray-100 rounded-md p-4 space-y-2",
      fields: [
        {
          name: "item",
          className:
            "bg-white rounded-lg shadow-lg p-4 border flex flex-col gap-2 items-center justify-center",
          element: "card",
          fields: [
            {
              name: "image",
              element: "image",
              alt: "userpic",
              imgClassName:
                "w-[80px] h-[80px] overflow-hidden object-cover rounded-full",
              img: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "name",
              element: "typography",
              type: "h4",
              labelSource: {
                storedLocation: "patient.firstName",
              },
            },
            {
              name: "phone",
              element: "typography",
              type: "small",
              labelSource: {
                storedLocation: "patient.phone",
              },
            },
          ],
        },
      ],
    },
  ],
}`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "with-buttons",
      type: "h3",
      text: "With Buttons",
    },
    {
      type: "p",
      text: (
        <>
          Click the button to see{" "}
          <span className="font-semibold">Button Clicked</span> printed in the
          console.
        </>
      ),
    },
    {
      id: "tabs-with-buttons",
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
                  className: "border rounded-md p-2",
                  schema: [
                    {
                      name: "patients_details",
                      initial_states: {
                        patient: {
                          patientId: "P003",
                          firstName: "Jon Doe",
                          lastName: "Kumar",
                          gender: "Male",
                          dateOfBirth: "1985-12-10",
                          phone: "+91-9876543210",
                        },
                      },
                      className:
                        "grid grid-cols-3 sm:grid-cols-1 bg-gray-100 rounded-md p-4 space-y-2",
                      fields: [
                        {
                          name: "item",
                          className:
                            "bg-white rounded-lg shadow-lg p-4 border flex flex-col gap-2 items-center justify-center",
                          element: "card",
                          fields: [
                            {
                              name: "image",
                              element: "image",
                              alt: "userpic",
                              imgClassName:
                                "w-[80px] h-[80px] overflow-hidden object-cover rounded-full",
                              img: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            },
                            {
                              name: "name",
                              element: "typography",
                              type: "h4",
                              labelSource: {
                                storedLocation: "patient.firstName",
                              },
                            },
                            {
                              name: "phone",
                              element: "typography",
                              type: "small",
                              labelSource: {
                                storedLocation: "patient.phone",
                              },
                            },
                            {
                              name: "view_details",
                              element: "button",
                              label: "View Profile",
                              color: "primary",
                              className: "w-full",
                              handlers: [
                                {
                                  action: "execFunction",
                                  args: {
                                    condition: "console.log('Button Clicked')",
                                  },
                                },
                              ],
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
                theme: "railscasts",
                code: `{
  className: "border rounded-md p-2",
  schema: [
    {
      name: "patients_details",
      initial_states: {
        patient: {
          patientId: "P003",
          firstName: "Jon Doe",
          lastName: "Kumar",
          gender: "Male",
          dateOfBirth: "1985-12-10",
          phone: "+91-9876543210",
        },
      },
      className:
        "grid grid-cols-3 sm:grid-cols-1 bg-gray-100 rounded-md p-4 space-y-2",
      fields: [
        {
          name: "item",
          className:
            "bg-white rounded-lg shadow-lg p-4 border flex flex-col gap-2 items-center justify-center",
          element: "card",
          fields: [
            {
              name: "image",
              element: "image",
              alt: "userpic",
              imgClassName:
                "w-[80px] h-[80px] overflow-hidden object-cover rounded-full",
              img: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "name",
              element: "typography",
              type: "h4",
              labelSource: {
                storedLocation: "patient.firstName",
              },
            },
            {
              name: "phone",
              element: "typography",
              type: "small",
              labelSource: {
                storedLocation: "patient.phone",
              },
            },
            {
              name: "view_details",
              element: "button",
              label: "View Profile",
              color: "primary",
              className: "w-full",
              handlers: [
                {
                  action: "execFunction",
                  args: {
                    condition: "console.log('Button Clicked')",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "clickable",
      type: "h3",
      text: "Clickable",
    },
    {
      type: "p",
      text: (
        <>
          Both the card and the button inside it are clickable. Check the
          console to see <span className="font-semibold">Card Clicked</span>{" "}
          when clicking anywhere on the card, and{" "}
          <span className="font-semibold">Button Clicked</span> when clicking
          specifically on the button.
        </>
      ),
    },
    {
      id: "tabs-clickable",
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
                  className: "border rounded-md p-2",
                  schema: [
                    {
                      name: "patients_details",
                      initial_states: {
                        patient: {
                          patientId: "P003",
                          firstName: "Jon Doe",
                          lastName: "Kumar",
                          gender: "Male",
                          dateOfBirth: "1985-12-10",
                          phone: "+91-9876543210",
                        },
                      },
                      className:
                        "grid grid-cols-3 sm:grid-cols-1 bg-gray-100 rounded-md p-4 space-y-2",
                      fields: [
                        {
                          name: "item",
                          className:
                            "bg-white rounded-lg shadow-lg p-4 border flex flex-col gap-2 items-center justify-center",
                          element: "card",
                          fields: [
                            {
                              name: "image",
                              element: "image",
                              alt: "userpic",
                              imgClassName:
                                "w-[80px] h-[80px] overflow-hidden object-cover rounded-full",
                              img: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            },
                            {
                              name: "name",
                              element: "typography",
                              type: "h4",
                              labelSource: {
                                storedLocation: "patient.firstName",
                              },
                            },
                            {
                              name: "phone",
                              element: "typography",
                              type: "small",
                              labelSource: {
                                storedLocation: "patient.phone",
                              },
                            },
                            {
                              name: "view_details",
                              element: "button",
                              label: "View Profile",
                              color: "primary",
                              className: "w-full",
                              handlers: [
                                {
                                  action: "execFunction",
                                  args: {
                                    condition: "console.log('Button Clicked')",
                                  },
                                },
                              ],
                            },
                          ],
                          handlers: [
                            {
                              action: "execFunction",
                              args: {
                                condition: "console.log('Card Clicked')",
                              },
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
                theme: "railscasts",
                code: `{
  className: "border rounded-md p-2",
  schema: [
    {
      name: "patients_details",
      initial_states: {
        patient: {
          patientId: "P003",
          firstName: "Jon Doe",
          lastName: "Kumar",
          gender: "Male",
          dateOfBirth: "1985-12-10",
          phone: "+91-9876543210",
        },
      },
      className:
        "grid grid-cols-3 sm:grid-cols-1 bg-gray-100 rounded-md p-4 space-y-2",
      fields: [
        {
          name: "item",
          className:
            "bg-white rounded-lg shadow-lg p-4 border flex flex-col gap-2 items-center justify-center",
          element: "card",
          fields: [
            {
              name: "image",
              element: "image",
              alt: "userpic",
              imgClassName:
                "w-[80px] h-[80px] overflow-hidden object-cover rounded-full",
              img: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "name",
              element: "typography",
              type: "h4",
              labelSource: {
                storedLocation: "patient.firstName",
              },
            },
            {
              name: "phone",
              element: "typography",
              type: "small",
              labelSource: {
                storedLocation: "patient.phone",
              },
            },
            {
              name: "view_details",
              element: "button",
              label: "View Profile",
              color: "primary",
              className: "w-full",
              handlers: [
                {
                  action: "execFunction",
                  args: {
                    condition: "console.log('Button Clicked')",
                  },
                },
              ],
            },
          ],
          handlers: [
            {
              action: "execFunction",
              args: {
                condition: "console.log('Card Clicked')",
              },
            },
          ],
        },
      ],
    },
  ],
}`,
              },
            ],
          },
        },
      ],
    },
    {
      type: "alert",
      variant: "side-border",
      color: "secondary",
      text: "The card content isn't limited to the designs shown above — feel free to style it however you like. It's completely dynamic 😉",
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
          prop: "element",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "card",
        },
        {
          prop: "name",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "--",
        },
        {
          prop: "handlers",
          type: (
            <Code className="text-xs font-semibold">
              Handlers are actions on click of the card. Check out{" "}
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
