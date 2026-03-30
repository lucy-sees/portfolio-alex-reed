// ─── App-Level Configuration ─────────────────────────────────────────────────

export const SITE_META = {
  name: "Alex Reed",
  title: "Portfolio | Alex Reed",
  email: "inquiry@alexreed.design",
  badgeText: "MY DESIGN PORTFOLIO 2026 • ",
  portfolioCount: 7,
};

export const NAV_ITEMS = ["Podcast", "Portfolio", "Research", "Clients"] as const;
export type NavItem = (typeof NAV_ITEMS)[number];
export const ACTIVE_NAV: NavItem = "Portfolio";

export type ReferralKey = "default" | "recruiter" | "creative";

export const REFERRAL_CONTEXTS: Record<
  ReferralKey,
  { greeting: string; placeholder: string; tone: string }
> = {
  recruiter: {
    greeting: "Hello — I'm curating Alex's most relevant work for your review.",
    placeholder: "Filter by skill, industry, or deliverable...",
    tone: "professional",
  },
  creative: {
    greeting: "Hey! Dig around — there's a lot of weird good stuff in here.",
    placeholder: "Try: 'branding', 'motion', 'weird stuff'...",
    tone: "casual",
  },
  default: {
    greeting: "I'm Alex's portfolio agent. Ask me anything about the work.",
    placeholder: "Search projects, awards, clients...",
    tone: "neutral",
  },
};

export interface CardConfig {
  id: string;
  label: string;
  value: string;
  color: string;
  text: string;
  tag: string;
}

export const CARDS: CardConfig[] = [
  { id: "projects", label: "Projects", value: "251", color: "#A8E6CF", text: "#1a5c3a", tag: "projects" },
  { id: "awards",   label: "Awards",   value: "156", color: "#8B5CF6", text: "#fff",    tag: "awards"   },
  { id: "clients",  label: "Clients",  value: "48",  color: "#FFD384", text: "#7a5000", tag: "clients"  },
  { id: "podcast",  label: "Podcast",  value: "3.2K",color: "#f0f0f0", text: "#111",    tag: "podcast"  },
];

export const PROFILE_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBhiHCecg14Yp5Dqm1jS11IGH5oIO6IDiUHwRX3Wuukjm2cygVy56ToC-k2s4iPCkFF_Pgx-nwo08jd8gUyw4bcuth7PvL3xleiEEvzEBiSaN-BWGb5GF_XWW3ES5FCDhWJjOXqgUDDJwbiUcl11JnO7RvS64LRTCwN1yrZb42SvXWccPpJDjd_0xBsgOPnhY3Bik-soDN73iaXNNsyJyacmSwN6xiqDS_e2h6frBzwcodhZcJS63yZcXzaCqZTkd7zdAtmBkX7UtU";

export const HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBzkGdVJVXNI3g89rC7w_0-eK_bF2jY7RoyOBXukWV5WjlBX2VKDNaHWstnRsk6aVigg3gfVMGJw8kicG2rZVCH_m0riMT4ctsctd26GASfNa0zYWNxz8PQxUTTG0tb4yXfZiIJXj5Owp-1xlV8eJvGAVAjDvsZTfGBKCsilq3wMHWIr6xZOfCILGAVv-qJ7KeApCFr0FucnYnl2KP1EBKWGALg5ccmJByC0GLiq1vCY4P8uigpoa_E5b9UZbnPLG8surUKf_YS77E";
