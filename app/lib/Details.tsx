"use client";
import Breads from "../lib/Breads";
import Pagination from "../lib/Pagination";
import ViewBuilder from "../lib/ViewBuilder";

interface ClientPageProps {
  schema: any;
  project: { route: string; name: string } | undefined;
  page: string;
  PREVIOUS: { route: string; title: string } | null;
  NEXT: { route: string; title: string } | null;
}

const DetailsPage = ({ schema, project, page, PREVIOUS, NEXT }: ClientPageProps) => {
  return (
    <>
      <div className="hidden sm:block">
        <Breads
          items={[
            { key: "/", label: "Home" },
            { key: project?.route || "", label: project?.name || "" },
          ]}
        />
      </div>
      <ViewBuilder schema={schema} />
      <Pagination
        next={{
          href: `/${page}${NEXT?.route}` || "",
          label: NEXT?.title || "",
        }}
        previous={{
          href: `/${page}${PREVIOUS?.route}` || "",
          label: PREVIOUS?.title || "",
        }}
      />
    </>
  );
};

export default DetailsPage;
