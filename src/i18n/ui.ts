export const languages = {
  en: 'English',
  zh: '中文',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.blog': 'Writing',
    'nav.language': 'Language',

    // Profile & Bio
    'profile.status': 'Available for Work',
    'profile.statusAvailable': 'Open for Consulting & Global Commerce Roles',
    'profile.localTime': 'Local Time',
    'profile.socials': 'Social & Links',
    'profile.techStack': 'Core Stack',
    'profile.viewProfile': 'View Profile',
    'profile.close': 'Close Profile Card',
    'profile.contactCta': 'Contact for Collaboration',
    'profile.focusTitle': 'Current Focus & R&D',

    // Blog
    'blog.title': 'Engineering Notes & Field Logs',
    'blog.subtitle': 'In-depth thoughts on AI FDE, cloud-native architecture, cross-border e-commerce, and front-end performance.',
    'blog.readingTime': '~{min} min read',
    'blog.allPosts': 'All Articles',
    'blog.readFull': 'Read Article',
    'blog.rss': 'RSS Feed',
    'blog.share': 'Share',
    'blog.copied': 'Copied!',
    'blog.backToTop': 'Back to Top',
    'blog.discuss': 'Thoughts & Discussion',
    'blog.discussDesc': 'Got architectural inquiries, AI deployment questions, or consulting interests? Let’s connect.',
    'blog.discussBtn': 'Discuss via Email',
    'blog.empty': 'Articles are being prepared, stay tuned.',

    // Fediverse
    'fediverse.badge': 'ActivityPub · Fediverse',
    'fediverse.status': 'Live on Mastodon',
    'fediverse.handle': '@tschenfeng.com@web.brid.gy',
    'fediverse.fullHandle': '@tschenfeng.com@web.brid.gy',
    'fediverse.copy': 'Copy Handle',
    'fediverse.copied': 'Copied!',
    'fediverse.openMastodon': 'Open Profile on Mastodon',
    'fediverse.desc': 'Click to open the federated profile on Mastodon and follow for updates.',
    'fediverse.viewNode': 'Mastodon Profile',

    // Projects
    'projects.badge': 'Selected Works',
    'projects.title': 'Production Works & Open Source',
    'projects.subtitle': 'High-availability infrastructure, e-commerce architectures, multi-agent frameworks, and cross-platform apps.',
    'projects.viewSource': 'Source Code',
    'projects.liveDemo': 'Live Demo',
    'projects.allProjects': 'View All Projects',
    'projects.ctaTitle': 'Interested in collaborating or consulting?',
    'projects.ctaDesc': 'Specializing in enterprise Kubernetes, Saleor / Shopify DTC architectures, and deterministic AI Agent systems.',
    'projects.ctaAction': 'Get in Touch',

    // Stream & Bento
    'feed.writing': 'Writing',
    'feed.readArticle': 'Read article',
    'feed.endOfStream': 'End of Stream · Continuous writing and engineering field notes',

    // Footer
    'footer.status': 'All systems operational',
    'footer.rss': 'RSS Feed',
    'footer.sitemap': 'Sitemap',

    // 404
    '404.badge': '404 Error',
    '404.title': 'Page Not Found',
    '404.desc': 'The page you are looking for might have been moved, renamed, or temporarily unavailable.',
    '404.backHome': 'Back to Home',
    '404.backPrev': 'Previous Page',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.projects': '作品集',
    'nav.blog': '文章',
    'nav.language': '语言',

    // Profile & Bio
    'profile.status': '开放合作',
    'profile.statusAvailable': '开放技术咨询与出海商业合作',
    'profile.localTime': '本地时间',
    'profile.socials': '社交与主页',
    'profile.techStack': '核心技术栈',
    'profile.viewProfile': '查看个人资料',
    'profile.close': '关闭个人资料卡片',
    'profile.contactCta': '邮件联系探讨合作',
    'profile.focusTitle': '探索方向 & 近期关注',

    // Blog
    'blog.title': '技术文章 & 思考随笔',
    'blog.subtitle': '记录在 AI 前向部署（AI FDE）、Kubernetes 云原生、全渠道出海电商与现代前端工程中的实践与思考。',
    'blog.readingTime': '约 {min} 分钟阅读',
    'blog.allPosts': '全部文章',
    'blog.readFull': '阅读全文',
    'blog.rss': 'RSS 订阅',
    'blog.share': '分享',
    'blog.copied': '已复制!',
    'blog.backToTop': '回到顶部',
    'blog.discuss': '探讨交流',
    'blog.discussDesc': '如果你对本文探讨的架构设计、AI 部署实践或出海业务感兴趣，欢迎交流。',
    'blog.discussBtn': '邮件探讨',
    'blog.empty': '文章正在筹备中，敬请期待。',

    // Fediverse
    'fediverse.badge': 'ActivityPub · 联邦宇宙',
    'fediverse.status': '已接入 Mastodon 节点',
    'fediverse.handle': '@tschenfeng.com@web.brid.gy',
    'fediverse.fullHandle': '@tschenfeng.com@web.brid.gy',
    'fediverse.copy': '复制把手',
    'fediverse.copied': '已复制!',
    'fediverse.openMastodon': '进入 Mastodon 主页',
    'fediverse.desc': '点击进入 Mastodon 查看专属档案与历史动态，支持直接关注。',
    'fediverse.viewNode': 'Mastodon 主页',

    // Projects
    'projects.badge': '精选作品',
    'projects.title': '工程作品 & 开源项目',
    'projects.subtitle': '以生产级标准打造的高可用云原生基础设施、现代电商体系、多智能体协同与跨端系统。',
    'projects.viewSource': '查看源码',
    'projects.liveDemo': '在线演示',
    'projects.allProjects': '全部作品',
    'projects.ctaTitle': '有合作意向或技术探讨？',
    'projects.ctaDesc': '专注企业级 Kubernetes 集群治理、Saleor / Shopify 出海电商体系与确定性 AI Agent 前向部署。',
    'projects.ctaAction': '联系沟通',

    // Stream & Bento
    'feed.writing': '文章 / Writing',
    'feed.readArticle': '阅读全文',
    'feed.endOfStream': 'End of Stream · 持续写作与思考中',

    // Footer
    'footer.status': 'All systems operational',
    'footer.rss': 'RSS 订阅',
    'footer.sitemap': '站点地图',

    // 404
    '404.badge': '404 错误',
    '404.title': '未找到该页面',
    '404.desc': '你访问的页面可能已被移动、删除，或暂时不可用。请检查网址是否正确。',
    '404.backHome': '返回首页',
    '404.backPrev': '返回上一页',
  },
} as const;
