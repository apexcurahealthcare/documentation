import { ReactNode } from "react";
import { PageName } from "../utils/schemas";
import DetailsLayout from "../lib/DetailsLayout";
type LayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: PageName[] }>;
};
export default async function Layout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const baseRoute = slug[0];
  if (!baseRoute) {
    return null;
  }

  return (
    <section className="grid grid-cols-5 relative">
      <DetailsLayout baseRoute={baseRoute} slug={slug}>
        {children}
      </DetailsLayout>
    </section>
  );
}
