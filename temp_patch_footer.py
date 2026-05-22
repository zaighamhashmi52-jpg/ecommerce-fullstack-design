from pathlib import Path
path = Path('src/pages/HomePage.js')
text = path.read_text(encoding='utf-8')
old = '''              <div style={{ display: "flex", gap: 8, fontSize: 16 }}>
                {['🐦', '📘', '💼', '📸', '▶️'].map((icon, i) => (
                  <span key={i} style={{ cursor: "pointer" }}>{icon}</span>
                ))}
              </div>
'''
new = '''              <div style={{ display: "flex", gap: 8, fontSize: 16 }}>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecoration: "none", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.1)", borderRadius: 6 }}>
                  📘
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecoration: "none", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.1)", borderRadius: 6 }}>
                  📸
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecoration: "none", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.1)", borderRadius: 6 }}>
                  🐦
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecoration: "none", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.1)", borderRadius: 6 }}>
                  💼
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecoration: "none", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.1)", borderRadius: 6 }}>
                  ▶️
                </a>
              </div>
'''
if old not in text:
    raise ValueError('Old block not found')
path.write_text(text.replace(old, new), encoding='utf-8')
print('patched')
