import InsightDetailPage from "@/components/InsightDetailPage";

export default async function InsightDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <InsightDetailPage slug={resolvedParams.slug} />;
}
