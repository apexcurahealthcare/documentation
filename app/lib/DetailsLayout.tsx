"use client";
import Sidebar from "../lib/Sidebar";
import OnThisPage from "../lib/OnThisPage";
import { ReactNode } from "react";
import { PageName } from "../utils/schemas";

interface ClientLayoutProps {
  baseRoute: PageName;
  slug: string[];
  children: ReactNode;
}

const DetailsLayout = ({ baseRoute, slug, children }: ClientLayoutProps) => {
  return (
    <>
      <Sidebar page={baseRoute} slug={slug} />
      <div className="col-span-3 sm:col-span-full p-4 sm:px-6">{children}</div>
      <OnThisPage page={baseRoute} slug={slug} />
    </>
  );
};

export default DetailsLayout;