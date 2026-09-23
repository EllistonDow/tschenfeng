---
title: "AgentFlow - 多智能体协同自动化工作流"
description: "轻量级、确定性编排的高性能自主 Agent 调度框架，支持复杂多阶段软件工程任务与工具链互操作。"
featured: true
order: 1
tags: ["TypeScript", "LLM Agents", "Node.js", "State Machines"]
github: "https://github.com/tschenfeng"
link: "https://tschenfeng.com"
metrics: "50+ 节点并发 · <10ms 调度开销"
---

## 项目背景与核心架构

AgentFlow 旨在解决传统单体 LLM 在长上下文任务中经常出现的遗忘、幻觉以及死循环问题。通过分层编排与严格的状态机（State Machine）模型，将复杂多步任务分解为离散且可验证的子任务。

### 核心特性
- **确定性状态驱动**：保证每个子智能体的输出严格符合 JSON Schema。
- **并发管道编排**：支持动态分叉（Fork）与并发汇总，大幅压缩端到端 Wall-clock 耗时。
- **持久化上下文隔离**：每个任务隔离运行在轻量沙箱中，防止上下文污染。
