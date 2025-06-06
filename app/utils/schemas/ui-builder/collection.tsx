"use client";
import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";
import GIT from "@/public/assets/github.svg";
import STYLES from "@/public/assets/tailwind.svg";

import Image from "next/image";
import Link from "next/link";

export const UIBuilderCollection: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Collection",
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
              "https://github.com/ApexCura/apexcura-ui-builder/blob/main/src/Components/ACCollection.tsx",
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
      text: "Group of items which share similar attributes like color, features, or actions.",
    },
    {
      id: "usage",
      type: "h3",
      text: "Usage",
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
                      name: "patients_list",
                      initial_states: {
                        data: [
                          {
                            patientId: "P001",
                            firstName: "John",
                            lastName: "Doe",
                            gender: "Male",
                            dateOfBirth: "1980-05-15",
                            phone: "+1-202-555-0123",
                          },
                          {
                            patientId: "P002",
                            firstName: "Jane",
                            lastName: "Smith",
                            gender: "Female",
                            dateOfBirth: "1990-08-20",
                            phone: "+1-303-555-0198",
                          },
                          {
                            patientId: "P003",
                            firstName: "Raj",
                            lastName: "Kumar",
                            gender: "Male",
                            dateOfBirth: "1985-12-10",
                            phone: "+91-9876543210",
                          },
                        ],
                      },
                      className: "bg-gray-100 rounded-md p-4 space-y-2",
                      fields: [
                        {
                          name: "list",
                          element: "collection",
                          dataSource: {
                            storedLocation: "data",
                          },
                          className: "grid grid-cols-3 sm:grid-cols-1 gap-2",
                          template: {
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
                                  storedLocation: "@item.firstName",
                                },
                              },
                              {
                                name: "phone",
                                element: "typography",
                                type: "small",
                                labelSource: {
                                  storedLocation: "@item.phone",
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
                                      condition:
                                        "console.log('Button Clicked')",
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
      name: "patients_list",
      initial_states: {
        data: [
          {
            patientId: "P001",
            firstName: "John",
            lastName: "Doe",
            gender: "Male",
            dateOfBirth: "1980-05-15",
            phone: "+1-202-555-0123",
          },
          {
            patientId: "P002",
            firstName: "Jane",
            lastName: "Smith",
            gender: "Female",
            dateOfBirth: "1990-08-20",
            phone: "+1-303-555-0198",
          },
          {
            patientId: "P003",
            firstName: "Raj",
            lastName: "Kumar",
            gender: "Male",
            dateOfBirth: "1985-12-10",
            phone: "+91-9876543210",
          },
        ],
      },
      className: "bg-gray-100 rounded-md p-4 space-y-2",
      fields: [
        {
          name: "list",
          element: "collection",
          dataSource: {
            storedLocation: "data",
          },
          className: "grid grid-cols-3 gap-2",
          template: {
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
                  storedLocation: "@item.firstName",
                },
              },
              {
                name: "phone",
                element: "typography",
                type: "small",
                labelSource: {
                  storedLocation: "@item.phone",
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
                      condition:
                        "console.log('Button Clicked')",
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
      type: "p",
      text: (
        <>
          <span className="font-semibold">dataSource</span> contains the list of
          data to be passed into the component, while{" "}
          <span className="font-semibold">template</span> defines the structure
          for rendering each item in the list.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          To display values from each item in the iteration, pass{" "}
          <span className="font-semibold">@item.LABEL_NAME</span> as the label
          source.
        </>
      ),
    },
    {
      type: "code",
      code: `{
  name: "name",
  element: "typography",
  type: "h4",
  labelSource: {
    storedLocation: "@item.firstName",
  },
}`,
    },
    {
      type: "p",
      text: (
        <>
          <Code>@item.firstName</Code> accesses the <Code>firstName</Code> value
          from each object in the data array.
        </>
      ),
    },
    {
      id: "accessing-values",
      type: "h3",
      text: "Accesing item values",
    },
    {
      type: "p",
      text: (
        <>
          In some cases, you might need the full object of the iterating item to
          extract specific keys for building a navigation link.
        </>
      ),
    },
    {
      type: "code",
      code: `navigate(\`/patients/edit/\${patientId}\`);`,
    },
    {
      type: "p",
      text: "To achieve this using the navigate handler, set the action as follows:",
    },
    {
      type: "code",
      code: `{
  action: "navigate",
  args: {
    route: "/patients/edit/\${patientId}\",
    params: {
      patientId: "@event.patientId",
    },
  },
},`,
    },
    {
      type: "p",
      text: "The event will contain the entire item object during each iteration.",
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
          default: "collection",
        },
        {
          prop: "name",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "--",
        },
        {
          prop: "template",
          type: <Code className="text-xs font-semibold">object</Code>,
          default: "--",
        },
        {
          prop: "dataSource",
          type: (
            <Code className="text-xs font-semibold">{`{ storedLocation?: string; }`}</Code>
          ),
          default: "--",
        },
      ],
    },
  ],
};
