"use client";
import React, { useState, useMemo, useEffect } from 'react';
import products from '../../data/products.json';

export default function ProductCataloguePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [activeTableId, setActiveTableId] = useState<string | null>(null);

  // Extract unique categories
  const categories = Array.from(new Set(products.map(p => p.category)));

  // Reset activeTableId when filters change to avoid showing stale table
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
      <section className="blog-style1 pt-1 pb-1" id="press">
        <div className="container">
          <div className="single-pricing-box pt-1 pb-2">
            <div className="single-pricing-box_top">
              <h3>Explore our Products</h3>
            </div>
            <p className="mt-2">In Plexus Group, we deliver high quality integrated solutions based on key technology platforms</p>
            <ul className="product-listing">
              <li>
                <div className="icon"><span className="icon-check-1"></span></div>
                We develop integrated pharmaceutical solutions using proprietary technology platforms to enhance therapeutic performance, dosing efficiency, and patient adherence.
              </li>
              <li>
                <div className="icon"><span className="icon-check-1"></span></div>
                We focus on improving patient convenience, tolerability, and adherence through optimized delivery and reduced dosing frequency, supporting better outcomes across multiple therapeutic indications.
              </li>
              <li>
                <div className="icon"><span className="icon-check-1"></span></div>
                We combine advanced research, innovation, and strategic IP management to create differentiated therapies with long-term commercial value across global markets.
              </li>
              <li>
                <div className="icon"><span className="icon-check-1"></span></div>
                We build products with long-term brand potential, targeting unmet needs and creating differentiated assets with strong lifecycle value.
              </li>
              <li>
                <div className="icon"><span className="icon-check-1"></span></div>
                We convert scientific expertise into scalable, compliant processes that deliver consistent quality, efficiency, and sustainable global readiness.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="container">
         <div className="text-end mb-4">
            <a href="/" className="btn btn-danger me-2">HOME</a>
            <a href="/product-catalogue" className="btn btn-danger me-2">Product catalogue</a>
            <a href="/pipeline" className="btn btn-danger">Pipeline</a>
         </div>
      </div>

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
                              <span style={{ cursor: 'default' }}>{product.name}</span>
                            </h3>
                            <div className="bottom-box">
                              <div className="btn-box d-flex">
                                <button
                                  type="button"
                                  className="p-2 me-2 toggle-table-btn"
                                  aria-label={activeTableId === `${product.id}-${idx}` ? 'Collapse product details' : 'Expand product details'}
                                  onClick={() => {
                                    setActiveTableId(activeTableId === `${product.id}-${idx}` ? null : `${product.id}-${idx}`);
                                  }}
                                >
                                  <i className={activeTableId === `${product.id}-${idx}` ? "icon-minus" : "icon-plus"}></i>
                                </button>
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
