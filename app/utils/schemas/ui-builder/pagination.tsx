"use client";
import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";
import GIT from "@/public/assets/github.svg";
import STYLES from "@/public/assets/tailwind.svg";

import Image from "next/image";
import Link from "next/link";

export const UIBuilderPagination: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Pagination",
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
              "https://github.com/ApexCura/apexcura-ui-builder/blob/main/src/Components/ACPagination.tsx",
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
      text: "The Pagination component allows you to display active page and navigate between multiple pages.",
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
                      name: "pagination_test",
                      initial_states: {
                        pagination: {
                          page: 1,
                          total: 100,
                          pageSize: 8,
                        },
                      },
                      className: "w-full bg-white rounded-md p-4 space-y-2",
                      fields: [
                        {
                          name: "pagination",
                          element: "pagination",
                          valueSource: {
                            storedLocation: "pagination",
                          },
                          handlers: [
                            {
                              action: "changeState",
                              args: {
                                storedLocation: "pagination",
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
      name: "pagination_test",
      initial_states: {
        pagination: {
          page: 1,
          total: 100,
          pageSize: 8,
        },
      },
      className: "w-full bg-white rounded-md p-4 space-y-2",
      fields: [
        {
          name: "pagination",
          element: "pagination",
          valueSource: {
            storedLocation: "pagination",
          },
          containerClassName: "justify-end",
          handlers: [
            {
              action: "changeState",
              args: {
                storedLocation: "pagination",
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
          prop: "containerClassName",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "--",
        },
        {
          prop: "className",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "--",
        },
        {
          prop: "element",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "pagination",
        },
        {
          prop: "name",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "--",
        },
        {
          prop: "value",
          type: <Code className="text-xs font-semibold">{`{ page?: number; pageSize?: number; total?: number; }`}</Code>,
          default: "--",
        },
        {
          prop: "valueSource",
          type: <Code className="text-xs font-semibold">{`{ storedLocation?: string; }`}</Code>,
          default: "--",
        },
        {
          prop: "handlers",
          type: (
            <Code className="text-xs font-semibold">
              Handlers are actions on click of the pagination. Check out{" "}
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
