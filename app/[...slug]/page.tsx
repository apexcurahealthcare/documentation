import { Metadata } from "next";
import Breads from "../lib/Breads";
import Copyright from "../lib/Copyright";
import Pagination from "../lib/Pagination";
import ViewBuilder from "../lib/ViewBuilder";
import { Constants, ISideMenuSection } from "../utils/constants";
import Schema, { AllPages, PageName } from "../utils/schemas";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: PageName[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = Constants.PROJECTS.find((p) => p.route === `/${slug[0]}`);

  return {
    title: project ? `${project?.name}` : "",
  };
}
const Page = async ({ params }: { params: Promise<{ slug: PageName[] }> }) => {
  const { slug } = await params;
  const schemaSlug = slug.join("/");
  const schema = Schema.get(schemaSlug as AllPages);
  if (!schema) {
    return null;
  }
  const project = Constants.PROJECTS.find((p) => p.route === `/${slug[0]}`);
  const page = slug[0];
  const SIDEMENU: ISideMenuSection[] = Constants.SIDEMENU[page] || [];
  const section = SIDEMENU.find((section: any) =>
    section.items.some((item: any) => item.route === `/${slug?.[1] || ""}`)
  );
  let PREVIOUS, NEXT;

  if (section) {
    const items = section.items;
    const currentIndex = items.findIndex(
      (item: any) => item.route === `/${slug?.[1] || ""}`
    );

    PREVIOUS = currentIndex > 0 ? items[currentIndex - 1] : null;
    NEXT = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;
  }

  return (
    <div className="flex flex-col gap-4 mb-16" key={schemaSlug}>
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
      <Copyright />
    </div>
  );
};

export default Page;
