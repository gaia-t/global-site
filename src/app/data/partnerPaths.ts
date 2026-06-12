// Content for the 8 role-based partnership sub-pages.
// One data entry per slug, rendered by PartnerPathPage.tsx in the site's style.

export interface PartnerPath {
  slug: string;
  pathNum: string;
  name: string;
  h1: string;
  sub: string;
  miniStats: { num: string; label: string }[];
  primaryCta: string;
  sideCard: { label: string; title: string; items: string[] };
  reasons: { title: string; cards: { title: string; desc: string }[] };
  deliverables: { title: string; items: { label: string; title: string; desc: string }[] };
  outcomes?: { title: string; intro?: string; items: { num: string; label: string; note: string }[] };
  caseStudy: { mono: string; title: string; stats: { num: string; label: string }[]; quote: string; attr: string };
  faq: { q: string; a: string }[];
}

export const PARTNER_PATHS: Record<string, PartnerPath> = {
  clinics: {
    slug: "clinics",
    pathNum: "BETWEEN-VISIT CARE",
    name: "For Clinics & Hospitals",
    h1: "Extend your chronic care team — without hiring more nutritionists.",
    sub: "Your patient leaves the consult room and won't be back for 90 days. In those 90 days they make 270 meal decisions — most without clinical input. Cofit fills that gap: 1,000+ registered nutritionists, working as your between-visit care layer.",
    miniStats: [
      { num: "−1.4%", label: "HbA1c reduction at partner clinic" },
      { num: "2.3×", label: "Follow-up adherence increase" },
      { num: "91%", label: "Patient satisfaction" },
    ],
    primaryCta: "Schedule a clinical demo",
    sideCard: {
      label: "What you get on day 1",
      title: "A fully clinical extension to your care team.",
      items: [
        "Between-visit care layer — Cofit nutritionists follow up where your team can't",
        "EHR integration ready — HL7/FHIR, Epic, Cerner, regional Asian EHRs",
        "Clinical reporting — per-patient summary before each follow-up",
        "Co-brandable — referral pathway carries your clinic's identity",
        "Live in 4 weeks — from contract to first patient enrolled",
      ],
    },
    reasons: {
      title: "Three reasons clinics choose Cofit over hiring more nutritionists.",
      cards: [
        { title: "Scale without fixed cost.", desc: "One RD can follow ~50–100 patients between visits. Cofit's 1,000+ RDs scale instantly — you only pay for patients actively in the program. No salaries, no leave coverage, no recruiting cycles." },
        { title: "Your physician stays clinically responsible.", desc: "Cofit operates as the care extension under your clinical protocols. Your physician remains the responsible provider; Cofit escalates per your defined thresholds." },
        { title: "The follow-through your A1c results need.", desc: "Partner clinics see −1.2% to −1.4% HbA1c reduction at 6 months — well above standard-of-care benchmarks. The difference is what happens between visits." },
      ],
    },
    deliverables: {
      title: "The full between-visit infrastructure.",
      items: [
        { label: "For patients", title: "A licensed nutritionist within 48 hrs.", desc: "1-on-1 coaching by an RD. Daily food logging with AI assist. Behavior nudges between sessions. Multi-language available." },
        { label: "For physicians", title: "Pre-visit clinical summary.", desc: "Brief PDF (HbA1c trajectory, weight curve, adherence score, nutritionist notes) delivered before each follow-up." },
        { label: "For the clinic", title: "Defined clinical protocols.", desc: "Risk stratification on enrollment. Personalized thresholds. Escalation pathways. Adverse event reporting framework." },
        { label: "For IT / ops", title: "EHR integration.", desc: "HL7/FHIR export, EHR write-back (Epic, Cerner, regional Asian EHRs). SSO, SCIM. Data residency options." },
        { label: "For management", title: "Aggregate outcomes reporting.", desc: "Cohort outcomes by condition, physician panel, and quarter — formatted for clinical quality and value-based contract review." },
        { label: "For finance", title: "Per-patient pricing, volume tiers.", desc: "Pay only for actively enrolled patients. Volume tiers above 500 active patients. Outcomes-based pricing for larger groups." },
      ],
    },
    outcomes: {
      title: "What \"between-visit care\" looks like in your A1c results.",
      items: [
        { num: "−1.2%", label: "Avg. HbA1c reduction", note: "At 6 months, T2D cohort. Each 1% reduction is associated with ~21% lower diabetes-related death (UKPDS)." },
        { num: "82%", label: "Program completion", note: "Flex8 completion rate — vs. ~40% industry benchmark for digital health." },
        { num: "2.3×", label: "Follow-up adherence", note: "Increase in scheduled follow-up appointment attendance at partner clinic." },
      ],
    },
    caseStudy: {
      mono: "A 12-physician endocrinology clinic group · Taipei",
      title: "How a 12-physician practice improved HbA1c control across 1,200 patients in 12 months.",
      stats: [
        { num: "−1.4%", label: "Average HbA1c reduction at 6 months" },
        { num: "2.3×", label: "Follow-up appointment adherence increase" },
        { num: "91%", label: "Patient satisfaction score" },
      ],
      quote: "Cofit gave us the between-visit visibility we never had. Our team can now intervene before a patient's A1c drifts — not three months after.",
      attr: "— Medical Director · Endocrinology Clinic Group, Taipei",
    },
    faq: [
      { q: "How does Cofit interact with our existing nutritionists?", a: "Cofit is an extension layer, not a replacement. Your in-house nutritionists focus on complex cases, education, and oversight; we handle daily follow-up at volume." },
      { q: "Who is clinically accountable for the patient?", a: "Your physician remains the clinically responsible provider. Cofit operates under your clinical protocols and escalates per your defined thresholds." },
      { q: "What does pricing look like?", a: "Per-patient-per-month with volume tiers. Outcomes-based options available for clinic groups above 1,000 patients. Quoted after demo." },
      { q: "Can we white-label or co-brand?", a: "Yes, for partners above a minimum panel size. Co-branded onboarding flow and app experience available." },
      { q: "How is patient data secured?", a: "HIPAA-aligned (US), PDPA-compliant (SG/TW/HK), APPI-compliant (JP). SOC 2 Type II in progress. Full data residency options for regulated markets." },
    ],
  },

  hr: {
    slug: "hr",
    pathNum: "EMPLOYEE BENEFIT",
    name: "For HR & Benefits Leaders",
    h1: "A wellness benefit your workforce will actually use — not just sign up for and forget.",
    sub: "Most workplace wellness apps hit engagement below 10%. Cofit delivers real engagement (62% sign-up, 74% week-12 active) because real nutritionists, in your employees' language, do work that apps can't.",
    miniStats: [
      { num: "62%", label: "Eligible employee sign-up rate" },
      { num: "74%", label: "Active engagement at week 12" },
      { num: "+58", label: "Employee NPS for the benefit" },
    ],
    primaryCta: "Get an engagement benchmark",
    sideCard: {
      label: "What you get on day 1",
      title: "A benefit ready to defend at budget review.",
      items: [
        "Live in 4 weeks — from contract to first employee enrollment",
        "Co-branded launch — your logo, your comms, our playbook",
        "Multi-language support — EN, ZH, JA, more available",
        "Privacy-preserving reporting — aggregate outcomes only, never individual data",
        "Quarterly business reviews — engagement + outcomes + cost trend",
      ],
    },
    reasons: {
      title: "Three reasons Cofit lands where other wellness benefits quietly die.",
      cards: [
        { title: "Real nutritionists, not a chatbot.", desc: "1,000+ RDs. Each enrolled employee is assigned a real nutritionist who builds their plan, answers messages, and adjusts as life happens. Apps hit engagement walls at week 4. Humans don't." },
        { title: "Built for every employee.", desc: "Multi-language AI food recognition with 3.5M+ items across global cuisines. Employees in Taipei, Tokyo, KL, or California get the same personalization — in their own language." },
        { title: "A benefit you can defend at budget review.", desc: "Engagement 3–5× industry norm. Peer-reviewed outcomes. Quarterly reporting that translates to healthcare cost trend assumptions." },
      ],
    },
    deliverables: {
      title: "The full benefit, fully managed.",
      items: [
        { label: "For employees", title: "A registered nutritionist, assigned to them.", desc: "1-on-1 coaching by a licensed RD. Real messages, real meal plans, real follow-through — via app, web, and video." },
        { label: "For employees", title: "Multi-language AI food tracking.", desc: "3.5M+ items across local and global cuisines. Snap a photo, log a meal, get instant feedback in their preferred language." },
        { label: "For employees", title: "One program, multiple goals.", desc: "Weight loss, prediabetes, hypertension, metabolic wellness — all in one program. No app switching." },
        { label: "For HR", title: "Privacy-preserving reporting.", desc: "Aggregate, de-identified results quarterly. You see the trend; you never see individual data. PDPA, APPI, GDPR aligned." },
        { label: "For HR", title: "Co-branded launch & comms.", desc: "Internal launch materials, manager toolkit, sample comms in local languages. Proven at companies of 500 and 5,000." },
        { label: "For finance", title: "Per-employee-per-month pricing.", desc: "Volume tiers. Outcomes-based options above 2,000 employees. Pricing range shared up front." },
      ],
    },
    outcomes: {
      title: "What \"engagement\" looks like when it's actually real.",
      items: [
        { num: "62%", label: "Sign-up rate", note: "Of eligible employees when offered as a benefit. Industry norm is 5–10%." },
        { num: "74%", label: "Week-12 active engagement", note: "Vs. 15–25% benchmark for digital wellness programs in large employers." },
        { num: "−6.8kg", label: "Avg. weight loss", note: "Among engaged employees on Flex8 (8 wk.). Backed by our peer-reviewed Nutrients (2024) study." },
      ],
    },
    caseStudy: {
      mono: "A Fortune Global 500 manufacturer · Taiwan + Singapore",
      title: "How 3,200 employees got a wellness benefit they actually use.",
      stats: [
        { num: "64%", label: "Enrolled within 90 days (vs. 8% prior vendor)" },
        { num: "71%", label: "Still active at month 12" },
        { num: "+61", label: "Employee NPS for the benefit" },
      ],
      quote: "For the first time, our wellness benefit isn't a line item we defend. It's something employees mention in their engagement surveys, unprompted.",
      attr: "— VP of Total Rewards",
    },
    faq: [
      { q: "How does pricing work?", a: "Per-employee-per-month with volume tiers, with outcomes-based options above 2,000 employees. We share specific pricing before the second call." },
      { q: "Is employee data confidential?", a: "Yes. Employees own their health data. You receive only aggregate, de-identified reporting. PDPA, APPI, GDPR aligned." },
      { q: "What if our employees speak many languages?", a: "Cofit supports English, Mandarin, Japanese, and more through both AI and nutritionist channels. Reporting consolidates for you in English." },
      { q: "How does this compare to our insurance wellness perks?", a: "Insurance-bundled apps typically see engagement under 5%. Most partners deploy Cofit alongside insurance benefits, not as a replacement." },
      { q: "Can we integrate with our benefits platform?", a: "SSO via SAML, SCIM provisioning, and integrations with Workday, SAP SuccessFactors, and major regional HRIS platforms." },
    ],
  },

  payers: {
    slug: "payers",
    pathNum: "CLAIMS & OUTCOMES",
    name: "For Insurers & Payers",
    h1: "Reduce metabolic claims — with evidence your actuary can sign off on.",
    sub: "Chronic disease claims rise faster than premium repricing. Cofit was built for payer-grade contracting: peer-reviewed clinical evidence at population scale (10,297 subjects, Nutrients 2024), outcomes-based contracts, and reimbursement frameworks already active in select markets.",
    miniStats: [
      { num: "10,297", label: "Subjects in peer-reviewed trial" },
      { num: "−1.2%", label: "Avg. HbA1c reduction (6 mo.)" },
      { num: "$1,000+", label: "Projected savings per member, Y1*" },
    ],
    primaryCta: "Request the clinical evidence dossier",
    sideCard: {
      label: "What this partnership covers",
      title: "Three contracting models, fully scoped.",
      items: [
        "Member benefit deployment — Cofit as value-add benefit",
        "Outcomes-based contracts — payment tied to clinical milestones",
        "Population health pilot — 1,000–5,000 member 12-mo. observation",
        "Reimbursement framework support — coverage available in select markets",
        "Actuarial-grade reporting — methodology transparency for review",
      ],
    },
    reasons: {
      title: "Three reasons payers move from \"interesting\" to contract.",
      cards: [
        { title: "Evidence in the population you insure.", desc: "Our Nutrients (2024) trial — 10,297 participants, 14× the prior largest digital weight-management study — is peer-reviewed and applicable to populations Western platforms can't reach." },
        { title: "Engagement that actuarial assumptions need.", desc: "82% Flex8 completion vs. ~40% industry benchmark. ROI assumptions hold only if members actually engage." },
        { title: "Pharma-grade clinical accountability.", desc: "Trusted by Novo Nordisk in a signed strategic collaboration. Medical Advisory Board. ISO 27001 path. Outcomes-based contracts with payment at risk." },
      ],
    },
    deliverables: {
      title: "The infrastructure underneath an evidence-based program.",
      items: [
        { label: "Clinical evidence", title: "Peer-reviewed publication dossier.", desc: "Full Nutrients (2024) paper, methodology, sub-cohort analyses, supplementary studies — available under MNDA." },
        { label: "Actuarial", title: "Methodology-transparent reporting.", desc: "Custom cohort analyses, pre/post utilization where data permits, frameworks built for actuarial review — not glossy dashboards." },
        { label: "Clinical", title: "Defined clinical protocols.", desc: "HbA1c, weight, BP, lipid thresholds. Escalation pathways. Adverse event reporting aligned with regulatory standards." },
        { label: "Contract structures", title: "Outcomes-based options.", desc: "Payment contingent on partner-specified clinical milestones (HbA1c, weight loss, completion). Risk shared, incentives aligned." },
        { label: "Compliance", title: "Data residency & certifications.", desc: "PDPA, APPI, GDPR-equivalent. ISO 27001 path. SOC 2 Type II in progress. Data residency in TW, JP, SG." },
        { label: "Implementation", title: "Pilot-to-program pathway.", desc: "Most payer relationships begin with a 12-month pilot. Methodology, success criteria, exit options agreed up front." },
      ],
    },
    outcomes: {
      title: "What translates to actuarial impact.",
      items: [
        { num: "−1.2%", label: "HbA1c reduction", note: "At 6 months in T2D cohort. Each 1% reduction is associated with ~21% lower diabetes-related death (UKPDS)." },
        { num: "−8/−5", label: "mmHg BP reduction", note: "In hypertensive cohort at 12-month follow-up. Associated with ~20% reduction in stroke risk." },
        { num: "$1,000+", label: "Projected savings, Y1*", note: "Per enrolled member, modeled on engaged cohort outcomes. *Methodology in evidence dossier." },
      ],
    },
    caseStudy: {
      mono: "A regional health insurer · East Asia",
      title: "How a 2,400-member 12-month pilot moved into full-program negotiation.",
      stats: [
        { num: "2,400", label: "Member pilot cohort with matched controls" },
        { num: "12 mo.", label: "Pre/post analysis on HbA1c, weight, BP" },
        { num: "+", label: "Full program rollout in active negotiation" },
      ],
      quote: "Cofit was the first partner to come to the table with both clinical evidence and the operational rigor we expect from a reinsurance-grade vendor.",
      attr: "— Chief Medical Officer",
    },
    faq: [
      { q: "Minimum cohort size for a meaningful pilot?", a: "1,000 members for engagement-only metrics; 2,000–3,000 for clinical outcome confidence; 5,000+ for sub-cohort analyses." },
      { q: "What outcomes will you put pricing at risk against?", a: "HbA1c reduction, weight loss thresholds, program completion, and blood pressure reduction — all standard. Specific structures discussed under MNDA." },
      { q: "How do you handle attribution in claims analyses?", a: "Pre/post analyses, matched control cohorts, difference-in-differences where data permits. Methodology co-designed with your actuarial team." },
      { q: "Is Cofit reimbursable today?", a: "Coverage is already available under select group health plans, with additional payer markets in active negotiation." },
      { q: "What about regulatory pathway as a digital therapeutic?", a: "This varies by market and is best discussed under MNDA. Happy to share our current status in your specific market." },
    ],
  },

  pharma: {
    slug: "pharma",
    pathNum: "LIFE SCIENCES",
    name: "For Pharma & Life Sciences",
    h1: "The behavior-change layer your obesity portfolio has been missing.",
    sub: "GLP-1s transformed obesity care, but adherence, dietary support, and lean body mass preservation remain under-served. Cofit is the nutritionist-led behavior-change platform trusted by Novo Nordisk in a signed strategic collaboration.",
    miniStats: [
      { num: "2025", label: "Year of Novo Nordisk collaboration" },
      { num: "1M+", label: "Members across the platform" },
      { num: "RWE", label: "Longitudinal cohort pipeline" },
    ],
    primaryCta: "Talk to pharma partnerships",
    sideCard: {
      label: "Why Novo Nordisk chose us",
      title: "A \"nutrition-first\" model, fully clinical.",
      items: [
        "Real registered nutritionists deliver dietary analysis before pharmacological intervention",
        "Physician-led care plans integrate with prescription therapy",
        "Real-time AI data platform records weight, side effects, nutrition, activity",
        "Clinical adjustment data feeds back to physicians for plan refinement",
        "Behavior-change at the core of long-term obesity management",
      ],
    },
    reasons: {
      title: "From behavior support to direct-to-employer programs.",
      cards: [
        { title: "The behavior layer for your prescriptions.", desc: "Once the prescription is written, real nutritionists take over: dietary planning, side-effect management, lean body mass preservation. Most prescriptions fail at follow-through, not at the molecule." },
        { title: "RWE pipeline for post-launch monitoring.", desc: "Longitudinal cohort data provides real-world adherence, persistence, and outcome signals — supporting post-marketing surveillance and HEOR studies." },
        { title: "Direct-to-employer program partner.", desc: "Following the Omada × Eli Lilly precedent, we deploy as partner-of-record in pharma-funded employer programs — bypassing PBM friction." },
      ],
    },
    deliverables: {
      title: "What Cofit brings to a pharma partnership.",
      items: [
        { label: "Clinical", title: "Nutritionist-led care delivery.", desc: "1,000+ RDs, validated clinical protocols, medical advisory board including endocrinology and obesity specialists." },
        { label: "Data", title: "Real-world evidence infrastructure.", desc: "Longitudinal member data, GLP-1 adherence tracking, side-effect logging — designed to feed HEOR and post-marketing studies." },
        { label: "Commercial", title: "Direct-to-employer channels.", desc: "Deploy as partner-of-record in employer programs your team funds. Transparent net pricing. Bypass PBM friction where strategy requires." },
        { label: "Brand", title: "White-label options.", desc: "Run the program under your franchise brand, co-brand, or run as Cofit. Three modes, partner's choice." },
        { label: "Markets", title: "Multi-market readiness.", desc: "Multi-language AI, local nutritionist recruitment, regulatory framework support across major Asian and global markets." },
        { label: "Education", title: "KOL & prescriber education.", desc: "Co-marketing for HCP education on lifestyle-prescription integration. Conference presence, peer-reviewed content, KOL programs." },
      ],
    },
    caseStudy: {
      mono: "Strategic collaboration · 2025",
      title: "Novo Nordisk × Cofit: integrating nutrition-first care with prescription therapy.",
      stats: [
        { num: "2025", label: "Year of signed collaboration" },
        { num: "Live", label: "Active program in market" },
        { num: "Expanding", label: "Additional pharma partners in discussion" },
      ],
      quote: "The collaboration delivers a 'nutrition-first' weight management model with personalized analysis from registered nutritionists, paired with physician-led clinical care.",
      attr: "— Adapted from joint announcement, May 2025",
    },
    faq: [
      { q: "What commercial structures do you support?", a: "Direct partnerships, co-branded programs, white-label deployments, revenue share, or per-patient fee structures. Specific terms discussed under MNDA." },
      { q: "Can you support post-marketing studies?", a: "Yes. Our longitudinal cohort data, adverse event reporting framework, and clinical advisory infrastructure are designed to support post-marketing surveillance and HEOR." },
      { q: "Are you exclusive to Novo Nordisk?", a: "No. We welcome additional pharma partnerships in adjacent therapeutic areas. Field-of-use exclusivity can be negotiated." },
      { q: "What markets are you ready in?", a: "Active in TW, SG, MY; multi-language AI in EN, ZH, JA; local nutritionist recruitment across most Asian and selected Western markets." },
      { q: "How does this compare to Omada / Noom?", a: "Real licensed nutritionists (not coaches), peer-reviewed evidence at 10,000+ subject scale, and a multi-language platform with native Asian + global capability." },
    ],
  },

  platform: {
    slug: "platform",
    pathNum: "PLATFORM LICENSING",
    name: "For Digital Health Builders",
    h1: "Don't spend 3 years rebuilding what already exists.",
    sub: "License the engine underneath the world's largest nutritionist-led metabolic health platform. SaaS, API, or full white-label. Your brand on top, our platform underneath. From contract to live in market in 8–12 weeks.",
    miniStats: [
      { num: "3.5M+", label: "Foods in AI database" },
      { num: "EN/ZH+", label: "Multi-language out of the box" },
      { num: "8–12", label: "Weeks from contract to launch" },
    ],
    primaryCta: "Request platform demo",
    sideCard: {
      label: "Three licensing modes",
      title: "Pick your level of involvement.",
      items: [
        "SaaS / HIS license — your nutritionists on our platform",
        "Full white-label — your brand, our nutritionists underneath",
        "API access — embed our AI in your existing app",
        "Hybrid — your team for one segment, ours for another",
        "Multi-language — AI + nutritionist channels in your members' language",
      ],
    },
    reasons: {
      title: "Three reasons builders choose infrastructure over service.",
      cards: [
        { title: "Don't reinvent 10 years of work.", desc: "The nutritionist workflow, AI food recognition, clinical protocols, reporting — built once, refined across a million+ members. Launch in 8–12 weeks instead of 3+ years." },
        { title: "Keep your customer relationship.", desc: "White-label means your members never see Cofit. Your brand on the app, your name on the comms. We're the engine, not the face." },
        { title: "Built for multi-market deployment.", desc: "Multi-language AI, configurable food databases, local data residency. Deploy to one market or ten with the same engine." },
      ],
    },
    deliverables: {
      title: "Four engines, available individually or as a stack.",
      items: [
        { label: "Engine 01", title: "Nutritionist workflow platform.", desc: "Case management, member messaging, plan-building tools, supervision workflow, training. Onboard your own RDs onto our platform." },
        { label: "Engine 02", title: "AI food recognition.", desc: "3.5M+ items, global cuisines, multi-language. Available via API for embedding, or as part of the full member app." },
        { label: "Engine 03", title: "Clinical protocols.", desc: "Validated protocols for weight, prediabetes, T2D, hypertension, dyslipidemia, GLP-1 companion care. Backed by peer-reviewed research." },
        { label: "Engine 04", title: "Reporting & integrations.", desc: "Member engagement, clinical outcomes, BI. EHR write-back, SSO, SCIM, configurable data residency." },
        { label: "Branding", title: "Full white-label or co-brand.", desc: "Your logo, domain, and app store presence — or co-branded with Cofit. Configurable per deployment." },
        { label: "Commercial", title: "Pricing models that scale.", desc: "Per seat, per active member, per API call, or revenue share. Volume tiers from pilot to enterprise." },
      ],
    },
    outcomes: {
      title: "Who's already building on us.",
      intro: "Hospital systems extending nutritionist capacity. Insurers launching white-label benefits apps. Pharma powering GLP-1 companion programs. Startups skipping the multi-year platform build.",
      items: [
        { num: "8–12", label: "Weeks to launch", note: "From signed contract to live deployment. Compared to 18–36 months building in-house." },
        { num: "~70%", label: "Lower TCO vs. build", note: "Estimated 3-year total cost of ownership versus building an equivalent platform in-house." },
        { num: "∞", label: "Custom configurations", note: "Languages, cuisines, clinical protocols, branding, integrations — fully configurable per partner." },
      ],
    },
    caseStudy: {
      mono: "A regional digital health builder · Southeast Asia",
      title: "From \"we should build this\" to live in market in 10 weeks.",
      stats: [
        { num: "10 wk", label: "Contract to first member enrolled" },
        { num: "3", label: "Local languages launched simultaneously" },
        { num: "$0", label: "Invested in platform R&D" },
      ],
      quote: "We were a three-month-old startup with a market opportunity and no time. Licensing Cofit's platform meant we shipped the same product as a five-year-old company.",
      attr: "— Co-founder",
    },
    faq: [
      { q: "What's the difference between SaaS and white-label?", a: "SaaS: you license our platform and run the program with your own nutritionists. White-label: you license our platform AND our nutritionist services, presented entirely under your brand. Hybrid combines both." },
      { q: "Can we integrate the AI into our existing app?", a: "Yes — API access is available for the AI food recognition engine, embeddable in a consumer or clinical app without using our full member experience." },
      { q: "What languages does the platform support?", a: "Today: English, Mandarin (Traditional + Simplified), Japanese. In rollout: Korean, Vietnamese, Thai, Bahasa Malaysia. Custom languages for enterprise." },
      { q: "What does pricing look like?", a: "Per active member, per seat, per API call, or revenue share — depending on scale, configuration, and whether you use our nutritionists or yours. Indicative pricing on the first call." },
      { q: "Data ownership and residency?", a: "Your members' data is yours. We operate as a data processor under your contract. Residency options in TW, JP, SG, and more for enterprise." },
    ],
  },

  resellers: {
    slug: "resellers",
    pathNum: "RESELL FLEX8",
    name: "For Resellers & Distributors",
    h1: "You have the customers. We have the program.",
    sub: "Resell Flex8 — our 8-week nutritionist-led program, peer-reviewed in Nutrients (2024) across 10,297 participants — to your client base. Important upfront: you bring the customers, we bring the program. Most overseas resellers should plan on selling to their own customer base, not relying on Cofit lead generation.",
    miniStats: [
      { num: "3", label: "Reseller SKUs available" },
      { num: "10,297", label: "Subjects in published clinical trial" },
      { num: "Active", label: "Reseller pilot in Hong Kong" },
    ],
    primaryCta: "Apply to become a reseller",
    sideCard: {
      label: "What you can resell",
      title: "Three flagship programs.",
      items: [
        "Flex8 — 8-week nutritionist-led program, Cofit's peer-reviewed flagship",
        "1-on-1 Nutritionist Consultation Packages — single or 4/8/12-session bundles",
        "Corporate Wellness Package — pre-packaged employer benefits version",
        "Multi-language support — programs in EN, ZH, more by request",
        "Co-branded materials available for committed partners",
      ],
    },
    reasons: {
      title: "Three reasons service providers add Cofit to their menu.",
      cards: [
        { title: "A program with peer-reviewed proof.", desc: "You're selling Flex8 — the 8-week protocol published in Nutrients (2024) with 10,297 participants. Evidence your customers can verify themselves." },
        { title: "Recurring revenue, not one-off sales.", desc: "Flex8 converts well into 1-on-1 ongoing packages. Completers typically continue with nutritionist support — recurring monthly revenue from a single acquisition." },
        { title: "Marketing, training, and language support included.", desc: "Sales decks, comparison tables, case studies, nutritionist training, and multi-language content. You don't have to invent how to sell Cofit." },
      ],
    },
    deliverables: {
      title: "Profiles of ideal reseller partners.",
      items: [
        { label: "Profile 01", title: "Gyms & fitness studios.", desc: "You already have members trying to lose weight. Add Flex8 as a paid value-add — trainers handle movement; we handle nutrition science." },
        { label: "Profile 02", title: "Weight & bariatric clinics.", desc: "Add Flex8 to your post-bariatric pathway or pre-procedure nutrition stabilization. Relevant for clinics with GLP-1 patients." },
        { label: "Profile 03", title: "Wellness brokers & consultants.", desc: "Add the Corporate Wellness Package as a 'real outcomes' alternative to generic wellness apps for your employer clients." },
        { label: "Profile 04", title: "Pharmacies & retail health.", desc: "You serve customers with chronic conditions. Add Cofit as a referred service alongside your OTC and pharmaceutical lines." },
        { label: "Profile 05", title: "Health food & supplement retailers.", desc: "Cofit's evidence-based program complements (not competes with) supplement sales." },
        { label: "Profile 06", title: "Regional distributors & traders.", desc: "Add Cofit to your healthcare/wellness portfolio, with regional exclusivity possible for committed partners." },
      ],
    },
    outcomes: {
      title: "From single-location pilots to regional exclusivity.",
      items: [
        { num: "01", label: "Authorized Reseller", note: "Low entry, standard SKUs and discount. Sales kit and training included. No exclusivity, no minimum commitment." },
        { num: "02", label: "Regional Distributor", note: "Regional exclusivity, higher margin, joint go-to-market. Requires business plan, minimum volume, in-market sales team." },
        { num: "03", label: "Strategic Channel Partner", note: "Multi-region, multi-SKU. Highest margin. Co-marketing budget. White-label options. Negotiated per partnership." },
      ],
    },
    caseStudy: {
      mono: "A weight management clinic · Hong Kong",
      title: "How a Hong Kong clinic integrated Flex8 into their service menu.",
      stats: [
        { num: "Active", label: "Reseller partnership in operation" },
        { num: "YT-supported", label: "Referrals from 1.03M YouTube subscribers" },
        { num: "Pilot+", label: "Volume growing; broader rollout under review" },
      ],
      quote: "Cofit's program gives us a peer-reviewed weight management service we couldn't develop ourselves — though we still rely on our own clinic patient base for most enrollments.",
      attr: "— Partner clinic, Hong Kong (anonymized)",
    },
    faq: [
      { q: "Will Cofit help me find customers in my market?", a: "In markets where Cofit already has audience reach (e.g., Hong Kong), we can drive some referrals. In most overseas markets you should plan on selling to your own customer base — we provide the program, training, and materials; you bring the customers." },
      { q: "What's the typical reseller margin?", a: "Authorized Reseller: standard wholesale discount. Regional Distributor: higher margin tied to volume and exclusivity. Strategic Channel Partner: negotiated. Rates shared after we understand your market." },
      { q: "Can I get exclusivity in my country?", a: "Possible for Regional Distributor or Strategic Channel Partner tiers, tied to minimum annual commitment and performance — earned through volume, not granted in perpetuity." },
      { q: "How is the program delivered to my customers?", a: "Customers enroll via Cofit's app (or a co-branded version), get a registered nutritionist, and complete Flex8. You receive enrollment and completion reports." },
      { q: "What if I'm just exploring?", a: "The Authorized Reseller tier requires no exclusivity or minimum commitment. Start small, see how your customers respond, and scale up." },
    ],
  },

  providers: {
    slug: "providers",
    pathNum: "REFERRAL NETWORK",
    name: "For Healthcare Professionals",
    h1: "Refer your patients to ongoing support — without losing them, your time, or your control.",
    sub: "For doctors, therapists, trainers, and pharmacists who help patients with metabolic and weight goals but can't follow them every day. Cofit becomes your between-visit care extension. Free to join; outcomes flow back into your relationship.",
    miniStats: [
      { num: "$0", label: "Cost to participate as a referrer" },
      { num: "24 hr", label: "Average response time to referrals" },
      { num: "1,000+", label: "Registered nutritionists ready to help" },
    ],
    primaryCta: "Join the referral network",
    sideCard: {
      label: "Who refers patients to us",
      title: "Healthcare professionals across the spectrum.",
      items: [
        "Endocrinologists & PCPs — T2D and prediabetes patients",
        "OB-GYN & fertility — pre-pregnancy and PCOS support",
        "Obesity & bariatric specialists — pre/post-op and GLP-1 patients",
        "Gyms & fitness studios — nutrition for fitness goals",
        "Pharmacies — chronic disease and weight management customers",
      ],
    },
    reasons: {
      title: "Three reasons our referral partners stay long-term.",
      cards: [
        { title: "The follow-through you don't have time for.", desc: "Your appointment is 15 minutes; your patient has 90 days until next visit. Cofit fills that gap with daily nutritionist touchpoints so the patient follows your plan." },
        { title: "Your patient credits you for the outcome.", desc: "Patients are referred from you, with your endorsement, and continue seeing you. The outcomes show up in your appointments. You stay the clinical leader." },
        { title: "Zero administrative burden.", desc: "One link, one referral form. Your patient enrolls themselves. We handle onboarding, scheduling, and care. You get an optional progress note before each visit." },
      ],
    },
    deliverables: {
      title: "A frictionless referral pathway.",
      items: [
        { label: "Referral tools", title: "One-page referral link.", desc: "Custom-branded URL or QR code for your practice. Patients scan, enroll, and start care within 10 minutes." },
        { label: "Patient experience", title: "Discount or pilot pricing.", desc: "Patients referred from network providers can access promotional pricing or pilot programs. Terms vary by tier." },
        { label: "Reporting", title: "Progress notes before each visit.", desc: "Optional: a brief PDF summary of your referred patient's progress before their follow-up with you." },
        { label: "Branding", title: "Co-branded patient materials.", desc: "Optional: printed referral cards, waiting room materials, and handouts co-branded with your practice." },
        { label: "Education", title: "Continuing education content.", desc: "Quarterly clinical updates on metabolic health research, GLP-1 best practices, and evidence summaries — free for network members." },
        { label: "Recognition", title: "Top referrer recognition.", desc: "Annual recognition for top partner clinics and providers. Joint speaking opportunities at conferences and Cofit events." },
      ],
    },
    outcomes: {
      title: "What happens after they take your referral.",
      items: [
        { num: "82%", label: "Complete Flex8 (8 wk.)", note: "Vs. ~40% industry benchmark for digital health programs." },
        { num: "−7.3kg", label: "Avg. weight loss, engaged cohort", note: "Flex8 cohort with nutritionist-led coaching. Backed by our Nutrients (2024) study." },
        { num: "−1.2%", label: "HbA1c reduction, T2D cohort", note: "At 6 months. Clinical-grade outcomes you can see in your follow-up labs." },
      ],
    },
    caseStudy: {
      mono: "A 12-physician endocrinology clinic group · Taipei",
      title: "How one practice built a between-visit care system using referrals.",
      stats: [
        { num: "1,200", label: "Patients referred over 12 months" },
        { num: "2.3×", label: "Follow-up appointment adherence" },
        { num: "91%", label: "Patient satisfaction score" },
      ],
      quote: "Cofit gave us the between-visit visibility we never had. Our team can now intervene before a patient's A1c drifts — not three months after.",
      attr: "— Medical Director · Endocrinology Clinic Group",
    },
    faq: [
      { q: "Is there a cost to refer patients?", a: "No. Joining the referral network is free for providers. Your patients pay for Cofit's services, with discounted pricing through our partner network." },
      { q: "Do you take patients off our hands?", a: "No. You remain the clinical leader. We provide between-visit nutritional and behavioral support; your patient continues to see you for clinical care." },
      { q: "How does data flow back to my practice?", a: "Optional: a brief progress note before each follow-up (with patient consent). For larger practices, dashboard access and EHR integration are available." },
      { q: "Can we get outcomes reports for our quality programs?", a: "Yes. Aggregate outcomes reports for your referred patient cohort are available quarterly or on demand." },
      { q: "Are referral fees ever offered?", a: "Referral fees raise regulatory concerns in most jurisdictions, so we don't offer them. We focus on clinical value rather than financial incentives." },
    ],
  },

  creators: {
    slug: "creators",
    pathNum: "CREATOR PARTNERSHIPS",
    name: "For Creators & Media",
    h1: "A partner whose science your audience will actually trust.",
    sub: "1M+ users, 1.03M YouTube subscribers, 107K Instagram followers — Cofit didn't grow on viral noise. We grew on licensed nutritionists answering real questions for real people over 9 years.",
    miniStats: [
      { num: "1.03M", label: "YouTube subscribers (@Cofit211)" },
      { num: "107K", label: "Instagram followers (@cofit.me)" },
      { num: "4.8★", label: "App store user rating" },
    ],
    primaryCta: "Start a collab conversation",
    sideCard: {
      label: "Who we work with",
      title: "Three creator partnership tiers.",
      items: [
        "Brand ambassadors — long-term creators aligned with our values",
        "Sponsored content — single video, series, or course partnerships",
        "Affiliate / commission — revenue share on referred members",
        "KOL programs — for credentialed health, fitness, medical creators",
        "Co-created courses — your expertise + our platform",
      ],
    },
    reasons: {
      title: "Three reasons your audience will actually thank you.",
      cards: [
        { title: "Science your audience will trust.", desc: "Real licensed nutritionists. Peer-reviewed publication in Nutrients. Partnership with Novo Nordisk. This isn't a 'wellness' brand pretending to have evidence — we publish ours." },
        { title: "Programs that actually work.", desc: "82% of members complete Flex8. People who try Cofit through your channel see real results — your sponsorship feels like a recommendation, not a sellout." },
        { title: "A team that respects creators.", desc: "We've made content for 9 years. We know what works on camera and what your audience can sniff out. Our briefs are flexible; your creative is yours." },
      ],
    },
    deliverables: {
      title: "How we usually structure these.",
      items: [
        { label: "Standard", title: "Sponsored content.", desc: "Single video, podcast, or post integration. Flat fee + tracking link. Suitable for one-off campaigns." },
        { label: "Recurring", title: "Series partnership.", desc: "4–12 piece series across a quarter or program. Fee + performance bonus. Suitable for educational deep-dives." },
        { label: "Long-term", title: "Brand ambassador.", desc: "12-month agreement with monthly content, category exclusivity, and revenue share on referred members." },
        { label: "Affiliate", title: "Performance-only.", desc: "No upfront fee. Custom tracking link. Revenue share on every referred sign-up." },
        { label: "Expert", title: "KOL / clinical creators.", desc: "For nutritionists, doctors, and certified trainers. Platform access for content creation and joint case study development." },
        { label: "Co-create", title: "Course or program partnerships.", desc: "Your expertise, our platform. Your name on the course. Revenue share or fixed licensing fee." },
      ],
    },
    outcomes: {
      title: "When you recommend us, here's what happens next.",
      intro: "Most influencer partnerships peak at the click; converting clicks into committed customers depends on what's on the other side of the link. Cofit's funnel is built on outcomes.",
      items: [
        { num: "62%", label: "Trial-to-program conversion", note: "Of users who try our free assessment, 62% go on to engage paid services." },
        { num: "82%", label: "Program completion rate", note: "Flex8 completion rate — far above industry benchmarks." },
        { num: "4.8★", label: "App store rating", note: "Across 100K+ user reviews. Your audience won't be embarrassed by the experience you sent them to." },
      ],
    },
    caseStudy: {
      mono: "An example creator partnership · Health & wellness niche",
      title: "How a health-niche creator turned a sponsorship into a long-term partnership.",
      stats: [
        { num: "3×", label: "Sponsored videos in initial test campaign" },
        { num: "7%", label: "Click-to-trial conversion (3× industry avg)" },
        { num: "12 mo.", label: "Renewed as long-term brand ambassador" },
      ],
      quote: "My audience could tell I actually used this. We turned a sponsored series into a multi-year partnership because the science holds up — and the team gives me creative freedom.",
      attr: "— Wellness & Nutrition Channel",
    },
    faq: [
      { q: "How big does my audience need to be?", a: "We work across audience sizes. Affiliate partnerships work for any size; sponsored content typically starts at 50K+ engaged followers; brand ambassador programs are reserved for strong category fit." },
      { q: "Can I use the product before recommending it?", a: "Yes — we strongly prefer this. We provide complimentary access for partner creators to form their own honest opinion before recommending." },
      { q: "Do you have brief restrictions or talking points?", a: "We have factual accuracy requirements for clinical claims but otherwise grant significant creative freedom. We don't require you to read from a script." },
      { q: "What payment terms do you offer?", a: "Sponsored: flat fee on milestones. Affiliate: monthly commissions. Brand ambassador: monthly retainer + performance bonus. Rate cards shared once we know your audience." },
      { q: "Are partnerships available outside Taiwan?", a: "Yes — we work with creators across the US, Singapore, Malaysia, Hong Kong, and increasingly Japan and Southeast Asia. English and Chinese partnerships both supported." },
    ],
  },
};

export const PARTNER_PATH_LIST = Object.values(PARTNER_PATHS).map((p) => ({
  slug: p.slug,
  pathNum: p.pathNum,
  name: p.name,
}));
