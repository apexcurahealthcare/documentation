import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";
import { Utils } from "../..";
import DOCKERPS from "../../../../public/assets/docker-ps.jpg";
import ICD from "../../../../public/assets/icd.jpg";
import { Developer } from "../../constants";

export const ThirdPartyICDServer: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "ICD API Setup with Docker 🐳",
    },
    {
      type: "image",
      src: ICD.src,
      alt: "ICD Image",
      className: "h-auto",
      isBlurred: false,
      isApplyMotion: true,
    },
    {
      type: "p",
      text: "This guide will walk you through the process of installing Docker, pulling the ICD API Docker image, and running the container. By the end of this guide, you’ll have the ICD API up and running on your machine.",
    },
    {
      type: "h3",
      id: "introduction",
      text: "Introduction",
    },
    {
      type: "p",
      text: "The ICD API is a containerized application that can be easily deployed using Docker. Docker simplifies the process of setting up and running applications by packaging them into containers. This guide assumes you’re using a Linux-based system (e.g., Ubuntu).",
    },
    {
      type: "h3",
      id: "installation",
      text: "Install Docker",
    },
    {
      type: "alert",
      variant: "side-border",
      color: "warning",
      text: "It would be better to check whether docker is already available in the server or not before installing it",
    },
    {
      type: "h3",
      id: "verify-docker",
      text: "Verify Docker Installation",
    },
    {
      type: "p",
      text: "After installing Docker, verify that it’s installed correctly by checking the version:",
    },
    {
      type: "code",
      code: "docker --version",
    },
    {
      type: "p",
      text: "You should see output similar to:",
    },
    {
      type: "code",
      code: "Docker version 27.4.1, build b9d17ea",
    },
    {
      type: "p",
      text: "If Docker is not installed, follow the installation instructions for your specific operating system. Once Docker is installed, verify its version using the command above.",
    },
    {
      type: "code",
      code: "sudo apt install -y docker.io",
    },
    
    
    {
      type: "h3",
      id: "pull-image",
      text: "Pull the ICD API Docker Image",
    },
    {
      type: "p",
      text: "Pull the ICD API Docker image from the Docker Hub registry:",
    },
    {
      type: "code",
      code: "sudo docker pull whoicd/icd-api",
    },
    {
      type: "h3",
      id: "run-container",
      text: "Run the ICD API Container",
    },
    {
      type: "p",
      text: "Run the ICD API container with the following command:",
    },
    {
      type: "code",
      code: "sudo docker run -p 3123:80 -e acceptLicense=true -e saveAnalytics=true whoicd/icd-api",
    },
    {
      type: "h3",
      id: "verify-container",
      text: "Verify the Running Container",
    },
    {
      type: "p",
      text: "To verify that the ICD API container is running, use the following command:",
    },
    {
      type: "code",
      code: "sudo docker ps",
    },
    {
      type: "p",
      text: "You should see output similar to:",
    },
    {
      type: "image",
      src: DOCKERPS?.src,
      alt: `Docker PS Image`,
      className: "h-auto",
      isBlurred: false,
      isApplyMotion: true,
    },
    {
      type: "p",
      text: (
        <>
          You’ve successfully installed Docker, pulled the ICD API Docker image,
          and run the container. The ICD API should now be accessible at
          <Code>http://localhost:3123</Code>. For further assistance, refer to
          the{" "}
          <a
            href="https://docs.docker.com/"
            target="_blank"
            className="text-primary border-b border-primary border-dotted font-medium"
          >
            Docker documentation
          </a>{" "}
          or contact
        </>
      ),
    },
    {
      type: "div",
      className: "grid grid-cols-2 sm:grid-cols-1 sm:gap-2 gap-4",
      children: Utils.getDeveloperData(["teja", "charan"]).map(
        (developer: Developer) => {
          return {
            type: "user",
            name: developer?.fullName,
            url: developer?.email,
            avatar: developer?.avatar,
          };
        }
      ),
    },
  ],
};
