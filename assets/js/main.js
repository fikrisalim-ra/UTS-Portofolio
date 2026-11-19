/* ==========================================================================
   MAIN INTERACTION & CONTENT BINDER (main.js)
   Membaca data dari assets/js/content.js (PORTFOLIO_CONTENT) dan
   menerapkannya otomatis ke seluruh halaman portofolio.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 0. HYDRATE CONTENT DARI content.js (Jika PORTFOLIO_CONTENT tersedia)
  // ------------------------------------------------------------------------
  if (typeof PORTFOLIO_CONTENT !== 'undefined') {
    hydratePortfolioContent(PORTFOLIO_CONTENT);
  }

  // ------------------------------------------------------------------------
  // 1. Project Case Study Tab Switcher
  // ------------------------------------------------------------------------
  const tabButtons = document.querySelectorAll('.case-tab-btn');
  const casePanels = document.querySelectorAll('.case-panel');

  function activateCaseTab(targetId) {
    tabButtons.forEach((btn) => {
      const isMatch = btn.getAttribute('data-target') === targetId;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    casePanels.forEach((panel) => {
      const isMatch = panel.id === targetId;
      panel.classList.toggle('active', isMatch);
    });
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      if (targetId) activateCaseTab(targetId);
    });
  });

  // Project Card "Inspect Details" deep-link triggers
  const projectDetailTriggers = document.querySelectorAll('[data-open-case]');
  projectDetailTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      const targetCase = trigger.getAttribute('data-open-case');
      const detailsSection = document.getElementById('project-details');
      if (targetCase && detailsSection) {
        e.preventDefault();
        activateCaseTab(targetCase);
        detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ------------------------------------------------------------------------
  // 2. Color Swatch Click-to-Copy Hex Code
  // ------------------------------------------------------------------------
  const swatchCards = document.querySelectorAll('[data-copy-hex]');
  swatchCards.forEach((card) => {
    card.addEventListener('click', () => {
      const hex = card.getAttribute('data-copy-hex');
      const statusEl = card.querySelector('.copy-feedback');
      if (hex && navigator.clipboard) {
        navigator.clipboard.writeText(hex).then(() => {
          if (statusEl) {
            const original = statusEl.textContent;
            statusEl.textContent = 'COPIED!';
            setTimeout(() => {
              statusEl.textContent = original;
            }, 1400);
          }
        });
      }
    });
  });

  // ------------------------------------------------------------------------
  // 3. Templates Page: Grid Overlay Toggle & Filter (templates.html)
  // ------------------------------------------------------------------------
  const gridToggleBtn = document.getElementById('toggle-grid-overlay');
  if (gridToggleBtn) {
    gridToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('show-editorial-grid');
      const isOn = document.body.classList.contains('show-editorial-grid');
      gridToggleBtn.textContent = isOn ? 'Hide Sanga Mandala Grid' : 'Show Sanga Mandala Grid';
    });
  }

  const templateFilterBtns = document.querySelectorAll('[data-template-filter]');
  const templateSheets = document.querySelectorAll('.template-sheet');
  if (templateFilterBtns.length > 0) {
    templateFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-template-filter');
        templateFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        templateSheets.forEach((sheet) => {
          if (filter === 'all' || sheet.getAttribute('data-template-id') === filter) {
            sheet.style.display = 'block';
          } else {
            sheet.style.display = 'none';
          }
        });
      });
    });
  }
});

/**
 * Mengambil nilai nested dari object berdasarkan path string (contoh: "profile.name")
 */
function getNestedValue(obj, path) {
  if (!obj || !path) return undefined;
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

/**
 * Menerapkan isi PORTFOLIO_CONTENT dari assets/js/content.js ke DOM
 */
function hydratePortfolioContent(data) {
  // 1. Bind elemen dengan atribut data-bind-text="path.to.value"
  document.querySelectorAll('[data-bind-text]').forEach((el) => {
    const val = getNestedValue(data, el.getAttribute('data-bind-text'));
    if (val !== undefined && val !== '') {
      el.textContent = val;
    }
  });

  // 2. Bind elemen dengan atribut data-bind-html="path.to.html"
  document.querySelectorAll('[data-bind-html]').forEach((el) => {
    const val = getNestedValue(data, el.getAttribute('data-bind-html'));
    if (val !== undefined && val !== '') {
      el.innerHTML = val;
    }
  });

  // 3. Render 5 Professional Interests Grid (di index.html)
  const interestsContainer = document.getElementById('dynamic-interests-grid');
  if (interestsContainer && Array.isArray(data.interests)) {
    interestsContainer.innerHTML = data.interests
      .map(
        (item) => `
        <article class="interest-card ${item.fullWidth ? 'span-2' : ''}">
          <span class="interest-num">${item.num}</span>
          <h3 class="interest-title">${item.title}</h3>
          <p class="text-body">${item.description}</p>
        </article>
      `
      )
      .join('');
  }

  // 4. Render 3 Skill Tiers (di index.html)
  const skillsContainer = document.getElementById('dynamic-skills-tiers');
  if (skillsContainer && data.skills && Array.isArray(data.skills.tiers)) {
    skillsContainer.innerHTML = data.skills.tiers
      .map(
        (tier) => `
        <div class="skill-tier-column">
          <div class="skill-tier-header ${tier.tierClass}">
            <span class="text-mono" style="color: var(--accent-terracotta);">${tier.code}</span>
            <h3 class="heading-card" style="margin-top: 4px;">${tier.title}</h3>
            <p class="text-body" style="font-size: 0.84rem; margin-top: 4px;">${tier.subtitle}</p>
          </div>
          <div class="skill-tier-list">
            ${tier.items
              .map(
                (skill) => `
              <div class="skill-item">
                <div class="skill-item-top">
                  <span class="skill-name">${skill.name}</span>
                  <span class="skill-status-pill ${tier.statusClass}">${skill.badge}</span>
                </div>
                <p class="text-body" style="font-size: 0.88rem;">${skill.description}</p>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      `
      )
      .join('');
  }

  // 5. Render Tags & Feature Lists untuk masing-masing Project (A, B, C, D)
  if (data.projects) {
    Object.keys(data.projects).forEach((projKey) => {
      const proj = data.projects[projKey];

      // Update tech stack tags row
      document.querySelectorAll(`[data-project-tags="${projKey}"]`).forEach((tagContainer) => {
        if (Array.isArray(proj.tags)) {
          tagContainer.innerHTML = proj.tags.map((t) => `<span class="tag">${t}</span>`).join('');
        }
      });

      // Update case study feature checklist
      document.querySelectorAll(`[data-project-features="${projKey}"]`).forEach((listEl) => {
        if (Array.isArray(proj.features)) {
          listEl.innerHTML = proj.features.map((f) => `<li>${f}</li>`).join('');
        }
      });
    });
  }

  // 6. Render Contact Actions (Tombol Email, GitHub, Discord, IG, LinkedIn)
  const contactActionsEl = document.getElementById('dynamic-contact-actions');
  if (contactActionsEl && data.contact) {
    const c = data.contact;
    const buttons = [];

    if (c.email) {
      buttons.push(`<a href="mailto:${c.email}" class="btn btn-primary">Email: ${c.email}</a>`);
    }
    if (c.githubUrl) {
      buttons.push(
        `<a href="${c.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">GitHub (${c.githubHandle || 'Profile'}) ↗</a>`
      );
    }
    if (c.instagramUrl) {
      buttons.push(
        `<a href="${c.instagramUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Instagram ${c.instagramHandle || ''} ↗</a>`
      );
    }
    if (c.linkedinUrl) {
      buttons.push(
        `<a href="${c.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">LinkedIn ↗</a>`
      );
    }

    buttons.push(`<a href="templates.html" class="btn btn-subtle">Browse 6 Page Templates →</a>`);
    contactActionsEl.innerHTML = buttons.join('');
  }

  // 7. Render Contact Ledger Rows (Tabel Kontak di kanan bawah index.html & Template 06)
  const contactLedgerEl = document.getElementById('dynamic-contact-ledger');
  if (contactLedgerEl && data.contact && data.profile) {
    const c = data.contact;
    const p = data.profile;
    const rows = [
      { key: 'Name', val: p.fullName || p.name },
      { key: 'Institution', val: `${p.institution} (${p.program})` },
      { key: 'Location', val: p.location }
    ];

    if (c.email) {
      rows.push({
        key: 'Email',
        val: `<a href="mailto:${c.email}" style="color: var(--accent-terracotta); text-decoration: underline;">${c.email}</a>`
      });
    }
    if (c.githubHandle || c.githubUrl) {
      rows.push({
        key: 'GitHub',
        val: c.githubUrl
          ? `<a href="${c.githubUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">${c.githubHandle || c.githubUrl}</a>`
          : c.githubHandle
      });
    }
    if (c.discordHandle) {
      rows.push({
        key: 'Discord',
        val: c.discordHandle
      });
    }
    if (c.instagramHandle || c.instagramUrl) {
      rows.push({
        key: 'Instagram',
        val: c.instagramUrl
          ? `<a href="${c.instagramUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">${c.instagramHandle || c.instagramUrl}</a>`
          : c.instagramHandle
      });
    }
    if (c.linkedinHandle || c.linkedinUrl) {
      rows.push({
        key: 'LinkedIn',
        val: c.linkedinUrl
          ? `<a href="${c.linkedinUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">${c.linkedinHandle || 'LinkedIn Profile'}</a>`
          : c.linkedinHandle
      });
    }

    contactLedgerEl.innerHTML = rows
      .map(
        (r, idx) => `
        <div class="profile-row" ${idx === rows.length - 1 ? 'style="border-bottom: none;"' : ''}>
          <span class="profile-row-key">${r.key}</span>
          <span class="profile-row-val">${r.val}</span>
        </div>
      `
      )
      .join('');
  }

  // 8. Update Template 06 Contact Channels di templates.html
  const tplContactChannels = document.getElementById('tpl-dynamic-contact-channels');
  if (tplContactChannels && data.contact) {
    const c = data.contact;
    const parts = [];
    if (c.email) parts.push(`<div><strong>Email:</strong> ${c.email}</div>`);
    if (c.githubHandle) parts.push(`<div><strong>GitHub:</strong> ${c.githubHandle}</div>`);
    if (c.discordHandle) parts.push(`<div><strong>Discord:</strong> ${c.discordHandle}</div>`);
    if (c.instagramHandle) parts.push(`<div><strong>Instagram:</strong> ${c.instagramHandle}</div>`);
    tplContactChannels.innerHTML = parts.join('');
  }
}
