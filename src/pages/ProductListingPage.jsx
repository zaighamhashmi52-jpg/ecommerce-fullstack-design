import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { FaUser, FaCommentDots, FaClipboardList, FaShoppingCart } from 'react-icons/fa';

const categoriesList = ["Mobile accessory", "Electronics", "Smartphones", "Modern tech"];
const brandsList = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];
const featuresList = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"];
const conditionsList = ["Any", "Refurbished", "Brand new", "Old items"];
const ratingsList = [5, 4, 3, 2];

const allProducts = [
  { id: 1, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, oldPrice: 1128.00, rating: 4, orders: 154, shipping: "Free Shipping", img: "/assets/Image/tech/32.png", brand: "Samsung", feature: "Metallic", condition: "Brand new", category: "Mobile accessory" },
  { id: 2, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, oldPrice: 1128.00, rating: 3, orders: 154, shipping: "Free Shipping", img: "/assets/Image/tech/33.png", brand: "Apple", feature: "Metallic", condition: "Brand new", category: "Mobile accessory" },
  { id: 3, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, oldPrice: null, rating: 4, orders: 154, shipping: "Free Shipping", img: "/assets/Image/tech/canon.png", brand: "Pocco", feature: "Plastic cover", condition: "Refurbished", category: "Smartphones" },
  { id: 4, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, oldPrice: 1128.00, rating: 4, orders: 154, shipping: "Free Shipping", img: "/assets/Image/tech/laptop.png", brand: "Samsung", feature: "Metallic", condition: "Brand new", category: "Electronics" },
  { id: 5, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, oldPrice: 1128.00, rating: 4, orders: 154, shipping: "Free Shipping", img: "/assets/Image/tech/headphone.png", brand: "Apple", feature: "8GB Ram", condition: "Brand new", category: "Electronics" },
  { id: 6, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, oldPrice: null, rating: 4, orders: 154, shipping: "Free Shipping", img: "/assets/Image/tech/8.png", brand: "Huawei", feature: "Large Memory", condition: "Old items", category: "Smartphones" },
  { id: 7, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, oldPrice: 1128.00, rating: 4, orders: 154, shipping: "Free Shipping", img: "/assets/Image/tech/85.png", brand: "Lenovo", feature: "Super power", condition: "Brand new", category: "Modern tech" },
  { id: 8, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, oldPrice: 1128.00, rating: 3, orders: 154, shipping: "Free Shipping", img: "/assets/Image/tech/86.png", brand: "Pocco", feature: "Metallic", condition: "Refurbished", category: "Mobile accessory" },
  { id: 9, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, oldPrice: null, rating: 4, orders: 154, shipping: "Free Shipping", img: "/assets/Image/tech/camera.png", brand: "Samsung", feature: "Plastic cover", condition: "Brand new", category: "Electronics" },
];

const footerLinks = {
  About: ["About Us", "Find store", "Categories", "Blogs"],
  Partnership: ["About Us", "Find store", "Categories", "Blogs"],
  Information: ["Help Center", "Money Refund", "Shipping", "Contact us"],
  "For users": ["Login", "Register", "Settings", "My Orders"],
};

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} style={{ color: star <= rating ? "#f5a623" : "#ddd", fontSize: 13 }}>★</span>
      ))}
      <span style={{ fontSize: 12, color: "#888", marginLeft: 4 }}>{rating}.0</span>
    </div>
  );
}

export default function ProductListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All category");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState("Any");
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("Featured");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(10);
  const [email, setEmail] = useState("");

  const toggleBrand = (brand) => setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  const toggleFeature = (f) => setSelectedFeatures(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);
  const toggleRating = (r) => setSelectedRatings(prev => prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]);

  // ── FILTER LOGIC ──
  const filteredProducts = allProducts.filter(p => {
    if (selectedCategory && p.category !== selectedCategory) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
    if (selectedFeatures.length > 0 && !selectedFeatures.includes(p.feature)) return false;
    if (selectedCondition !== "Any" && p.condition !== selectedCondition) return false;
    if (selectedRatings.length > 0 && !selectedRatings.includes(p.rating)) return false;
    if (p.price < minPrice || p.price > maxPrice) return false;
    return true;
  });

  // ── ACTIVE FILTER TAGS ──
  const activeFilters = [
    ...(selectedCategory ? [{ label: selectedCategory, type: "category" }] : []),
    ...selectedBrands.map(b => ({ label: b, type: "brand" })),
    ...selectedFeatures.map(f => ({ label: f, type: "feature" })),
    ...selectedRatings.map(r => ({ label: `${r} star`, type: "rating", value: r })),
  ];

  const removeFilter = (filter) => {
    if (filter.type === "category") setSelectedCategory("");
    if (filter.type === "brand") setSelectedBrands(prev => prev.filter(b => b !== filter.label));
    if (filter.type === "feature") setSelectedFeatures(prev => prev.filter(f => f !== filter.label));
    if (filter.type === "rating") setSelectedRatings(prev => prev.filter(r => r !== filter.value));
  };

  const clearAllFilters = () => {
    setSelectedCategory("");
    setSelectedBrands([]);
    setSelectedFeatures([]);
    setSelectedRatings([]);
    setSelectedCondition("Any");
    setMinPrice(0);
    setMaxPrice(999999);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f7f7f7", color: "#333", minWidth: 320 }}>

      {/* ── TOP NAV ── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e8e8e8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 700, fontSize: 18, color: "#4096ff", minWidth: 90 }}>
            <img src="/assets/Layout/Brand/logo-colored.png" alt="Logo" style={{ width: 140, height: 40, objectFit: "contain" }} />
          </div>
          <div style={{ flex: 1, display: "flex", minWidth: 200, border: "1px solid #e0e0e0", borderRadius: 6, overflow: "hidden" }}>
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search"
              style={{ flex: 1, border: "none", outline: "none", padding: "8px 12px", fontSize: 13 }} />
            <select value={category} onChange={e => setCategory(e.target.value)}
              style={{ border: "none", borderLeft: "1px solid #e0e0e0", padding: "0 8px", fontSize: 12, background: "#fff", cursor: "pointer" }}>
              <option>All category</option>
              {categoriesList.map(c => <option key={c}>{c}</option>)}
            </select>
            <button style={{ background: "#4096ff", color: "#fff", border: "none", padding: "0 16px", cursor: "pointer", fontSize: 13 }}>Search</button>
          </div>
          {[
            [<FaUser />, "Profile"],
            [<FaCommentDots />, "Message"],
            [<FaClipboardList />, "Orders"],
            [<FaShoppingCart />, "My cart"]
          ].map(([icon, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
              <span style={{ fontSize: 18 }}>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #f0f0f0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "8px 16px", display: "flex", gap: 24, fontSize: 13, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer", fontWeight: 500 }}>☰ All category</span>
            {["Hot offers", "Gift boxes", "Projects", "Menu item"].map(item => (
              <span key={item} style={{ cursor: "pointer", color: "#555" }}>{item}</span>
            ))}
            <span style={{ cursor: "pointer", color: "#555" }}>Help ▾</span>
            <span style={{ marginLeft: "auto", fontSize: 12, color: "#555" }}>English, USD ▾</span>
            <span style={{ fontSize: 12, color: "#555", display: "inline-flex", alignItems: "center", gap: 4 }}>Ship to 🇩🇪 ▾</span>
          </div>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div style={{ maxWidth: 1200, margin: "12px auto", padding: "0 16px", fontSize: 13, color: "#888" }}>
        <span style={{ cursor: "pointer", color: "#4096ff" }}>Home</span> &gt;
        <span style={{ cursor: "pointer", color: "#4096ff" }}> Clothings</span> &gt;
        <span style={{ cursor: "pointer", color: "#4096ff" }}> Men's wear</span> &gt;
        <span style={{ color: "#333" }}> Summer clothing</span>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px", display: "grid", gridTemplateColumns: "220px 1fr", gap: 16 }}>

        {/* ── LEFT SIDEBAR ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* Category */}
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
              Category <span style={{ cursor: "pointer" }}>▲</span>
            </div>
            {categoriesList.map(cat => (
              <div key={cat}
               onClick={() => setSelectedCategory(cat === selectedCategory ? "" : cat)}
               style={{ fontSize: 13, color: selectedCategory === cat ? "#4096ff" : "#555", padding: "5px 0", cursor: "pointer", fontWeight: selectedCategory === cat ? 600 : 400 }}
               onMouseEnter={e => e.currentTarget.style.color = "#4096ff"}
               onMouseLeave={e => e.currentTarget.style.color = selectedCategory === cat ? "#4096ff" : "#555"}
             >{cat}</div>
            ))}
            <div style={{ fontSize: 13, color: "#4096ff", marginTop: 6, cursor: "pointer" }}>See all</div>
          </div>

          {/* Brands */}
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
              Brands <span style={{ cursor: "pointer" }}>▲</span>
            </div>
            {brandsList.map(brand => (
              <div key={brand} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#555", padding: "5px 0", cursor: "pointer" }}>
                <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)}
                  style={{ cursor: "pointer", accentColor: "#4096ff", width: 15, height: 15 }} />
                {brand}
              </div>
            ))}
            <div style={{ fontSize: 13, color: "#4096ff", marginTop: 6, cursor: "pointer" }}>See all</div>
          </div>

          {/* Features */}
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
              Features <span style={{ cursor: "pointer" }}>▲</span>
            </div>
            {featuresList.map(f => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#555", padding: "5px 0", cursor: "pointer" }}>
                <input type="checkbox" checked={selectedFeatures.includes(f)} onChange={() => toggleFeature(f)}
                  style={{ cursor: "pointer", accentColor: "#4096ff", width: 15, height: 15 }} />
                {f}
              </div>
            ))}
            <div style={{ fontSize: 13, color: "#4096ff", marginTop: 6, cursor: "pointer" }}>See all</div>
          </div>

          {/* Price Range */}
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
              Price range <span style={{ cursor: "pointer" }}>▼</span>
            </div>
            <input type="range" min={0} max={999999} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#4096ff", marginBottom: 10 }} />
            <div style={{ display: "flex", gap: 8 }}>
              <input placeholder="Min" value={minPrice} onChange={e => setMinPrice(Number(e.target.value))}
                style={{ flex: 1, border: "1px solid #e0e0e0", borderRadius: 6, padding: "6px 8px", fontSize: 12, outline: "none" }} />
              <input placeholder="Max" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))}
                style={{ flex: 1, border: "1px solid #e0e0e0", borderRadius: 6, padding: "6px 8px", fontSize: 12, outline: "none" }} />
            </div>
            <button style={{ width: "100%", background: "#fff", border: "1px solid #4096ff", color: "#4096ff", borderRadius: 6, padding: "7px 0", marginTop: 10, cursor: "pointer", fontSize: 13 }}>
              Apply
            </button>
          </div>

          {/* Condition */}
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
              Condition <span style={{ cursor: "pointer" }}>▼</span>
            </div>
            {conditionsList.map(c => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#555", padding: "5px 0", cursor: "pointer" }}>
                <input type="radio" name="condition" checked={selectedCondition === c} onChange={() => setSelectedCondition(c)}
                  style={{ cursor: "pointer", accentColor: "#4096ff" }} />
                {c}
              </div>
            ))}
          </div>

          {/* Ratings */}
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
              Ratings <span style={{ cursor: "pointer" }}>▼</span>
            </div>
            {ratingsList.map(r => (
              <div key={r} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0", cursor: "pointer" }}>
                <input type="checkbox" checked={selectedRatings.includes(r)} onChange={() => toggleRating(r)}
                  style={{ cursor: "pointer", accentColor: "#4096ff", width: 15, height: 15 }} />
                <StarRating rating={r} />
              </div>
            ))}
          </div>

        </div>

        {/* ── RIGHT PRODUCT AREA ── */}
        <div>
          {/* Top bar */}
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: "12px 16px", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <div style={{ fontSize: 13 }}>
                <strong>{filteredProducts.length}</strong> items in <strong>Mobile accessory</strong>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, cursor: "pointer" }}>
                  <input type="checkbox" checked={verifiedOnly} onChange={e => setVerifiedOnly(e.target.checked)}
                    style={{ accentColor: "#4096ff" }} />
                  Verified only
                </label>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                  style={{ border: "1px solid #e0e0e0", borderRadius: 6, padding: "6px 10px", fontSize: 13, cursor: "pointer" }}>
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
                <div style={{ display: "flex", border: "1px solid #e0e0e0", borderRadius: 6, overflow: "hidden" }}>
                  <button onClick={() => setViewMode("grid")}
                    style={{ padding: "6px 10px", border: "none", cursor: "pointer", background: viewMode === "grid" ? "#4096ff" : "#fff", color: viewMode === "grid" ? "#fff" : "#555", fontSize: 14 }}>⊞</button>
                  <button onClick={() => setViewMode("list")}
                    style={{ padding: "6px 10px", border: "none", cursor: "pointer", background: viewMode === "list" ? "#4096ff" : "#fff", color: viewMode === "list" ? "#fff" : "#555", fontSize: 14 }}>≡</button>
                </div>
              </div>
            </div>

            {/* ── ACTIVE FILTER TAGS ── */}
            {activeFilters.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12, alignItems: "center" }}>
                {activeFilters.map((filter, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, border: "1px solid #d0d0d0", borderRadius: 6, padding: "4px 10px", fontSize: 13, background: "#fff" }}>
                    {filter.label}
                    <span onClick={() => removeFilter(filter)}
                      style={{ cursor: "pointer", color: "#888", fontWeight: 600, fontSize: 14, lineHeight: 1 }}>×</span>
                  </div>
                ))}
                <span onClick={clearAllFilters}
                  style={{ fontSize: 13, color: "#4096ff", cursor: "pointer", marginLeft: 4 }}>
                  Clear all filter
                </span>
              </div>
            )}
          </div>

          {/* ── PRODUCT GRID VIEW ── */}
          {viewMode === "grid" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {filteredProducts.length > 0 ? filteredProducts.map(product => (
                <div key={product.id} style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", overflow: "hidden", position: "relative", cursor: "pointer" }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
                >
                  {/* Product image */}
                  <div style={{ height: 200, background: "#f9f9f9", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                    <img src={product.img} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>

                  {/* Wishlist button */}
                  <button style={{ position: "absolute", top: 10, right: 10, background: "#fff", border: "1px solid #e0e0e0", borderRadius: "50%", width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 13, color: "#4096ff" }}>
                    🤍
                  </button>

                  {/* Product info */}
                  <div style={{ padding: "12px 14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 16, fontWeight: 700 }}>${product.price.toFixed(2)}</span>
                      {product.oldPrice && <span style={{ fontSize: 12, color: "#aaa", textDecoration: "line-through" }}>${product.oldPrice.toFixed(2)}</span>}
                    </div>
                    <StarRating rating={product.rating} />
                    <div style={{ fontSize: 13, color: "#555", marginTop: 6, lineHeight: 1.4 }}>{product.name}</div>
                  </div>
                </div>
              )) : (
                <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: 60, color: "#aaa", fontSize: 15 }}>
                  No products match your filters. <span onClick={clearAllFilters} style={{ color: "#4096ff", cursor: "pointer" }}>Clear all filters</span>
                </div>
              )}
            </div>
          )}

          {/* ── PRODUCT LIST VIEW ── */}
          {viewMode === "list" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filteredProducts.length > 0 ? filteredProducts.map(product => (
                <div key={product.id} style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 16, display: "flex", gap: 16, position: "relative" }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
                >
                  <div style={{ width: 150, minWidth: 150, height: 130, background: "#f5f5f5", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                    <img src={product.img} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>{product.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{ fontSize: 18, fontWeight: 700 }}>${product.price.toFixed(2)}</span>
                      {product.oldPrice && <span style={{ fontSize: 13, color: "#aaa", textDecoration: "line-through" }}>${product.oldPrice.toFixed(2)}</span>}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <StarRating rating={product.rating} />
                      <span style={{ fontSize: 12, color: "#888" }}>• {product.orders} orders •</span>
                      <span style={{ fontSize: 12, color: "#26a541", fontWeight: 500 }}>{product.shipping}</span>
                    </div>
                    <span style={{ fontSize: 13, color: "#4096ff", cursor: "pointer", fontWeight: 500 }}>View details</span>
                  </div>
                  <button style={{ position: "absolute", top: 16, right: 16, background: "none", border: "1px solid #e0e0e0", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14, color: "#4096ff" }}>
                    🤍
                  </button>
                </div>
              )) : (
                <div style={{ textAlign: "center", padding: 60, color: "#aaa", fontSize: 15 }}>
                  No products match your filters. <span onClick={clearAllFilters} style={{ color: "#4096ff", cursor: "pointer" }}>Clear all filters</span>
                </div>
              )}
            </div>
          )}

          {/* ── PAGINATION ── */}
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "flex-end", marginTop: 12, gap: 8 }}>
            <select value={showPerPage} onChange={e => setShowPerPage(e.target.value)}
              style={{ border: "1px solid #e0e0e0", borderRadius: 6, padding: "5px 8px", fontSize: 13 }}>
              <option>10</option><option>20</option><option>50</option>
            </select>
            <button style={{ border: "1px solid #e0e0e0", borderRadius: 6, padding: "5px 10px", background: "#fff", cursor: "pointer", fontSize: 13 }}>‹</button>
            {[1, 2, 3].map(p => (
              <button key={p} onClick={() => setCurrentPage(p)}
                style={{ border: "1px solid #e0e0e0", borderRadius: 6, padding: "5px 10px", background: currentPage === p ? "#4096ff" : "#fff", color: currentPage === p ? "#fff" : "#333", cursor: "pointer", fontSize: 13 }}>
                {p}
              </button>
            ))}
            <button style={{ border: "1px solid #e0e0e0", borderRadius: 6, padding: "5px 10px", background: "#fff", cursor: "pointer", fontSize: 13 }}>›</button>
          </div>
        </div>
      </div>

      {/* ── NEWSLETTER ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px" }}>
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: "32px 16px", textAlign: "center" }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px" }}>Subscribe on our newsletter</h3>
          <p style={{ fontSize: 13, color: "#888", margin: "0 0 16px" }}>Get daily news on upcoming offers from many suppliers all over the world</p>
          <div style={{ display: "flex", justifyContent: "center", maxWidth: 360, margin: "0 auto" }}>
            <input placeholder="✉  Email" value={email} onChange={e => setEmail(e.target.value)}
              style={{ flex: 1, border: "1px solid #d0d0d0", borderRight: "none", borderRadius: "6px 0 0 6px", padding: "10px 14px", fontSize: 13, outline: "none" }} />
            <button style={{ background: "#4096ff", color: "#fff", border: "none", borderRadius: "0 6px 6px 0", padding: "10px 20px", cursor: "pointer", fontSize: 13 }}>Subscribe</button>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ background: "#1c1c1c", color: "#aaa", marginTop: 8 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "220px repeat(4, 1fr) 160px", gap: 24, marginBottom: 32 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>
              <img src="/assets/Layout/Brand/logo-colored.png" alt="Logo" style={{ width: 150, height: 46, objectFit: "contain" }} />

              </div>
              <p style={{ fontSize: 12, lineHeight: 1.7, margin: "0 0 12px" }}>Best information about the company goes here but now lorem ipsum is</p>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 12 }}>
                <FaFacebook style={{ fontSize: 18, color: "#1877f2", cursor: "pointer" }} />
                <FaTwitter style={{ fontSize: 18, color: "#1da1f2", cursor: "pointer" }} />
                <FaLinkedin style={{ fontSize: 18, color: "#0a66c2", cursor: "pointer" }} />
                <FaInstagram style={{ fontSize: 18, color: "#e1306c", cursor: "pointer" }} />
                <FaYoutube style={{ fontSize: 18, color: "#ff0000", cursor: "pointer" }} />
              </div>
            </div>
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <div style={{ color: "#fff", fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{title}</div>
                {links.map(link => (
                  <div key={link} style={{ fontSize: 12, marginBottom: 7, cursor: "pointer" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "#aaa"}
                  >{link}</div>
                ))}
              </div>
            ))}
            <div>
              <div style={{ color: "#fff", fontWeight: 600, fontSize: 13, marginBottom: 12 }}>Get app</div>
              <div style={{ background: "#333", borderRadius: 6, padding: "8px 12px", marginBottom: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                <FaAppStore style={{ fontSize: 22, color: "#fff" }} />
                <div><div style={{ fontSize: 9, color: "#aaa" }}>Download on the</div><div style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}>App Store</div></div>
              </div>
              <div style={{ background: "#333", borderRadius: 6, padding: "8px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                <FaGooglePlay style={{ fontSize: 22, color: "#fff" }} />
                <div><div style={{ fontSize: 9, color: "#aaa" }}>Get it on</div><div style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}>Google Play</div></div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #333", paddingTop: 16, display: "flex", justifyContent: "space-between", fontSize: 12 }}>
            <span>© 2023 Ecommerce.</span>
            <span style={{ fontSize: 12, color: "white",display: "inline-flex", alignItems: "center", gap: 4 }}> <img src="/assets/Layout1/Image/flags/GB@2x.png" alt="Germany" style={{ width: 16, height: 11, objectFit: "cover", }} />English
            <img src="/assets/Layout/Form/input-group/Icon/control/Vector.png" alt="dropup" style={{ width: 10, height: 7, objectFit: "cover", borderRadius: 2 }} /></span>
          </div>
        </div>
      </div>

    </div>
  );
}
