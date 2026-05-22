import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaCommentDots, FaClipboardList, FaShoppingCart } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";


const categories = [
  "Automobiles", "Clothes and wear", "Home interiors",
  "Computer and tech", "Tools, equipments", "Sports and outdoor",
  "Animal and pets", "Machinery tools", "More category"
];

const deals = [
  { name: "Smart watches", discount: "-25%", bg: "#f0f0f0" },
  { name: "Laptops", discount: "-15%", bg: "#f0f0f0" },
  { name: "GoPro cameras", discount: "-40%", bg: "#f0f0f0" },
  { name: "Headphones", discount: "-25%", bg: "#f0f0f0" },
  { name: "Canon cameras", discount: "-25%", bg: "#f0f0f0" },
];

const homeOutdoor = [
  { name: "Soft chairs", price: "From",price2: "USD 19", img: "/assets/Image/Interior/1.png" },
  { name: "Sofa & chair", price: "From",price2: "USD 19", img:"/assets/Image/Interior/6.png" },
  { name: "Kitchen dishes", price: "From",price2: "USD 19", img: "/assets/Image/Interior/93.png" },
  { name: "Smart watches", price: "From",price2: "USD 18", img: "/assets/Image/Interior/3.png" },
  { name: "Kitchen mixer", price: "From",price2: "USD 100", img: "/assets/Image/Interior/9.png" },
  { name: "Blenders", price: "From",price2: "USD 39", img: "/assets/Image/Interior/8.png" },
  { name: "Home appliance", price: "From",price2: "USD 19", img: "/assets/Image/Interior/7.png" },
  { name: "Coffee maker", price: "From",price2: "USD 10", img: "/assets/Image/Interior/89.png" },
];

const electronics = [
  { name: "Smart watches", price: "From",price2: "USD 19", img: "/assets/Image/tech/8.png" },
  { name: "Cameras", price: "From",price2: "USD 89", img: "/assets/Image/tech/camera.png" },
  { name: "Headphones", price: "From",price2: "USD 70", img: "/assets/Image/tech/86.png" },
  { name: "Smart watches", price: "From",price2: "USD 90", img: "/assets/Image/tech/85.png" },
  { name: "Gaming set", price: "From",price2: "USD 35", img: "/assets/Image/tech/headphone.png" },
  { name: "Laptops & PC", price: "From",price2: "USD 340", img: "/assets/Image/tech/laptop.png" },
  { name: "Smartphones", price: "From",price2: "USD 19", img: "/assets/Image/tech/32.png" },
  { name: "Electric kettle", price: "From",price2: "USD 240", img: "/assets/Image/tech/33.png" },
];

const recommended = [
  {price: "$10.30", name: "T-shirts with multiple colors, for men", img: "/assets/Layout/alibaba/Image/cloth/3.png" },
  {price: "$10.30", name: "Jeans shorts for men blue color", img: "/assets/Layout/alibaba/Image/cloth/1.png"  },
  {price: "$12.50", name: "Brown winter coat medium size",img: "/assets/Layout/alibaba/Image/cloth/6.png" },
  {price: "$34.00",name: "Jeans bag for travel for men",img: "/assets/Layout/alibaba/Image/cloth/4.png" },
  {price: "$99.00",name: "Leather wallet", img: "/assets/Layout/alibaba/Image/cloth/5.png" },
  {price: "$9.99", name: "Canon camera black, 100x zoom", img: "/assets/Layout/alibaba/Image/cloth/2.png" },
  {price: "$8.99", name: "Headset for gaming with mic", img: "/assets/Layout/alibaba/Image/tech/86.png" },
  { price: "$10.30", name: "Smartwatch silver color modern", img: "/assets/Layout/alibaba/Image/cloth/1.png" },
  { price: "$10.30", name: "Blue wallet for men leather material", img: "/assets/Layout/alibaba/Image/interior/90.png" },
  { price: "$80.95", name: "Jeans bag for travel for men", img: "/assets/Layout/alibaba/Image/tech/85.png" },
];

const services = [
  { img: "/assets/Image/backgrounds/133.png", title: "Source from Industry Hubs" },
  { img: "/assets/Image/backgrounds/122.png", title: "Customize Your Products" },
  { img: "/assets/Image/backgrounds/106.png", title: "Fast, reliable shipping by ocean or air" },
  { img: "/assets/Image/backgrounds/107.png", title: "Product monitoring and inspection" },
];

const suppliers = [
  { country: "Arabic Emirates", domain: "shopname.ae",img: "/assets/Layout1/Image/flags/AE@2x.png" },
  { country: "Australia", domain: "shopname.com.au", img: "/assets/Layout1/Image/flags/icon.png" },
  { country: "United States", domain: "shopname.us", img: "/assets/Layout1/Image/flags/US@2x.png" },
  { country: "Russia", domain: "shopname.ru", img: "/assets/Layout1/Image/flags/RU@2x.png" },
  { country: "Italy", domain: "shopname.it", img: "/assets/Layout1/Image/flags/IT@2x.png" },
  { country: "France", domain: "shopname.com.fr", img: "/assets/Layout1/Image/flags/FR@2x.png" },
  { country: "Arabic Emirates", domain: "shopname.ae",img: "/assets/Layout1/Image/flags/AE@2x.png"},
  { country: "China", domain: "shopname.ae", img: "/assets/Layout1/Image/flags/CN@2x.png" },
  { country: "Great Britain", domain: "shopname.co.uk", img: "/assets/Layout1/Image/flags/GB@2x.png" },
  { country: "Germany", domain: "shopname.de", img: "/assets/Layout1/Image/flags/DE@2x.png" },

];

const footerLinks = {
  About: ["About Us", "Find store", "Categories", "Blogs"],
  Partnership: ["About Us", "Find store", "Categories", "Blogs"],
  Information: ["Help Center", "Money Refund", "Shipping", "Contact us"],
  "For users": ["Login", "Register", "Settings", "My Orders"],
};

function ProductCard({ name, price, img }) {
  return (
    <div style={{
      border: "1px solid #e8e8e8", borderRadius: 8, overflow: "hidden",
      background: "#fff", cursor: "pointer", transition: "box-shadow 0.2s", display: "flex", flexDirection: "column", minHeight: 260
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
    >
      <div style={{ background: "#f5f5f5", minHeight: 140, display: "flex", alignItems: "center", justifyContent: "center", padding: 12, overflow: "hidden" }}>
        {img ? (
          <img src={img} alt={name} style={{ maxWidth: "100%", maxHeight: 120, objectFit: "contain" }} />
        ) : (
          <span style={{ color: "#aaa", fontSize: 12 }}>🛍️</span>
        )}
      </div>
      <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", marginTop: "auto" }}>
        <div style={{ fontSize: 12, color: "#333", marginBottom: 6, minHeight: 32 }}>{name}</div>
        <div style={{ fontSize: 12, color: "#888" }}>{price}</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All category");
  const [activeCategory, setActiveCategory] = useState("Automobiles");
  const [inquiryText, setInquiryText] = useState("");
  const [email, setEmail] = useState("");

  const [timer] = useState({ days: "04", hours: "13", mins: "34", secs: "56" });

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f7f7f7", color: "#333", minWidth: 320 }}>

      {/* ── TOP NAV ── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e8e8e8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 700, fontSize: 18, color: "#4096ff", minWidth: 90 }}>
            <img src="/assets/Layout/Brand/logo-colored.png" alt="Logo" style={{ width: 140, height: 40, objectFit: "contain" }} />
          </div>

          {/* Search bar */}
          <div style={{ flex: 1, display: "flex", minWidth: 200, border: "2px solid #0D6EFD", borderRadius: 6, overflow: "hidden" }}>
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search"
              style={{ flex: 1, border: "none", outline: "none", padding: "8px 12px", fontSize: 13 }}
            />
            <select value={category} onChange={e => setCategory(e.target.value)}
              style={{ border: "none", borderLeft: "2px solid #0D6EFD",color:"black", padding: "0 8px", fontSize: 14, background: "#fff", cursor: "pointer" }}>
              <option>All category</option>
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
            <button style={{ background: "#0D6EFD", color: "#fff", border: "none", padding: "0 16px", cursor: "pointer", fontSize: 15 }}>
              Search
            </button>
          </div>

          {/* Right icons */}
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

        {/* Sub nav */}
        <div style={{ background: "#fff", borderTop: "1px solid #f0f0f0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "8px 16px", display: "flex", gap: 24, fontSize: 14, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer", fontWeight: 500 }}>☰ All category</span>
            {["Hot offers", "Gift boxes", "Projects", "Menu item"].map(item => (
              <span key={item} style={{ cursor: "pointer", color: "#1C1C1C" }}>{item}</span>
            ))}
            <span style={{ cursor: "pointer", color: "#1C1C1C" }}>Help ▾</span>
            <span style={{ marginLeft: "auto", fontSize: 12, color: "#1C1C1C",display: "inline-flex", alignItems: "center", gap: 4 }}>English,USD<img src="/assets/Layout/Form/input-group/Icon/control/Vector.png" alt="United States" style={{ width: 10, height: 7, objectFit: "cover", borderRadius: 2 }} /></span>
            <span style={{ fontSize: 12, color: "#1C1C1C",display: "inline-flex", alignItems: "center", gap: 4 }}>Ship to <img src="/assets/Layout1/Image/flags/DE@2x.png" alt="Germany" style={{ width: 16, height: 11, objectFit: "cover", }} />
            <img src="/assets/Layout/Form/input-group/Icon/control/Vector.png" alt="dropdown" style={{ width: 10, height: 7, objectFit: "cover", borderRadius: 2 }} /></span>
          </div>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <div style={{ maxWidth: 1200, margin: "16px auto", padding: "0 16px", display: "grid", gridTemplateColumns: "200px 1fr 200px", gap: 12 }}>

        {/* Left: Category sidebar */}
        <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 8, padding: "8px 0" }}>
          {categories.map(cat => (
            <div key={cat} onClick={() => setActiveCategory(cat)}
              style={{
                padding: "9px 16px", fontSize: 13, cursor: "pointer",
                background: activeCategory === cat ? "#e6f0ff" : "transparent",
                color: activeCategory === cat ? "#4096ff" : "#333",
                borderLeft: activeCategory === cat ? "3px solid #4096ff" : "3px solid transparent"
              }}>
              {cat}
            </div>
          ))}
        </div>

        {/* Center: Hero banner */}
        <div style={{ backgroundImage: "url('/assets/Image/backgrounds/banner.png')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: 8, padding: "32px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
         <div>
            <p style={{fontSize: 26, color: "#1C1C1C", margin: "0 0 2px" }}>Latest trending</p>
            <h2 style={{ fontSize: 30, fontWeight: 700, margin: "0 0 16px", lineHeight: 1 }}>Electronic items</h2>
            <button style={{ background: "#fff", border: "1px solid #ccc", borderRadius: 6, padding: "8px 20px", cursor: "pointer", fontSize: 13 }}>
              Learn more
            </button>
          
          
          </div>
        </div>

        {/* Right: Login box */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: "#E3F0FF", border: "1px solid #e8e8e8", borderRadius: 8, padding: 14, fontSize: 13 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <FaUser style={{ fontSize: 24, color: "#555" }} />
              <div>
                <div style={{ fontWeight: 500, fontSize: 13 }}>Hi, user</div>
                <div style={{ color: "#888", fontSize: 12 }}>let's get started</div>
              </div>
            </div>
            <button style={{ width: "100%", background: "#127FFF", color: "#fff", border: "none", borderRadius: 5, padding: "7px 0", marginBottom: 6, cursor: "pointer", fontSize: 13 }}>
              Join now
            </button>
            <button style={{ width: "100%", background: "#fff", border: "1px solid #d0d0d0", borderRadius: 5, padding: "7px 0", cursor: "pointer", fontSize: 13 }}>
              Log in
            </button>
          </div>
          <div style={{ background: "#F38332", color: "#fff",width: 200,height: 95,borderRadius: 8, padding: 10, fontSize: 14,fontWeight: 400 }}>
            Get US $10 off
            <br />
            with a new<br />
            supplier
          </div>
          <div style={{ background: "#55BDC3", color: "#fff",width: 200,height: 95, borderRadius: 8, padding: 10, fontSize: 14,fonrWeight: 400 }}>
            Send quotes with<br />
            supplier<br />
            preferences
          </div>
        </div>
      </div>

      {/* ── DEALS & OFFERS ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px" }}>
        <div style={{ background: "#fff",width: 1170,height: 230, borderRadius: 8, border: "1px solid #e8e8e8", padding: 18, display: "flex", gap: 16 }}>
          {/* Timer */}
          <div style={{ minWidth: 140 }}>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Deals and offers</div>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 8 }}>Hygiene equipments</div>
            <div style={{ display: "flex", gap: 4 }}>
              {Object.entries(timer).map(([label, val]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ background: "#333", color: "#fff", borderRadius: 4, padding: "4px 6px", fontSize: 13, fontWeight: 600 }}>{val}</div>
                  <div style={{ fontSize: 9, color: "#888", marginTop: 2 }}>{label.charAt(0).toUpperCase() + label.slice(1)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Deal items */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, flex: 1 }}>
            {deals.map((deal, i) => (
              <div key={i} style={{ textAlign: "center", cursor: "pointer" }}>
                <div style={{ background: "#f5f5f5", borderRadius: 8, height: 80, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 6 }}>
                  <img src={[
                    "/assets/Image/tech/8.png",
                    "/assets/Image/tech/laptop.png",
                    "/assets/Image/tech/camera.png",
                    "/assets/Image/tech/headphone.png",
                    "/assets/Image/tech/canon.png"
                    ][i]} alt={deal.name} style={{ width: 140, height: 140, objectFit:"contain",marginTop: 60 }} />
                </div>
                <div style={{ fontSize: 16, color: "#1C1C1C", marginTop: 70 }}>{deal.name}</div>
                <div style={{ fontSize: 10, background: "#FFE3E3", color: "#EB001B", borderRadius: 8, padding: "1px 6px", display: "inline-block", marginTop: 8 }}>
                  {deal.discount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOME & OUTDOOR ── */}
      <div style={{ maxWidth: 1200,height:257, margin: "0 auto 16px", padding: "0 16px" }}>
        <div style={{background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", display: "grid", gridTemplateColumns: "180px 1fr", overflow: "hidden" }}>
          <div style={{backgroundImage: "url('/assets/Image/backgrounds/sofa.png')", background: "cover",backgroundPosition:"center", padding: 20, display: "flex", flexDirection: "column" }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Home and <br />outdoor</div>
            </div>
            <button style={{background: "#fff", border: "1px solid #ccc",color:"#1C1C1C",fontWeight:500,height:30,width:100, borderRadius: 6, fontSize: 12, cursor: "pointer",marginTop:8,marginLeft:-4 }}>
              Source now
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderLeft: "1px solid #f0f0f0" }}>
            {homeOutdoor.map((item, i) => (
              <div key={i} style={{ padding: 14, borderRight: i % 4 !== 3 ? "1px solid #f0f0f0" : "none", borderBottom: i < 4 ? "1px solid #f0f0f0" : "none", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = "#fafafa"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <div style={{ fontSize: 16, color: "#1C1C1C", fontWeight: 500 }}>{item.name}</div>
                <div style={{ fontSize: 13, color: "#8B96A5", marginTop: 2 }}>{item.price} <br />{item.price2}</div>
                <img src={item.img} alt={item.name} style={{ width: 82, height: 82, objectFit:"cover", marginTop: -47,marginLeft:150 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONSUMER ELECTRONICS ── */}
      <div style={{ maxWidth: 1200,height:257, margin: "0 auto 16px", padding: "0 16px" }}>
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", display: "grid", gridTemplateColumns: "180px 1fr", overflow: "hidden" }}>
          <div style={{backgroundImage: "url('/assets/Image/backgrounds/98.png')", background: "cover",backgroundPosition:"center", padding: 20, display: "flex", flexDirection: "column"}}>
            <div>
              <div style={{fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Consumer<br/> electronics and<br/> gadgets</div>
            </div>
            <button style={{ background: "#fff", border: "1px solid #ccc",color:"#1C1C1C",fontWeight:500,height:30,width:100, borderRadius: 6, fontSize: 12, cursor: "pointer",marginTop:8,marginLeft:-4 }}>
              Source now
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderLeft: "1px solid #f0f0f0" }}>
            {electronics.map((item, i) => (
              <div key={i} style={{ padding: 14, borderRight: i % 4 !== 3 ? "1px solid #f0f0f0" : "none", borderBottom: i < 4 ? "1px solid #f0f0f0" : "none", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = "#fafafa"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <div style={{ fontSize: 11, color: "#444", fontWeight: 500 }}>{item.name}</div>
                <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{item.price} <br />{item.price2}</div>
                <img src={item.img} alt={item.name} style={{ width: 82, height: 82, objectFit:"cover", marginTop: -35,marginLeft:150 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INQUIRY BANNER ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px" }}>
  <div style={{ borderRadius: 12, overflow: "hidden", position: "relative", minHeight: 420,
    backgroundImage: "url('/assets/Image/backgrounds/982.png')",
    backgroundSize: "cover", backgroundPosition: "center",
    display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center"
  }}>
    {/* Blue overlay on left */}
    <div style={{padding: "50px 40px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
      <h3 style={{fontSize: 28, fontWeight: 700, margin: "0 0 16px", lineHeight: 1.3, color: "#fff" }}>
        An easy way to send<br/> requests to all suppliers
      </h3>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.8, margin: 0 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing <br/>elit, sed do eiusmod tempor incididunt.
      </p>
    </div>

    {/* Right: Form */}
    <div style={{ display: "flex", justifyContent: "center", padding: "30px 40px" }}>
      <div style={{ background: "#fff", borderRadius: 12, padding: "28px 24px", width: "100%", maxWidth: 480 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 16, color: "#222" }}>Send quote to suppliers</div>

        {/* Item name input */}
        <input
          placeholder="What item you need?"
          style={{width: "100%", border: "1px solid #e0e0e0", borderRadius: 6, padding: "12px 14px", fontSize: 13, marginBottom: 12, boxSizing: "border-box", outline: "none" }}
        />

        {/* Details textarea */}
        <textarea
          placeholder="Type more details"
          value={inquiryText}
          onChange={e => setInquiryText(e.target.value)}
          rows={4}
          style={{ width: "100%", border: "1px solid #e0e0e0", borderRadius: 6, padding: "12px 14px", fontSize: 13, marginBottom: 12, boxSizing: "border-box", resize: "vertical", outline: "none" }}
        />

        {/* Quantity row */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          <input
            placeholder="Quantity"
            style={{ flex: 1, border: "1px solid #e0e0e0", borderRadius: 6, padding: "10px 14px", fontSize: 13, outline: "none" }}
          />
          <select style={{ border: "1px solid #e0e0e0", borderRadius: 6, padding: "10px 14px", fontSize: 13, background: "#fff", cursor: "pointer" }}>
            <option>Pcs</option>
            <option>Kg</option>
            <option>Boxes</option>
          </select>
        </div>

        <button style={{ background: "#4096ff", color: "#fff", border: "none", borderRadius: 6, padding: "12px 28px", cursor: "pointer", fontSize: 14, fontWeight: 500 }}>
          Send inquiry
        </button>
      </div>
    </div>

  </div>
</div>

      {/* ── RECOMMENDED ITEMS ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px" }}>
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 20 }}>
          <h3 style={{ fontSize: 24,fontWeight: 600, margin: "0 0 16px" }}>Recommended items</h3>
          <div style={{height:600,display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
            {recommended.map((item, i) => (
              <ProductCard key={i} price={item.price} name={item.name} img={item.img} />
            ))}
          </div>
        </div>
      </div>

      {/* ── EXTRA SERVICES ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px" }}>
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 20 }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Our extra services</h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {services.map((s, i) => (
              <div key={i} style={{ position: "relative", borderRadius: 8, overflow: "hidden", cursor: "pointer", minHeight: 180, backgroundImage: `url(${s.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <button onClick={() => navigate(`/service/${i}`)} style={{ position: "absolute", bottom: 52, right: 10, width: 38, height: 38, borderRadius: "50%", background: "#fff", border: "none", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", cursor: "pointer", fontSize: 20, fontWeight: "bold", color: "#333", zIndex: 10 }}>
                  ›
                </button>
                <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "14px 12px", background: "rgba(255,255,255,0.92)" }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{s.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SUPPLIERS BY REGION ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px" }}>
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 20 }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Suppliers by region</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }}>
            {suppliers.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", border: "1px solid #f0f0f0", borderRadius: 6, cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = "#fafafa"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <img src={s.img} alt={s.country} style={{ width: 30, height: 30 }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{s.country}</div>
                  <div style={{ fontSize: 11, color: "#888" }}>{s.domain}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── NEWSLETTER ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px" }}>
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: "32px 16px", textAlign: "center" }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px" }}>Subscribe on our newsletter</h3>
          <p style={{ fontSize: 13, color: "#888", margin: "0 0 16px" }}>Get daily news on upcoming offers from many suppliers all over the world</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 0, maxWidth: 360, margin: "0 auto" }}>
            <input placeholder="✉  Email" value={email} onChange={e => setEmail(e.target.value)}
              style={{ flex: 1, border: "1px solid #d0d0d0", borderRight: "none", borderRadius: "6px 0 0 6px", padding: "10px 14px", fontSize: 13, outline: "none" }} />
            <button style={{ background: "#4096ff", color: "#fff", border: "none", borderRadius: "0 6px 6px 0", padding: "10px 20px", cursor: "pointer", fontSize: 13 }}>
              Subscribe
            </button>
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
