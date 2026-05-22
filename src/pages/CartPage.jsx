import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaAppStore, FaGooglePlay, FaShoppingCart, FaArrowLeft, FaUser, FaCommentDots, FaClipboardList } from "react-icons/fa";
import { SiAmericanexpress, SiMastercard, SiPaypal, SiVisa, SiApplepay } from 'react-icons/si';

const initialCartItems = [
  { id: 1, name: "T-shirts with multiple colors, for men and lady", size: "medium", color: "blue", material: "Plastic", seller: "Artel Market", price: 78.99, qty: 9, img: "/assets/Layout/alibaba/Image/cloth/3.png", selected: true },
  { id: 2, name: "T-shirts with multiple colors, for men and lady", size: "medium", color: "blue", material: "Plastic", seller: "Best factory LLC", price: 39.00, qty: 3, img: "/assets/Layout/alibaba/Image/cloth/5.png", selected: true },
  { id: 3, name: "T-shirts with multiple colors, for men and lady", size: "medium", color: "blue", material: "Plastic", seller: "Artel Market", price: 170.50, qty: 1, img: "/assets/Layout/alibaba/Image/cloth/1.png", selected: true },
];

const savedItems = [
  { id: 1, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, img: "/assets/Image/tech/32.png" },
  { id: 2, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, img: "/assets/Image/tech/33.png" },
  { id: 3, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, img: "/assets/Image/tech/8.png" },
  { id: 4, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, img: "/assets/Image/tech/laptop.png" },
];

const footerLinks = {
  About: ["About Us", "Find store", "Categories", "Blogs"],
  Partnership: ["About Us", "Find store", "Categories", "Blogs"],
  Information: ["Help Center", "Money Refund", "Shipping", "Contact us"],
  "For users": ["Login", "Register", "Settings", "My Orders"],
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [email, setEmail] = useState("");

  // ── SELECT / DESELECT item
  const toggleSelect = (id) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, selected: !item.selected } : item));
  };

  // ── SELECT ALL / DESELECT ALL
  const allSelected = cartItems.every(item => item.selected);
  const toggleSelectAll = () => {
    setCartItems(prev => prev.map(item => ({ ...item, selected: !allSelected })));
  };

  // ── CHANGE QTY
  const changeQty = (id, qty) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, qty: Number(qty) } : item));
  };

  // ── REMOVE ITEM
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // ── REMOVE ALL
  const removeAll = () => setCartItems([]);

  // ── APPLY COUPON
  const applyCoupon = () => {
    if (coupon.trim() !== "") setCouponApplied(true);
  };

  // ── TOTALS (only selected items)
  const selectedItems = cartItems.filter(item => item.selected);
  const subtotal = selectedItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = couponApplied ? 60 : 0;
  const tax = subtotal > 0 ? 14 : 0;
  const total = subtotal - discount + tax;

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f7f7f7", color: "#333", minWidth: 320 }}>

      {/* ── TOP NAV ── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e8e8e8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 700, fontSize: 18, color: "#4096ff" }}>
        <img src="/assets/Layout/Brand/logo-colored.png" alt="Logo" style={{ width: 140, height: 40, objectFit: "contain" }} />

          </div>
          <div style={{ display: "flex", gap: 20, fontSize: 12, color: "#555" }}>
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
        </div>
      </div>

      {/* ── PAGE TITLE ── */}
      <div style={{ maxWidth: 1200, margin: "20px auto 12px", padding: "0 16px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>My cart ({cartItems.length})</h2>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px", display: "grid", gridTemplateColumns: "1fr 280px", gap: 16, alignItems: "start" }}>

        {/* ── LEFT: Cart Items ── */}
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 20 }}>

          {/* Select all row */}
          {cartItems.length > 0 && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid #f0f0f0" }}>
              <input type="checkbox" checked={allSelected} onChange={toggleSelectAll}
                style={{ width: 16, height: 16, cursor: "pointer", accentColor: "#4096ff" }} />
              <span style={{ fontSize: 13, color: "#555" }}>Select all items</span>
            </div>
          )}

          {/* Cart items */}
          {cartItems.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 0", color: "#aaa", fontSize: 15 }}>
              Your cart is empty.
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={item.id}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px 0" }}>

                  {/* Checkbox */}
                  <input type="checkbox" checked={item.selected} onChange={() => toggleSelect(item.id)}
                    style={{ width: 16, height: 16, marginTop: 4, cursor: "pointer", accentColor: "#4096ff" }} />

                  {/* Image */}
                  <div style={{ width: 72, height: 72, minWidth: 72, background: "#f5f5f5", borderRadius: 8, overflow: "hidden" }}>
                    <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{item.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginBottom: 2 }}>
                      Size: {item.size},  Color: {item.color},  Material: {item.material}
                    </div>
                    <div style={{ fontSize: 12, color: "#888", marginBottom: 10 }}>Seller: {item.seller}</div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => removeItem(item.id)}
                        style={{ border: "1px solid #e0e0e0", background: "#fff", color: "#e94560", borderRadius: 5, padding: "4px 12px", fontSize: 12, cursor: "pointer" }}>
                        Remove
                      </button>
                      <button style={{ border: "1px solid #e0e0e0", background: "#fff", color: "#4096ff", borderRadius: 5, padding: "4px 12px", fontSize: 12, cursor: "pointer" }}>
                        Save for later
                      </button>
                    </div>
                  </div>

                  {/* Price + Qty */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10, minWidth: 120 }}>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>${(item.price * item.qty).toFixed(2)}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>${item.price.toFixed(2)} each</div>
                    <select value={item.qty} onChange={e => changeQty(item.id, e.target.value)}
                      style={{ border: "1px solid #e0e0e0", borderRadius: 6, padding: "5px 10px", fontSize: 13, cursor: "pointer", background: "#fff" }}>
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>Qty: {n}</option>)}
                    </select>
                  </div>
                </div>
                {index < cartItems.length - 1 && <div style={{ borderBottom: "1px solid #f0f0f0" }} />}
              </div>
            ))
          )}

          {/* Bottom buttons */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, paddingTop: 16, borderTop: "1px solid #f0f0f0" }}>
            <button style={{ display: "flex", alignItems: "center", gap: 8, background: "#4096ff", color: "#fff", border: "none", borderRadius: 6, padding: "10px 20px", cursor: "pointer", fontSize: 13 }}>
              <FaArrowLeft /> Back to shop
            </button>
            <button onClick={removeAll}
              style={{ background: "#fff", color: "#e94560", border: "1px solid #e0e0e0", borderRadius: 6, padding: "10px 20px", cursor: "pointer", fontSize: 13 }}>
              Remove all
            </button>
          </div>
        </div>

        {/* ── RIGHT: Order Summary ── */}
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 20 }}>

          {/* Coupon */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>Have a coupon?</div>
            <div style={{ display: "flex", gap: 0, border: "1px solid #e0e0e0", borderRadius: 6, overflow: "hidden" }}>
              <input placeholder="Add coupon" value={coupon} onChange={e => setCoupon(e.target.value)}
                style={{ flex: 1, border: "none", outline: "none", padding: "8px 12px", fontSize: 13 }} />
              <button onClick={applyCoupon}
                style={{ background: "#fff", border: "none", borderLeft: "1px solid #e0e0e0", padding: "8px 14px", color: "#4096ff", cursor: "pointer", fontSize: 13, fontWeight: 500 }}>
                Apply
              </button>
            </div>
            {couponApplied && <div style={{ fontSize: 12, color: "#26a541", marginTop: 6 }}>✓ Coupon applied! $60 discount</div>}
          </div>

          <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 16 }}>

            {/* Subtotal */}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 10 }}>
              <span style={{ color: "#666" }}>Subtotal:</span>
              <span style={{ fontWeight: 500 }}>${subtotal.toFixed(2)}</span>
            </div>

            {/* Discount */}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 10 }}>
              <span style={{ color: "#666" }}>Discount:</span>
              <span style={{ color: "#e94560", fontWeight: 500 }}>- ${discount.toFixed(2)}</span>
            </div>

            {/* Tax */}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #f0f0f0" }}>
              <span style={{ color: "#666" }}>Tax:</span>
              <span style={{ color: "#26a541", fontWeight: 500 }}>+ ${tax.toFixed(2)}</span>
            </div>

            {/* Total */}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 700, marginBottom: 16 }}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Checkout button */}
            <button style={{ width: "100%", background: "#26a541", color: "#fff", border: "none", borderRadius: 6, padding: "13px 0", cursor: "pointer", fontSize: 15, fontWeight: 600, marginBottom: 14 }}>
              Checkout
            </button>

            {/* Payment icons */}
            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
              <SiAmericanexpress style={{ fontSize: 28, color: "#2E77BC" }} />
              <SiMastercard style={{ fontSize: 28, color: "#EB001B" }} />
              <SiPaypal style={{ fontSize: 28, color: "#003087" }} />
              <SiVisa style={{ fontSize: 28, color: "#1A1F71" }} />
              <SiApplepay style={{ fontSize: 28, color: "#000" }} />
            </div>

          </div>
        </div>
      </div>

      {/* ── TRUST BADGES ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px" }}>
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: "20px 24px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { icon: "🔒", title: "Secure payment", desc: "Have you ever finally just" },
            { icon: "💬", title: "Customer support", desc: "Have you ever finally just" },
            { icon: "🚚", title: "Free delivery", desc: "Have you ever finally just" },
          ].map((badge, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, background: "#f0f0f0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, minWidth: 44 }}>
                {badge.icon}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{badge.title}</div>
                <div style={{ fontSize: 12, color: "#888" }}>{badge.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SAVED FOR LATER ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto 16px", padding: "0 16px" }}>
        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e8e8e8", padding: 20 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 16px" }}>Saved for later</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {savedItems.map(item => (
              <div key={item.id} style={{ border: "1px solid #e8e8e8", borderRadius: 8, overflow: "hidden", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
              >
                <div style={{ height: 160, background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ padding: "12px 14px" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>${item.price.toFixed(2)}</div>
                  <div style={{ fontSize: 12, color: "#555", marginBottom: 10, lineHeight: 1.4 }}>{item.name}</div>
                  <button style={{ display: "flex", alignItems: "center", gap: 6, border: "1px solid #e0e0e0", background: "#fff", color: "#4096ff", borderRadius: 6, padding: "7px 14px", cursor: "pointer", fontSize: 12, width: "100%", justifyContent: "center" }}>
                    <FaShoppingCart /> Move to cart
                  </button>
                </div>
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
