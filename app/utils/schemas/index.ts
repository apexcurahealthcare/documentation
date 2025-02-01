import { NodeSchema } from "@/app/lib/ViewBuilder";
import { UIComponentsIntro } from "./ui-components/intro";
import { UIComponentsInstallation } from "./ui-components/installation";
import { UIComponentsButton } from "./ui-components/button";
import { ApexIconsIntro } from "./apex-icons/intro";
import { ApexIconsInstallation } from "./apex-icons/installation";

export type PageName = "apex-icons" |"ui-components" | "view-engine";

export type NestedPages = "apex-icons/installation" | "apex-icons/list" | "ui-components/installation" | "ui-components/button";

export type AllPages = PageName | NestedPages;

type SchemaMap = {
  [key in AllPages]: NodeSchema;
};

type H3Text = { id?: string; text: string };

class Schema {
  private static schemas: SchemaMap = {
    "apex-icons": ApexIconsIntro,
    "apex-icons/installation": ApexIconsInstallation,
    "apex-icons/list": ApexIconsInstallation,
    "ui-components": UIComponentsIntro,
    "ui-components/installation": UIComponentsInstallation,
    "ui-components/button": UIComponentsButton,
    "view-engine": UIComponentsIntro
  };

  static get(pageName: AllPages): NodeSchema {
    const schema = this.schemas?.[pageName];
    if (!schema) {
      // throw new Error(`Schema for page "${pageName}" not found.`);
      return {
        type: "div",
        children: [],
      } as NodeSchema; // Return a default empty schema for non-existent pages.
    }
    return schema;
  }
  static getH3Texts(schema: NodeSchema): H3Text[]{
    const h3Texts: H3Text[] = [];

    const traverse = (node: NodeSchema) => {
      if (["h3"].includes(node.type) && "text" in node) {
        h3Texts.push({
          id: node.id || "",
          text: node.text as string,
        });
      }

      if ("children" in node && node.children) {
        node.children.forEach((child) => traverse(child));
      }
    };

    traverse(schema);
    return h3Texts;
  }
}

export default Schema;
