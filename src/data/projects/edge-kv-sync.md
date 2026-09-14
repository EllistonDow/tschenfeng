---
title: "EdgeKV - 全球边缘分布式缓存网关"
description: "基于 Cloudflare Workers 与 Durable Objects 实现的亚毫秒级全球多活读写同步网关。"
featured: true
order: 3
tags: ["Cloudflare", "TypeScript", "Distributed Systems", "Edge Computing"]
github: "https://github.com/tschenfeng"
metrics: "全球延迟 < 15ms · 99.99% 可用性"
---

## 边缘计算基础设施实践

针对跨国多地域高频读取但局部写入的场景，EdgeKV 结合了边缘缓存层与一致性哈希路由机制，将全球访问响应时间大幅削减至 15ms 以内。
