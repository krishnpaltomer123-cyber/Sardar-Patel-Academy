
import React, { useState } from "react";

const teacherCards = [
  {
    name: "Rohit Sir",
    subject: "Computer Operator",
    exp: "5 years experience",
    img: "/assets/faculty_Rohit.jpeg",
  },

 {
    name: "Satish Sir",
    subject: "Social science & English",
    exp: "15 years experience",
    img: "/assets/faculty_Satish.jpeg",
  },

  {
    name: "Neeraj Sir",
    subject: "Maths",
    exp: "5 years experience",
    img: "/assets/faculty_Neeraj.jpeg",
  },

  {
    name: "Sneha Ma'am",
    subject: "Biology",
    exp: "12 years experience",
    img: "/assets/faculty_sneha.jpeg",
  },
  {
     name: "Ankit Sir",
    subject: "Maths & Economics",
    exp: "5 years experience",
    img: "/assets/faculty_ankit.jpeg",
  },
  {
    name: "Shivprasad Dangi Sir",
    subject: "Physics",
    exp: "10 years experience",
    img: "/assets/faculty_shivprasad.jpeg",

  },
  {
    name: "Shobha Ma'am",
    subject: "Hindi",
    exp: "12 years experience",
    img: "/assets/faculty_shobha.jpeg",
  },

  {
    name: "Rahul Sir",
    subject: "English",
    exp: "5 years experience",
    img: "/assets/faculty_Rahul.jpeg",
  },

  {
    name: "Pawan Sir",
    subject: "Sports Teacher",
    exp: "Activity & fitness training",
    img: "/assets/faculty_pawan.jpeg",
  },

  {
    name: "Krishnpal Sir",
    subject: "Business Studies",
    exp: "3 years experience",
    img: "/assets/faculty_krishnpal.png",
  },
];

const courses = [
  "NURSERY",
  "LKG",
  "UKG",
  "Class 1 to 12",
  "Biology",
  "Maths",
  "Commerce",
  "Arts",
];

const stats = [
  { value: "1,200+", label: "Students Enrolled" },
  { value: "30", label: "Total Teachers" },
  { value: "98%", label: "Result" },
];

const gallery = [
  {
    title: "School Entrance",
    tag: "Main gate and campus welcome area",
    img: "/assets/gallery_school.jpeg",
  },
  {
    title: "Big Campus",
    tag: "Open space for activities and sports",
    img: "/assets/gallery_campus.jpeg",
  },
  {
    title: "Playground",
    tag: "Children-friendly play zone",
    img: "/assets/gallery_playground.jpeg",
  },
  {
    title: "School Building",
    tag: "Classrooms and learning environment",
    img: "/assets/building.jpeg",
  },

  {
    title: "Staff",
    img: "/assets/staff.jpeg",
  },
];

const directors = ["Suresh Suman", "Shivcharan Dangi", "Dinesh Gurjar"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Faculty", "#faculty"],
    ["Courses", "#courses"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="page">
      <style>{`
        :root {
          --blue-900: #0a1f5e;
          --blue-700: #0f62fe;
          --blue-100: #eaf2ff;
          --text: #0f172a;
          --muted: #64748b;
          --border: #e5ebf5;
          --bg: #f4f8ff;
          --card: #fff;
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Arial, Helvetica, sans-serif; background: var(--bg); color: var(--text); }
        a { text-decoration: none; color: inherit; }
        button, input, textarea { font: inherit; }
        .container { width: min(1200px, calc(100% - 24px)); margin: 0 auto; }

        .navbar {
          position: sticky; top: 0; z-index: 50;
          background: rgba(255,255,255,.96);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; padding: 14px 0; flex-wrap: wrap;
        }
        .brand { display: flex; align-items: center; gap: 12px; min-width: 0; }
        .logo {
          width: 48px; height: 48px; border-radius: 16px; overflow: hidden;
          display: grid; place-items: center; background: linear-gradient(135deg, var(--blue-700), #00b7ff);
          color: #fff; font-weight: 900; flex: 0 0 auto; box-shadow: 0 12px 24px rgba(15,98,254,.2);
        }
        .logo img { width: 100%; height: 100%; object-fit: cover; }
        .brand h1 {
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 900;
  color: #e60000;
  word-spacing: 4px;
  letter-spacing: 0.5px;
}
        .brand p { margin: 4px 0 0; font-size: 12px; color: var(--muted); }
        .nav-links { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; justify-content: center; }
        .nav-links a {
          color: #334155; font-weight: 700; padding: 10px 12px; border-radius: 12px;
        }
        .nav-links a:hover { background: var(--blue-100); color: var(--blue-700); }
        .call-btn {
  background: var(--blue-700);
  color: #fff;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  box-shadow: 0 6px 14px rgba(15,98,254,.18);
}
  .call-btn:hover{
    border:none;
}

.call-btn:focus{
    outline:none;
    border:none;
}

.call-btn:active{
    border:none;
}
        .menu-btn {
          display: none; border: 1px solid var(--border); background: #427cc9; border-radius: 14px;
          width: 44px; height: 44px; align-items: center; justify-content: center; cursor: pointer;
        }
        .mobile-nav { display: none; border-top: 1px solid var(--border); background: #4a86da; }
        .mobile-nav.open { display: block; }
        .mobile-nav .inner { display: grid; gap: 8px; padding: 12px 0 16px; }
        .mobile-nav a {
          padding: 12px 14px; border-radius: 12px; font-weight: 700; color: #334155; background: #f8fbff;
        }

        .hero {
          background: linear-gradient(135deg, var(--blue-900), var(--blue-700) 55%, #1ea7ff);
          color: #fff; padding: 56px 0; overflow: hidden;
        }
        .hero-grid {
          display: grid; grid-template-columns: 1.05fr .95fr; gap: 28px; align-items: center;
        }
        .badge {
          display: inline-block; background: rgba(255,255,255,.14);
          border: 1px solid rgba(255,255,255,.2); padding: 8px 14px; border-radius: 999px;
          font-size: 13px; margin-bottom: 16px; font-weight: 800;
        }
        .hero h2 {
          margin: 0; font-size: clamp(34px, 5vw, 58px); line-height: 1.02; letter-spacing: -.03em;
        }
        .hero p { margin: 16px 0 0; max-width: 650px; font-size: 16px; line-height: 1.8; color: rgba(255,255,255,.92); }
        .hero-actions { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }
        .white-btn, .ghost-btn {
          padding: 12px 18px; border-radius: 16px; font-weight: 900; display: inline-flex; align-items: center; justify-content: center;
        }
        .white-btn { background: #fff; color: var(--blue-700); }
        .ghost-btn { border: 1px solid rgba(255,255,255,.28); color: #fff; background: rgba(255,255,255,.08); }
        .pill-row { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; }
        .pill {
          background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.16);
          padding: 8px 12px; border-radius: 999px; font-size: 13px; font-weight: 700;
        }

        .hero-card {
          background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.18);
          border-radius: 30px; padding: 18px; box-shadow: 0 24px 60px rgba(0,0,0,.16);
        }
        .poster {
          min-height: 440px; border-radius: 24px; overflow: hidden;
          background: rgba(255,255,255,.06); position: relative;
        }
        .poster img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .poster-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(10,31,94,.12), rgba(10,31,94,.55));
          display: flex; flex-direction: column; justify-content: space-between; padding: 18px;
        }
        .poster-box {
          border-radius: 18px; background: rgba(255,255,255,.15); padding: 14px 16px;
          border: 1px solid rgba(255,255,255,.14); color: #fff; backdrop-filter: blur(8px);
        }
        .poster-box strong { display: block; font-size: 15px; margin-bottom: 6px; }
        .poster-box span { font-size: 13px; opacity: .96; line-height: 1.6; }
        .poster-top {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }
        .poster-bottom {
          display: grid; gap: 12px;
        }
        .poster-note {
          background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.16);
          border-radius: 18px; padding: 14px 16px; font-weight: 800; line-height: 1.5; color: #fff;
        }

        .section { padding: 60px 0; }
        .section h3 { margin: 0; font-size: clamp(26px, 3vw, 40px); letter-spacing: -.02em; }
        .section p.lead{
    max-width:1000px;
    margin:12px auto 0;
    color:var(--muted);
    line-height:1.8;
    text-align:center;
}

        .info-grid, .features, .teacher-grid, .course-grid, .gallery-grid, .contact-wrap { display: grid; gap: 16px; }
        .info-grid { grid-template-columns: repeat(4, 1fr); margin-top: 24px; }
        .features { grid-template-columns: repeat(4, 1fr); margin-top: 26px; }
        .teacher-grid { grid-template-columns: repeat(3, 1fr); margin-top: 26px; }
        .course-grid { grid-template-columns: repeat(4, 1fr); margin-top: 24px; }
        .gallery-grid { grid-template-columns: repeat(4, 1fr); margin-top: 24px; }
        .contact-wrap { grid-template-columns: 1fr 1fr; margin-top: 26px; }

        .info-card, .feature-card, .teacher, .course, .gallery-item, .contact-panel {
          background: var(--card); border: 1px solid var(--border); border-radius: 24px;
          box-shadow: 0 10px 30px rgba(15,23,42,.05);
        }
        .info-card { padding: 18px; }
        .info-card .label {
          font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: .08em; font-weight: 800;
        }
        .info-card .value { margin-top: 8px; font-size: 16px; font-weight: 900; line-height: 1.5; }
        .feature-card { padding: 20px; }
        .icon {
          width: 46px; height: 46px; border-radius: 16px; display: grid; place-items: center;
          background: var(--blue-100); color: var(--blue-700); font-size: 20px; font-weight: 900;
        }
        .feature-card h4, .teacher h4 { margin: 14px 0 6px; font-size: 18px; }
        .feature-card p, .teacher p { margin: 0; color: var(--muted); line-height: 1.7; font-size: 14px; }

        .teacher { overflow: hidden; }
        .teacher-photo { height: 220px; overflow: hidden; }
        .teacher-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .teacher-body { padding: 18px; }
        .teacher-body .sub { color: var(--blue-700); font-weight: 800; margin-top: 2px; }
        .teacher-body .exp { color: var(--muted); margin-top: 8px; font-size: 14px; }

        .course { padding: 16px; font-weight: 900; text-align: center; background: linear-gradient(180deg, #fff, #f8fbff); }
        .gallery-item { overflow: hidden; }
        .gallery-img { height: 200px; overflow: hidden; }
        .gallery-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .gallery-caption { padding: 14px 16px 6px; font-weight: 900; }
        .gallery-tag { display: block; padding: 0 16px 16px; color: var(--muted); font-size: 13px; line-height: 1.5; }

        .contact-panel { padding: 22px; }
        .contact-item {
          display: flex; gap: 12px; align-items: flex-start; margin-top: 14px; padding: 14px;
          border-radius: 18px; background: #f8fbff;
        }
        .contact-item b { display: block; margin-bottom: 4px; }
        .form { display: grid; gap: 12px; }
        .input {
          width: 100%; padding: 14px 16px; border-radius: 14px; border: 1px solid #dbe3f1;
          outline: none; font-size: 14px;
        }
        .input:focus { border-color: var(--blue-700); box-shadow: 0 0 0 4px rgba(15,98,254,.12); }
        .submit {
          border: none; background: var(--blue-700); color: #fff; padding: 14px 16px;
          border-radius: 14px; font-weight: 900; cursor: pointer;
        }

        .director-row { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; }
        .director-pill {
          background: white; color: var(--blue-700); border: 1px solid var(--border);
          padding: 10px 14px; border-radius: 999px; font-weight: 800;
        }

       .floating-call{
position:fixed;
right:20px;
bottom:90px;
width:60px;
height:60px;
background:#0a66ff;
color:#fff;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:28px;
text-decoration:none;
box-shadow:0 8px 20px rgba(0,0,0,.25);
z-index:9999;
transition:.3s;
}

.whatsapp-float{
position:fixed;
right:20px;
bottom:20px;
width:60px;
height:60px;
background:#25D366;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
box-shadow:0 8px 20px rgba(0,0,0,.25);
z-index:9999;
transition:.3s;
}

.whatsapp-float:hover{
transform:scale(1.1);
background:#1ebe5d;
}

.whatsapp-float img{
width:30px;
height:30px;
display:block;
}

.floating-call:hover{
transform:scale(1.1);
background:#0054d6;
}

{/* Floating WhatsApp */}
<a
  href="https://wa.me/919753884199"
  className="floatingwhatsapp-float"
 
>
  <img src="/assets/whatsapp.png" width="30" alt="WhatsApp" />
</a>

.floating-call:hover{
transform:scale(1.1);
background:#1ebe5d;
}

        .footer {
          padding: 24px 0 30px; text-align: center; color: var(--muted);
          border-top: 1px solid var(--border); background: #fff;
        }

        @media (max-width: 980px) {
          .hero-grid, .info-grid, .features, .teacher-grid, .course-grid, .gallery-grid, .contact-wrap {
            grid-template-columns: 1fr 1fr;
          }
          .nav-links { display: none; }
          .menu-btn { display: inline-flex; }
        }

        @media (max-width: 680px) {
         .nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  flex-wrap: nowrap;
}
          .brand h1 { font-size: 15px; }
          .brand p { font-size: 11px; }
          .call-btn {
  background: var(--blue-700);
  color: #fff;
  padding: 12px 24px;
  border-radius: 14px;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
          .hero { padding: 34px 0 38px; }
          .hero-grid, .info-grid, .features, .teacher-grid, .course-grid, .gallery-grid, .contact-wrap, .poster-top {
            grid-template-columns: 1fr;
          }
          .section { padding: 42px 0; }
          .poster { min-height: 330px; }
          .teacher-photo { height: 180px; }
        }
          .director-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;
}

.director-card,
.principal-card {
  background: white;
  border: 1px solid #e5ebf5;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(15,23,42,0.05);
}

.director-img,
.principal-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
}

.director-body,
.principal-body {
  padding: 18px;
  text-align: center;
}

.director-body h4,
.principal-body h4 {
  margin: 0;
  font-size: 18px;
  font-weight: 900;
}

.director-body p,
.principal-body p {
  margin: 8px 0 0;
  color: #64748b;
  font-weight: 700;
}

.principal-card {
  max-width: 360px;
  margin-top: 24px;
}

@media (max-width: 980px) {
  .director-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 680px) {
  .director-grid {
    grid-template-columns: 1fr;
  }

  .principal-card {
    max-width: 100%;
  }
}
.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 18px;
  max-width: 560px;
}

.stat-card {
  background: #1f6fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 18px;
  padding: 18px 14px;
  text-align: center;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

.stat-value {
  color: white;
  font-size: 28px;
  font-weight: 900;
  line-height: 1;
}

.stat-label {
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
  font-weight: 700;
}

@media (max-width: 680px) {
  .stats-row {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
}
     `}</style>

      <header className="navbar">
        <div className="container nav-inner">
          <div className="brand">
            <div className="logo">
              <img src="/assets/logo.jpeg" alt="School logo" />
            </div>
            <div>
              <h1>Sardar Patel Academy Khilchipur</h1>
              <p>Dangi Chhatrawas, Khilchipur, Rajgarh (M.P.) 465679</p>
            </div>
          </div>

          <nav className="nav-links">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </nav>

          

          <button className="menu-btn" onClick={() => setMenuOpen((s) => !s)} aria-label="Toggle menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <div className="container inner">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          
          </div>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">Quality Education • LKG to Class 12</div>
            <h2>Sardar Patel Academy Khilchipur</h2>
            <p>
            Sardar Patel Academy is committed to providing quality education in a safe and disciplined environment. We focus on academic excellence, strong values, and the overall development of every student to build a brighter future.  
            </p>

           <div className="hero-actions">
  <a className="white-btn" href="#contact">
    Admission Enquiry
  </a>
  <a href="tel:+919753884199" className="floating-call">
  📞
</a>

</div>

            <div className="stats-row">
         </div>
             
  {stats.map((item) => (
    <div className="stat-card" key={item.label}>
      <div className="stat-value">{item.value}</div>
      <div className="stat-label">{item.label}</div>
    </div>
  ))}
</div>

          <div className="hero-card">
            <div className="poster">
              <img src="/assets/hero.jpeg" alt="School campus" />
              <div className="overlay">
                <div className="top">
                  <div className="poster-box">
  <strong>School Name</strong>
  <div className="school-info">
    <div>Sardar Patel Academy Khilchipur</div>
    <div>School Code - 612316</div>
    <div>DISE Code - 23300543804</div>
  </div>
</div>
                  <div className="poster-box">
                    <strong>Address</strong>
                    <span>Dangi Chhatrawas, Khilchipur, Rajgarh (M.P.) 465679</span>
                  </div>
                </div>
                <div className="poster-bottom">
                  <div className="poster-box">
                    <strong>Courses</strong>
                    <span>LKG to 12 — Bio, Maths, Commerce, Arts</span>
                  </div>
          
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section id="management" className="section" style={{ background: "#eef5ff" }}>
  <div className="container">
    <h3>Director & Founder</h3>
    <p className="lead">
      Our founders and management team are committed to excellence in education.
    </p>

    <div className="director-grid">
      <div className="director-card">
        <img src="/assets/suresh-suman.jpeg" alt="Suresh Suman" className="director-img" />
        <div className="director-body">
          <h4>Suresh Suman</h4>
          <p>Director & Founder</p>
        </div>
      </div>

      <div className="director-card">
        <img src="/assets/shivcharan-dangi.jpeg" alt="Shivcharan Dangi" className="director-img" />
        <div className="director-body">
          <h4>Shivcharan Dangi</h4>
          <p>Director & Founder</p>
        </div>
      </div>

      <div className="director-card">
        <img src="/assets/dinesh-gurjar.jpeg" alt="Dinesh Gurjar" className="director-img" />
        <div className="director-body">
          <h4>Dinesh Gurjar</h4>
          <p>Director & Founder</p>
        </div>
      </div>
    </div>

    <h3 style={{ marginTop: "40px" }}>Principal</h3>
    <div className="principal-card">
      <img src="/assets/principal.jpeg" alt="Principal" className="principal-img" />
      <div className="principal-body">
        <h4>Jitendra Gupta</h4>
        <p>Principal</p>
      </div>
    </div>
  </div>
</section>

      <section id="about" className="section">
        <div className="container">
          <h3>About School</h3>
          <p className="lead">
            We believe education should build not only academic skills but also confidence, character, and responsibility. <br/> At Sardar Patel Academy Khilchipur, we support every child to learn, grow, and achieve their best.
          </p>

          <div className="info-grid">
            <div className="info-card">
              <div className="label">School Name</div>
              <div className="value">Sardar Patel Academy Khilchipur</div>
            </div>

            <div className="info-card">
              <div className="label">School Detail</div>
              <div className="value">School Code - 612316 DISE Code - 23300543804 </div>
 </div>
            <div className="info-card">
              <div className="label">Address</div>
              <div className="value">Dangi Chhatrawas, Khilchipur</div>
            </div>
            <div className="info-card">
              <div className="label">District</div>
              <div className="value">Rajgarh (M.P.) 465679</div>
            </div>
            <div className="info-card">
              <div className="label">Phone</div>
              <div className="value">9753884199, 9754280650, 9753762907</div>
            </div>
            <div className="info-card">
              <div className="label">classes & Medium</div>
              <div className="value">Nursery to XII <br /> English & Hindi </div>
 </div>
 <div className="info-card">
              <div className="label">Facilities</div>
              <div className="value">Science Lab, Computer Lab, Library,CCTV campus, School Bus</div>
 </div>
 <div className="info-card">
              <div className="label">Timings</div>
              <div className="value">10:30 am to 3:30 pm</div>
 </div>
          </div>

          <div className="features">
            {[
              ["1", "Big Campus", "Spacious campus with open area and activity space."],
              ["2", "Experienced Faculty", "Subject-wise teachers with strong teaching experience."],
              ["3", "Modern Learning", "Focused on quality education, confidence and discipline."],
              ["4", "Admissions Open", "For LKG to Class 12 with multiple streams."],
            ].map(([n, title, desc]) => (
              <div className="feature-card" key={title}>
                <div className="icon">{n}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      <section id="faculty" className="section" style={{ background: "#eef5ff" }}>
        <div className="container">
          <h3>Our Faculty</h3>
          <p className="lead">Meet our dedicated faculty members who inspire learning, nurture talent, and guide students toward excellence.</p>

          <div className="teacher-grid">
            {teacherCards.map((t) => (
              <div className="teacher" key={t.name}>
                <div className="teacher-photo">
                  <img src={t.img} alt={t.name} />
                </div>
                <div className="teacher-body">
                  <h4>{t.name}</h4>
                  <div className="sub">{t.subject}</div>
                  <div className="exp">{t.exp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="section">
        <div className="container">
          <h3>Courses</h3>
          <p className="lead">Classes and streams designed for overall academic growth.</p>

          <div className="course-grid">
            {courses.map((course) => (
              <div className="course" key={course}>{course}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section" style={{ background: "#eef5ff" }}>
        <div className="container">
          <h3>Campus Gallery</h3>
          <p className="lead">
            A glimpse of our school campus, learning spaces, and vibrant activities.
          </p>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <div className="gallery-item" key={item.title}>
                <div className="gallery-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="gallery-caption">{item.title}</div>
                <div className="gallery-tag">{item.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h3>Contact Us</h3>
          <p className="lead">For admission enquiries and contact details, please use the information below.</p>

          <div className="contact-wrap">
            <div className="contact-panel">
              <div className="contact-item">
                <div>📍</div>
                <div>
                  <b>Address</b>
                  Dangi Chhatrawas, Khilchipur, Dist. Rajgarh (M.P.) 465679
                </div>
              </div>

              <div className="contact-item">
                <div>📞</div>
                <div>
                  <b>Phone</b>
                  <a href="tel:+919753884199">   9753884199, 9754280650 , 9753762907</a>
                </div>
              </div>

              <div className="contact-item">
                <div>💬</div>
                <div>
                  <b>WhatsApp</b>
                  <a href="https://wa.me/919753884199" target="_blank" rel="noreferrer">
                    Message on WhatsApp
                  </a>
                </div>
              </div>
              <div className="contact-item">
  <div>📧</div>
  <div>
    <b>Email</b><br />
    <a href="mailto:sardarpatelacademy123@gmail.com">
      sardarpatelacademy123@gmail.com
    </a>
  </div>
</div>
            </div>

            <div className="contact-panel">
              <h4 style={{ marginTop: 0, marginBottom: 12, fontSize: 22 }}>Admission Enquiry Form</h4>
             <form
  className="form"
  action="https://formsubmit.co/onlyformovies695@gmail.com"
  method="POST"
>
 <input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_subject" value="New Admission Enquiry - Sardar Patel Academy" />
<input type="hidden" name="_template" value="table" />

               <input
  className="input"
  type="text"
  name="Student Name"
  placeholder="Student Name"
  required
/>

<input
  className="input"
  type="text"
  name="Phone Number"
  placeholder="Phone Number"
  required
/>

<input
  className="input"
  type="text"
  name="Class Seeking Admission"
  placeholder="Class Seeking Admission"
  required
/>

<textarea
  className="input"
  rows="4"
  name="Message"
  placeholder="Message"
></textarea>
                <button type="submit" className="submit">Send Enquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <a
  href="https://wa.me/919753884199"
  className="whatsapp-float"
  target="_blank"
  rel="noreferrer"
>
  <img src="/assets/whatsapp.png" alt="WhatsApp" />
</a>

<a
  href="tel:+919753884199"
  className="floating-call"
>
  📞
</a>
      <footer className="footer">
  <p>© 2026 Sardar Patel Academy Khilchipur</p>
  <p className="developer">
    Developed by <strong>KRISHNPAL {`{K.P.}`}</strong>
  </p>


</footer>
    
    </div>
  );
}
