import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { FaCheckCircle, FaShieldAlt, FaGlobe, FaHeart } from "react-icons/fa";
import { FaUser, FaCommentDots, FaClipboardList, FaShoppingCart } from 'react-icons/fa';


const productImages = [
  "/assets/shirt/1.png",
  "/assets/shirt/3.png",
  "/assets/shirt/6.png",
  "/assets/shirt/2.png",
  "/assets/shirt/4.png",
  "/assets/shirt/1.png",
];

const relatedProducts = [
  { id: 1, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: "/assets/Image/tech/8.png" },
  { id: 2, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: "/assets/Image/tech/32.png" },
  { id: 3, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: "/assets/Image/tech/33.png" },
  { id: 4, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: "/assets/Image/tech/86.png" },
  { id: 5, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: "/assets/Image/tech/headphone.png" },
  { id: 6, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: "/assets/Image/tech/camera.png" },
];

const youMayLike = [
  { id: 1, name: "Men Blazers Sets Elegant Formal", price: "$7.00 - $99.50", img: "/assets/Layout/alibaba/Image/cloth/6.png" },
  { id: 2, name: "Men Shirt Sleeve Polo Contrast", price: "$7.00 - $99.50", img: "/assets/Layout/alibaba/Image/cloth/3.png" },
  { id: 3, name: "Apple Watch Series Space Gray", price: "$7.00 - $99.50", img: "/assets/Layout/alibaba/Image/cloth/1.png" },
  { id: 4, name: "Basketball Crew Socks Long Stuff", price: "$7.00 - $99.50", img: "/assets/Layout/alibaba/Image/cloth/2.png" },
  { id: 5, name: "New Summer Men's castrol T-Shirts", price: "$7.00 - $99.50", img: "/assets/Layout/alibaba/Image/cloth/5.png" },
];

const specs = [
  { label: "Model", value: "#8786867" },
  { label: "Style", value: "Classic style" },
  { label: "Certificate", value: "ISO-898921212" },
  { label: "Size", value: "34mm x 450mm x 19mm" },
  { label: "Memory", value: "36GB RAM" },
];

const features = [
  "Some great feature name here",
  "Lorem ipsum dolor sit amet, consectetur",
  "Duis aute irure dolor in reprehenderit",
  "Some great feature name here",
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
        <span key={star} style={{ color: star <= Math.floor(rating) ? "#f5a623" : "#ddd", fontSize: 14 }}>★</span>
      ))}
      <span style={{ fontSize: 13, color: "#f5a623", marginLeft: 4, fontWeight: 600 }}>{rating}</span>
    </div>
  );
}

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("Description");
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All category");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  const tabs = ["Description", "Reviews", "Shipping", "About seller"];

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
              <option>Electronics</option>
              <option>Clothing</option>
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
            <span style={{ cursor: "pointer", fontWeight: 500 }}>☰ All category</span>
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

      {/* ── PRODUCT DETAIL CARD ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px" }}>
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 24, display: "grid", gridTemplateColumns: "280px 1fr 220px", gap: 24 }}>

          {/* LEFT: Images */}
          <div>
            <div style={{ border: "1px solid #e8e8e8", borderRadius: 8, overflow: "hidden", height: 240, display: "flex", alignItems: "center", justifyContent: "center", background: "#f9f9f9", marginBottom: 12 }}>
              <img src={productImages[selectedImage]} alt="product" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            {/* Thumbnails */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {productImages.map((img, i) => (
                <div key={i} onClick={() => setSelectedImage(i)}
                  style={{ width: 44, height: 44, border: selectedImage === i ? "2px solid #4096ff" : "1px solid #e8e8e8", borderRadius: 6, overflow: "hidden", cursor: "pointer", background: "#f9f9f9" }}>
                  <img src={img} alt={`thumb-${i}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>

          {/* CENTER: Product Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#26a541", fontSize: 13, marginBottom: 8 }}>
              <FaCheckCircle /> <span>In stock</span>
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 10px", lineHeight: 1.3 }}>
              Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <StarRating rating={4.5} />
              <span style={{ fontSize: 13, color: "#888" }}>• 📋 32 reviews • 🛡 154 sold</span>
            </div>

            {/* Price tiers */}
            <div style={{ display: "flex", gap: 0, marginBottom: 16, border: "1px solid #e8e8e8", borderRadius: 6, overflow: "hidden" }}>
              {[
                { price: "$98.00", range: "50-100 pcs", active: true },
                { price: "$90.00", range: "100-700 pcs", active: true },
                { price: "$78.00", range: "700+ pcs", active: true },
              ].map((tier, i) => (
                <div key={i} style={{ flex: 1, padding: "10px 14px", background: tier.active ? "#fff3e0" : "#fff", borderRight: i < 2 ? "1px solid #e8e8e8" : "none", textAlign: "center" }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: tier.active ? "#e85d00" : "#333" }}>{tier.price}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{tier.range}</div>
                </div>
              ))}
            </div>

            {/* Details table */}
            <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "8px 0", fontSize: 13 }}>
              {[
                ["Price:", "Negotiable"],
                ["Type:", "Classic shoes"],
                ["Material:", "Plastic material"],
                ["Design:", "Modern nice"],
                ["Customization:", "Customized logo and design custom packages"],
                ["Protection:", "Refund Policy"],
                ["Warranty:", "2 years full warranty"],
              ].map(([label, value], i) => (
                <>
                  <div key={`label-${i}`} style={{ color: "#888", paddingBottom: 8, borderBottom: "1px solid #f0f0f0" }}>{label}</div>
                  <div key={`value-${i}`} style={{ color: "#333", paddingBottom: 8, borderBottom: "1px solid #f0f0f0" }}>{value}</div>
                </>
              ))}
            </div>
          </div>

          {/* RIGHT: Supplier */}
          <div>
            <div style={{ border: "1px solid #e8e8e8", borderRadius: 8, padding: 16, marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, background: "#4096ff", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 16 }}>R</div>
                <div>
                  <div style={{ fontSize: 11, color: "#888" }}>Supplier</div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>Guanjoi Trading LLC</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#555" }}>
                  🇩🇪 <span>Germany, Berlin</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#555" }}>
                  <FaShieldAlt style={{ color: "#4096ff" }} /> <span>Verified Seller</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#555" }}>
                  <FaGlobe style={{ color: "#4096ff" }} /> <span>Worldwide shipping</span>
                </div>
              </div>
              <button style={{ width: "100%", background: "#4096ff", color: "#fff", border: "none", borderRadius: 6, padding: "10px 0", cursor: "pointer", fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
                Send inquiry
              </button>
              <button style={{ width: "100%", background: "#fff", color: "#4096ff", border: "1px solid #4096ff", borderRadius: 6, padding: "10px 0", cursor: "pointer", fontSize: 13 }}>
                Seller's profile
              </button>
            </div>
            <div onClick={() => setSaved(!saved)}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 13, color: saved ? "#e94560" : "#4096ff", cursor: "pointer" }}>
              <FaHeart style={{ color: saved ? "#e94560" : "#4096ff" }} />
              Save for later
            </div>
          </div>

        </div>
      </div>

      {/* ── TABS + YOU MAY LIKE ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px", display: "grid", gridTemplateColumns: "1fr 220px", gap: 16 }}>

        {/* Tabs */}
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", overflow: "hidden" }}>
          {/* Tab headers */}
          <div style={{ display: "flex", borderBottom: "1px solid #e8e8e8" }}>
            {tabs.map(tab => (
              <div key={tab} onClick={() => setActiveTab(tab)}
                style={{ padding: "12px 20px", fontSize: 14, cursor: "pointer", fontWeight: activeTab === tab ? 600 : 400, color: activeTab === tab ? "#4096ff" : "#555", borderBottom: activeTab === tab ? "2px solid #4096ff" : "2px solid transparent", marginBottom: -1 }}>
                {tab}
              </div>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ padding: 20 }}>
            {activeTab === "Description" && (
              <div>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, marginBottom: 16 }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  <br /><br />
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                {/* Specs table */}
                <table style={{ width: "60%", borderCollapse: "collapse", marginBottom: 20, fontSize: 13 }}>
                  <tbody>
                    {specs.map((spec, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                        <td style={{ padding: "10px 14px", color: "#888", border: "1px solid #e8e8e8", width: 130 }}>{spec.label}</td>
                        <td style={{ padding: "10px 14px", color: "#333", border: "1px solid #e8e8e8" }}>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Feature checklist */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#555" }}>
                      <span style={{ color: "#26a541" }}>✓</span> {f}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "Reviews" && (
              <div style={{ fontSize: 13, color: "#888", padding: 20, textAlign: "center" }}>No reviews yet.</div>
            )}
            {activeTab === "Shipping" && (
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>
                <p>We offer worldwide shipping. Orders are processed within 1-2 business days.</p>
                <p>Standard shipping: 7-14 business days. Express shipping: 3-5 business days.</p>
              </div>
            )}
            {activeTab === "About seller" && (
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>
                <p><strong>Guanjoi Trading LLC</strong> — Verified seller based in Germany, Berlin.</p>
                <p>Worldwide shipping available. Refund policy applies on all orders.</p>
              </div>
            )}
          </div>
        </div>

        {/* You may like */}
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 16 }}>
          <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 14 }}>You may like</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {youMayLike.map(item => (
              <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", paddingBottom: 12, borderBottom: "1px solid #f0f0f0" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <div style={{ width: 48, height: 48, background: "#f5f5f5", borderRadius: 6, overflow: "hidden", minWidth: 48 }}>
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "#333", lineHeight: 1.4 }}>{item.name}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RELATED PRODUCTS ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px" }}>
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 20 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 16px" }}>Related products</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}>
            {relatedProducts.map(product => (
              <div key={product.id} style={{ cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <div style={{ background: "#f5f5f5", borderRadius: 8, height: 120, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", marginBottom: 8 }}>
                  <img src={product.img} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ fontSize: 12, color: "#333", marginBottom: 4, lineHeight: 1.4 }}>{product.name}</div>
                <div style={{ fontSize: 12, color: "#888" }}>{product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DISCOUNT BANNER ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px" }}>
        <div style={{ borderRadius: 8, overflow: "hidden", background: "linear-gradient(135deg, #1a6de0, #0a4db5)", padding: "28px 36px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: "0 0 6px" }}>Super discount on more than 100 USD</h3>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", margin: 0 }}>Have you ever finally just write dummy info</p>
          </div>
          <button style={{ background: "#ff8c00", color: "#fff", border: "none", borderRadius: 6, padding: "12px 28px", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}>
            Shop now
          </button>
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
