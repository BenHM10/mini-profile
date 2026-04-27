export default function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Promo: {params.slug}</h1>
      <p className="mt-4">Check out our latest internet promotions.</p>
    </div>
  );
}
