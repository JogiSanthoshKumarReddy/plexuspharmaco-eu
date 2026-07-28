"use client";
import React, { useState, useMemo, useEffect } from 'react';
import products from '../../data/products.json';
import BreadcrumbSection from '@/components/layout/BreadcrumbSection';

export default function PipelinePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [activeTableId, setActiveTableId] = useState<string | null>(null);

  // Extract unique categories
  const categories = Array.from(new Set(products.map(p => p.category)));

  // Reset expanded table when filters change to avoid showing stale data
  useEffect(() => {
    setActiveTableId(null);
  }, [searchQuery, activeCategory]);

  // Filter products using exact category match and substring search
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      if (activeCategory && p.category !== activeCategory) {
        return false;
      }
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!p.name.toLowerCase().includes(query) && !p.category.toLowerCase().includes(query)) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, activeCategory]);

  return (
    <>
      <BreadcrumbSection
        title="Pipeline"
        bgImage="/assets/images/breadcrumb/breadcrumb-1.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Product Catalogue" },
          { label: "Pipeline" },
        ]}
        quickExplore={[
          { label: "All Products", href: "/product-catalogue" },
        ]}
      />
      
      <section className="faq-style1 mb-5">
        <div className="container">
           <div className="row align-items-center">
              <div className="col-xl-6 mt-2">
                 <div className="faq-content-box">
                    <div className="top-title">
                       <h2>Pipeline / Under Development</h2>
                    </div>
                    <p className="mt-3 text-justify">At Plexus Group of Companies, our development pipeline reflects a forward-looking, science-led approach to building a strong and sustainable future portfolio. Ongoing R&amp;D initiatives focus on formulation enhancement, differentiated delivery systems, and lifecycle value creation across key therapeutic segments. Guided by Quality by Design (QbD) principles and regulatory foresight, our pipeline emphasizes improved bioavailability, stability, safety, and patient-centric performance while ensuring global compliance readiness.</p>
                    <p className="mt-3 text-justify">Our under-development programs include next-generation oral formulations, advanced nutraceutical concepts, liposomal delivery platforms, and selected medical and dermo-cosmetic solutions. Each initiative follows a structured, risk-based development framework designed to enable efficient scale-up and future commercialization. While specific details remain non-confidential, our pipeline demonstrates Plexus Group’s commitment to responsible innovation, scientific integrity, and long-term healthcare impact.</p>
                 </div>
              </div>
              <div className="col-xl-6 mt-2">
                 <div className="faq-style1__img-box clearfix">
                    <ul className="faq-style1__img-box-inner clearfix">
                       <li className="single-box">
                          <div className="inner wow fadeInUp">
                             <img src="/assets/images/resources/pipeline.jpg" className="pipe-img" alt="Pharma Pipeline" />
                          </div>
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="blog-details-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="blog-details-sidebar-box">
                <div className="sidebar-details-page-links">
                  <div className="title">
                    <h3>Filter</h3>
                  </div>
                  <ul>
                    <li className={activeCategory === "" ? "current" : ""}>
                      <a href="#" className="category-filter-link" onClick={(e) => { e.preventDefault(); setActiveCategory(""); }}>All Products</a>
                    </li>
                    {categories.map((cat, idx) => (
                      <li key={idx} className={activeCategory === cat ? "current" : ""}>
                        <a href="#" className="category-filter-link" onClick={(e) => { e.preventDefault(); setActiveCategory(cat); }}>{cat}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-9">
              <div className="row align-items-center g-3 mb-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center sort-search-box" id="subcategoryWrapper">
                    <h5 className="me-3 mb-0" style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>SORT BY</h5>
                    <select 
                      className="form-select" 
                      id="subcategorySelect" 
                      value={activeCategory}
                      onChange={(e) => setActiveCategory(e.target.value)}
                    >
                      <option value="">--- All Products ---</option>
                      {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <form className="search-form" id="search-form" onSubmit={e => e.preventDefault()}>
                    <div className="d-flex align-items-center sort-search-box">
                      <h5 className="me-3 mb-0" style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>SEARCH</h5>
                      <div className="position-relative w-100 sidebar-search-box" style={{ marginBottom: 0 }}>
                        <input 
                          type="text" 
                          id="searchInput" 
                          className="form-control" 
                          placeholder="Enter your keyword..." 
                          style={{ paddingRight: '40px' }} 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="button" className="search-btn" style={{ position: 'absolute', right: 0, top: 0, height: '100%', background: 'transparent', border: 'none', color: '#ec1c24', fontSize: '18px' }}>
                          <i className="icon-search-1"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div id="productResults">
                <div className="blog-details-page__content mt-5">
                  <div className="row justify-content-start">
                    {filteredProducts.map((product, idx) => (
                      <div className="col-xl-4 col-lg-4 wow fadeInUp mt-2" key={`${product.id}-${idx}`}>
                        <div className="single-blog-style1 mb-0">
                          <div className="img-box">
                             <div className="inner">
                                <img src={product.image || "/pharma/assets/images/663c6d1a1cb8e.png"} alt={product.name} />
                             </div>
                          </div>
                          <div className="text-holder pt-3">
                            <div className="category-box">
                              <span>{product.category}</span>
                            </div>
                            <h3 className="blog-title" style={{ height: '75px', overflow: 'hidden' }}>
                              <a href="javascript:void(0)">{product.name}</a>
                            </h3>
                            <div className="bottom-box">
                              <div className="btn-box d-flex">
                                <a 
                                  href="javascript:void(0)" 
                                  className="p-2 me-2 toggle-table-btn"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTableId(activeTableId === `${product.id}-${idx}` ? null : `${product.id}-${idx}`);
                                  }}
                                >
                                  <i className={activeTableId === `${product.id}-${idx}` ? "icon-minus" : "icon-plus"}></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {filteredProducts.length === 0 && (
                      <div className="col-12 text-center mt-5">
                        <p>No products found matching your criteria.</p>
                      </div>
                    )}
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {filteredProducts.map((product, idx) => (
                        <div 
                          className={`table-responsive mt-4 product-table ${activeTableId === `${product.id}-${idx}` ? '' : 'd-none'}`} 
                          id={`table-${product.id}-${idx}`} 
                          key={`table-${product.id}-${idx}`}
                        >
                          <table className="table table-hover table-bordered align-middle pharma-table">
                            <thead>
                              <tr>
                                <th>Brand name</th>
                                <th>Description</th>
                                <th>Therapeutic Category</th>
                                <th>Document Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="fw-bold">{product.name}</td>
                                <td><p>{product.description}</p></td>
                                <td>{product.category}</td>
                                <td>All Regulatory Documents available.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
