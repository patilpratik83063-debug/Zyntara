import { CapabilityItem } from '../types';

export const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: 'ai-transformation-consulting',
    category: 'Transformation & Strategy',
    title: 'AI Transformation Consulting',
    description: 'Executive-level strategic advisory to assess technological maturity, evaluate organizational readiness, and craft phased transformation blueprints.',
    technicalSpecs: ['Readiness Auditing', 'ROI Modeling', 'Board-Level Roadmap', 'C-Suite Alignment'],
    enterpriseReadiness: 'Executive Grade'
  },
  {
    id: 'enterprise-ai-agents',
    category: 'Agentic & Autonomous',
    title: 'Enterprise AI Agents',
    description: 'Autonomous goal-driven digital agents capable of executing multi-step reasoning, tool invocations, database writes, and inter-agent handoffs.',
    technicalSpecs: ['ReAct & Plan-and-Solve Logic', 'Persistent State', 'Dynamic Tool Sandboxes', 'HITL Guardrails'],
    enterpriseReadiness: 'Production Ready'
  },
  {
    id: 'agentic-ai-swarms',
    category: 'Agentic & Autonomous',
    title: 'Agentic AI & Multi-Agent Swarms',
    description: 'Hierarchical orchestration of specialized multi-agent networks that collaborate, cross-verify decisions, and resolve complex systemic workflows.',
    technicalSpecs: ['Supervisor-Worker Protocols', 'Consensus Verification', 'Dynamic Subtask Delegation'],
    enterpriseReadiness: 'Production Ready'
  },
  {
    id: 'custom-enterprise-platforms',
    category: 'Core Infrastructure',
    title: 'Custom Enterprise AI Platforms',
    description: 'Bespoke end-to-end software platforms designed from the ground up to integrate proprietary business logic, existing ERPs, and custom models.',
    technicalSpecs: ['Full-Stack Typescript/Python', 'Microservices', 'Kubernetes Orchestration', 'HA 99.99%'],
    enterpriseReadiness: 'Enterprise Tier-1'
  },
  {
    id: 'custom-llm-fine-tuning',
    category: 'Core Infrastructure',
    title: 'Custom LLM / Enterprise GenAI',
    description: 'Domain-adapted model fine-tuning (LoRA, QLoRA, full parameter) and distillation of specialized SLMs trained on proprietary enterprise IP.',
    technicalSpecs: ['Domain Adaptation', 'Quantization (AWQ/GPTQ)', 'Private Inference', 'Zero Data Leakage'],
    enterpriseReadiness: 'Sovereign Private'
  },
  {
    id: 'advanced-rag-knowledge',
    category: 'Enterprise Intelligence',
    title: 'Advanced RAG & Knowledge Graphs',
    description: 'Next-generation retrieval augmented generation combining vector embeddings with structured knowledge graphs for deterministic, verifiable answers.',
    technicalSpecs: ['Hybrid Search (BM25 + Dense)', 'GraphRAG', 'Self-RAG Grounding', 'Sub-Second Retrieval'],
    enterpriseReadiness: 'Production Ready'
  },
  {
    id: 'enterprise-knowledge-ai',
    category: 'Enterprise Intelligence',
    title: 'Enterprise Knowledge AI',
    description: 'Semantic search and document synthesis engines that index PDFs, spreadsheets, Jira tickets, Notion pages, contracts, and codebases.',
    technicalSpecs: ['OCR & Table Parser', 'Multi-Tenant Permissions', 'Continuous Ingestion CDC'],
    enterpriseReadiness: 'SOC2 / GDPR Aligned'
  },
  {
    id: 'ai-business-automation',
    category: 'Operations & Revenue',
    title: 'AI Business Automation',
    description: 'Cognitive event-driven orchestration replacing fragile RPA scripts with adaptive, self-healing process execution pipelines.',
    technicalSpecs: ['Temporal / Step Functions', 'Zero-Loss Queues', 'Automated Fallback Retries'],
    enterpriseReadiness: 'Mission-Critical'
  },
  {
    id: 'ai-erp-transformation',
    category: 'Core Infrastructure',
    title: 'AI + ERP Transformation',
    description: 'Direct bi-directional integration with SAP S/4HANA, Oracle NetSuite, and Microsoft Dynamics to enable automated ledger updates and PO lifecycle.',
    technicalSpecs: ['OData Connectors', 'BAPI Adapters', 'Real-Time Conflict Resolution'],
    enterpriseReadiness: 'Certified ERP Ready'
  },
  {
    id: 'ai-crm-transformation',
    category: 'Operations & Revenue',
    title: 'AI + CRM Transformation',
    description: 'Autonomous enrichment, stage progression, conversation logging, and pipeline velocity acceleration within Salesforce and HubSpot.',
    technicalSpecs: ['REST/GraphQL Hooks', 'Bidirectional Sync', 'Dynamic Deal Scoring'],
    enterpriseReadiness: 'Production Ready'
  },
  {
    id: 'ai-customer-experience',
    category: 'Operations & Revenue',
    title: 'AI Customer Experience (CX)',
    description: 'Omnichannel multi-lingual support agents operating across webchat, WhatsApp, email, and mobile apps with human-level empathy.',
    technicalSpecs: ['Omnichannel State Sync', 'Sentiment Analysis', 'Policy Bound Resolution'],
    enterpriseReadiness: 'High Concurrency'
  },
  {
    id: 'ai-voice-technology',
    category: 'Operations & Revenue',
    title: 'AI Voice Technology',
    description: 'Ultra-low latency (<300ms) full-duplex conversational voice systems for customer support, outbound qualification, and phone dispatch.',
    technicalSpecs: ['WebRTC / SIP Trunking', 'Acoustic Noise Suppression', 'Emotional Modulation'],
    enterpriseReadiness: 'Production Ready'
  },
  {
    id: 'computer-vision-inspection',
    category: 'Operations & Revenue',
    title: 'Computer Vision & Inspection',
    description: 'High-speed edge computer vision models for factory defect detection, automated logistics parcel tracking, and spatial security analytics.',
    technicalSpecs: ['YOLO/Vision Transformers', 'Edge TensorRT Acceleration', 'Sub-10ms Frame Analysis'],
    enterpriseReadiness: 'Industrial Grade'
  },
  {
    id: 'predictive-ml-forecasting',
    category: 'Enterprise Intelligence',
    title: 'Predictive AI / Machine Learning',
    description: 'Custom statistical and deep learning models for demand forecasting, churn prediction, price elasticity, and risk scoring.',
    technicalSpecs: ['Gradient Boosting & Transformers', 'Feature Stores', 'Automated Retraining'],
    enterpriseReadiness: 'Production Ready'
  },
  {
    id: 'ai-data-platforms',
    category: 'Core Infrastructure',
    title: 'AI Data Platforms & Pipelines',
    description: 'Scalable modern data architectures built on Snowflake, Databricks, BigQuery, and S3, optimized for real-time AI ingestion and feature engineering.',
    technicalSpecs: ['dbt & Delta Lake', 'Streaming Kafka Ingest', 'Vector Embeddings Pipeline'],
    enterpriseReadiness: 'Petabyte Scale'
  },
  {
    id: 'enterprise-ai-analytics',
    category: 'Enterprise Intelligence',
    title: 'Enterprise AI Analytics',
    description: 'Conversational BI cockpits enabling non-technical executives to generate real-time SQL queries, cohort analyses, and visual charts on the fly.',
    technicalSpecs: ['Text-to-SQL Semantic Engine', 'Automated Visualization', 'Drill-Down Synthesis'],
    enterpriseReadiness: 'Production Ready'
  },
  {
    id: 'ai-cybersecurity-defense',
    category: 'Core Infrastructure',
    title: 'AI Cybersecurity & Threat Defense',
    description: 'Behavioral anomaly detection, automated SOC triage, zero-day threat isolation, and proactive prompt injection / jailbreak protection.',
    technicalSpecs: ['SIEM Log Correlation', 'Prompt Firewall', 'Automated Credential Revocation'],
    enterpriseReadiness: 'SecOps Tier-1'
  },
  {
    id: 'responsible-ai-governance',
    category: 'Transformation & Strategy',
    title: 'Responsible AI & AI Governance',
    description: 'Comprehensive guardrails, bias mitigation, PII redacting proxies, model auditing frameworks, and EU AI Act / NIST alignment.',
    technicalSpecs: ['PII Token Masking', 'Audit Trace Logging', 'Toxicity & Bias Guardrails'],
    enterpriseReadiness: 'Regulatory Compliant'
  },
  {
    id: 'ai-native-software-eng',
    category: 'Core Infrastructure',
    title: 'AI-Native Software Engineering',
    description: 'Full-lifecycle product engineering of intelligent web and mobile software with generative interfaces, real-time collaboration, and streaming AI.',
    technicalSpecs: ['React/Next.js/Node', 'Tailwind & Motion', 'Streaming WebSockets', 'Postgres/Redis'],
    enterpriseReadiness: 'World-Class'
  },
  {
    id: 'ai-digital-twin-sim',
    category: 'Enterprise Intelligence',
    title: 'AI Digital Twin & Simulation',
    description: 'Computational modeling of supply chain networks, industrial plants, and economic workflows for predictive stress-testing and optimization.',
    technicalSpecs: ['Agentic Monte Carlo', 'Physics Modeling', 'Scenario Branching Engine'],
    enterpriseReadiness: 'Enterprise Tier-1'
  },
  {
    id: 'industry-ai-solutions',
    category: 'Transformation & Strategy',
    title: 'Industry-Specific AI Solutions',
    description: 'Pre-architected vertical AI accelerators configured for manufacturing, healthcare, banking, retail, and life sciences.',
    technicalSpecs: ['Domain Ontologies', 'Regulatory Pre-Packs', 'Industry Connectors'],
    enterpriseReadiness: 'Turnkey Accelerator'
  },
  {
    id: 'managed-ai-transformation',
    category: 'Transformation & Strategy',
    title: 'Managed AI Transformation',
    description: 'Long-term dedicated partnership providing continuous model fine-tuning, latency optimization, architecture evolution, and team upskilling.',
    technicalSpecs: ['Dedicated Solutions Squad', '24/7 SLA Support', 'Continuous ModelOps'],
    enterpriseReadiness: 'Strategic Partnership'
  }
];
