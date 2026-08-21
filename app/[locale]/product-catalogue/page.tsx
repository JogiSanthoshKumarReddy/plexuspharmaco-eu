import { Suspense } from 'react';
import ProductCatalogueClient from '@/components/catalogue/ProductCatalogueClient';
import { Metadata } from 'next';
import Link from 'next/link';
import products from '@/data/products.json';

export const metadata: Metadata = {
  title: 'Product Catalogue',
  description: 'Explore our complete portfolio of advanced pharmaceutical and nutraceutical therapies.',
};

export default async function ProductCataloguePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading catalogue...</div>}>
        <ProductCatalogueClient locale={locale} />
      </Suspense>
      {/* SEO hidden links for crawlers to discover all products since the client component paginates */}
      <div className="sr-only">
        {products.map((product) => (
          <Link key={product.id} href={`/${locale}/product-catalogue/${product.id}`}>
            {product.name}
          </Link>
        ))}
      </div>
    </>
  );
}
