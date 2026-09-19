export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'twitter' | 'linkedin' | 'mail' | 'rss';
  label: string;
}

export interface TechItem {
  name: string;
  category: 'core' | 'frontend' | 'backend' | 'infra' | 'commerce';
  highlight?: boolean;
}

export interface ProfileConfig {
  site: {
    title: string;
    description: string;
    url: string;
    author: string;
    locale: string;
    ogImage: string;
  };
  personal: {
    name: string;
    nativeName: string;
    title: string;
    headline: string;
    shortBio: string;
    fullBio: string[];
    location: string;
    timezone: string;
    availableForWork: boolean;
    statusText: string;
    avatarUrl: string;
  };
  socials: SocialLink[];
  techStack: TechItem[];
  currentFocus: {
    title: string;
    description: string;
    tags: string[];
  };
}

export const profileConfig: ProfileConfig = {
  site: {
    title: "Tschen Feng | AI FDE & 跨境电商出海架构师",
    description: "Tschen Feng (陈丰) 个人主页与工程思考。专注于企业级 AI 前向部署（AI Forward Deployed Engineer）与跨境电商出海全链路智能体自动化架构。",
    url: "https://tschenfeng.com",
    author: "Tschen Feng",
    locale: "zh-CN",
    ogImage: "/og-image.png",
  },
  personal: {
    name: "Tschen Feng",
    nativeName: "陈丰",
    title: "AI Forward Deployed Engineer · 跨境电商架构师",
    headline: "以前向工程战力，将高可靠 AI Agent 智能体系统扎根于跨境电商出海的真实商业战场。",
    shortBio: "兼具全球出海业务操盘经验与企业级 AI 前向部署（FDE）工程实践。专注于用确定性工作流、状态机与多智能体系统，解决出海增长、自动化履约与多渠道复杂供应链痛点。",
    fullBio: [
      "AI FDE（前向部署工程师）：深入企业复杂业务前线，基于 LLM、MCP 与状态机架构构建 7x24 小时不掉链子、具备自我校验与容错的高可靠 Agent 工作流。",
      "跨境电商与全球出海：多年跨境独立站 DTC 与多渠道全球运营技术积累，深度理解选品、营销投放、多语言客服、跨时区履约与跨境合规链路。"
    ],
    location: "Shanghai, China",
    timezone: "Asia/Shanghai",
    availableForWork: true,
    statusText: "开放技术咨询与出海商业合作",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=320&auto=format&fit=crop",
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "github",
      label: "View open-source repositories",
    },
    {
      name: "X",
      url: "https://x.com",
      icon: "twitter",
      label: "Follow for quick thoughts and updates",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin",
      label: "Connect professionally",
    },
    {
      name: "Email",
      url: "mailto:contact@tschenfeng.com",
      icon: "mail",
      label: "Send an email",
    },
  ],
  techStack: [
    { name: "AI Agents / FDE", category: "core", highlight: true },
    { name: "跨境电商出海架构", category: "commerce", highlight: true },
    { name: "Shopify / DTC", category: "commerce", highlight: true },
    { name: "TypeScript", category: "core", highlight: true },
    { name: "Python", category: "core", highlight: true },
    { name: "Cloudflare Workers", category: "infra", highlight: true },
    { name: "Astro", category: "frontend", highlight: true },
    { name: "多智能体状态机编排", category: "core", highlight: true },
    { name: "跨境供应链协同", category: "commerce" },
    { name: "Docker / K8s", category: "infra" },
    { name: "PostgreSQL", category: "backend" },
    { name: "Redis", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "Git", category: "infra" },
  ],
  currentFocus: {
    title: "探索方向 & 近期关注",
    description: "正在深入构建基于自主 Agent 的跨境电商无人化出海体系：涵盖多源情报自动化选品、高转化 DTC 独立站程序化生成与跨时区智能售后调度。",
    tags: ["AI FDE", "跨境电商", "出海增长", "Multi-Agent Systems", "DTC Automation"],
  },
};
