"use client";
import { Button, Card, CardBody, CardHeader, Chip, Image } from "@heroui/react";
import GITHUB from "../public/assets/github.svg";
import NPM from "../public/assets/npm.svg";
import { Constants } from "./utils/constants";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
export default function Home() {
  const router = useRouter();
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="flex flex-col gap-6 p-4">
      {/* <h1 className="text-3xl font-semibold text-center text-gray-700">
        <span className="text-primary">ApexCura</span> Projects
      </h1> */}
      <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4">
        {Constants.PROJECTS.map((project) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <Card
                shadow="none"
                className="border hover:border-none p-2 cursor-pointer hover:shadow-projectCard hover:scale-105 transition-all ease-in-out duration-300"
                radius="md"
              >
                <CardHeader className="w-full h-[120px] overflow-hidden rounded-md p-0">
                  <Image
                    src={project.img.src}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </CardHeader>
                <CardBody
                  className="p-1 flex flex-col gap-2 justify-between group"
                  onClick={() => {
                    router.push(project.route);
                  }}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold capitalize group-hover:underline">
                      {project.name}
                    </h2>
                    <div className="flex flex-row-reverse items-center">
                      <Button
                        variant="light"
                        isIconOnly
                        size="sm"
                        className="d-center p-2"
                        onPress={() => openInNewTab(project?.git || "")}
                      >
                        <Image
                          src={GITHUB}
                          alt="GitHub"
                          className="w-full h-full object-contain"
                        />
                      </Button>
                      <Button
                        isIconOnly
                        variant="light"
                        size="sm"
                        className="d-center p-1"
                        onPress={() => openInNewTab(project?.npm || "")}
                      >
                        <Image
                          src={NPM}
                          alt="NPM"
                          className="w-full h-full object-contain"
                        />
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-2 flex-1">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <Chip key={tag} size="sm" className="bg-gray-100 text-xs">
                        <span className="font-medium text-gray-800">{tag}</span>
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
