import { SolutionItem } from '../types';

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'ai-transformation',
    number: '01',
    title: 'AI Transformation',
    tagline: 'Strategy → Architecture → Implementation',
    headline: 'Redesign how your business operates with connected AI systems.',
    description: 'We partner with enterprise leadership to redesign fragmented business processes into cohesive, AI-powered operations. We move your business away from isolated experiments into high-velocity, production systems.',
    whatWeBuild: 'Custom enterprise AI blueprints, data pipeline architectures, workflow mapping, and continuous transformation governance.',
    whereItFits: 'Enterprise-wide operational foundation across all commercial and back-office divisions.',
    typicalUseCases: [
      'Modernizing legacy manual processes into automated workflows',
      'Unifying scattered data across departments into semantic knowledge',
      'Establishing enterprise security, auditability, and guardrail policies'
    ],
    connectedSystems: ['Salesforce', 'SAP', 'HubSpot', 'Oracle', 'Databases', 'Cloud APIs'],
    aiCapability: 'System-wide cognitive architecture, orchestration, and continuous learning',
    capabilities: [
      'Enterprise Workflow Discovery & Friction Analysis',
      'Unified Architecture & Integration Blueprinting',
      'Autonomous System Feasibility & Phased Rollout',
      'Organizational Enablement & Human-in-the-Loop Policies',
      'Audit Trails, Security & Sovereign Data Controls'
    ],
    businessOutcomes: [
      'Eliminates cross-departmental communication bottlenecks',
      'Replaces manual spreadsheet handoffs with automated pipelines',
      'Establishes a scalable foundation for AI agents and automation'
    ],
    architectureLayers: ['DATA', 'INTELLIGENCE', 'AI AGENTS', 'AUTOMATION', 'BUSINESS SYSTEMS'],
    category: 'core',
    iconName: 'Compass',
    implementationTimeline: '6 to 12 weeks to production',
    ctaText: 'Discuss Your AI Strategy'
  },
  {
    id: 'ai-workforce',
    number: '02',
    title: 'AI Workforce',
    tagline: 'AI Agents → Digital Workers → Multi-Agent Swarms',
    headline: 'Deploy autonomous digital specialists across approved business workflows.',
    description: 'Deploy specialized AI agents that execute multi-step workflows across your business systems — researching data, updating records, communicating with customers, and escalating decisions when human judgment is needed.',
    whatWeBuild: 'Goal-driven AI agents (Sales SDR, Support Resolver, Document Analyst, Procurement Specialist) and multi-agent coordination swarms.',
    whereItFits: 'High-volume knowledge work, customer communication, sales chasing, and transactional administration.',
    typicalUseCases: [
      'Autonomous inbound lead qualification, enrichment, and meeting scheduling',
      'Tier-1 and Tier-2 customer support triage with live CRM/Jira synchronization',
      'Automated vendor research, purchase order verification, and invoice matching'
    ],
    connectedSystems: ['WhatsApp', 'Zendesk', 'HubSpot', 'Jira', 'Slack', 'Email'],
    aiCapability: 'Multi-step reasoning, dynamic tool usage, intent classification, and autonomous execution',
    capabilities: [
      'Specialized Multi-Agent Swarm Coordination',
      'Persistent Memory & Historical Context Banks',
      'Dynamic Enterprise Tool & API Execution',
      'Strict Human Escalation & Approval Safeguards',
      'Real-Time Audit Logging & Execution Replay'
    ],
    businessOutcomes: [
      '24/7 immediate execution of repetitive analytical and administrative work',
      'Zero lead drop-off or response latency during peak hours',
      'Human teams focus on high-stakes negotiations, relationship building, and approvals'
    ],
    architectureLayers: ['INTELLIGENCE', 'AI AGENTS', 'AUTOMATION'],
    category: 'core',
    iconName: 'Users',
    implementationTimeline: '4 to 8 weeks per department',
    ctaText: 'Deploy an AI Agent'
  },
  {
    id: 'intelligent-operations',
    number: '03',
    title: 'Intelligent Operations',
    tagline: 'Finance → HR → Sales → Operations → Supply Chain',
    headline: 'Connect business processes into self-moving operational workflows.',
    description: 'Connect tasks, approvals, documents, notifications, inventory, procurement and internal processes into workflows that keep work moving without manual pushing.',
    whatWeBuild: 'Cross-functional event-driven orchestration pipelines linking CRM, ERP, messaging, and finance ledgers.',
    whereItFits: 'Core operational execution, order fulfillment, finance reconciliation, and supply chain logistics.',
    typicalUseCases: [
      'Automating invoice receipt, validation, three-way matching, and ledger reconciliation',
      'End-to-end candidate pipeline automation: screening, test routing, and interview scheduling',
      'Supply chain inventory threshold monitoring and automated re-order triggers'
    ],
    connectedSystems: ['QuickBooks', 'NetSuite', 'Workday', 'SAP', 'Postgres', 'Stripe'],
    aiCapability: 'Document OCR, structured data extraction, anomaly detection, and predictive routing',
    capabilities: [
      'Event-Driven Workflow State Machines',
      'Cross-System Data Reconciliation & Sync',
      'Automated Multi-Jurisdiction Compliance Logging',
      'Dynamic Task Routing & Exception Escalation',
      'Zero-Loss Transactional Event Queues'
    ],
    businessOutcomes: [
      'Reduces end-to-end order processing and invoice settlement cycles by 70%+',
      'Eliminates duplicate manual data entry between spreadsheets and ERP',
      'Prevents supply shortages through predictive threshold notifications'
    ],
    architectureLayers: ['AUTOMATION', 'BUSINESS SYSTEMS', 'GROWTH'],
    category: 'core',
    iconName: 'Cpu',
    implementationTimeline: '6 to 10 weeks',
    ctaText: 'Automate a Workflow'
  },
  {
    id: 'enterprise-intelligence',
    number: '04',
    title: 'Enterprise Intelligence',
    tagline: 'Data → Knowledge → GraphRAG → Executive Decisions',
    headline: 'Turn scattered enterprise data into real-time operational knowledge.',
    description: 'Connect unstructured documents, contracts, ERP records, emails, customer chats, and SOPs into a verified semantic knowledge engine with instant decision support.',
    whatWeBuild: 'Domain-adapted GraphRAG knowledge graphs, executive natural language SQL interfaces, and automated intelligence pipelines.',
    whereItFits: 'Executive decision-making, compliance audits, research teams, and cross-departmental knowledge retrieval.',
    typicalUseCases: [
      'Instant conversational search across thousands of enterprise contracts and SOPs with exact citations',
      'Natural language business intelligence: "Show me Q3 customer churn by region in CRM"',
      'Automated competitive intelligence and regulatory filing synthesis'
    ],
    connectedSystems: ['PostgreSQL', 'Snowflake', 'BigQuery', 'SharePoint', 'Google Drive', 'S3'],
    aiCapability: 'Hybrid vector & knowledge graph retrieval, verified citations, and semantic synthesis',
    capabilities: [
      'Multi-Modal Hybrid RAG & Knowledge Graph Engine',
      'Complex PDF, Table & Financial Statement Extraction',
      'Continuous Semantic Indexing & Policy Verification',
      'Executive Query & Real-Time Decision Support Interfaces',
      'Sovereign Multi-Tenant Access Controls & Role Filtering'
    ],
    businessOutcomes: [
      'Sub-second retrieval of mission-critical company information with zero hallucinations',
      'Reduces contract audit and policy review time from days to minutes',
      'Protects institutional memory during leadership or team transitions'
    ],
    architectureLayers: ['DATA', 'INTELLIGENCE', 'BUSINESS SYSTEMS'],
    category: 'core',
    iconName: 'Database',
    implementationTimeline: '4 to 8 weeks',
    ctaText: 'Build Enterprise Intelligence'
  },
  {
    id: 'ai-revenue-engine',
    number: '05',
    title: 'AI Revenue Engine',
    tagline: 'Lead Ingestion → AI Scoring → Sales Chasing → Deal Closing',
    headline: 'Let your sales team sell. Let the system handle the chasing.',
    description: 'Remove the repetitive work around the sales process — from instant lead routing and qualification to automated multi-channel follow-ups, meeting booking, and pipeline stage updates.',
    whatWeBuild: 'End-to-end inbound and outbound revenue acceleration engines integrated directly with WhatsApp, email, and CRM.',
    whereItFits: 'Sales development, account executives, customer success, and revenue operations.',
    typicalUseCases: [
      'Engaging inbound web and WhatsApp leads within 10 seconds of submission',
      'Automated multi-touch follow-up sequences for dormant opportunities in CRM',
      'Dynamic proposal generation and automatic payment link delivery'
    ],
    connectedSystems: ['Salesforce', 'HubSpot', 'WhatsApp Business', 'Gmail', 'Outlook', 'Stripe'],
    aiCapability: 'Intent scoring, personalized messaging generation, and conversion probability modeling',
    capabilities: [
      'Sub-Minute Lead Qualification & Enrichment',
      'Autonomous Multi-Channel Follow-Up Sequences',
      'Dynamic Calendar Availability & Meeting Booking',
      'Predictive Deal Scoring & Churn Prevention',
      'Automated Proposal Drafts & Contract Handoffs'
    ],
    businessOutcomes: [
      'Increases qualified meeting velocity and inbound pipeline conversion by 40%+',
      'Zero leads slip through cracks due to rep bandwidth constraints',
      'Sales reps spend 80% of their day in active client meetings rather than data entry'
    ],
    architectureLayers: ['AI AGENTS', 'AUTOMATION', 'BUSINESS SYSTEMS'],
    category: 'advanced',
    iconName: 'TrendingUp',
    implementationTimeline: '4 to 6 weeks',
    ctaText: 'Build a Revenue Workflow'
  },
  {
    id: 'ai-native-products',
    number: '06',
    title: 'AI-Native Custom Software',
    tagline: 'Bespoke Software → Embedded AI → Enterprise Scale',
    headline: 'Build custom software designed from the ground up around intelligent workflows.',
    description: 'We engineer custom enterprise web applications, mobile platforms, and customer portals with embedded AI capabilities tailored to how your business actually operates.',
    whatWeBuild: 'Full-stack enterprise applications with built-in AI copilots, real-time messaging, workflow engines, and direct ERP/CRM integrations.',
    whereItFits: 'Proprietary client portals, internal operational tools, and mission-critical SaaS platforms.',
    typicalUseCases: [
      'Custom customer self-service portals with AI diagnostic assistants and document upload',
      'Internal operations dispatch platforms with route and inventory optimization',
      'B2B partner collaboration portals with automated billing and project status tracking'
    ],
    connectedSystems: ['React', 'Node.js', 'PostgreSQL', 'GraphQL', 'AWS', 'Google Cloud'],
    aiCapability: 'Embedded conversational interfaces, real-time streaming, and intelligent recommendation systems',
    capabilities: [
      'Enterprise-Grade Full-Stack Web & Mobile Architecture',
      'Embedded Context-Aware AI Assistants & Copilots',
      'Granular Role-Based Access Control (RBAC) & Single Sign-On (SSO)',
      'Real-Time WebSocket Sync & Offline Data Resiliency',
      'Dedicated CI/CD, Containerized Cloud Run, and Kubernetes Hosting'
    ],
    businessOutcomes: [
      'Replaces rigid off-the-shelf software with tailored tools matching your exact workflows',
      'Provides proprietary competitive differentiation in customer digital experience',
      'Full source code ownership with zero ongoing third-party vendor lock-in'
    ],
    architectureLayers: ['DATA', 'INTELLIGENCE', 'AUTOMATION', 'BUSINESS SYSTEMS'],
    category: 'advanced',
    iconName: 'Layers',
    implementationTimeline: '8 to 16 weeks',
    ctaText: 'Build Custom AI Software'
  },
  {
    id: 'ai-core-infrastructure',
    number: '07',
    title: 'AI Core & Sovereign Infrastructure',
    tagline: 'Private Hosting → Air-Gapped Security → Zero Data Retention',
    headline: 'Enterprise technology with sovereign security and complete data ownership.',
    description: 'Deploy enterprise AI models and automated pipelines inside your own private cloud or on-premise infrastructure with zero data leakage, strict GDPR/HIPAA compliance, and complete IP protection.',
    whatWeBuild: 'Private model hosting, secure API gateway proxies, data masking layers, and compliance audit frameworks.',
    whereItFits: 'Financial institutions, healthcare providers, legal firms, and security-conscious enterprises.',
    typicalUseCases: [
      'Hosting fine-tuned open-weight models (Llama 3, Mistral) on private VPC infrastructure',
      'PII redacting and real-time prompt sanitation before external model routing',
      'Immutable compliance logging for regulated financial or medical transactions'
    ],
    connectedSystems: ['AWS PrivateLink', 'GCP VPC', 'Azure Confidential Computing', 'Kubernetes'],
    aiCapability: 'Model quantization, private inference, prompt encryption, and sovereign LLM serving',
    capabilities: [
      'Zero-Data Retention Architecture & Guardrails',
      'Air-Gapped On-Premise & Private Cloud Deployment',
      'Real-Time PII & Sensitive IP Anonymization',
      'Enterprise SSO, SAML, and Granular Audit Trails',
      'Certified Governance & Model Drift Monitoring'
    ],
    businessOutcomes: [
      'Complete legal and regulatory compliance across HIPAA, GDPR, and SOC2',
      'Guarantees your proprietary business data is never used to train public models',
      'Predictable private compute costs with zero per-token surprise billing'
    ],
    architectureLayers: ['DATA', 'INTELLIGENCE', 'SECURITY'],
    category: 'infrastructure',
    iconName: 'ShieldCheck',
    implementationTimeline: '4 to 8 weeks',
    ctaText: 'Discuss Enterprise Security'
  },
  {
    id: 'digital-twin-simulation',
    number: '08',
    title: 'Digital Twin & Simulation',
    tagline: 'Process Modeling → Scenario Testing → Predictive Optimization',
    headline: 'Simulate business decisions before you deploy them in the real world.',
    description: 'Create a dynamic digital replica of your operations, revenue pipelines, and staffing models. Test pricing shifts, capacity constraints, and market fluctuations in a risk-free simulation environment.',
    whatWeBuild: 'Operational digital twin models, stochastic business simulators, and real-time predictive analytics sandboxes.',
    whereItFits: 'Strategic planning, supply chain modeling, capacity planning, and revenue forecasting.',
    typicalUseCases: [
      'Simulating supply chain disruptions to test alternative vendor response times',
      'Testing pricing changes against historical customer elasticity models',
      'Forecasting workforce requirements based on seasonal sales volume trends'
    ],
    connectedSystems: ['ERP Ledgers', 'Supply Chain APIs', 'CRM Pipelines', 'Financial Models'],
    aiCapability: 'Agent-based simulation, Monte Carlo forecasting, and reinforcement learning',
    capabilities: [
      'Real-Time Operational State Mirroring',
      'Multi-Scenario Stress Testing & Sensitivity Analysis',
      'Continuous Feedback Loops & Process Tuning',
      'Predictive Bottleneck Identification',
      'Executive Strategy Playbook Generation'
    ],
    businessOutcomes: [
      'De-risks multi-million-dollar operational decisions prior to real-world capital deployment',
      'Identifies operational bottlenecks weeks before they impact delivery timelines',
      'Transforms executive strategy from guesswork into verified predictive math'
    ],
    architectureLayers: ['DATA', 'INTELLIGENCE', 'GROWTH'],
    category: 'infrastructure',
    iconName: 'Activity',
    implementationTimeline: '8 to 14 weeks',
    ctaText: 'Model Your Operations'
  }
];
