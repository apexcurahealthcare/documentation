import UIUX from "../../public/assets/ui_ux.jpg";
import VIEWENGINE from "../../public/assets/view_engine.jpg";
import ICONS from "../../public/assets/icons-health.jpg";
import AGENT from "../../public/assets/agent.svg";
import OPRX from "../../public/assets/rx.svg";
import { PageName } from "./schemas";

const IMAGES = {
  user_male: "https://img.freepik.com/free-psd/3d-rendering-teenager-boy-white-t-shirt_1142-53060.jpg?t=st=1738464421~exp=1738468021~hmac=61ccbd07521ae8a79186477cdb69eefe20931046de9cee39fc454e466342d0b8&w=740",
  user_female: "https://img.freepik.com/free-psd/3d-rendering-teenager-girl-hood-isolated-white-background_1142-53817.jpg?t=st=1738466216~exp=1738469816~hmac=e97b72f87296d92f0fe440facafcb8ecc9f38485893d4a546ba0424317aaf726&w=740"
}

export type Developer = {
  shortName: "charan" | "srilekha";
  fullName: string;
  email: string;
  url?: string;
  urlName?: string;
  avatar?: string;
  gender: "male" | "female" | "other";
}

const DEVELOPERS: Developer[] = [
  {
    shortName: "charan",
    fullName: "Charan vinay",
    email: "charanvinay@apexcura.com",
    gender: "male",
    avatar: IMAGES["user_male"]
  },
  {
    shortName: "srilekha",
    fullName: "Srilekha Tirumalasetti",
    email: "srilekha@apexcura.com",
    gender: "female",
    avatar: IMAGES["user_female"]
  }
]

const ICONS_USAGE = [
  {
    heading: "aci",
    description:
      "The base class for all Apexcura Icons.",
  },
  {
    heading: "aci-{icon-name}",
    description:
      'The class name for the specific icon you want to show (eg: <i>aci-add</i> for the add icon).',
  },
  
];

const INTRO_MATTERS = [
  {
    heading: "Consistency Across Projects",
    description:
      "No more reinventing the wheel or inconsistent UIs. Every component follows our design guidelines, ensuring a unified look and feel across all our applications.",
  },
  {
    heading: "Built for Developers, by Developers",
    description:
      "We’ve combined the power of React, TypeScript, AntD, and Tailwind CSS to create a library that’s both powerful and easy to use.",
  },
  {
    heading: "Tailwind CSS for Customization",
    description:
      "Need to tweak a component? Tailwind’s utility-first approach makes it super easy to customize styles without leaving your JSX.",
  },
  {
    heading: "TypeScript for Safety",
    description:
      "Every component is fully typed, so you’ll catch errors early and write cleaner, more maintainable code.",
  },
  {
    heading: "AntD as a Foundation",
    description:
      "We’ve leveraged AntD’s robust components and extended them to fit our specific needs, saving us time and effort.",
  },
  {
    heading: "Documentation You Can Rely On",
    description:
      "Clear examples, detailed API references, and practical guides to help you get up and running quickly.",
  },
];

const PROJECTS = [
  {
    id: 1,
    name: "UI Components",
    route: "/ui-components",
    description:
      "A React Component Library that provides many helpful components to quickly build the web app.",
    img: UIUX,
    git: "https://github.com/ApexCura/ui-components",
    npm: "https://www.npmjs.com/package/@apexcura/ui-components",
    tags: ["UI", "Components", "AntD"],
  },
  {
    id: 2,
    name: "View Engine",
    route: "/view-engine",
    description:
      "An interface that renders components based on the schema received from the other projects",
    img: VIEWENGINE,
    git: "https://github.com/ApexCura/view-engine",
    npm: "https://www.npmjs.com/package/@apexcura/core",
    tags: ["Element Executor", "UI Renderer"],
  },
  {
    id:5,
    name: "Apex Icons",
    route: "/apex-icons",
    description: "Collection of icons including most of hospital themed designed for all apex projects maintaining a common UI and theme",
    img: ICONS,
    git: "https://github.com/ApexCura/icons-package",
    tags: ["Icons", "SVG", "Classnames"],
  },
  {
    id: 3,
    name: "Ai Agent",
    route: "/agent",
    description:
      "Apex Agent is a cutting-edge, AI-powered solution designed to revolutionize hospital management. Seamlessly integrating with your existing hospital management system (HIMS), Apex Agent provides a suite of advanced features to streamline operations, enhance patient engagement, and boost overall efficiency.",
    img: AGENT,
    git: "https://github.com/ApexCura/view-engine",
    tags: ["Calls", "Leads", "Chatbot", "Campaigns"],
  },
  {
    id: 6,
    name: "Ai Chatbot",
    route: "/chat-bot",
    description:
      "Apex Agent is a cutting-edge, AI-powered solution designed to revolutionize hospital management. Seamlessly integrating with your existing hospital management system (HIMS), Apex Agent provides a suite of advanced features to streamline operations, enhance patient engagement, and boost overall efficiency.",
    img: AGENT,
    git: "https://github.com/ApexCura/apexcura-widget-chatbot",
    tags: ["Chatbot"],
  },
  {
    id: 7,
    name: "Appointment Widget",
    route: "/appt-widget",
    description:
      "Apex Agent is a cutting-edge, AI-powered solution designed to revolutionize hospital management. Seamlessly integrating with your existing hospital management system (HIMS), Apex Agent provides a suite of advanced features to streamline operations, enhance patient engagement, and boost overall efficiency.",
    img: AGENT,
    git: "https://github.com/ApexCura/apexcura-widget-op-booking",
    tags: ["Appointments"],
  },
  {
    id: 8,
    name: "Apex Website",
    route: "/apex-web",
    description:
      "Apex Agent is a cutting-edge, AI-powered solution designed to revolutionize hospital management. Seamlessly integrating with your existing hospital management system (HIMS), Apex Agent provides a suite of advanced features to streamline operations, enhance patient engagement, and boost overall efficiency.",
    img: AGENT,
    git: "https://github.com/ApexCura/apexcura-nextjs-website",
    tags: ["Website"],
  },
  {
    id: 4,
    name: "OP RX",
    route: "/op-rx",
    description: "A user-friendly outpatient prescription app that enhances patient care and streamlines pharmacy operations. Designed to seamlessly integrate into your hospital’s workflow, Apex Rx ensures accuracy, efficiency, and convenience at every step.",
    img: OPRX,
    git: "https://github.com/ApexCura/view-engine",
    tags: ["OP Prescription", "Queue monitoring"],
  }
];

export interface ISideMenuItem {
  route: string;
  title: string;
}

export interface ISideMenuSection {
  key: string;
  title: string;
  items: ISideMenuItem[];
}

export type ISideMenu = {
  [K in PageName]: ISideMenuSection[];
};

const SIDEMENU: ISideMenu = {
  "apex-icons": [
    {
      key: "getting-started",
      title: "Getting Started",
      items: [
        {
          route: "/",
          title: "Introduction",
        },
        {
          route: "/installation",
          title: "Installation",
        },
        {
          route: "/list",
          title: "Icons",
        },
        {
          route: "/developers",
          title: "Developers",
        },
      ],
    },
  ],
  "ui-components": [
    {
      key: "getting-started",
      title: "Getting Started",
      items: [
        {
          route: "/",
          title: "Introduction",
        },
        {
          route: "/installation",
          title: "Installation",
        },
        {
          route: "/developers",
          title: "Developers",
        },
        {
          route: "/developer-access",
          title: "Developer Access",
        },
      ],
    },
    {
      key: "components",
      title: "Components",
      items: [
        {
          route: "/button",
          title: "Button",
        }
      ],
    },
  ],
  "view-engine": [
    {
      key: "getting-started",
      title: "Getting Started",
      items: [
        {
          route: "/",
          title: "Introduction",
        },
        {
          route: "/developers",
          title: "Developers",
        },
        {
          route: "/installation",
          title: "Installation",
        },
      ],
    },
  ],
};

export const Constants = { DEVELOPERS, ICONS_USAGE, INTRO_MATTERS, PROJECTS, SIDEMENU };
