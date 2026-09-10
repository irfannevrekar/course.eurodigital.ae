/* ==========================================================================
   EURO DIGITAL TECHNOLOGIES - GLOBAL APPLICATION JS
   ========================================================================== */

// --- 1. STATIC PRICING CONFIGURATION ---
window.tier1Price = '$29';
window.tier2Price = '$299';
window.tier2Emi = 'EMI Available: $150 x 2 Months';

// --- 2. HEADER SCROLL & NAVIGATION HELPERS (HIGH PERFORMANCE 60FPS) ---
window.addEventListener('DOMContentLoaded', () => {
  const mainHeader = document.getElementById('mainHeader');
  const floatingCTA = document.getElementById('floatingCTA');
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');

  let scrollTicking = false;
  let isHeaderScrolled = false;
  let isFloatingActive = false;

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const shouldHeaderScrolled = scrollY > 40;
        const shouldFloatingActive = scrollY > 600;

        if (mainHeader && isHeaderScrolled !== shouldHeaderScrolled) {
          isHeaderScrolled = shouldHeaderScrolled;
          if (shouldHeaderScrolled) mainHeader.classList.add('scrolled');
          else mainHeader.classList.remove('scrolled');
        }

        if (floatingCTA && isFloatingActive !== shouldFloatingActive) {
          isFloatingActive = shouldFloatingActive;
          if (shouldFloatingActive) floatingCTA.classList.add('active');
          else floatingCTA.classList.remove('active');
        }

        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  if (burgerBtn) burgerBtn.addEventListener('click', toggleMobileNav);
  if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', toggleMobileNav);

  // Initialize smart viewport-aware video lazy management
  initSmartVideoObserver();
});

function toggleMobileNav() {
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const isActive = document.body.classList.toggle('mobile-nav-active');
  if (burgerBtn) burgerBtn.setAttribute('aria-expanded', isActive);
  if (mobileNavDrawer) mobileNavDrawer.setAttribute('aria-hidden', !isActive);
}

function toggleMobileCoursesAccordion() {
  const container = document.getElementById('mobileCoursesContainer');
  if (container) {
    container.classList.toggle('open');
  }
}

function smoothScroll(targetId) {
  const target = document.querySelector(targetId);
  if (target) {
    const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// --- 3. 7-LAYER SCAN FRAMEWORK DATA & INTERACTION ---
const layerData = {
  1: {
    badge: "Layer 01 Scan",
    title: "Business Model Clarity",
    pain: "Solving marketing problems when you actually have a pricing and positioning crisis. Selling the wrong thing to the wrong audience at low margins.",
    cure: "Re-engineering your core offer stack into a high-value 3-tier ecosystem. We optimize pricing psychology for the Indian MSME/Coaching market to instantly multiply margins.",
    tip: "Tip: If you're doing croreshala-level work but average customer value is under ₹10,000, your business model needs immediate architectural redesign.",
    icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>`
  },
  2: {
    badge: "Layer 02 Scan",
    title: "Revenue Streams Stack",
    pain: "Relying on a single transaction type. If that channel slows down, your business enters a cash flow panic immediately.",
    cure: "Integrating recurring retainers, high-ticket masterminds, group templates, and corporatized licensing options to monetize the same volume 3x better.",
    tip: "Tip: Aim for at least 3 distinct cash channels: Low-ticket auto-funding, DWY group systems, and VIP high-ticket implementation.",
    icon: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`
  },
  3: {
    badge: "Layer 03 Scan",
    title: "Lead Generation System",
    pain: "Surviving solely on inconsistent word-of-mouth or throwing budget randomly at Facebook ads with zero qualification filters.",
    cure: "Installing the 3-Channel Lead System (Organic + Paid + Partnership) with automated WhatsApp triggers and filters to disqualify tyre-kickers early.",
    tip: "Tip: A lead is not a lead until qualified. Let automation screen prospects so you only speak to high-intent buyers.",
    icon: `<svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
  },
  4: {
    badge: "Layer 04 Scan",
    title: "Sales Conversion Process",
    pain: "Closing deals purely by vibe. Having no CRM pipeline tracking, no script, and failing to run follow-ups consistently.",
    cure: "Deploying high-ticket consultative script templates, objections playbooks, and automated multi-channel nurturing loops.",
    tip: "Tip: 80% of sales in the Indian market happen during the 4th to 7th automated touchpoint. The fortune is entirely in the automated loop.",
    icon: `<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
  },
  5: {
    badge: "Layer 05 Scan",
    title: "Team & Delegation Architecture",
    pain: "Micromanaging task lists because 'no one is competent'. Your business cannot scale because you are the operational bottleneck.",
    cure: "Transitioning through the 3-Level Delegation Matrix: from task assignments to outcomes. Installing weekly operational rhythm dashboards.",
    tip: "Tip: If you take a 14-day holiday and your business crashes, you are an employee of your own company, not a CEO.",
    icon: `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  },
  6: {
    badge: "Layer 06 Scan",
    title: "CEO Time & Execution Discipline",
    pain: "Spending the first 4 hours of your workday fire-fighting emails or chats, leaving zero high-energy hours for scaling strategies.",
    cure: "Installing the CEO Weekly Time Calendar, OKR reviews, and keeping 15-minute weekly dashboards for key numbers.",
    tip: "Tip: Protect your first 3 hours of every morning. Dedicated revenue-generating design is what creates croreshala scaling.",
    icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
  },
  7: {
    badge: "Layer 07 Scan",
    title: "Bottleneck Identification",
    pain: "Attempting to fix all 7 layers at the exact same time. This is like a doctor prescribing 7 extreme medications without knowing the illness.",
    cure: "Locating the single high-impact constraint using the priority ease vs. impact matrix, and focusing 100% of execution on that for 60 days.",
    tip: "Tip: System constraint theory dictates that a chain is only as strong as its weakest link. Focus entirely on that constraint first.",
    icon: `<svg viewBox="0 0 24 24"><polygon points="12 2 19 21 12 17 5 21 12 2"></polygon></svg>`
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const layersList = document.getElementById('layersList');
  const displayBadge = document.getElementById('displayBadge');
  const displayTitle = document.getElementById('displayTitle');
  const displayIcon = document.getElementById('displayIcon');
  const displayPain = document.getElementById('displayPain');
  const displayCure = document.getElementById('displayCure');
  const displayTip = document.getElementById('displayTip');
  const displayCard = document.getElementById('layersDisplayCard');
  const layersContainer = layersList ? layersList.closest('.layers-container') : document.querySelector('.layers-container');

  if (layersList && displayCard) {
    function positionDisplayCard() {
      const activeBtn = layersList.querySelector('.layers-tab-btn.active');
      if (window.innerWidth <= 768) {
        if (activeBtn && displayCard) activeBtn.after(displayCard);
      } else {
        if (displayCard && layersContainer) layersContainer.appendChild(displayCard);
      }
    }

    layersList.addEventListener('click', (e) => {
      const btn = e.target.closest('.layers-tab-btn');
      if (!btn) return;

      layersList.querySelectorAll('.layers-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const idx = btn.dataset.index;
      const data = layerData[idx];
      if (!data) return;

      displayCard.style.opacity = '0';
      if (window.innerWidth <= 768) btn.after(displayCard);

      setTimeout(() => {
        if (displayBadge) displayBadge.innerText = data.badge;
        if (displayTitle) displayTitle.innerText = data.title;
        if (displayPain) displayPain.innerText = data.pain;
        if (displayCure) displayCure.innerText = data.cure;
        if (displayTip) displayTip.innerText = data.tip;
        const iconContainer = displayCard.querySelector('.display-icon');
        if (iconContainer) iconContainer.innerHTML = data.icon;
        displayCard.style.opacity = '1';
      }, 150);
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(positionDisplayCard, 100);
    });
    positionDisplayCard();
  }

  // --- WORKFORCE 5-DIMENSION SCAN INTERACTIVE HANDLER ---
  const workforceLayerData = {
    1: {
      badge: "Dimension 01 Scan",
      title: "Performance & Capability Signature",
      pain: "Treating performance slumps with generic motivational training when employees actually lack role clarity, explicit success metrics, or capability fit.",
      cure: "Installing the Role Clarity System—resetting role charters, clearing capability bottlenecks, and setting up automated feedback cadences.",
      tip: "Tip: If top performers are bogged down in low-value tasks or confusion over who owns outcomes, your performance architecture needs immediate recalibration.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>`
    },
    2: {
      badge: "Dimension 02 Scan",
      title: "Wellbeing & Stress Load Governance",
      pain: "Launching wellness webinars or yoga sessions while systemic workload overload and fire-fighting cause silent burnout and sudden resignations.",
      cure: "Installing the Wellbeing Operations System—governing workload caps, establishing structural recovery protocols, and setting up early-warning alerts.",
      tip: "Tip: High employee turnover in key operational roles is rarely a compensation problem—it is usually an unmonitored stress load breach.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`
    },
    3: {
      badge: "Dimension 03 Scan",
      title: "Behavioural & Productivity Patterns",
      pain: "Blaming employees for slow delivery when they are trapped in 6+ hours of redundant meetings and constant messaging noise daily.",
      cure: "Building a Focus Culture System—enforcing calendar governance, protecting deep-work blocks, and automating redundant status updates.",
      tip: "Tip: If team members work 10-hour days but produce 4 hours of output, meeting creep and context-switching are eating your productivity margin.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
    },
    4: {
      badge: "Dimension 04 Scan",
      title: "Growth Gap & Aspiration Alignment",
      pain: "Assuming employees leave only for higher salaries when the primary trigger is zero visibility into their 24-month career trajectory.",
      cure: "Implementing the Career Pathways System—publishing clear progression tracks, skill matrices, and structured quarterly growth reviews.",
      tip: "Tip: Ambitious talent will not stay in an organisation where growth depends on informal manager favors instead of objective career milestones.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>`
    },
    5: {
      badge: "Dimension 05 Scan",
      title: "Team, Manager & Culture Coherence",
      pain: "Promoting high individual performers into managerial roles without equipping them with managerial systems or conversation playbooks.",
      cure: "Installing Manager Cohorts & Culture Signal Dashboards—training leaders on conversation intelligence and real-time culture health indicators.",
      tip: "Tip: People join great companies but leave poor managers. Uncalibrated managers are the single largest leak in employee retention.",
      icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
    }
  };

  const hrLayersList = document.getElementById('hrLayersList');
  const hrDisplayBadge = document.getElementById('hrDisplayBadge');
  const hrDisplayTitle = document.getElementById('hrDisplayTitle');
  const hrDisplayIcon = document.getElementById('hrDisplayIcon');
  const hrDisplayPain = document.getElementById('hrDisplayPain');
  const hrDisplayCure = document.getElementById('hrDisplayCure');
  const hrDisplayTip = document.getElementById('hrDisplayTip');
  const hrDisplayCard = document.getElementById('hrLayersDisplayCard');
  const hrLayersContainer = hrLayersList ? hrLayersList.closest('.layers-container') : null;

  if (hrLayersList && hrDisplayCard) {
    function positionHrDisplayCard() {
      const activeBtn = hrLayersList.querySelector('.layers-tab-btn.active');
      if (window.innerWidth <= 768) {
        if (activeBtn && hrDisplayCard) activeBtn.after(hrDisplayCard);
      } else {
        if (hrDisplayCard && hrLayersContainer) hrLayersContainer.appendChild(hrDisplayCard);
      }
    }

    hrLayersList.addEventListener('click', (e) => {
      const btn = e.target.closest('.layers-tab-btn');
      if (!btn) return;

      hrLayersList.querySelectorAll('.layers-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const idx = btn.dataset.index;
      const data = workforceLayerData[idx];
      if (!data) return;

      hrDisplayCard.style.opacity = '0';
      if (window.innerWidth <= 768) btn.after(hrDisplayCard);

      setTimeout(() => {
        if (hrDisplayBadge) hrDisplayBadge.innerText = data.badge;
        if (hrDisplayTitle) hrDisplayTitle.innerText = data.title;
        if (hrDisplayPain) hrDisplayPain.innerText = data.pain;
        if (hrDisplayCure) hrDisplayCure.innerText = data.cure;
        if (hrDisplayTip) hrDisplayTip.innerText = data.tip;
        const hrIconContainer = hrDisplayCard.querySelector('.display-icon');
        if (hrIconContainer) hrIconContainer.innerHTML = data.icon;
        hrDisplayCard.style.opacity = '1';
      }, 150);
    });

    window.addEventListener('resize', () => {
      positionHrDisplayCard();
    });
    positionHrDisplayCard();
  }

  // Viewport-aware scanner layers timer (saves CPU/GPU when off-screen)
  const scannerBoxes = document.querySelectorAll('.scanner-box');
  scannerBoxes.forEach(box => {
    const layers = box.querySelectorAll('.scanner-layer');
    if (layers.length > 0) {
      let currentActiveIdx = 0;
      let intervalId = null;

      const startScanning = () => {
        if (intervalId) return;
        intervalId = setInterval(() => {
          layers.forEach(l => l.classList.remove('active'));
          currentActiveIdx = (currentActiveIdx + 1) % layers.length;
          layers[currentActiveIdx].classList.add('active');
        }, 1500);
      };

      const stopScanning = () => {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      };

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) startScanning();
            else stopScanning();
          });
        }, { threshold: 0.05 });
        observer.observe(box);
      } else {
        startScanning();
      }
    }
  });
});

// --- 4. DUAL-MODE QUIZ ENGINE (BUSINESS & WORKFORCE CLARITY TESTS) ---
let currentQuizMode = 'business'; // 'business' or 'workforce'
const quizAnswers = { 1: null, 2: null, 3: null };
let currentQuizStep = 1;

const quizQuestionsData = {
  business: {
    badge: "Self-Diagnostic Audit · Business Management",
    title: "The 3-Minute Business Clarity Test",
    sub: "Unsure which operational system is bleeding the most revenue? Answer 3 quick structural questions to get an instant personalized diagnosis and recommended roadmap.",
    steps: [
      {
        num: 1,
        title: "Question 1: What is your primary business bottleneck right now?",
        desc: "Be completely honest—where are you spending most of your fire-fighting energy?",
        options: [
          { val: "low-ticket", text: `"I have no structure or clarity. Leads are random, and I'm guessing what to do next."` },
          { val: "mid-ticket", text: `"I generate leads but conversion is manual, slow, or inconsistent. I lack predictable sales systems."` },
          { val: "high-ticket", text: `"I am trapped in daily operations. My team is completely dependent on me, and I work 12+ hour days."` }
        ]
      },
      {
        num: 2,
        title: "Question 2: If you take a 3-week complete holiday today, what happens?",
        desc: "This is the ultimate test of operational systems vs. founder hustle.",
        options: [
          { val: "low-ticket", text: `"Total operational and revenue collapse within 48 hours."` },
          { val: "mid-ticket", text: `"The business survives, but chaos/fires will break out and clients will complain."` },
          { val: "high-ticket", text: `"Everything runs predictably. The team manages outcomes, and revenue keeps flowing."` }
        ]
      },
      {
        num: 3,
        title: "Question 3: What is your current annual business revenue range?",
        desc: "Selecting your bracket helps pinpoint the exact operational phase you are currently in.",
        options: [
          { val: "low-ticket", text: `"Under ₹10 Lakhs (Startup / Self-employed scale)"` },
          { val: "mid-ticket", text: `"₹10 Lakhs - ₹50 Lakhs (Growing business needing systems)"` },
          { val: "high-ticket", text: `"₹50 Lakhs - ₹5 Crores (Established scale needing executive shift)"` }
        ]
      }
    ]
  },
  workforce: {
    badge: "Workforce Diagnostic Audit · Human Resource Management",
    title: "The 3-Minute Workforce Clarity Test",
    sub: "Unsure which HR system is causing the most friction or attrition? Answer 3 quick workforce questions to receive an instant HR diagnosis & installation roadmap.",
    steps: [
      {
        num: 1,
        title: "Question 1: What is your primary HR & workforce bottleneck right now?",
        desc: "Be completely honest—where is your HR team spending most of their energy?",
        options: [
          { val: "low-ticket", text: `"We have no structured visibility into employee morale, friction points, or role alignment. Surveys are annual rituals with zero actionable insights."` },
          { val: "mid-ticket", text: `"We know our friction areas, but we lack installed workforce systems (role charters, workload governance, career pathways, manager cohorts)."` },
          { val: "high-ticket", text: `"Our HR team is overwhelmed by repetitive manual queries, onboarding overhead, and talent screening. We need AI agents & HRIS integration."` }
        ]
      },
      {
        num: 2,
        title: "Question 2: If your HR Head / CHRO takes a 4-week leave today, what happens?",
        desc: "This is the ultimate test of workforce system maturity vs. manual HR fire-fighting.",
        options: [
          { val: "low-ticket", text: `"HR operations grind to a halt; employee grievances and attrition risks go completely unmonitored."` },
          { val: "mid-ticket", text: `"Basic payroll runs, but manager friction, burnout, and role ambiguity cause department chaos."` },
          { val: "high-ticket", text: `"HR systems run autonomously via self-service bots, structured charters, and automated workflows."` }
        ]
      },
      {
        num: 3,
        title: "Question 3: What is your current company workforce / team size bracket?",
        desc: "Selecting your team size helps pinpoint the exact HR installation phase required.",
        options: [
          { val: "low-ticket", text: `"Under 25 Employees (Growing team needing initial HR diagnosis & mindset clarity)"` },
          { val: "mid-ticket", text: `"25 to 150 Employees (Scaling organization needing 5 core HR systems installed)"` },
          { val: "high-ticket", text: `"150+ Employees (Enterprise workforce needing custom HR tech & AI agent integration)"` }
        ]
      }
    ]
  }
};

function renderQuizStepsMarkup(mode) {
  const data = quizQuestionsData[mode];
  if (!data) return '';
  return `
    <div class="quiz-progress-bar" id="quizProgress" style="width: 0%;"></div>
    ${data.steps.map((s, idx) => `
      <div class="quiz-step ${idx === 0 ? 'active' : ''}" data-step="${s.num}">
        <h3>${s.title}</h3>
        <p class="quiz-step-desc">${s.desc}</p>
        <div class="quiz-options">
          ${s.options.map(opt => `
            <div class="quiz-option" data-value="${opt.val}">
              <span class="quiz-option-text">${opt.text}</span>
              <div class="quiz-option-indicator"></div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}
    <div class="quiz-navigation">
      <button class="btn btn-outline btn-sm" id="quizPrevBtn" style="visibility: hidden;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
          stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back
      </button>
    </div>
  `;
}

window.switchClarityTest = function (mode) {
  if (mode !== 'business' && mode !== 'workforce') return;
  currentQuizMode = mode;
  currentQuizStep = 1;
  quizAnswers[1] = null;
  quizAnswers[2] = null;
  quizAnswers[3] = null;

  const btnBus = document.getElementById('btnToggleBusiness');
  const btnWf = document.getElementById('btnToggleWorkforce');
  if (btnBus && btnWf) {
    if (mode === 'business') {
      btnBus.classList.add('active');
      btnWf.classList.remove('active');
    } else {
      btnWf.classList.add('active');
      btnBus.classList.remove('active');
    }
  }

  const badgeEl = document.getElementById('clarityHeroBadge');
  const titleEl = document.getElementById('clarityHeroTitle');
  const subEl = document.getElementById('clarityHeroSub');
  const qData = quizQuestionsData[mode];

  if (badgeEl) {
    badgeEl.innerText = qData.badge;
    badgeEl.className = mode === 'business' ? 'badge badge-green' : 'badge badge-indigo';
  }
  if (titleEl) titleEl.innerText = qData.title;
  if (subEl) subEl.innerText = qData.sub;

  const philTag = document.getElementById('philTag');
  const philSub = document.getElementById('philSub');
  const philCards = document.getElementById('philCards');

  if (philTag) {
    philTag.innerText = mode === 'business' ? 'Diagnostic Philosophy' : 'Workforce Philosophy';
    philTag.className = mode === 'business' ? 'badge badge-orange section-tag' : 'badge badge-teal section-tag';
  }
  if (philSub) {
    philSub.innerText = mode === 'business'
      ? 'Treating business symptoms without naming the underlying operational bottleneck is why 92% of business owners remain trapped in manual firefighting.'
      : 'Treating workforce symptoms without diagnosing the 5 core workplace health dimensions is why organisations struggle with attrition and role friction.';
  }
  if (philCards) {
    if (mode === 'business') {
      philCards.innerHTML = `
        <div class="bonus-detail-card">
          <div>
            <span class="badge badge-orange" style="margin-bottom: 12px;">Tier 01 Pathway</span>
            <h3 style="font-size: 18px; margin-bottom: 8px;">Business X-Ray™</h3>
            <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">
              For business owners who need immediate diagnostic clarity. 62-point audit across 7 operational layers + Founder Mindset layer, producing a coach-reviewed fix report.
            </p>
            <a href="bxr/index.html" style="font-size: 13px; font-weight: 700; color: var(--accent-orange);">View Business X-Ray Details →</a>
          </div>
        </div>

        <div class="bonus-detail-card">
          <div>
            <span class="badge badge-green" style="margin-bottom: 12px;">Tier 02 Pathway</span>
            <h3 style="font-size: 18px; margin-bottom: 8px;">Business Acceleration Engine™</h3>
            <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">
              For owners with validated offers who need to build marketing, sales closing, team delegation, and cashflow control machines over 60 days.
            </p>
            <a href="bae/index.html" style="font-size: 13px; font-weight: 700; color: var(--accent-green);">View Acceleration Engine Details →</a>
          </div>
        </div>

        <div class="bonus-detail-card">
          <div>
            <span class="badge badge-blue" style="margin-bottom: 12px;">Tier 03 Pathway</span>
            <h3 style="font-size: 18px; margin-bottom: 8px;">AI + Tech Integration Bootcamp</h3>
            <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">
              For established businesses ready to deploy Euro Digital's complete software ('eurodigital.ae') and AI agent ('eurodigi.ai') ecosystem to scale 10x–50x.
            </p>
            <a href="bai/index.html" style="font-size: 13px; font-weight: 700; color: var(--accent-blue);">View AI Tech Integration Details →</a>
          </div>
        </div>
      `;
    } else {
      philCards.innerHTML = `
        <div class="bonus-detail-card">
          <div>
            <span class="badge badge-teal" style="margin-bottom: 12px;">Tier 01 Pathway</span>
            <h3 style="font-size: 18px; margin-bottom: 8px;">Workforce X-Ray™</h3>
            <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">
              For HR leaders & CEOs needing precision workforce health diagnosis. 60-question examination across 5 workplace health dimensions + HR Leader Mindset assessment.
            </p>
            <a href="wxr/index.html" style="font-size: 13px; font-weight: 700; color: var(--accent-lime-dark);">View Workforce X-Ray Details →</a>
          </div>
        </div>

        <div class="bonus-detail-card">
          <div>
            <span class="badge badge-indigo" style="margin-bottom: 12px;">Tier 02 Pathway</span>
            <h3 style="font-size: 18px; margin-bottom: 8px;">Workforce Acceleration Engine™</h3>
            <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">
              For organisations needing 5 core workforce systems installed over 60 days (Role Clarity, Wellbeing Ops, Focus Culture, Career Pathways & Manager Cohort).
            </p>
            <a href="workforce-acceleration-engine.html" style="font-size: 13px; font-weight: 700; color: var(--accent-cyan-dark);">View Workforce Engine Details →</a>
          </div>
        </div>

        <div class="bonus-detail-card">
          <div>
            <span class="badge badge-cyan" style="margin-bottom: 12px;">Tier 03 Pathway</span>
            <h3 style="font-size: 18px; margin-bottom: 8px;">AI + Tech Workforce Integration Bootcamp</h3>
            <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">
              For HR departments ready to deploy eurodigital.ae HRIS software and eurodigi.ai AI query & voice screening agents to eliminate manual HR friction.
            </p>
            <a href="ai-tech-workforce-integration-bootcamp.html" style="font-size: 13px; font-weight: 700; color: var(--accent-cyan-dark);">View HR Tech Bootcamp Details →</a>
          </div>
        </div>
      `;
    }
  }

  const quizBox = document.getElementById('quizBox');
  if (quizBox) {
    quizBox.innerHTML = renderQuizStepsMarkup(mode);
    attachQuizBoxListeners();
  }
};

function attachQuizBoxListeners() {
  const quizBox = document.getElementById('quizBox');
  const quizPrevBtn = document.getElementById('quizPrevBtn');
  const quizProgress = document.getElementById('quizProgress');

  if (!quizBox) return;

  quizBox.onclick = (e) => {
    const option = e.target.closest('.quiz-option');
    if (!option) return;

    const stepEl = option.closest('.quiz-step');
    if (!stepEl) return;
    const stepNum = parseInt(stepEl.dataset.step);

    stepEl.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');
    quizAnswers[stepNum] = option.dataset.value;

    setTimeout(() => {
      if (currentQuizStep < 3) {
        document.querySelector(`.quiz-step[data-step="${currentQuizStep}"]`).classList.remove('active');
        currentQuizStep++;
        document.querySelector(`.quiz-step[data-step="${currentQuizStep}"]`).classList.add('active');
        updateQuizState();
      } else {
        renderQuizResult();
      }
    }, 280);
  };

  if (quizPrevBtn) {
    quizPrevBtn.onclick = () => {
      if (currentQuizStep > 1) {
        document.querySelector(`.quiz-step[data-step="${currentQuizStep}"]`).classList.remove('active');
        currentQuizStep--;
        document.querySelector(`.quiz-step[data-step="${currentQuizStep}"]`).classList.add('active');
        updateQuizState();
      }
    };
  }

  function updateQuizState() {
    const progress = ((currentQuizStep - 1) / 3) * 100;
    if (quizProgress) quizProgress.style.width = `${progress}%`;
    if (quizPrevBtn) quizPrevBtn.style.visibility = currentQuizStep > 1 ? 'visible' : 'hidden';
  }

  function renderQuizResult() {
    if (quizProgress) quizProgress.style.width = '100%';
    const counts = { 'low-ticket': 0, 'mid-ticket': 0, 'high-ticket': 0 };
    Object.values(quizAnswers).forEach(val => { if (counts[val] !== undefined) counts[val]++; });

    let recommendation = 'low';
    let title = "";
    let price = "";
    let badgeColor = "";
    let desc = "";
    let features = [];
    let btnLabel = "";
    let btnUrl = "";

    if (currentQuizMode === 'business') {
      title = "Business X-Ray™";
      price = window.tier1Price || "$29";
      badgeColor = "badge-orange";
      desc = "You need a structured 7-layer diagnostic audit and roadmap to identify your operational and mindset bottlenecks before prescribing heavy tools.";
      features = [
        "Complete the 7-Layer operational & mindset diagnostic form",
        "Receive your personalised coach-reviewed Fix Reports",
        "Attend the 2-hour live masterclass to build your 60-day roadmap"
      ];
      btnLabel = `Enroll in X-Ray™ Program (${price})`;
      btnUrl = "bxr/index.html";

      if (counts['high-ticket'] >= 2) {
        recommendation = 'high';
        title = "AI + Tech Business Integration Bootcamp";
        price = "Custom Quote";
        badgeColor = "badge-blue";
        desc = "Your business is ready to transition from manual operations to an integrated system. You need to deploy custom AI agents, chatbots, ERPs, and automated workflows to scale your capacity.";
        features = [
          "Complete a 1-on-1 Tech-Fit Audit to map your bottleneck layers",
          "Integrate eurodigital.ae software & eurodigi.ai AI tools",
          "Deploy live BI dashboards alongside your newly trained team"
        ];
        btnLabel = "Explore Bootcamp & Book Audit";
        btnUrl = "bai/index.html";
      } else if (counts['mid-ticket'] >= 2 || (counts['low-ticket'] === 1 && counts['mid-ticket'] === 1 && counts['high-ticket'] === 1)) {
        recommendation = 'mid';
        title = "Business Acceleration Engine™";
        price = window.tier2Price || "$299";
        badgeColor = "badge-green";
        desc = "You have validated your core offers but lack automated sales channels, consistent leads, and standardized onboarding systems.";
        features = [
          "Deploy 3-channel consistent marketing lead systems",
          "Acquire consultative closing scripts and objections playbooks",
          "Participate in 8 weekly live hot-seat mentorship reviews"
        ];
        btnLabel = "View Scaling Engine Details";
        btnUrl = "bae/index.html";
      }
    } else {
      // WORKFORCE MODE
      title = "Workforce X-Ray™";
      price = "From $160";
      badgeColor = "badge-teal";
      desc = "You need a structured 5-dimension workplace MRI diagnostic audit (Performance, Wellbeing, Productivity, Growth Gap, Manager/Culture) and HR Leader Mindset assessment.";
      features = [
        "Execute 60-question 5-dimension workplace health diagnostic audit",
        "Receive dual Personal Employee & Aggregate Organisational Fix Reports",
        "Attend 2-hour live masterclass to decode cohort heatmaps & build roadmap"
      ];
      btnLabel = "Enroll in Workforce X-Ray™ (From $160)";
      btnUrl = "wxr/index.html";

      if (counts['high-ticket'] >= 2) {
        recommendation = 'high';
        title = "AI + Tech Workforce Integration Bootcamp";
        price = "Custom Quote";
        badgeColor = "badge-cyan";
        desc = "Your workforce operations are ready for 2-platform technology integration. Deploy eurodigital.ae HRIS software and eurodigi.ai AI HR query & voice screening agents.";
        features = [
          "Book 90-minute paid Tech-Fit Audit mapping weak HR dimensions",
          "Integrate WhatsApp/Web HR query bots & voice screening agents",
          "Target 3x Year 1 ROI multiplier with 30-60% query deflection"
        ];
        btnLabel = "Explore HR Tech Bootcamp & Book Audit";
        btnUrl = "ai-tech-workforce-integration-bootcamp.html";
      } else if (counts['mid-ticket'] >= 2 || (counts['low-ticket'] === 1 && counts['mid-ticket'] === 1 && counts['high-ticket'] === 1)) {
        recommendation = 'mid';
        title = "Workforce Acceleration Engine™";
        price = "Custom / Tiered";
        badgeColor = "badge-indigo";
        desc = "Your HR department needs 5 core workforce systems installed over 60 days (Role Clarity, Wellbeing Operations, Focus Culture, Career Pathways, & Manager Cohort) alongside an Executive Mandate charter.";
        features = [
          "Install 5 core workforce systems across 8 live build sessions",
          "Sign Executive Mandate granting HR head clear decision authority",
          "Execute Day-60 rescore pulse & executive readout"
        ];
        btnLabel = "Install HR Acceleration Engine";
        btnUrl = "workforce-acceleration-engine.html";
      }
    }

    quizBox.innerHTML = `
      <div class="quiz-step active" style="animation: fadeIn 0.5s ease-in-out;">
        <div class="quiz-result-header">
          <span class="badge ${badgeColor}" style="margin-bottom:12px;">Diagnostic Completed</span>
          <h3>${currentQuizMode === 'business' ? 'Business' : 'Workforce'} Diagnostic Recommendation</h3>
          <p>Based on your quiz parameters, here is your ${currentQuizMode === 'business' ? 'systems-gap' : 'workforce health'} assessment scorecard:</p>
        </div>

        <div class="quiz-result-scorecard">
          <div>
            <h4 style="font-size:18px; margin-bottom:8px; font-weight:700;">Structural Leaks Identified:</h4>
            <ul style="display:flex; flex-direction:column; gap:8px;">
              ${features.map(f => `
                <li style="display:flex; align-items:flex-start; gap:8px; font-size:14px; color:var(--text-secondary);">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${currentQuizMode === 'business' ? 'var(--accent-cyan)' : 'var(--accent-lime)'}" stroke-width="3" style="flex-shrink:0; margin-top:2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="result-score-block">
            <div class="result-score-num">${recommendation === 'low' ? '34%' : recommendation === 'mid' ? '62%' : '84%'}</div>
            <div class="result-score-label">${currentQuizMode === 'business' ? 'Systems Capacity Score' : 'Workforce Health Score'}</div>
          </div>
        </div>

        <div class="quiz-recommendation-card">
          <h4>
            <svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>
            Highly Recommended: ${title}
          </h4>
          <p style="font-size:14.5px; color:var(--text-primary); line-height:1.6;">${desc}</p>
        </div>

        <div style="display:flex; justify-content:center; gap:16px;">
          <button class="btn btn-outline" onclick="window.switchClarityTest('${currentQuizMode}')">Retake Quiz</button>
          <a href="${btnUrl}" class="btn ${currentQuizMode === 'business' ? 'btn-orange' : 'btn-blue'}">${btnLabel} →</a>
        </div>
      </div>
    `;
    if (quizPrevBtn) quizPrevBtn.style.display = 'none';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  attachQuizBoxListeners();
});


// --- SMART VIEWPORT VIDEO & GPU RESOURCE MANAGER ---
function initSmartVideoObserver() {
  const previewIframes = document.querySelectorAll('.course-video-container iframe, .course-video-wrapper iframe, .top-video-container iframe');
  if (previewIframes.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    previewIframes.forEach(iframe => {
      iframe.setAttribute('loading', 'lazy');
    });
    return;
  }

  // Pre-store original src in data-src attribute for lazy streaming
  previewIframes.forEach(iframe => {
    iframe.setAttribute('loading', 'lazy');
    iframe.style.transform = 'translateZ(0)';
    iframe.style.backfaceVisibility = 'hidden';
    if (!iframe.dataset.src && iframe.src && iframe.src !== 'about:blank') {
      iframe.dataset.src = iframe.src;
    }
  });

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const iframe = entry.target;
      const targetSrc = iframe.dataset.src;
      if (!targetSrc) return;

      if (entry.isIntersecting) {
        // Enters buffer zone: mount/activate stream if not active
        if (!iframe.src || iframe.src === 'about:blank' || iframe.src.indexOf('about:blank') !== -1) {
          iframe.src = targetSrc;
        }
        iframe.style.opacity = '1';
        iframe.style.pointerEvents = 'none';
      } else {
        // Exits buffer zone: detach heavy stream to free GPU decoding threads
        if (iframe.closest('.course-card') || iframe.closest('.course-video-container')) {
          if (iframe.src && iframe.src !== 'about:blank') {
            iframe.src = 'about:blank';
            iframe.style.opacity = '0';
          }
        }
      }
    });
  }, {
    root: null,
    rootMargin: '300px 0px 300px 0px',
    threshold: 0.01
  });

  previewIframes.forEach(iframe => videoObserver.observe(iframe));
}

// --- 5. VIDEO PLAYER MODAL CONTROLLER ---
function openVideoModal(videoSrc) {
  const videoPlayerModal = document.getElementById('videoPlayerModal');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  const modalIframePlayer = document.getElementById('modalIframePlayer');
  if (!videoPlayerModal) return;

  const isIframeOrEmbed = videoSrc.includes('player.mediadelivery.net') || videoSrc.includes('iframe') || videoSrc.includes('embed') || videoSrc.includes('youtube') || videoSrc.includes('vimeo');

  if (isIframeOrEmbed) {
    if (modalVideoPlayer) {
      modalVideoPlayer.style.display = 'none';
      modalVideoPlayer.pause();
      modalVideoPlayer.src = '';
    }
    if (modalIframePlayer) {
      modalIframePlayer.style.display = 'block';
      modalIframePlayer.src = videoSrc;
    }
  } else {
    if (modalIframePlayer) {
      modalIframePlayer.style.display = 'none';
      modalIframePlayer.src = '';
    }
    if (modalVideoPlayer) {
      modalVideoPlayer.style.display = 'block';
      modalVideoPlayer.src = videoSrc;
      modalVideoPlayer.load();
      modalVideoPlayer.play().catch(e => console.log("Autoplay blocked:", e));
    }
  }

  videoPlayerModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const videoPlayerModal = document.getElementById('videoPlayerModal');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  const modalIframePlayer = document.getElementById('modalIframePlayer');
  if (!videoPlayerModal) return;

  videoPlayerModal.classList.remove('active');
  document.body.style.overflow = 'auto';

  if (modalVideoPlayer) {
    modalVideoPlayer.pause();
    modalVideoPlayer.src = '';
  }
  if (modalIframePlayer) {
    modalIframePlayer.src = '';
    modalIframePlayer.style.display = 'none';
  }
}

// --- 6. LEGAL MODALS CONTROLLER & CONTENTS ---
const legalTexts = {
  privacy: `
    <h3>1. Introduction</h3>
    <p>Welcome to <strong>Euro Digital Technologies</strong> ("Euro Digital Technologies", "we", "our", "us"). We provide premium business diagnostics assessments, systems-driven execution courses, and software integration kits. We are deeply committed to safeguarding the privacy and security of our visitors and clients.</p>
    <div class="legal-text-highlight">
      <strong>WhatsApp Communication Consent:</strong><br>
      We strictly follow a zero-spam policy. Phone numbers collected via diagnostic assessments and course forms are used exclusively for course updates and systems notifications, under your explicit consent.
    </div>
    <h3>2. Information We Collect</h3>
    <ul>
      <li><strong>Personal Identifiers:</strong> Full Name, Email Address, and WhatsApp Mobile Number.</li>
      <li><strong>Diagnostic Quiz Metadata:</strong> Capacity metrics, bottleneck scores, and roadmap options.</li>
    </ul>
    <h3>3. How We Process & Use Your Information</h3>
    <ul>
      <li>To generate your custom 7-Layer Business Scan and send the 60-day strategic roadmap.</li>
      <li>To deliver course ticket details, program confirmations, and onboarding links.</li>
    </ul>
    <h3>4. Consent Management & Unsubscribe</h3>
    <p>If you wish to revoke your consent, reply <strong>"STOP"</strong> directly to any WhatsApp thread, or email our support desk at <strong>bdm@eurodigital.ae</strong>.</p>
  `,
  terms: `
    <h3>1. Services Overview</h3>
    <p>Euro Digital Technologies operates a 3-tier systems training and transformation suite designed strictly for business owners, agency operators, independent coaches, and startups.</p>
    <h3>2. Copyright & Intellectual Property</h3>
    <p>All curriculum contents, video modules, 7-layer scan framework algorithms, spreadsheet models, consultative sales scripts, and SOP sheets are sole property of Euro Digital Technologies.</p>
  `,
  refund: `
    <h3>1. Action-Based 100% Guarantee</h3>
    <p>We believe in outcome-driven frameworks. Our refund program is strictly execution-based.</p>
    <h3>2. Terms of Execution for Refund</h3>
    <p>To secure a complete refund for the 60-day <strong>Business Acceleration Engine™</strong> ($299), you must submit proof of setup within 60 days of purchase.</p>
  `
};

function openLegalModal(type) {
  const legalModal = document.getElementById('legalModal');
  const legalTitle = document.getElementById('legalModalTitle');
  const legalContent = document.getElementById('legalModalContent');
  if (!legalModal || !legalTitle || !legalContent || !legalTexts[type]) return;

  legalContent.innerHTML = legalTexts[type];
  if (type === 'privacy') legalTitle.innerText = "Privacy Policy";
  else if (type === 'terms') legalTitle.innerText = "Terms of Service";
  else if (type === 'refund') legalTitle.innerText = "Refund Guarantee Policy";

  legalModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  legalContent.scrollTop = 0;
}

function closeLegalModal() {
  const legalModal = document.getElementById('legalModal');
  if (!legalModal) return;
  legalModal.classList.remove('active');
  if (['#privacy-policy', '#terms-of-service', '#refund-policy'].includes(location.hash)) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
  document.body.style.overflow = 'auto';
}

function handleHashNavigation() {
  const hash = location.hash;
  if (hash === '#privacy-policy') openLegalModal('privacy');
  else if (hash === '#terms-of-service') openLegalModal('terms');
  else if (hash === '#refund-policy') openLegalModal('refund');
}

window.addEventListener('hashchange', handleHashNavigation);
window.addEventListener('DOMContentLoaded', handleHashNavigation);

function openPricingModal(courseKey) {
  const modal = document.getElementById('pricingModal');
  if (!modal) return;

  const headerDesc = modal.querySelector('.modal-title-desc');
  const title = modal.querySelector('.modal-title');
  const metaRow = modal.querySelector('.modal-meta-row');
  const modalBody = modal.querySelector('.modal-body');
  const ctaBtn = modal.querySelector('.modal-footer a.btn');
  const footerNote = modal.querySelector('.modal-footer > div');

  if (courseKey === 'workforce-acceleration-engine') {
    if (headerDesc) {
      headerDesc.textContent = "Workforce Acceleration Engine™ Pricing";
      headerDesc.style.color = "var(--accent-cyan-dark)";
    }
    if (title) title.textContent = "Done-With-You HR Systems Installation";
    if (metaRow) {
      metaRow.innerHTML = `
        <span>60-Day Execution Sprint</span>
        <span>•</span>
        <span style="color: var(--accent-cyan-dark); font-weight: 700;">Custom Scope &amp; Tiered Installation</span>
      `;
    }
    if (modalBody) {
      modalBody.innerHTML = `
        <div style="text-align: center; padding: 36px 20px; background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); margin: 8px 0 16px 0;">
          <div style="width: 54px; height: 54px; border-radius: 50%; background: var(--accent-cyan-light); color: var(--accent-cyan-dark); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 10px; color: var(--text-primary);">Custom &amp; Tiered Installation Pricing</h3>
          <p style="font-size: 14.5px; color: var(--text-secondary); max-width: 520px; margin: 0 auto 20px auto; line-height: 1.6;">
            Pricing for the 60-day done-with-you Workforce Acceleration Engine™ is customized based on organizational scale, headcount, and custom installation modules. Detailed tiered packages will be published soon.
          </p>
          <div style="display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: var(--accent-cyan-dark); background: var(--accent-cyan-light); padding: 6px 14px; border-radius: 20px;">
            ✔ Includes Executive Mandate &amp; 8 Live Build Sessions
          </div>
        </div>
      `;
    }
    if (footerNote) {
      footerNote.textContent = "Custom rollout packages tailored to your HR infrastructure.";
    }
    if (ctaBtn) {
      ctaBtn.href = "https://wa.me/971555113655?text=Workforce%20Acceleration%20Engine%20Program";
      ctaBtn.textContent = "Inquire for Pricing / Custom Scope";
      ctaBtn.className = "btn btn-cyan";
      ctaBtn.style.backgroundColor = "var(--accent-cyan)";
      ctaBtn.style.color = "#ffffff";
    }
  } else {
    // Default: Workforce X-Ray
    if (headerDesc) {
      headerDesc.textContent = "Workforce X-Ray™ Pricing";
      headerDesc.style.color = "var(--accent-lime-dark)";
    }
    if (title) title.textContent = "India — Bundle Pricing (USD)";
    if (metaRow) {
      metaRow.innerHTML = `
        <span>Tiered organizational diagnostic packages</span>
        <span>•</span>
        <span style="color: var(--accent-lime-dark); font-weight: 700;">Early Bird Pricing Active</span>
      `;
    }
    if (modalBody) {
      modalBody.innerHTML = `
        <div class="pricing-table-wrapper" style="margin: 0; border-radius: 12px;">
          <table class="bundle-pricing-table">
            <thead>
              <tr>
                <th>Tier</th>
                <th class="text-center">Employees Assess.</th>
                <th class="text-center">HR seats trained</th>
                <th class="text-center">Base</th>
                <th class="text-right">Early Bird</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="pricing-tier-name">Individual</td>
                <td class="text-center">Up to 50</td>
                <td class="text-center">1 HR</td>
                <td class="text-center pricing-base-val">$260</td>
                <td class="text-right"><span class="pricing-early-bird">$160</span></td>
              </tr>
              <tr>
                <td class="pricing-tier-name">Starter</td>
                <td class="text-center">50 - 100</td>
                <td class="text-center">5 HR</td>
                <td class="text-center pricing-base-val">$2,090</td>
                <td class="text-right"><span class="pricing-early-bird">$1,560</span></td>
              </tr>
              <tr>
                <td class="pricing-tier-name">Growth</td>
                <td class="text-center">101–250</td>
                <td class="text-center">10 HR</td>
                <td class="text-center pricing-base-val">$3,660</td>
                <td class="text-right"><span class="pricing-early-bird">$2,610</span></td>
              </tr>
              <tr>
                <td class="pricing-tier-name">Mid-Market</td>
                <td class="text-center">251–500</td>
                <td class="text-center">15 HR</td>
                <td class="text-center pricing-base-val">$5,230</td>
                <td class="text-right"><span class="pricing-early-bird">$4,180</span></td>
              </tr>
              <tr>
                <td class="pricing-tier-name">Enterprise</td>
                <td class="text-center">501–1,000</td>
                <td class="text-center">20 HR</td>
                <td class="text-center pricing-base-val">$8,380</td>
                <td class="text-right"><span class="pricing-early-bird">$6,280</span></td>
              </tr>
              <tr>
                <td class="pricing-tier-name">Large Enterprise</td>
                <td class="text-center">1,001–2,500</td>
                <td class="text-center">30 HR</td>
                <td class="text-center pricing-base-val">$15,710</td>
                <td class="text-right"><span class="pricing-early-bird">$12,570</span></td>
              </tr>
              <tr>
                <td class="pricing-tier-name">Custom (Group)</td>
                <td class="text-center">2,500+</td>
                <td class="text-center">50+ HR</td>
                <td class="text-center pricing-base-val">From $26,200</td>
                <td class="text-right"><span class="pricing-early-bird">Bespoke</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size: 13px; color: var(--text-secondary); margin-top: 12px; margin-bottom: 0; line-height: 1.5;">
          All prices are one-time, per engagement. Early Bird rates apply to registrations confirmed before the enrolment deadline.
        </p>
      `;
    }
    if (footerNote) {
      footerNote.textContent = "All bundles include personalized reports & masterclass.";
    }
    if (ctaBtn) {
      ctaBtn.href = "https://wa.me/971555113655?text=Workforce%20X-Ray%20Program";
      ctaBtn.textContent = "Get Quote / Enroll Now";
      ctaBtn.className = "btn btn-teal";
      ctaBtn.style.backgroundColor = "";
      ctaBtn.style.color = "";
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePricingModal() {
  const modal = document.getElementById('pricingModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Modal Backdrop & Escape Key Listeners
window.addEventListener('DOMContentLoaded', () => {
  const videoPlayerModal = document.getElementById('videoPlayerModal');
  const legalModal = document.getElementById('legalModal');
  const pricingModal = document.getElementById('pricingModal');

  if (videoPlayerModal) {
    videoPlayerModal.addEventListener('click', (e) => {
      if (e.target === videoPlayerModal) closeVideoModal();
    });
  }

  if (legalModal) {
    legalModal.addEventListener('click', (e) => {
      if (e.target === legalModal) closeLegalModal();
    });
  }

  if (pricingModal) {
    pricingModal.addEventListener('click', (e) => {
      if (e.target === pricingModal) closePricingModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideoModal();
      closeLegalModal();
      closePricingModal();
    }
  });

  // FAQ Accordion
  document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.faq-item');
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
});
