import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Shield, Beaker, FileText, Download, ThermometerSnowflake, FileCheck, HelpCircle, Package, Grid } from 'lucide-react';
import products from '@/data/products.json';
import BreadcrumbHero from '@/components/common/BreadcrumbHero';
import ProductSchema from '@/components/common/ProductSchema';
import { Product } from '@/types/product';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const getProductImage = (category: string) => {
    const nutraCategories = ["KID’S HEALTH", "VITAMINS", "SUPPLEMENTS", "NUTRACEUTICALS", "SPORTS NUTRITION", "SLEEP & RELAXATION"];
    if (nutraCategories.some(cat => category.toUpperCase().includes(cat))) {
      return "/assets/images/pharma_product_nutra.png";
    }
    return "/assets/images/pharma_product_pharma.png";
  };

  const imageSrc = product.image || getProductImage(product.category);

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <ProductSchema product={product} />
      <BreadcrumbHero 
        title="Product Details"
        paths={[{ name: "Products", href: "/product-catalogue" }, { name: product.name }]}
        bgImage="/assets/images/pharma_hero_lab.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-12">
        <Link 
          href="/product-catalogue" 
          className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-900 font-bold mb-10 group transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-white border border-brand-100 flex items-center justify-center group-hover:bg-brand-50 transition-colors shadow-sm">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </div>
          Back to Catalogue
        </Link>

        <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-slate-50 to-brand-50/30 p-12 lg:p-20 flex items-center justify-center relative border-b lg:border-b-0 lg:border-r border-slate-100">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
              <div className="relative w-full max-w-md aspect-square drop-shadow-2xl hover:scale-105 transition-transform duration-700">
                <Image 
                  src={imageSrc}
                  alt={product.name}
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </div>

            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold tracking-wider uppercase mb-6 border border-brand-100 w-fit">
                {product.category}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6 leading-tight tracking-tight">
                {product.name}
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed font-light mb-10">
                {product.description}
              </p>

              <div className="space-y-6 mb-12">
                <h3 className="text-lg font-bold text-brand-900 border-b border-slate-100 pb-3">Key Benefits & Features</h3>
                <ul className="space-y-4">
                  {product.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-accent-50 text-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8 border-t border-slate-100">
                <Link 
                  href="/business-enquiry" 
                  className="px-8 py-4 bg-brand-900 hover:bg-brand-800 text-white rounded-xl font-bold text-center transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" /> Enquire About Product
                </Link>
                <button className="px-8 py-4 bg-white hover:bg-slate-50 text-brand-900 border border-slate-200 rounded-xl font-bold text-center transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group">
                  <Download className="w-5 h-5 text-slate-400 group-hover:text-brand-900 transition-colors" /> Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 p-8 lg:p-12 overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center">
                <Beaker className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-900">Active Ingredients</h2>
                <p className="text-slate-500 text-sm">Quantitative composition per serving</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-100">
                    <th className="py-4 px-6 text-sm font-bold text-slate-400 uppercase tracking-wider bg-slate-50 rounded-tl-xl">Component</th>
                    <th className="py-4 px-6 text-sm font-bold text-slate-400 uppercase tracking-wider bg-slate-50">Amount Per Serving</th>
                    <th className="py-4 px-6 text-sm font-bold text-slate-400 uppercase tracking-wider bg-slate-50 rounded-tr-xl">% Daily Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.ingredients.map((ing: { name: string; dosage: string; dv?: string }, idx: number) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-5 px-6 font-semibold text-brand-900">{ing.name}</td>
                      <td className="py-5 px-6 font-medium text-slate-600">{ing.dosage}</td>
                      <td className="py-5 px-6 font-medium text-slate-500">
                        {ing.dv === "-" ? <span className="text-slate-300">**</span> : ing.dv}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 text-xs text-slate-400 px-6 font-light">
                ** Daily Value (DV) not established.
              </div>
            </div>
          </div>

          <div className="bg-brand-900 rounded-3xl shadow-xl border border-brand-800 p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-700/50 rounded-full blur-[50px] pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                <Shield className="w-6 h-6 text-accent-400" />
              </div>
              <h2 className="text-2xl font-bold">Quality Standards</h2>
            </div>

            <div className="space-y-6 relative z-10 font-light text-brand-100 leading-relaxed">
              <p>
                All Plexuspharmaco products are manufactured in state-of-the-art facilities adhering to stringent Global Good Manufacturing Practices (cGMP).
              </p>
              <ul className="space-y-4 pt-4 border-t border-brand-800">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-500" /> 100% Quality Assured
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-500" /> Rigorous Third-Party Testing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-500" /> Clinically Validated Ingredients
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-500" /> Sustainably Sourced
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-24">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-700 mb-6">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-4">Packaging</h3>
            <p className="text-slate-600 font-light">Available in primary packaging (blisters, HDPE bottles) and secondary packaging compliant with international transport standards. Customized packaging available for bulk orders.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-700 mb-6">
              <ThermometerSnowflake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-4">Storage Conditions</h3>
            <p className="text-slate-600 font-light">Store in a cool, dry place away from direct sunlight. Maintain temperature between 15°C and 25°C unless otherwise specified. Keep out of reach of children.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-700 mb-6">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-4">Regulatory Compliance</h3>
            <p className="text-slate-600 font-light">Manufactured under EU-GMP guidelines. Comprehensive dossiers (CTD format), Certificates of Analysis (CoA), and Free Sale Certificates (FSC) available upon request.</p>
          </div>
        </div>

        <div className="mb-24 bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common queries regarding {product.name}</p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-brand-900 mb-2 flex items-center gap-2"><HelpCircle className="w-4 h-4 text-brand-600"/> What is the minimum order quantity (MOQ)?</h4>
              <p className="text-slate-600 font-light text-sm">MOQ varies depending on the packaging type and destination country. Please contact our sales team using the inquiry form for a detailed quote.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-brand-900 mb-2 flex items-center gap-2"><HelpCircle className="w-4 h-4 text-brand-600"/> Can this product be formulated under private label?</h4>
              <p className="text-slate-600 font-light text-sm">Yes, Plexuspharmaco offers extensive contract manufacturing and private labeling services for this product category subject to regulatory approvals in the target market.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-brand-900 mb-2 flex items-center gap-2"><HelpCircle className="w-4 h-4 text-brand-600"/> Are stability studies available?</h4>
              <p className="text-slate-600 font-light text-sm">Real-time and accelerated stability study data for climatic zones II, III, and IV are available as part of the product dossier.</p>
            </div>
          </div>
        </div>

        {/* Product Gallery Section */}
        {((product as Product).advertImage || (product as Product).supplementFactsImage) && (
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-brand-900 mb-8">Product Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(product as Product).advertImage && (
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
                  <h3 className="text-xl font-bold text-brand-900 mb-6">Marketing Material</h3>
                  <div className="relative w-full aspect-square md:aspect-video rounded-xl overflow-hidden bg-slate-50">
                    <Image src={(product as Product).advertImage!} alt={`${product.name} Advert`} fill className="object-contain mix-blend-multiply" />
                  </div>
                </div>
              )}
              {(product as Product).supplementFactsImage && (
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
                  <h3 className="text-xl font-bold text-brand-900 mb-6">Supplement Facts</h3>
                  <div className="relative w-full aspect-square md:aspect-video rounded-xl overflow-hidden bg-slate-50">
                    <Image src={(product as Product).supplementFactsImage!} alt={`${product.name} Supplement Facts`} fill className="object-contain mix-blend-multiply" />
                  </div>
                </div>
              )}
            </div>

            {/* Extended Media Gallery */}
            {(product as Product).galleryImages && (product as Product).galleryImages!.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl font-bold text-brand-900 mb-6">Additional Variations</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {(product as Product).galleryImages!.map((img, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
                      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-50">
                        <Image src={img} alt={`${product.name} Variation ${idx + 1}`} fill className="object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-brand-900">Recommended Products</h2>
            <Link href="/product-catalogue" className="text-brand-700 font-bold hover:text-brand-900 flex items-center gap-2">View All <Grid className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3).map((related: Product) => (
              <Link key={related.id} href={`/product-catalogue/${related.id}`} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all group">
                <div className="relative h-48 w-full mb-6 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                  <Image src={related.image || getProductImage(related.category)} alt={related.name} fill className="object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="text-xs font-bold text-brand-600 uppercase mb-2">{related.category}</div>
                <h4 className="font-bold text-brand-900 group-hover:text-brand-700 transition-colors line-clamp-1">{related.name}</h4>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
