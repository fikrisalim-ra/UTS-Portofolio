/* ==========================================================================
   PUSAT DATA & KONTEN PORTOFOLIO (content.js)
   --------------------------------------------------------------------------
   Halo Fikri! Kamu cukup mengedit teks, email, link GitHub, Discord,
   profil, skill, atau deskripsi proyek di file ini saja.
   
   Perubahan di sini akan OTOMATIS diterapkan ke semua halaman:
   - [D] Website Utama (index.html)
   - [A] Portfolio Cover (cover.html)
   - [B] 6 Page Templates (templates.html)
   - [C] Digital Infographic (infographic.html)
   ========================================================================== */

const PORTFOLIO_CONTENT = {
  // ------------------------------------------------------------------------
  // 1. PROFIL & IDENTITAS UTAMA
  // ------------------------------------------------------------------------
  profile: {
    name: "Fikri",                       // Nama panggilan / display utama
    fullName: "Prima Fikri Salim",                   // Bisa diisi nama lengkapmu jika mau
    role: "Information Systems Student", // Status / Role utama
    program: "Information Systems (S1)", // Program studi
    institution: "ITB STIKOM Bali",      // Nama kampus
    institutionFull: "Institut Teknologi Bisnis & Digital Bali, Indonesia",
    location: "Denpasar, Bali — Indonesia",
    corePractice: "Design × Automation",
    methodology: "System Analysis × Visual Design",
    designDirection: "Modern Balinese Editorial",
    editionYear: "2026",

    // Teks di bagian Hero (Halaman Utama)
    heroHeadlineHtml:
      "Structured Systems, <em>Visual Clarity</em>, &amp; Digital Automation.",
    heroSubtitleHtml:
      "Hello, I am <strong>Fikri</strong> — an <strong>Information Systems student at ITB STIKOM Bali</strong>. I explore the intersection of structured documentation, contemporary graphic design, and no-code workflow automation, framed through a <em>Modern Balinese Digital Aesthetic</em>.",

    // Teks di bagian About Me & Template 01
    aboutDossierDesc:
      "An Information Systems student at ITB STIKOM Bali, Indonesia, focused on turning complex workflows and unstructured information into organized systems, clear visual layouts, and practical no-code automations.",
    aboutLead:
      "Studying Information Systems taught me that technology is only as effective as how well people understand and interact with it.",
    aboutBodyHtml:
      "Rather than treating backend logic and visual presentation as separate worlds, my academic and personal journey revolves around connecting them: organizing knowledge in <strong>Notion</strong>, automating repetitive operations through <strong>N8N</strong>, and crafting clear visual communication in <strong>Adobe Illustrator</strong>.",
    positioningQuote:
      "“Connecting the structural clarity of Information Systems with human-centered visual communication and practical N8N workflow automation.”"
  },

  // ------------------------------------------------------------------------
  // 2. KONTAK & SOSIAL MEDIA (Silakan ganti dengan akun aslimu!)
  // ------------------------------------------------------------------------
  // Tips: Kalau ada link yang tidak ingin ditampilkan, kosongkan saja jadi ""
  contact: {
    email: "fikrisalim.ra@gmail.com",          // <-- Ganti dengan email aslimu
    githubUrl: "https://github.com/fikrisalim-ra",        // <-- Link profil GitHub kamu
    githubHandle: "github.com/fikrisalim-ra",             // <-- Teks tampilan GitHub
    discordHandle: "@Rins",                      // <-- Username Discord kamu
    discordUrl: "https://discord.com/users/480620542676828160",            // <-- Opsional: link profil/server Discord
    instagramUrl: "https://www.instagram.com/fikrisalim.ra/",                             // <-- Isi link IG jika ingin ditampilkan (misal: "https://instagram.com/username")
    instagramHandle: "@fikrisalim.ra",                          // <-- Isi "@username" IG jika ada
    linkedinUrl: "https://www.linkedin.com/in/fikri-salim-15a6aa3a4/",                              // <-- Isi link LinkedIn jika ingin ditampilkan
    linkedinHandle: "Fikri Salim",                           // <-- Isi nama LinkedIn jika ada

    headlineHtml:
      "Let’s Connect on <em>Information Systems</em>, Visual Design, or Automation.",
    availabilityText:
      "Available for academic discussions, graphic design & visual content collaborations, and N8N workflow automation projects in Bali and remotely."
  },

  // ------------------------------------------------------------------------
  // 3. LIMA MINAT PROFESIONAL (5 Professional Interests)
  // ------------------------------------------------------------------------
  interests: [
    {
      num: "INTEREST 01",
      shortCode: "01 // VISUAL",
      title: "Graphic Design & Visual Communication",
      description:
        "Translating ideas and information into structured editorial layouts, posters, and brand graphics with clear typographic hierarchy."
    },
    {
      num: "INTEREST 02",
      shortCode: "02 // INTERFACE",
      title: "UI/UX & Interface Design",
      description:
        "Exploring clean digital interfaces that prioritize readability, logical navigation, and purposeful user interaction."
    },
    {
      num: "INTEREST 03",
      shortCode: "03 // MEDIA",
      title: "Digital Content Creation",
      description:
        "Producing educational social media carousels, community visual assets, and basic video content tailored for digital platforms."
    },
    {
      num: "INTEREST 04",
      shortCode: "04 // KNOWLEDGE",
      title: "Information Organization & Documentation",
      description:
        "Structuring knowledge bases, system workflows, and workspace documentation so teams and communities stay aligned."
    },
    {
      num: "INTEREST 05",
      shortCode: "05 // SYSTEMS",
      title: "Automation & No-Code Development",
      description:
        "Building practical workflow automations and multi-platform bot integrations using N8N, connecting Telegram, Discord, Notion, and social APIs.",
      fullWidth: true
    }
  ],

  // ------------------------------------------------------------------------
  // 4. SKILLS & TOOLS (Dibagi 3 Tier secara jujur & transparan)
  // ------------------------------------------------------------------------
  skills: {
    honestyNote:
      "Tools are organized honestly by current practical readiness—clearly distinguishing confident day-to-day workflows from skills currently in active development.",
    tiers: [
      {
        code: "TIER I // ESTABLISHED WORKFLOW",
        title: "Core Tools & Systems",
        subtitle:
          "Primary tools used reliably across internships, academic projects, and personal systems.",
        tierClass: "tier-core",
        statusClass: "status-confident",
        items: [
          {
            name: "Adobe Illustrator",
            badge: "Confident",
            description:
              "Confident in visual design, vector composition, typographic layout, social media carousels, and graphic communication materials."
          },
          {
            name: "Notion",
            badge: "Established",
            description:
              "Documentation, structured information organization, relational databases, and workspace management for personal and project use."
          },
          {
            name: "N8N",
            badge: "Core Automation",
            description:
              "Workflow automation and API integration—orchestrating webhooks, Telegram & Discord bots, Notion databases, and automated reminders."
          }
        ]
      },
      {
        code: "TIER II // WORKING FOUNDATION",
        title: "Production & Web Basics",
        subtitle:
          "Functional capabilities used to support multimedia production and static web interfaces.",
        tierClass: "tier-foundation",
        statusClass: "status-working",
        items: [
          {
            name: "DaVinci Resolve",
            badge: "Basic Production",
            description:
              "Basic video editing, timeline assembly, cuts, and digital content production for short-form and informational media."
          },
          {
            name: "Basic Web Development",
            badge: "AI-Assisted",
            description:
              "Building static web pages (HTML/CSS/JS), connecting frontend pages to webhook backends, and structuring layouts with assistance from AI tools."
          }
        ]
      },
      {
        code: "TIER III // ACTIVE LEARNING",
        title: "Currently Developing",
        subtitle:
          "Tools currently being explored to expand UI prototyping, raster editing, and motion capabilities.",
        tierClass: "tier-learning",
        statusClass: "status-developing",
        items: [
          {
            name: "Figma",
            badge: "Developing",
            description:
              "Currently developing skills in UI/UX interface design, component structuring, and interactive layout prototyping."
          },
          {
            name: "Adobe Photoshop",
            badge: "Developing",
            description:
              "Currently developing skills in photo retouching, raster graphic treatment, and visual asset preparation to complement Illustrator layouts."
          },
          {
            name: "Adobe After Effects",
            badge: "Developing",
            description:
              "Currently developing skills in basic motion graphics and kinetic visual communication."
          }
        ]
      }
    ]
  },

  // ------------------------------------------------------------------------
  // 5. SELECTED PROJECTS & CASE STUDIES (4 Proyek Utama)
  // ------------------------------------------------------------------------
  projects: {
    gretiva: {
      code: "PROJECT A // INTERNSHIP",
      context: "Gretiva Artha Group",
      title: "Gretiva Bot",
      caseHeadline: "Gretiva Bot — Multi-Module Telegram Automation",
      summary:
        "A Telegram-based automation bot developed during an internship at Gretiva Artha Group. Contributed to the development of the bot's modules and automation workflows connecting messaging, tasks, assets, and content analytics.",
      caseDescription:
        "Developed during an internship at Gretiva Artha Group, Gretiva Bot is a Telegram-based operational assistant built on N8N that unifies internal task management, creative asset templates, broadcast messaging, and content analytics in a single conversational interface.",
      role: "Contributed to the development of the bot's modules and automation workflows.",
      tags: ["N8N", "Telegram Bot API", "Notion API", "Meta Instagram Graph API"],
      features: [
        "<strong>AI Chat Interaction:</strong> Conversational query handling routed through Telegram Bot API and N8N logic nodes.",
        "<strong>Task Management:</strong> Two-way synchronization with Notion API workspaces for logging and tracking operational tasks.",
        "<strong>Asset &amp; Template Management:</strong> Quick retrieval of standardized digital assets and templates directly via bot commands.",
        "<strong>Broadcast Functionality:</strong> Automated distribution of announcements and updates across targeted Telegram channels/users.",
        "<strong>Analytics &amp; Content Automation:</strong> Integration with Meta Instagram Graph API for content-related automation and insights retrieval."
      ]
    },

    discord: {
      code: "PROJECT B // PERSONAL SYSTEM",
      context: "Community Automation",
      title: "Discord Automation Bot",
      caseHeadline: "Discord Automation Bot — Voice Session & Break Reminder System",
      summary:
        "A personal automation project built using N8N and Discord integrations, designed to monitor voice channel sessions, trigger automated break reminders, and manage interactive Discord bot workflows.",
      caseDescription:
        "A personal automation system built with N8N and Discord integrations to promote healthier digital habits during long Discord voice channel sessions by tracking active duration and sending automated break reminders.",
      tags: ["N8N", "Discord Integration", "Voice Monitoring", "Automated Reminders"],
      features: [
        "<strong>Voice Channel Session Monitoring:</strong> Tracking user join, leave, and active session states across Discord voice channels.",
        "<strong>Automated Break Reminders:</strong> Triggering scheduled notification prompts when continuous voice session durations reach threshold intervals.",
        "<strong>Discord Bot Interactions:</strong> Handling user commands and status checks directly inside Discord channels.",
        "<strong>Workflow Automation:</strong> Utilizing N8N nodes to connect Discord events, timer logic, and automated messaging without complex standalone hosting overhead."
      ]
    },

    content: {
      code: "PROJECT C // VISUAL COMMUNICATION",
      context: "Graphic Design",
      title: "Digital Content & Graphic Design",
      caseHeadline: "Digital Content & Graphic Design Practice",
      summary:
        "Practical experience creating digital visual communication materials—focusing on educational social media carousels, promotional graphics, community visual assets, and structured information-based layouts.",
      caseDescription:
        "Visual design exploration and production focused on translating complex or multi-part topics into accessible, well-structured graphic assets using Adobe Illustrator.",
      tags: ["Adobe Illustrator", "Editorial Layout", "Social Carousels", "Visual Hierarchy"],
      features: [
        "<strong>Educational Social Media Carousels:</strong> Multi-slide narrative layouts that pace information logically from hook to takeaway.",
        "<strong>Promotional Graphics:</strong> Clean visual announcements balanced with strong typographic hierarchy and focal points.",
        "<strong>Community Visual Materials:</strong> Cohesive graphic assets created for online community announcements and events.",
        "<strong>Information-Based Layouts:</strong> Infographics, structured comparison cards, and visual summaries that prioritize clarity over decoration."
      ]
    },

    is: {
      code: "PROJECT D // ACADEMIC",
      context: "ITB STIKOM Bali",
      title: "Information Systems Projects",
      caseHeadline: "Information Systems Academic Projects",
      summary:
        "Academic works at ITB STIKOM Bali involving structured information organization, system analysis, process workflow design, and translating operational requirements into clear digital solutions.",
      caseDescription:
        "Academic coursework and system explorations at ITB STIKOM Bali focused on understanding how data, users, and business/operational workflows connect within structured digital solutions.",
      tags: ["System Analysis", "Workflow Design", "Notion Documentation", "Information Architecture"],
      features: [
        "<strong>Information Organization:</strong> Structuring taxonomies, relational databases, and project documentation in Notion.",
        "<strong>System Analysis:</strong> Identifying process bottlenecks, user needs, and input-process-output requirements.",
        "<strong>Workflow Design:</strong> Mapping step-by-step operational flows before translating them into automation or interface prototypes.",
        "<strong>Digital Solutions:</strong> Combining system logic with clear visual communication so solutions are practical to adopt."
      ]
    }
  }
};
