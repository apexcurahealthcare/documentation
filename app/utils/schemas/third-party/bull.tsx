import { NodeSchema } from "@/app/lib/ViewBuilder";
import BULLUML from "@/public/assets/bull-uml.png";
import { Code } from "@heroui/react";
import BULLMQ from "../../../../public/assets/bullmq.png";
import DOCKERREDIS from "../../../../public/assets/docker-redis.jpg";
import REDISLINUX from "../../../../public/assets/redis-server-status.jpg";
import { Constants } from "../../constants";
import CustomLink from "@/app/lib/CustomLink";
const REDIS_SETUP = [
  {
    id: 1,
    heading: "Install Docker",
    list: [
      {
        heading: "Download Docker Desktop",
        description: (
          <>
            Go to the{" "}
            <CustomLink
              href="https://www.docker.com/products/docker-desktop/"
              text="Docker website"
            />{" "}
            and choose free plan.
          </>
        ),
      },
      {
        heading: "Install Docker Desktop",
        description: "Run the installer and follow the on-screen instructions",
      },
      {
        heading: "Start Docker Desktop",
        description:
          "Launch Docker Desktop from the Start menu and Ensure Docker is running (you’ll see the Docker whale icon in the system tray)",
      },
    ],
  },
  {
    id: 2,
    heading: "Pull the Redis Docker Image",
    list: [
      {
        description:
          "Open a terminal (Command Prompt, PowerShell, or Windows Terminal)",
      },
      {
        description: "Pull the official Redis image from Docker Hub",
      },
      {
        code: "docker pull redis",
        type: "p",
      },
      {
        description: "This downloads the latest Redis image to your machine.",
      },
    ],
  },
  {
    id: 3,
    heading: "Run Redis in a Docker Container",
    list: [
      {
        description: "Start a Redis container using the following command",
      },
      {
        code: "docker run --name mine-redis -p 6379:6379 redis",
        type: "p",
      },
      {
        description: "Verify the container is running:",
      },
      {
        code: "docker ps",
        type: "p",
      },
    ],
  },
];
const REDIS_SETUP_STEPS = REDIS_SETUP.reduce((acc: any, step: any) => {
  acc = [
    ...acc,
    {
      type: "h4",
      text: `Step ${step.id}:  ${step.heading}`,
    },
    {
      type: "ol",
      children: step.list.map((matter: any) => ({
        type: matter?.type || "li",
        isApplyMotion: true,
        text: (
          <>
            {matter?.heading && (
              <>
                <span className="font-semibold">{matter.heading}</span>:{" "}
              </>
            )}
            {matter?.description}
          </>
        ),
        code: matter?.code,
        className: matter?.className,
      })),
    },
  ];
  return acc;
}, []);

const KEY_FEATURES = [
  {
    description: (
      <>
        Fetches data for PDF generation based on the frequency (
        <Code>daily</Code>, <Code>weekly</Code>, <Code>monthly</Code>).{" "}
      </>
    ),
  },
  {
    description: (
      <>
        Generates PDFs using the <Code>PDF.generate</Code> utility.
      </>
    ),
  },
  {
    description: (
      <>
        Adds jobs to the <Code>whatsappQueue</Code> and <Code>emailQueue</Code>{" "}
        for sending the PDFs.{" "}
      </>
    ),
  },
];

const renderList = (list: any) =>
  list.map((matter: any) => ({
    type: "li",
    isApplyMotion: true,
    text: (
      <>
        {matter.heading && (
          <>
            <span className="font-semibold">{matter.heading}</span>:{" "}
          </>
        )}
        {matter.description}
      </>
    ),
  }));
export const ThirdPartyBull: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "BullMQ",
    },
    {
      type: "image",
      src: BULLMQ?.src,
      alt: `BullMQ Image`,
      className: "sm:h-[200px]",
      isBlurred: false,
      isApplyMotion: true,
    },
    {
      id: "introduction",
      type: "h3",
      text: "Introduction",
    },
    {
      type: "p",
      text: (
        <>
          <CustomLink href="https://docs.bullmq.io/" text="BullMQ" /> is a
          powerful and flexible queue library for Node.js, built on top of
          Redis. It’s designed to handle background jobs, task scheduling, and
          distributed processing with ease. Whether you're processing thousands
          of jobs or just a few, BullMQ ensures reliability and scalability.
        </>
      ),
    },
    {
      type: "h3",
      id: "install-the-package",
      text: "Installation",
    },
    {
      type: "snippet",
      text: `npm install bullmq ioredis`,
    },
    {
      type: "h3",
      id: "redis-setup",
      text: "Redis Setup",
    },
    ...REDIS_SETUP_STEPS,
    {
      type: "p",
      text: "If everything goes well, you will find redis container like this with name mine-redis",
    },
    {
      type: "image",
      src: DOCKERREDIS?.src,
      alt: `Docker Redis Image`,
      className: "h-auto sm:h-[200px]",
      isBlurred: false,
      isApplyMotion: true,
    },
    {
      type: "p",
      text: "Next, click on start icon in actions column. Now redis is running in your system.",
    },
    {
      type: "h3",
      id: "redis-linux",
      text: "Redis in Linux",
    },
    {
      type: "alert",
      variant: "side-border",
      color: "warning",
      text: "It would be better to check whether redis is already available in the server or not before installing it",
    },
    {
      type: "p",
      text: "If you are using Redis in Linux, you might need to configure Redis to listen on a specific IP address. Here's how to do it:",
    },
    {
      type: "ol",
      children: Constants.REDIS_LINUX_SETUP.map((matter: any) => ({
        type: matter?.type || "li",
        isApplyMotion: true,
        text: (
          <>
            {matter?.heading && (
              <>
                <span className="font-semibold">{matter.heading}</span>:{" "}
              </>
            )}
            {matter?.description}
          </>
        ),
        code: matter?.code,
        className: matter?.className,
      })),
    },
    {
      type: "p",
      text: "If everything is good, then you can find like this",
    },
    {
      type: "image",
      src: REDISLINUX?.src,
      alt: `Redis status Image`,
      className: "h-auto",
      isBlurred: false,
      isApplyMotion: true,
    },
    {
      type: "p",
      text: "Next we will create a queue to add scheduled jobs into that.",
    },
    {
      type: "h3",
      id: "queue-creation",
      text: "Queue Creation",
    },
    {
      type: "p",
      text: "For easy understanding, we will take agent project's existing queue setup. Go to bull/dashboard.js and you will find some code like this",
    },
    {
      type: "code",
      code: `import { ENVIRONMENT } from "../api/constants/app-costants.js";
if (ENVIRONMENT === "prod") {
  Promise.all([
    import("./pdfWorker.js"),
    import("./whatsappWorker.js"),
    import("./emailWorker.js"),
  ])
    .then(() => console.log("All workers loaded in production environment."))
    .catch((err) => console.error("Error loading one or more workers:", err));
} else {
  console.log("Workers not loaded in non-production environment.");
}`,
    },
    {
      type: "p",
      text: "In this file, we are conditionally importing workers based on the ENVIRONMENT because there is no need to run the workers in development or local environment unless they are intended to run in all environments.",
    },
    {
      type: "alert",
      color: "secondary",
      text: "If we dont check the environment, jobs like sending reports to whatsapp or email will be created in development environment also which will send duplicate reports if recipients are same in both live and development database.",
    },
    {
      type: "h3",
      id: "reports-intro",
      text: "Reports queue intro",
    },
    {
      type: "p",
      text: "The queue management system is built to handle asynchronous tasks efficiently. It uses BullMQ for job queuing and processing, and Redis for storing job data. The system consists of three main queues:",
    },
    {
      type: "ul",
      children: renderList(Constants.EXISTING_QUEUES),
    },
    {
      type: "p",
      text: "Each queue has a dedicated worker that processes jobs and handles errors gracefully.",
    },
    {
      type: "h3",
      id: "reports-redis",
      text: "Reports Config",
    },
    {
      type: "p",
      text: (
        <>
          Redis is used as the backend for BullMQ. The Redis connection is
          configured in the <Code>bull/queue.js</Code> file.
        </>
      ),
    },
    {
      type: "code",
      code: `import { Queue } from "bullmq";
import Redis from "ioredis";

export const redis = new Redis({
  host: "localhost", // Redis server host
  port: 6379,        // Redis server port
  retryStrategy: (times) => {
    if (times >= 5) {
      console.error("Max reconnection attempts reached. Giving up.");
      return null;
    }
    const delay = Math.min(times * 100, 2000);
    return delay;
  },
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
});

redis.on("connect", () => {
  console.log("Connected to Redis!");
});

redis.on("error", (err) => {
  console.error("Redis error:", err.message);
});`,
    },
    {
      type: "h4",
      text: "Key Configuration Options",
    },
    {
      type: "ul",
      children: renderList(Constants.EXISTING_QUEUES_KEY_CONFIG_OPTIONS),
    },
    {
      type: "h3",
      id: "queue-setup",
      text: "Queue Setup",
    },
    {
      type: "p",
      text: (
        <>
          Queues are created using the <Code>createQueueWithListeners</Code>{" "}
          function in <Code>queue.js</Code> . This function sets up event
          listeners for each queue.
        </>
      ),
    },
    {
      type: "code",
      code: `const createQueueWithListeners = (name) => {
  const queue = new Queue(name, { connection: redis });

  queue.on("ready", () => {
    console.log(\`\${name} is connected to Redis.\`);
  });

  queue.on("error", (err) => {
    console.error(\`Error in \${name}:\`, err.message);
  });

  queue.on("closed", () => {
    console.warn(\`\${name} connection to Redis has been closed.\`);
  });

  return queue;
};

export const pdfQueue = createQueueWithListeners("generatePdf");
export const whatsappQueue = createQueueWithListeners("sendWhatsApp");
export const emailQueue = createQueueWithListeners("sendEmail");
`,
    },
    {
      type: "h4",
      text: "Available Queues",
    },
    {
      type: "ul",
      children: renderList(Constants.EXISTING_QUEUES_AVAILABLE_QUEUES),
    },
    {
      type: "h3",
      id: "workers",
      text: "Workers",
    },
    {
      type: "p",
      text: "Workers are responsible for processing jobs in the queues. Each worker listens to a specific queue and performs tasks asynchronously.",
    },
    {
      type: "h4",
      text: (
        <>
          PDF Worker <Code>(pdfworker.js)</Code>
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          The PDF Worker generates PDFs based on the job data and adds jobs to
          the <Code>whatsappQueue</Code> and <Code>emailQueue</Code> for further
          processing.
        </>
      ),
    },
    {
      type: "ul",
      children: renderList(KEY_FEATURES),
    },
    {
      type: "code",
      code: `const pdfWorker = new Worker(
  "generatePdf",
  async (job) => {
    // Job processing logic
  },
  {
    connection: redis.duplicate(),
  }
);

pdfWorker.on("completed", (job) => {
  console.log(\`✔️ PDF created successfully for \${job?.data?.org_id}\`);
});

pdfWorker.on("failed", (job, err) => {
  console.error(\`❌ Error creating PDF for \${job?.data?.org_id}: \${err.message}\`);
});`,
    },
    {
      type: "p",
      text: "Similarly, the Whatsapp and Email Workers are implemented in the respective worker files.",
    },
    {
      type: "h3",
      id: "uml",
      text: "Flow Diagram",
    },
    {
      type: "image",
      src: BULLUML?.src || "",
      alt: `Bull UML Image`,
      className: "h-auto",
      isBlurred: true,
      isApplyMotion: true,
    },
  ],
};
