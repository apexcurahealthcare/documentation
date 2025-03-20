import { NodeSchema } from "@/app/lib/ViewBuilder";
import { UIComponentsIntro } from "./ui-components/intro";
import { UIComponentsInstallation } from "./ui-components/installation";
import { UIComponentsButton } from "./ui-components/button";
import { ApexIconsIntro } from "./apex-icons/intro";
import { ApexIconsInstallation } from "./apex-icons/installation";
import { ApexIconsList } from "./apex-icons/list";
import { ApexIconsDevelopers } from "./apex-icons/developers";
import { UIComponentsDevelopers } from "./ui-components/developers";
import { ViewEngineIntro } from "./view-engine/intro";
import { ViewEngineInstallation } from "./view-engine/installation";
import { ViewEngineDevelopers } from "./view-engine/developers";
import { UIComponentsTabs } from "./ui-components/tabs";
import { ThirdPartyIntro } from "./third-party/intro";
import { ThirdPartyDevelopers } from "./third-party/developers";
import { ThirdPartyBull } from "./third-party/bull";
import { ThirdPartyMobaXterm } from "./third-party/mobaxterm";
import { ThirdPartyICDServer } from "./third-party/icdserver";

export type PageName = "apex-icons" | "third-party" | "ui-components" | "view-engine";

export type NestedPages =
  | "apex-icons/installation"
  | "apex-icons/list"
  | "apex-icons/developers"
  | "third-party/bullmq"
  | "third-party/developers"
  | "third-party/icd-server"
  | "third-party/mobaxterm"
  | "ui-components/installation"
  | "ui-components/developers"
  | "ui-components/button"
  | "ui-components/tabs"
  | "view-engine/installation"
  | "view-engine/developers"

export type AllPages = PageName | NestedPages;

type SchemaMap = {
  [key in AllPages]: NodeSchema;
};

type H3Text = { id?: string; text: string };

class Schema {
  private static schemas: SchemaMap = {
    "apex-icons": ApexIconsIntro,
    "apex-icons/installation": ApexIconsInstallation,
    "apex-icons/developers": ApexIconsDevelopers,
    "apex-icons/list": ApexIconsList,
    "third-party": ThirdPartyIntro,
    "third-party/bullmq": ThirdPartyBull,
    "third-party/developers": ThirdPartyDevelopers,
    "third-party/icd-server": ThirdPartyICDServer,
    "third-party/mobaxterm": ThirdPartyMobaXterm,
    "ui-components": UIComponentsIntro,
    "ui-components/installation": UIComponentsInstallation,
    "ui-components/developers": UIComponentsDevelopers,
    "ui-components/button": UIComponentsButton,
    "ui-components/tabs": UIComponentsTabs,
    "view-engine": ViewEngineIntro,
    "view-engine/installation": ViewEngineInstallation,
    "view-engine/developers": ViewEngineDevelopers
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
  static getH3Texts(schema: NodeSchema): H3Text[] {
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
