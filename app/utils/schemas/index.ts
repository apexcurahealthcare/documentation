import { NodeSchema } from "@/app/lib/ViewBuilder";
import { UIComponents } from "./ui-components";

export type PageName = "ui-components" | "view-engine";

type SchemaMap = {
  [key in PageName]: NodeSchema;
};

type H3Text = { id?: string; text: string }

class Schema {
  private static schemas: SchemaMap = {
    "ui-components": UIComponents,
    "view-engine": UIComponents
  };

  static get(pageName: PageName): NodeSchema {
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
      if (node.type === "h3" && "text" in node) {
        h3Texts.push({
          id: node.id || "",
          text: node.text as string, // Include the text
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
