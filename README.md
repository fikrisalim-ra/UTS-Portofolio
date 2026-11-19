# DISCLAIMER
Web ini dibangun dibantu oleh Gemini Argon dengan IDE Antigravitty

# Personal Digital Portfolio — Modern Balinese Identity

**Owner:** Fikri  
**Academic Program:** Information Systems Student  
**Institution:** ITB STIKOM Bali, Indonesia  
**Design Direction:** Modern Balinese Digital Aesthetic

---

## 1. Visual Direction, Layout System & Design Language

Dokumen ini merangkum konsep dasar desain (*Visual Direction*, *Layout System*, dan *Design Language*) yang bisa langsung kamu gunakan untuk laporan atau presentasi UTS.

### A. Filosofi Visual: *Modern Balinese Digital Aesthetic*
Alih-alih menempelkan ukiran tradisional secara berlebihan seperti brosur pariwisata atau undangan pernikahan, sistem identitas visual ini menerjemahkan filosofi arsitektur dan seni rupa klasik Bali ke dalam **Editorial Grid Modern & Prinsip UI/UX**:

1. **Tri Angga (Hierarki Vertikal 3-Zona)**
   - **Utama (Header / Kepala):** Baris metadata editorial, *running header*, dan pernyataan tesis utama.
   - **Madya (Body / Badan):** Konten inti portofolio, diagram arsitektur *workflow* N8N, dan matriks proyek.
   - **Nista (Footer / Kaki):** *Colophon*, kredit sistem desain, dan navigasi penutup yang kokoh.
2. **Sanga Mandala & Karang Bengang (Grid 12-Kolom & Whitespace)**
   - Tata letak menggunakan grid struktural dengan garis batas tipis (*hairline borders* `1px solid`) yang terinspirasi dari pembagian 9 zona tata ruang arsitektur Bali (*Sanga Mandala*).
   - Memberikan ruang kosong (*Karang Bengang* / halaman terbuka) yang lega agar tipografi dan diagram teknis mudah dibaca.
3. **Abstraksi Geometris *Patra Punggel* & *Candi Bentar***
   - Motif ukiran *Patra Punggel* dan siluet bertingkat *Candi Bentar* disederhanakan menjadi garis vektor monoline (`1.25px`–`1.5px`) dan sudut siku bertingkat (*Karang Asti*) sebagai aksen pembatas dan *focal point*.

### B. Palet Warna (*Kamasan Natural Pigments*)
Terinspirasi dari pigmen alami lukisan klasik *Wayang Kamasan* di atas kain belacu dan material arsitektur Bali:
- **Warm Ivory (`#F4F0E8`)** — *Kain Belacu* / batu kapur terang sebagai warna dasar kanvas agar nyaman dibaca.
- **Charcoal (`#252525`)** — *Mangsi* (tinta jelaga tradisional) untuk tipografi utama dan garis struktur tegas.
- **Terracotta (`#A65D43`)** — *Bata Merah* Bali untuk aksen utama, penanda kategori, dan *call-to-action*.
- **Muted Gold (`#B69A62`)** — *Prada* (aksen emas redup) khusus untuk ornamen *Patra* dan sudut bingkai.
- **Warm Gray (`#B8B1A6`)** — *Batu Padas* untuk garis bantu grid dan teks metadata sekunder.

### C. Sistem Tipografi
- **Editorial Serif (`Cormorant Garamond`):** Digunakan pada judul utama (*headings*) dan penekanan kata kunci (*italic accent*) untuk memberi kesan editorial yang berkarakter.
- **Modern Sans-Serif (`Plus Jakarta Sans`):** Karya desainer tipografi Indonesia, digunakan untuk teks bacaan (*body copy*) dan elemen antarmuka agar bersih dan modern.
- **Technical Monospace (`JetBrains Mono`):** Digunakan untuk penomoran indeks, koordinat, label API/N8N, dan *tags*.

---

## 2. Daftar Deliverables (4 Komponen Utama)

Seluruh deliverable saling terhubung melalui **Deliverables Suite Bar** di bagian paling atas halaman:

| Kode | Deliverable | File Utama | Deskripsi |
| :--- | :--- | :--- | :--- |
| **[A]** | **Portfolio Cover** | `cover.html` | Sampul portofolio profesional dalam 2 format: **A4 Vertical Monograph** & **16:9 Presentation Deck**, dilengkapi emblem vektor *Candi Bentar × Sanga Mandala*. |
| **[B]** | **Portfolio Template** | `templates.html` | **6 Reusable Page Templates** (*01 About Me*, *02 Skills & Tools*, *03 Project Showcase*, *04 Project Case Study*, *05 Experience & Education*, *06 Contact Information*) dengan fitur toggle *Sanga Mandala Grid Overlay*. |
| **[C]** | **Digital Infographic** | `infographic.html` | Poster infografis berjudul **"From Information Systems to Creative Digital Solutions"** yang memvisualisasikan hubungan *Information Systems*, *Visual Communication*, *Digital Automation*, dan *Creative Problem Solving*. |
| **[D]** | **Personal Portfolio Website** | `index.html` | Website portofolio lengkap dan responsif dengan bagian Hero, About Me, Skills & Tools (jujur & terstruktur), Selected Projects, Interactive Case Studies, Visual Identity, dan Contact. |
