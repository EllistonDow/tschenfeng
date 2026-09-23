---
title: "AgentFlow - Multi-Agent Collaborative Automation Engine"
description: "A lightweight, deterministically orchestrated autonomous agent runtime designed for multi-stage software engineering workflows and tool interoperability."
featured: true
order: 1
tags: ["TypeScript", "LLM Agents", "Node.js", "State Machines"]
github: "https://github.com/tschenfeng"
link: "https://tschenfeng.com"
metrics: "50+ concurrent nodes · <10ms dispatch latency"
---

## Background & Core Architecture

AgentFlow addresses the common pitfalls of monolithic LLMs in long-context workflows, including context decay, hallucinations, and execution loops. By utilizing hierarchical orchestration and strict state machine models, complex engineering tasks are partitioned into discrete, verifiable sub-actions.

### Key Capabilities
- **Deterministic State Machines**: Guarantees that all agent sub-outputs strictly comply with defined JSON Schemas.
- **Concurrent Pipeline Scheduling**: Enables dynamic branching, concurrent evaluation, and parallel merging to drastically reduce end-to-end wall-clock time.
- **Isolated Execution Sandboxes**: Runs subagents in sandboxed environments to eliminate cross-task context pollution.
