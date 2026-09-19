export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'twitter' | 'linkedin' | 'mail' | 'rss';
  label: string;
}

export interface TechItem {
  name: string;
  category: 'core' | 'frontend' | 'backend' | 'infra' | 'commerce' | 'mobile';
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
    nativeName?: string;
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
    title: "Austin | AI FDE & 全球电商与云原生系统架构师",
    description: "Austin 个人主页与工程思考。横跨 AI 前向部署（AI FDE）、Kubernetes 云原生基础设施、全渠道电商体系（Shopify / Saleor / Magento 2）与 iOS / Android 双端开发。",
    url: "https://tschenfeng.com",
    author: "Austin",
    locale: "zh-CN",
    ogImage: "/og-image.png",
  },
  personal: {
    name: "Austin",
    nativeName: "",
    title: "AI Forward Deployed Engineer · 全球电商系统架构师",
    headline: "深耕 Kubernetes 云原生底座、全渠道电商（Shopify / Saleor / Magento 2）与双端研发（iOS / Android），以 AI FDE 战力驱动全球出海实战。",
    shortBio: "横跨生产级 Kubernetes 集群治理、企业级与无头电商体系（Magento 2 / Saleor / Shopify）、双端移动研发（iOS / Android）及高可靠 AI Agent 前向部署。专注于突破出海与全球化商业全链路工程瓶颈。",
    fullBio: [
      "AI FDE & 智能体工程：深入前线业务，基于 LLM、状态机与 MCP 协议打造高韧性、具备自我纠错与长流程调度的企业级 Agent 生产力。",
      "全渠道电商底座：深度主导并交付过 Magento 2 企业级系统、Saleor 无头 GraphQL 高性能架构、Shopify DTC 品牌站及全套跨平台履约供应链。",
      "云原生基础设施与移动端：具备生产级多架构 Kubernetes 集群运维与高可用调优经验，主导过覆盖 iOS & Android 的移动端电商与工具应用研发。"
    ],
    location: "Shanghai, China",
    timezone: "Asia/Shanghai",
    availableForWork: true,
    statusText: "开放技术咨询与出海商业合作",
    avatarUrl: "/avatar.jpg",
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
    { name: "Kubernetes", category: "infra", highlight: true },
    { name: "Shopify / DTC", category: "commerce", highlight: true },
    { name: "Saleor (GraphQL)", category: "commerce", highlight: true },
    { name: "Magento 2", category: "commerce", highlight: true },
    { name: "iOS & Android", category: "mobile", highlight: true },
    { name: "AI Agents / FDE", category: "core", highlight: true },
    { name: "Cloudflare Workers", category: "infra", highlight: true },
    { name: "TypeScript", category: "core", highlight: true },
    { name: "Python", category: "core", highlight: true },
    { name: "Astro", category: "frontend", highlight: true },
    { name: "Docker", category: "infra" },
    { name: "PostgreSQL", category: "backend" },
    { name: "Redis", category: "backend" },
    { name: "React / Node.js", category: "frontend" },
  ],
  currentFocus: {
    title: "探索方向 & 近期关注",
    description: "正在探索在 Kubernetes 上运行自主 Agent 集群，深度打通 Saleor / Shopify 核心数据流，并驱动 iOS / Android 双端下一代电商 AI 交互体验。",
    tags: ["Kubernetes", "AI FDE", "Saleor", "Shopify", "Magento 2", "iOS / Android"],
  },
};
