export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'twitter' | 'linkedin' | 'mail' | 'rss';
  label: string;
}

export interface TechItem {
  name: string;
  category: 'core' | 'frontend' | 'backend' | 'infra';
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
    timezone: string; // e.g. "Asia/Shanghai" or "Asia/Taipei"
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
    title: "Tschen Feng | Full-Stack Engineer & Creative Developer",
    description: "Personal homepage, portfolio, and engineering notes of Tschen Feng. Building high-performance web applications and AI-driven products.",
    url: "https://tschenfeng.com",
    author: "Tschen Feng",
    locale: "zh-CN",
    ogImage: "/og-image.png",
  },
  personal: {
    name: "Tschen Feng",
    nativeName: "陈丰",
    title: "Full-Stack Engineer / Creative Developer",
    headline: "构建高性能 Web 应用、优雅的用户界面与 AI 智能体工具。",
    shortBio: "专注于现代前端工程化、边缘计算与人机交互。追求极速体验与极简代码美学。",
    fullBio: [
      "多年全栈研发经验，热爱开源生态与下一代 Web 技术栈。",
      "坚持零冗余、以内容和体验为优先的工程原则，探索 AI Agent 与现代 Web 架构的深度融合。"
    ],
    location: "Shanghai, China",
    timezone: "Asia/Shanghai",
    availableForWork: true,
    statusText: "开放技术探讨与新项目合作",
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
    { name: "TypeScript", category: "core", highlight: true },
    { name: "Astro", category: "frontend", highlight: true },
    { name: "React", category: "frontend", highlight: true },
    { name: "Tailwind CSS", category: "frontend", highlight: true },
    { name: "Node.js", category: "backend", highlight: true },
    { name: "Next.js", category: "frontend" },
    { name: "Python", category: "core" },
    { name: "Go", category: "core" },
    { name: "Cloudflare Workers", category: "infra", highlight: true },
    { name: "PostgreSQL", category: "backend" },
    { name: "Redis", category: "backend" },
    { name: "Docker", category: "infra" },
    { name: "AI Agents / LLM", category: "infra", highlight: true },
    { name: "Git", category: "infra" },
  ],
  currentFocus: {
    title: "探索方向 & 近期关注",
    description: "正在深入探索基于 LLM 的自主 Agent 协作架构，以及在边缘计算（Edge Runtime）上跑高吞吐极速 Web 服务。",
    tags: ["Astro Islands", "AI Agent Systems", "Cloudflare Workers", "Local-first Apps"],
  },
};
