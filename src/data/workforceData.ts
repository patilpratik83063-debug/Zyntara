import { AIWorkforceModule } from '../types';

export const WORKFORCE_MODULES: AIWorkforceModule[] = [
  {
    id: 'ai-sales',
    name: 'AI Sales Specialist',
    role: 'Autonomous Inbound & Outbound Pipeline Specialist',
    department: 'Revenue & Commercial',
    objective: 'Accelerate deal cycles from initial inbound touchpoint to verified proposal generation without pipeline leakage.',
    capabilities: [
      'Real-time lead enrichment via CRM & public signal crawling',
      'Autonomous conversational qualification via email & web voice',
      'Automated meeting scheduling & dynamic calendar orchestration',
      'Tailored pitch deck & proposal drafting based on deal notes',
      'Continuous multi-channel follow-up orchestration'
    ],
    workflow: [
      { step: 1, name: 'Inbound Signal', description: 'Detects new prospect inquiry or high-intent web signal', systemsInvolved: ['Web Analytics', 'Forms', 'LinkedIn'] },
      { step: 2, name: 'AI Qualification', description: 'Validates budget, timeline, authority, and company fit', systemsInvolved: ['Cognitive Engine', 'Clearbit'] },
      { step: 3, name: 'CRM Sync', description: 'Enriches contact profile, creates deal stage & logs intent tags', systemsInvolved: ['Salesforce', 'HubSpot'] },
      { step: 4, name: 'Orchestrated Follow-up', description: 'Dispatches tailored context-aware reply within 15 seconds', systemsInvolved: ['Email Service', 'Voice AI'] },
      { step: 5, name: 'Meeting Lock', description: 'Coordinates calendar availability with AE & prospect', systemsInvolved: ['Google/Outlook Calendar'] },
      { step: 6, name: 'Proposal Generation', description: 'Generates custom proposal with verified pricing & scope', systemsInvolved: ['CPQ Engine', 'DocuSign'] },
      { step: 7, name: 'Executive Report', description: 'Updates pipeline forecast & notifies sales leadership', systemsInvolved: ['Slack', 'BI Dashboard'] }
    ],
    autonomousLevel: 'Supervised',
    enterpriseImpact: '3.4x faster pipeline velocity with zero lead decay',
    sampleAction: 'Analyzed RFP #4092, verified enterprise compliance requirements, and drafted 34-page technical response for review.'
  },
  {
    id: 'ai-finance',
    name: 'AI Finance Analyst',
    role: 'Continuous Reconciliation & Audit Specialist',
    department: 'Finance & Treasury',
    objective: 'Reconcile multi-currency transactions, audit vendor invoices, and forecast cash flow in real-time.',
    capabilities: [
      'Multi-currency ledger matching & 3-way invoice reconciliation',
      'Continuous anomaly detection across expense claims and wire transfers',
      'Automated cash runway and liquidity stress-testing models',
      'Tax compliance validation across international jurisdictions',
      'Instant board-ready financial statement generation'
    ],
    workflow: [
      { step: 1, name: 'Invoice Ingestion', description: 'Parses incoming vendor invoice PDFs & tables', systemsInvolved: ['Optical Parser', 'Email Gate'] },
      { step: 2, name: '3-Way Match', description: 'Cross-verifies PO, receiving slip, and line-item prices', systemsInvolved: ['SAP ERP', 'NetSuite'] },
      { step: 3, name: 'Anomaly Check', description: 'Scans for price deviations, duplicate billing, or fraud risks', systemsInvolved: ['Risk Heuristics Engine'] },
      { step: 4, name: 'Approval Routing', description: 'Routes to department head if above variance threshold', systemsInvolved: ['Approval Bot', 'Slack'] },
      { step: 5, name: 'Payment Queue', description: 'Schedules payment to optimize early-settlement discounts', systemsInvolved: ['Banking API', 'Kyriba'] },
      { step: 6, name: 'Ledger Posting', description: 'Posts balanced journal entries automatically', systemsInvolved: ['General Ledger'] }
    ],
    autonomousLevel: 'Human-in-Loop',
    enterpriseImpact: '92% reduction in manual financial close duration',
    sampleAction: 'Reconciled 14,200 transactions across 6 bank feeds and flagged 3 duplicate wire requests totaling $184,000.'
  },
  {
    id: 'ai-operations',
    name: 'AI Operations Director',
    role: 'Cross-Functional Workflow Orchestrator',
    department: 'Operations & Logistics',
    objective: 'Eliminate friction across cross-departmental handoffs, monitor SLAs, and resolve supply chain bottlenecks.',
    capabilities: [
      'Real-time supply chain telemetry monitoring & alternate routing',
      'Cross-departmental ticket triage and cognitive dispatch',
      'Predictive inventory restocking based on multi-variable demand',
      'Automated root-cause analysis on operational failure events',
      'SLA tracking with autonomous escalation triggers'
    ],
    workflow: [
      { step: 1, name: 'Telemetry Pulse', description: 'Monitors inventory levels, port congestion, and shipping SLAs', systemsInvolved: ['IoT Gateway', 'Carrier APIs'] },
      { step: 2, name: 'Disruption Alert', description: 'Identifies 72-hour delay at regional distribution hub', systemsInvolved: ['Predictive ML'] },
      { step: 3, name: 'Alternate Route Simulation', description: 'Calculates optimal rerouting cost vs delivery SLA', systemsInvolved: ['Digital Twin Engine'] },
      { step: 4, name: 'Execution Dispatch', description: 'Issues revised freight orders and informs affected customers', systemsInvolved: ['WMS', 'CRM'] },
      { step: 5, name: 'Impact Summary', description: 'Logs cost variance and updates weekly operational margin', systemsInvolved: ['Ops Cockpit'] }
    ],
    autonomousLevel: 'Autonomous',
    enterpriseImpact: 'Zero SLA breaches and 28% reduction in freight expediting fees',
    sampleAction: 'Detected port strike risk in Rotterdam and preemptively rerouted 12 container shipments through Antwerp.'
  },
  {
    id: 'ai-hr',
    name: 'AI Talent & People Partner',
    role: 'Autonomous Recruitment & Employee Experience',
    department: 'Human Resources',
    objective: 'Orchestrate frictionless candidate screening, automated onboarding journeys, and real-time policy guidance.',
    capabilities: [
      'Semantic resume scoring against deep technical job requirements',
      'Automated interview scheduling and candidate communication',
      'Personalized day-one employee onboarding and equipment provisioning',
      '24/7 internal employee benefits & policy assistant with RAG',
      'Continuous organizational sentiment and retention monitoring'
    ],
    workflow: [
      { step: 1, name: 'Application Ingestion', description: 'Ingests inbound candidate profiles without demographic bias', systemsInvolved: ['Greenhouse', 'Workday'] },
      { step: 2, name: 'Skill Verification', description: 'Validates verifiable engineering/business competencies', systemsInvolved: ['Semantic Matcher'] },
      { step: 3, name: 'Screening Coordination', description: 'Sends screening prompts and coordinates panel interviews', systemsInvolved: ['Calendly API', 'Teams'] },
      { step: 4, name: 'Offer Preparation', description: 'Prepares compensation band benchmarked against market', systemsInvolved: ['Pave', 'HRIS'] },
      { step: 5, name: 'Onboarding Launch', description: 'Triggers IT laptop setup, email creation, and SOP modules', systemsInvolved: ['Okta', 'Notion', 'Jira'] }
    ],
    autonomousLevel: 'Supervised',
    enterpriseImpact: '65% faster time-to-hire with 98% positive candidate feedback',
    sampleAction: 'Screened 450 engineering applicants, shortlisted top 8 matching specific distributed systems criteria, and drafted interview scorecards.'
  },
  {
    id: 'ai-procurement',
    name: 'AI Procurement & Contract Negotiator',
    role: 'Vendor Intelligence & Contract Optimization',
    department: 'Procurement & Legal',
    objective: 'Audit recurring SaaS and vendor contracts, identify overlapping software licenses, and optimize renewal pricing.',
    capabilities: [
      'Automated contract clause extraction and indemnity risk scoring',
      'Software seat utilization tracking and license pruning',
      'Vendor price benchmarking against industry standard rate cards',
      'Autonomous RFP distribution and supplier response matrix evaluation',
      'Pre-negotiation brief generation for procurement executives'
    ],
    workflow: [
      { step: 1, name: 'Renewal Detection', description: 'Flags contracts entering 90-day renewal window', systemsInvolved: ['Ironclad', 'Contract Vault'] },
      { step: 2, name: 'Usage Audit', description: 'Analyzes active seat usage vs purchased contract tiers', systemsInvolved: ['SSO Logs', 'Okta'] },
      { step: 3, name: 'Market Benchmark', description: 'Compares per-unit cost with current tier-1 market indices', systemsInvolved: ['Vendor Database'] },
      { step: 4, name: 'Negotiation Strategy', description: 'Generates counter-offer letter with concrete usage metrics', systemsInvolved: ['Cognitive Drafting'] },
      { step: 5, name: 'Legal Sign-off', description: 'Submits finalized redline document to General Counsel', systemsInvolved: ['DocuSign'] }
    ],
    autonomousLevel: 'Human-in-Loop',
    enterpriseImpact: 'Average 18-24% annual savings on enterprise vendor contracts',
    sampleAction: 'Audited 78 vendor agreements, flagged $420,000 in unused cloud licenses, and formulated renewal counter-offers.'
  },
  {
    id: 'ai-customer-service',
    name: 'AI Customer Success Specialist',
    role: 'Omnichannel Autonomous Resolution Agent',
    department: 'Customer Experience',
    objective: 'Provide immediate, empathetic, multi-lingual resolution for tier-1 & tier-2 inquiries across voice and chat.',
    capabilities: [
      'Sub-300ms conversational voice interaction with emotional intelligence',
      'Direct order modifications, refunds, and cancellations within policy bounds',
      'Real-time account diagnosis and technical troubleshooting',
      'Sentiment-aware escalation to dedicated human account managers',
      'Automated post-interaction knowledge base article generation'
    ],
    workflow: [
      { step: 1, name: 'Multi-Modal Contact', description: 'Receives voice call, WhatsApp message, or web ticket', systemsInvolved: ['Voice Gateway', 'Intercom'] },
      { step: 2, name: 'Caller Identification', description: 'Authenticates customer and pulls active order telemetry', systemsInvolved: ['CRM', 'ERP Database'] },
      { step: 3, name: 'Intent Resolution', description: 'Diagnoses issue and executes appropriate corrective API action', systemsInvolved: ['Order Service', 'Stripe'] },
      { step: 4, name: 'Verification & Closure', description: 'Confirms customer satisfaction and issues receipt', systemsInvolved: ['SMS', 'Email'] },
      { step: 5, name: 'Knowledge Update', description: 'Logs novel edge case for continuous system tuning', systemsInvolved: ['Knowledge Base'] }
    ],
    autonomousLevel: 'Autonomous',
    enterpriseImpact: '84% first-contact resolution with 4.9/5 CSAT rating',
    sampleAction: 'Resolved 3,400 customer inquiries in 8 languages with an average resolution time of 42 seconds.'
  },
  {
    id: 'ai-research',
    name: 'AI Market & Competitive Intelligence',
    role: 'Strategic Signals & Deep Research Specialist',
    department: 'Corporate Strategy',
    objective: 'Monitor competitor movements, patent filings, regulatory shifts, and technological breakthroughs across global markets.',
    capabilities: [
      'Continuous scanning of SEC filings, patent databases, and news feeds',
      'Synthesized executive intelligence briefings delivered on schedule',
      'Competitor product change analysis and pricing teardowns',
      'Regulatory compliance impact forecasting',
      'Emerging technology trend evaluation and vendor landscapes'
    ],
    workflow: [
      { step: 1, name: 'Signal Capture', description: 'Scrapes global regulatory filings, transcripts, and industry news', systemsInvolved: ['Crawler Mesh', 'RSS'] },
      { step: 2, name: 'Relevance Scoring', description: 'Filters out noise and isolates high-impact strategic shifts', systemsInvolved: ['NLP Embeddings'] },
      { step: 3, name: 'Synthesis & Thesis', description: 'Extracts strategic implications for the enterprise', systemsInvolved: ['Cognitive Engine'] },
      { step: 4, name: 'Executive Briefing', description: 'Delivers high-density briefing deck with citations to leadership', systemsInvolved: ['PDF Generator', 'Email'] }
    ],
    autonomousLevel: 'Autonomous',
    enterpriseImpact: 'Over 200 hours of manual analyst research saved each month',
    sampleAction: 'Compiled a 40-page competitive analysis of 12 global competitors with strategic response recommendations.'
  },
  {
    id: 'ai-it',
    name: 'AI Systems & Security Sentinel',
    role: 'Infrastructure Health & Cyber Defense Agent',
    department: 'Information Technology & SecOps',
    objective: 'Ensure zero-downtime application health, auto-remediate cloud anomalies, and block malicious intrusion attempts.',
    capabilities: [
      'Real-time SIEM log correlation and zero-day threat isolation',
      'Autonomous cloud resource rightsizing and cost throttling',
      'Automated access credential rotations and privilege auditing',
      'Self-healing container restarts and automated database failover',
      'Helpdesk ticket auto-resolution for password resets and software access'
    ],
    workflow: [
      { step: 1, name: 'Telemetry Ingestion', description: 'Processes 50,000 log events per second across cloud VPCs', systemsInvolved: ['DataDog', 'Splunk'] },
      { step: 2, name: 'Threat Detection', description: 'Identifies anomalous credential stuffing pattern', systemsInvolved: ['Behavioral Model'] },
      { step: 3, name: 'Containment Action', description: 'Isolates compromised IP, revokes session, forces MFA re-auth', systemsInvolved: ['WAF', 'Okta'] },
      { step: 4, name: 'Incident Logging', description: 'Generates SOC2 compliant audit incident report for CISO', systemsInvolved: ['Jira Service Desk'] }
    ],
    autonomousLevel: 'Autonomous',
    enterpriseImpact: 'Sub-second incident containment and 99.999% system availability',
    sampleAction: 'Detected suspicious lateral database traversal, quarantined offending service account in 140ms, and notified SecOps.'
  }
];
