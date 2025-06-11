import AGENT from "../../public/assets/agent.svg";
import CICD from "../../public/assets/cicd.png";
import ICONS from "../../public/assets/icons-health.jpg";
import OPRX from "../../public/assets/rx.svg";
import THIRDPARTY from "../../public/assets/third_party.jpg";
import UIBUILDER from "../../public/assets/ui_builder.png";
import UIUX from "../../public/assets/ui_ux.jpg";
import VIEWENGINE from "../../public/assets/view_engine.jpg";
import { PageName } from "./schemas";

const IMAGES = {
  user_male:
    "https://img.freepik.com/free-psd/3d-rendering-teenager-boy-white-t-shirt_1142-53060.jpg?t=st=1738464421~exp=1738468021~hmac=61ccbd07521ae8a79186477cdb69eefe20931046de9cee39fc454e466342d0b8&w=740",
  user_female:
    "https://img.freepik.com/free-psd/3d-rendering-teenager-girl-hood-isolated-white-background_1142-53817.jpg?t=st=1738466216~exp=1738469816~hmac=e97b72f87296d92f0fe440facafcb8ecc9f38485893d4a546ba0424317aaf726&w=740",
};

export type Developer = {
  shortName: "charan" | "dinesh" | "lakshmi" | "swoyam" | "srilekha" | "teja";
  fullName: string;
  email: string;
  url?: string;
  urlName?: string;
  avatar?: string;
  gender: "male" | "female" | "other";
};

const DEVELOPERS: Developer[] = [
  {
    shortName: "charan",
    fullName: "Charan vinay",
    email: "charanvinay@apexcura.com",
    gender: "male",
    avatar: IMAGES["user_male"],
  },
  {
    shortName: "dinesh",
    fullName: "Dinesh",
    email: "dineshv@apexcura.com",
    gender: "male",
    avatar: IMAGES["user_male"],
  },
  {
    shortName: "srilekha",
    fullName: "Srilekha Tirumalasetti",
    email: "srilekha@apexcura.com",
    gender: "female",
    avatar: IMAGES["user_female"],
  },
  {
    shortName: "swoyam",
    fullName: "Swoyam Pant",
    email: "swoyampant@apexcura.com",
    gender: "male",
    avatar: IMAGES["user_male"],
  },
  {
    shortName: "teja",
    fullName: "Teja Anil Kumar",
    email: "anilteja@apexcura.com",
    gender: "male",
    avatar: IMAGES["user_male"],
  },
  {
    shortName: "lakshmi",
    fullName: "Lakshmi Lakku",
    email: "lakshmilakku@apexcura.com",
    gender: "female",
    avatar: IMAGES["user_female"],
  },
];

const ICONS_USAGE = [
  {
    heading: "aci",
    description: "The base class for all Apexcura Icons.",
  },
  {
    heading: "aci-{icon-name}",
    description:
      "The class name for the specific icon you want to show (eg: <i>aci-add</i> for the add icon).",
  },
];

const DEPLOYMENT_AGENT_DEV: any = {
  CICD: [
    {
      description:
        "Open agent repository and create a PR from any branch to the master branch",
    },
    {
      description:
        "Then rise a pr to development branch from the master branch",
    },
    {
      description:
        "Once the pr is merged, then it start a new workflow which you can see in Actions tab, Github.",
    },
    {
      description:
        "This will create a new build and deploy it to the dev server.",
    },
    {
      description:
        "After 4 to 5 minutes, the build will be deployed and the workflow will turn from yellow to green",
    },
  ],
  manual: [
    {
      description: "First check the branch you are in",
    },
    {
      type: "p",
      code: "git branch",
    },
    {
      description:
        "If it shows development, then you are good to go. Else checkout",
    },
    {
      type: "p",
      code: "git checkout development",
    },
    { description: "Next pull code from development branch" },
    {
      type: "p",
      code: "git pull origin development",
    },
    {
      description: "Next, install the latest version of the core package",
    },
    {
      type: "p",
      code: "npm uninstall @apexcura/core \nnpm install @apexcura/core",
    },
    {
      description: "This will install latest version of the core package",
    },
    {
      description: "Then hit the following command to start the build process",
    },
    { type: "p", code: "npm run build:dev" },
    {
      description:
        "Once build is done, then run the following command to replace the build folder in the actual domain mapped project",
    },
    {
      type: "p",
      code: 'sudo cp -r "/home/ubuntu/apex/UI/PRODUCT_ADMIN/build/" "/home/ubuntu/apex/UI/BUILDS/DEV_PRODUCT_ADMIN/"',
    },
    {
      description:
        "This will copy the build folder to the dev product admin folder",
    },
    {
      description:
        "Then run the following command to know the process id of this project",
    },
    { type: "p", code: "pm2 list" },
    {
      description:
        "Among all the processes, find the process id(4) of the dev product admin project",
    },
    { type: "p", code: "pm2 restart 4" },
  ],
};
const DEPLOYMENT_AGENT_PROD: any = {
  CICD: [
    {
      description:
        "Open agent repository and create a PR from development branch to prod branch",
    },
    {
      description:
        "Once the pr is merged, then it start a new workflow which you can see in Actions tab, Github.",
    },
    {
      description:
        "This will create a new build and deploy it to the production server.",
    },
    {
      description:
        "After 4 to 5 minutes, the build will be deployed and the workflow will turn from yellow to green",
    },
  ],
  manual: [
    {
      description: "First check the branch you are in",
    },
    {
      type: "p",
      code: "git branch",
    },
    {
      description: "If it shows prod, then you are good to go. Else checkout",
    },
    {
      type: "p",
      code: "git checkout prod",
    },
    { description: "Next pull code from prod branch" },
    {
      type: "p",
      code: "git pull origin prod",
    },
    {
      description: "Next, install the latest version of the core package",
    },
    {
      type: "p",
      code: "npm uninstall @apexcura/core \nnpm install @apexcura/core",
    },
    {
      description: "This will install latest version of the core package",
    },
    {
      description: "Then hit the following command to start the build process",
    },
    { type: "p", code: "npm run build:prod" },
    {
      description:
        "Once build is done, then run the following command to replace the build folder in the actual domain mapped project",
    },
    {
      type: "p",
      code: 'sudo cp -r "/home/ubuntu/apex/UI/PRODUCT_ADMIN/build/" "/home/ubuntu/apex/UI/BUILDS/LIVE_PRODUCT_ADMIN/"',
    },
    {
      description:
        "This will copy the build folder to the production product admin folder",
    },
    {
      description:
        "Then run the following command to know the process id of this project",
    },
    { type: "p", code: "pm2 list" },
    {
      description:
        "Among all the processes, find the process id(3) of the prod product admin project",
    },
    { type: "p", code: "pm2 restart 3" },
  ],
};

const EXISTING_QUEUES = [
  {
    heading: "PDF Queue",
    description: "Handles PDF generation tasks.",
  },
  {
    heading: "Email Queue",
    description: "Handles email sending tasks.",
  },
  {
    heading: "WhatsApp Queue",
    description: "Handles WhatsApp message sending tasks.",
  },
];

const EXISTING_QUEUES_KEY_CONFIG_OPTIONS = [
  {
    heading: "host",
    description: "The Redis server host (default: localhost)",
  },
  {
    heading: "port",
    description: "The Redis server port (default: 6379).",
  },
  {
    heading: "retryStrategy",
    description: "Custom retry logic for reconnecting to Redis.",
  },
  {
    heading: "maxRetriesPerRequest",
    description: "Set to null to disable retry limits.",
  },
  {
    heading: "enableReadyCheck",
    description: "Disabled to avoid unnecessary checks.",
  },
];
const EXISTING_QUEUES_AVAILABLE_QUEUES = [
  {
    heading: "pdfQueue",
    description: "Handles PDF generation jobs.",
  },
  {
    heading: "whatsappQueue",
    description: "Handles WhatsApp message sending jobs.",
  },
  {
    heading: "emailQueue",
    description: "Handles email sending jobs.",
  },
];
const REDIS_LINUX_SETUP = [
  {
    description: "Install Redis server",
  },
  {
    type: "p",
    code: "sudo apt install redis-server",
  },
  {
    description: "Enable Redis to start on boot",
  },
  { type: "p", code: "sudo systemctl enable redis-server" },
  {
    description: "Start Redis server",
  },
  { type: "p", code: "sudo systemctl start redis-server" },
  {
    description: "Stop redis server",
  },
  { type: "p", code: "sudo systemctl stop redis-server" },
  {
    description: "Verify Redis is running",
  },
  { type: "p", code: "sudo systemctl status redis-server" },
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
const WHEN_TO_USE = [
  {
    description:
      "Building healthcare dashboards, patient portals, or clinical applications",
  },
  {
    description: "Rapid prototyping of complex UIs",
  },
  {
    description: "Creating consistent experiences across multiple applications",
  },
  {
    description: "Teams with varying levels of React expertise",
  },
];
const NPM_LINK_WATCH = [
  {
    description:
      "Watches and compiles TypeScript files (tsc -w)",
  },
  {
    description: "Rebuilds Tailwind CSS on changes",
  },
];
const UI_BUILDER_PRE_REQUISITES = [
  {
    description: "React 18.x",
  },
  {
    description: "Node.js 14.x or higher",
  },
  {
    description: "npm 7.x or higher",
  },
];
const UI_BUILDER_INSTALLATION = [
  {
    description: "Install the ApexCura UI Builder package:",
  },
  {
    type: "p",
    code: "npm install @apexcura/ui-builder",
  },
  {
    description: "Install peer dependencies:",
  },
  {
    type: "p",
    code: "npm install @reduxjs/toolkit react-redux redux-persist",
  },
  { description: "Add required CSS imports to your main application file:" },
  {
    type: "p",
    code: "import '@apexcura/ui-builder/dist/styles/index.css';",
  },
];
const UI_BUILDER_WHAT_IT_DOES = [
  {
    description: "Parses schema definitions",
  },
  {
    description: "Maps schema elements to React components",
  },
  {
    description: "Handles component state and data binding",
  },
  {
    description: "Processes events and actions",
  },
  {
    description: "Manages component lifecycle",
  }
];
const UI_BUILDER_SCHEMA_DRIVEN = [
  { description: "Component types" },
  { description: "Component properties" },
  { description: "Layout structure" },
  { description: "Event handlers" },
  { description: "Data bindings" },
];
const UI_BUILDER_STATE_MANAGEMENT = [
  {
    "heading": "Automatic State Binding",
    "description": "Components automatically connect to Redux store"
  },
  {
    "heading": "Action Handlers",
    "description": "Pre-defined handlers for common state operations"
  },
  {
    "heading": "Persistence",
    "description": "Optional state persistence through redux-persist"
  },
  {
    "heading": "Dynamic Paths",
    "description": "State values are referenced through path strings"
  }
];
const NPM_LINK_STEPS = [
  {
    description: "Handle React Instance Conflict",
  },
  {
    type: "p",
    code: `# In ui-builder project:
npm link ../path/to/parent-react-project/node_modules/react`,
  },
  { description: "Link UI-Builder to Parent Project" },
  {
    type: "p",
    code: `cd path/to/ui-builder-package
  npm link`,
  },
  {
    description: "Generate symlink for UI-Builder Package",
  },
  {
    type: "p",
    code: `# In your parent project:
npm link @apexcura/ui-builder`,
  },
];
const MOBA_REMOTE_SERVER_STEPS = [
  {
    description: "Click Session in the top-left corner.",
  },
  {
    description: "Select SSH from the session settings.",
  },
  {
    heading: "Remote host",
    description: "IP address or hostname of the server.",
  },
  {
    heading: "Username",
    description: "Your SSH username.",
  },
  {
    heading: "Port",
    description: "SSH port (default: 22)",
  },
  {
    heading: "Advanced SSH Settings",
    description: "Click on Use private key Checkbox and upload the .pem file",
  },
  {
    description: "Click OK to save the session.",
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
    id: 11,
    name: "UI Builder",
    route: "/ui-builder",
    description:
      "An interface that renders components based on the schema received from the other projects",
    img: UIBUILDER,
    git: "https://github.com/ApexCura/apexcura-ui-builder",
    npm: "https://www.npmjs.com/package/@apexcura/ui-builder",
    tags: ["UI Builder", "Schema Driven", "Handlers"],
  },
  {
    id: 3,
    name: "Deployment (Manual & CI/CD)",
    route: "/deployment",
    description:
      "This will explain how to deploy the projects in production mannually and using CI/CD",
    img: CICD,
    tags: ["Build", "CI/CD", "Prod", "Dev"],
  },
  {
    id: 4,
    name: "Third Party Configs",
    route: "/third-party",
    description:
      "Detailed explanation of how third party packages are configured in all our projects",
    img: THIRDPARTY,
    tags: ["Packages", "Bull", "Redis"],
  },
  {
    id: 5,
    name: "Apex Icons",
    route: "/apex-icons",
    description:
      "Collection of icons including most of hospital themed designed for all apex projects maintaining a common UI and theme",
    img: ICONS,
    git: "https://github.com/ApexCura/icons-package",
    tags: ["Icons", "SVG", "Classnames"],
  },
  {
    id: 6,
    name: "Ai Agent",
    route: "/agent",
    description:
      "Apex Agent is a cutting-edge, AI-powered solution designed to revolutionize hospital management. Seamlessly integrating with your existing hospital management system (HIMS), Apex Agent provides a suite of advanced features to streamline operations, enhance patient engagement, and boost overall efficiency.",
    img: AGENT,
    git: "https://github.com/ApexCura/apexcura-agent-frontend",
    tags: ["Calls", "Leads", "Chatbot", "Campaigns"],
  },
  {
    id: 7,
    name: "Ai Chatbot",
    route: "/chat-bot",
    description:
      "Apex Agent is a cutting-edge, AI-powered solution designed to revolutionize hospital management. Seamlessly integrating with your existing hospital management system (HIMS), Apex Agent provides a suite of advanced features to streamline operations, enhance patient engagement, and boost overall efficiency.",
    img: AGENT,
    git: "https://github.com/ApexCura/apexcura-widget-chatbot",
    tags: ["Chatbot"],
  },
  {
    id: 8,
    name: "Appointment Widget",
    route: "/appt-widget",
    description:
      "Apex Agent is a cutting-edge, AI-powered solution designed to revolutionize hospital management. Seamlessly integrating with your existing hospital management system (HIMS), Apex Agent provides a suite of advanced features to streamline operations, enhance patient engagement, and boost overall efficiency.",
    img: AGENT,
    git: "https://github.com/ApexCura/apexcura-widget-op-booking",
    tags: ["Appointments"],
  },
  {
    id: 9,
    name: "Apex Website",
    route: "/apex-web",
    description:
      "Apex Agent is a cutting-edge, AI-powered solution designed to revolutionize hospital management. Seamlessly integrating with your existing hospital management system (HIMS), Apex Agent provides a suite of advanced features to streamline operations, enhance patient engagement, and boost overall efficiency.",
    img: AGENT,
    git: "https://github.com/ApexCura/apexcura-nextjs-website",
    tags: ["Website"],
  },
  {
    id: 10,
    name: "OP RX",
    route: "/op-rx",
    description:
      "A user-friendly outpatient prescription app that enhances patient care and streamlines pharmacy operations. Designed to seamlessly integrate into your hospital’s workflow, Apex Rx ensures accuracy, efficiency, and convenience at every step.",
    img: OPRX,
    git: "https://github.com/ApexCura/view-engine",
    tags: ["OP Prescription", "Queue monitoring"],
  },
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
  deployment: [
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
      ],
    },
    {
      key: "frontend",
      title: "Frontend",
      items: [
        {
          route: "/agent-dev",
          title: "Agent Dev",
        },
        {
          route: "/agent-prod",
          title: "Agent Prod",
        },
      ],
    },
  ],
  "third-party": [
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
      ],
    },
    {
      key: "configs",
      title: "Configs",
      items: [
        {
          route: "/bullmq",
          title: "BullMQ",
        },
        {
          route: "/icd-server",
          title: "ICD Server",
        },
        {
          route: "/mobaxterm",
          title: "MobaXterm",
        },
      ],
    },
  ],
  "ui-builder": [
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
      ],
    },
    {
      key: "developer-guide",
      title: "Developer Guide",
      items: [
        {
          route: "/contribute",
          title: "Contribute",
        },
        {
          route: "/linking",
          title: "Npm Link",
        },
      ],
    },
    {
      key: "core-modules",
      title: "Core Modules",
      items: [
        {
          route: "/ui-builder",
          title: "UI Builder",
        },
        {
          route: "/state-management",
          title: "State Management",
        },
        {
          route: "/life-cycle-methods",
          title: "Life Cycle Methods",
        },
        {
          route: "/handlers",
          title: "Handlers",
        },
        {
          route: "/global-loading",
          title: "Global Loading",
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
        },
        {
          route: "/card",
          title: "Card",
        },
        {
          route: "/chip",
          title: "Chip",
        },
        {
          route: "/collection",
          title: "Collection",
        },
        {
          route: "/gradient-card-group",
          title: "Gradient Card Group",
        },
        {
          route: "/input-text",
          title: "Text",
        },
        {
          route: "/pagination",
          title: "Pagination",
        },
        {
          route: "/single-select",
          title: "Select",
        },
        {
          route: "/radio",
          title: "Radio",
        },
        {
          route: "/tabs",
          title: "Tabs",
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
          route: "/contribute",
          title: "Contribute",
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
        },
        {
          route: "/gradient-card-group",
          title: "Gradient Card Group",
        },
        {
          route: "/input-text",
          title: "Text",
        },
        {
          route: "/single-select",
          title: "Select",
        },
        {
          route: "/radio",
          title: "Radio",
        },
        {
          route: "/tabs",
          title: "Tabs",
        },
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

export const Constants = {
  DEVELOPERS,
  EXISTING_QUEUES,
  EXISTING_QUEUES_KEY_CONFIG_OPTIONS,
  EXISTING_QUEUES_AVAILABLE_QUEUES,
  ICONS_USAGE,
  INTRO_MATTERS,
  MOBA_REMOTE_SERVER_STEPS,
  PROJECTS,
  REDIS_LINUX_SETUP,
  SIDEMENU,
  DEPLOYMENT_AGENT_DEV,
  DEPLOYMENT_AGENT_PROD,
  WHEN_TO_USE,
  UI_BUILDER_PRE_REQUISITES,
  UI_BUILDER_INSTALLATION,
  NPM_LINK_STEPS,
  NPM_LINK_WATCH,
  UI_BUILDER_WHAT_IT_DOES,
  UI_BUILDER_SCHEMA_DRIVEN,
  UI_BUILDER_STATE_MANAGEMENT
};
