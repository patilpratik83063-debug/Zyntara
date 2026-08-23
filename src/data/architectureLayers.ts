import { ArchitectureLayer } from '../types';

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 'data',
    number: '01',
    name: 'DATA',
    subtitle: 'Unified Enterprise Data Fabric',
    description: 'Ingests, unifies, harmonizes, and secures enterprise data across disparate databases, documents, data lakes, and transactional systems.',
    technicalDetails: [
      'Multi-source ingestion pipelines (SQL, NoSQL, Vector, Object Storage)',
      'Real-time change data capture (CDC) & streaming ingestion',
      'Automated semantic metadata tagging & ontology mapping',
      'Granular role-based & column-level encryption and governance'
    ],
    connectedSystems: ['Snowflake', 'Databricks', 'PostgreSQL', 'Oracle', 'S3/GCS', 'SAP HANA'],
    enterpriseBenefits: [
      'Eliminates siloed data lakes and stale reporting',
      'Guarantees single source of ground truth for downstream AI',
      'Sub-second query responses across unstructured & structured records'
    ],
    colorHex: '#3B82F6',
    status: 'active'
  },
  {
    id: 'intelligence',
    number: '02',
    name: 'INTELLIGENCE',
    subtitle: 'Enterprise Cognitive Engine & Hybrid Reasoning',
    description: 'High-precision hybrid intelligence combining custom domain LLMs, fine-tuned SLMs, deterministic heuristics, and vector retrieval.',
    technicalDetails: [
      'Multi-model routing (Gemini 1.5/2.0, Claude, Llama 3, Custom fine-tunes)',
      'Enterprise-grade RAG with hybrid semantic & graph indexing',
      'Hallucination prevention with continuous grounding verification',
      'Deterministic rule engines combined with probabilistic neural models'
    ],
    connectedSystems: ['Vector DBs', 'Custom Embeddings', 'Knowledge Graphs', 'Inference Clusters'],
    enterpriseBenefits: [
      'Domain-adapted reasoning specific to company policies and SOPs',
      'Zero training on confidential company IP or sensitive PII',
      'Context-aware answers backed by strict citation provenance'
    ],
    colorHex: '#2563EB',
    status: 'streaming'
  },
  {
    id: 'ai-agents',
    number: '03',
    name: 'AI AGENTS',
    subtitle: 'Autonomous Multi-Agent Collaborative Mesh',
    description: 'Specialized digital workers that plan, collaborate, verify, and execute complex cross-departmental business objectives autonomously.',
    technicalDetails: [
      'Hierarchical agent orchestrator with supervisor & executor dynamics',
      'Goal decomposition, iterative tool calling & error self-healing',
      'Long-term persistent semantic memory & episodic state stores',
      'Configurable human-in-the-loop (HITL) checkpoints for critical decisions'
    ],
    connectedSystems: ['Agent Orchestrator', 'Tool Execution Sandbox', 'Memory Fabric', 'Auth Gateway'],
    enterpriseBenefits: [
      '24/7 autonomous task execution across sales, finance, and ops',
      'Multi-step decision making with built-in sanity checks',
      'Scales knowledge worker capacity by 10x without proportional headcount'
    ],
    colorHex: '#00D2FF',
    status: 'active'
  },
  {
    id: 'automation',
    number: '04',
    name: 'AUTOMATION',
    subtitle: 'Deterministic Process & Event Orchestration',
    description: 'Bridges agentic decisions with mission-critical enterprise workflows, guaranteeing fault tolerance, retries, and auditable audit trails.',
    technicalDetails: [
      'Asynchronous event-driven workflow engine with zero-loss queues',
      'Bidirectional state machine synchronization with SLA monitors',
      'Automated API rate limiting, rollback handlers & dead-letter queues',
      'Cryptographic execution logging for compliance & auditability'
    ],
    connectedSystems: ['Temporal', 'Kafka', 'Enterprise Service Bus', 'Webhook Gateways'],
    enterpriseBenefits: [
      'Zero manual handoffs in multi-departmental workflows',
      'Guaranteed transactional integrity on mission-critical operations',
      'Instant escalation routing when anomalous data is detected'
    ],
    colorHex: '#60A5FA',
    status: 'synced'
  },
  {
    id: 'business-systems',
    number: '05',
    name: 'BUSINESS SYSTEMS',
    subtitle: 'Deep Core ERP, CRM & Legacy Integration',
    description: 'Bi-directional integration layer interfacing directly with core enterprise applications without requiring code rewrites or fragile scraping.',
    technicalDetails: [
      'Certified connectors for SAP ERP, Salesforce, Microsoft Dynamics, Workday',
      'REST, GraphQL, gRPC, and Legacy SOAP / Mainframe adapters',
      'Real-time bi-directional data synchronization with conflict resolution',
      'Zero-downtime micro-service adapter architecture'
    ],
    connectedSystems: ['Salesforce', 'SAP S/4HANA', 'Workday', 'ServiceNow', 'NetSuite', 'HubSpot'],
    enterpriseBenefits: [
      'Unlocks full value of existing multi-million dollar software investments',
      'Removes double data entry across disjointed internal tools',
      'Allows AI agents to safely read and write back into system of record'
    ],
    colorHex: '#38BDF8',
    status: 'active'
  },
  {
    id: 'cx',
    number: '06',
    name: 'CUSTOMER EXPERIENCE',
    subtitle: 'Omnichannel Autonomous Engagement Layer',
    description: 'Real-time multi-modal customer interface spanning conversational voice, webchat, WhatsApp, email, and self-service portals.',
    technicalDetails: [
      'Sub-300ms latency voice AI engine with emotional modulation',
      'Context-preserving omnichannel conversation state sync',
      'Real-time sentiment scoring and intelligent escalation routing',
      'Dynamic personalized response generation conditioned on CRM history'
    ],
    connectedSystems: ['Telephony (SIP/WebRTC)', 'WhatsApp Business', 'Zendesk', 'Intercom', 'Mobile SDKs'],
    enterpriseBenefits: [
      'Instant 24/7 tier-1 and tier-2 resolution with human-level empathy',
      'Eliminates wait times and repetitive customer questions',
      'Boosts CSAT while decreasing customer support overhead by 60%+'
    ],
    colorHex: '#93C5FD',
    status: 'streaming'
  },
  {
    id: 'revenue',
    number: '07',
    name: 'REVENUE',
    subtitle: 'Predictive Pipeline & Conversion Acceleration',
    description: 'Continuous predictive revenue intelligence driving lead scoring, pipeline velocity, automated proposals, and churn preemption.',
    technicalDetails: [
      'Dynamic multi-touch attribution & intent signal analysis',
      'Real-time automated hyper-personalized sales collateral generation',
      'Predictive customer lifetime value (pLTV) & churn probability models',
      'Autonomous outbound pipeline generation and meeting booking'
    ],
    connectedSystems: ['Revenue Intelligence', 'Gong/Chorus', 'Stripe/Chargebee', 'Outreach', 'Marketo'],
    enterpriseBenefits: [
      'Compresses B2B sales cycles by 35-50%',
      'Proactively identifies at-risk enterprise accounts 60 days before renewal',
      'Automates personalized follow-ups that increase deal velocity'
    ],
    colorHex: '#0066FF',
    status: 'active'
  },
  {
    id: 'growth',
    number: '08',
    name: 'GROWTH',
    subtitle: 'Compounding Enterprise Intelligence & Digital Twin',
    description: 'Continuous organizational learning loop that models business scenarios, optimizes margins, and compounds operational efficiency over time.',
    technicalDetails: [
      'Digital Twin operational simulation & stress-test engine',
      'Reinforcement learning from enterprise human feedback (RLHF/RLAIF)',
      'Automated process discovery and bottleneck identification',
      'Long-term strategic scenario forecasting with probabilistic confidence'
    ],
    connectedSystems: ['Executive Cockpit', 'Simulation Engine', 'BI Dashboards', 'Optimization Mesh'],
    enterpriseBenefits: [
      'Simulates strategic decisions before spending capital',
      'System gets smarter, faster, and more accurate each operating quarter',
      'Provides C-suite with live forward-looking visibility rather than lagging metrics'
    ],
    colorHex: '#1D4ED8',
    status: 'streaming'
  }
];
