export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'twitter' | 'linkedin' | 'mail' | 'rss';
  label: string;
}

export interface TechItem {
  name: string;
  category: 'core' | 'frontend' | 'backend' | 'infra' | 'commerce' | 'mobile' | 'growth';
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
    description: "Austin 个人主页与工程思考。横跨 AI 前向部署（AI FDE）、Kubernetes 云原生、全渠道电商体系（Shopify / Saleor / Magento 2）、TanStack 全家桶、iOS / Android 双端开发及 PWA / SEO / GEO 增长工程。",
    url: "https://tschenfeng.com",
    author: "Austin",
    locale: "zh-CN",
    ogImage: "/og-image.png",
  },
  personal: {
    name: "Austin",
    nativeName: "",
    title: "AI Forward Deployed Engineer · 全球电商与云原生架构师",
    headline: "深耕 Kubernetes 云原生底座、全渠道出海电商矩阵（Shopify / Saleor / Magento 2 / MedusaJS / Vendure）、TanStack 全栈工程、双端移动（iOS / Android）与 SEO / GEO 增长，以 AI FDE 前向战力驱动全球出海实战。",
    shortBio: "横跨生产级 Kubernetes 集群治理、全渠道品牌独立站与现代电商体系（Shopify / Saleor / Magento 2 / MedusaJS / Vendure）、TanStack 全栈工程化、双端移动应用（iOS / Android / PWA）及全球 SEO / GEO（生成式 AI 搜索优化）。深度融合企业级 AI Agent 前向部署，打通出海全链路商业工程闭环。",
    fullBio: [
      "AI FDE & 智能体工程：深入复杂业务前线，基于 LLM、状态机与 MCP 协议打造高韧性、具备自我纠错与长流程调度的企业级 Agent 生产力。",
      "全渠道电商与现代架构：深度交付 Magento 2 企业级电商系统、Saleor 与 Vendure 高性能定制独立站、MedusaJS 模块化定制、Shopify DTC 品牌矩阵，精通 TanStack 全家桶（Query / Router / Table / Virtual / Form）与 PWA 渐进式 Web 应用。",
      "基础设施与全球增长：掌舵生产级多架构 Kubernetes 集群治理与 Cloudflare 边缘加速，精通全球化 SEO 与 GEO（生成式 AI 搜索引擎优化 / Perplexity & ChatGPT Search 索引优化），主导 iOS & Android 双端原生与跨平台应用研发。"
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
    { name: "MedusaJS & Vendure", category: "commerce", highlight: true },
    { name: "TanStack 全家桶", category: "frontend", highlight: true },
    { name: "iOS & Android", category: "mobile", highlight: true },
    { name: "SEO & GEO (AI Search)", category: "growth", highlight: true },
    { name: "PWA / Offline", category: "mobile", highlight: true },
    { name: "AI Agents / FDE", category: "core", highlight: true },
    { name: "Cloudflare Workers", category: "infra", highlight: true },
    { name: "TypeScript / Python", category: "core", highlight: true },
    { name: "Astro", category: "frontend", highlight: true },
    { name: "Docker", category: "infra" },
    { name: "PostgreSQL / Redis", category: "backend" },
  ],
  currentFocus: {
    title: "探索方向 & 近期关注",
    description: "构建基于 Kubernetes + TanStack + PWA 的下一代高性能出海独立站与多智能体协同底座，深度结合 GEO（生成式 AI 搜索引擎优化）与出海私域增长体系。",
    tags: ["Kubernetes", "AI FDE", "Saleor", "Shopify", "Magento 2", "MedusaJS", "Vendure", "TanStack"],
  },
};
