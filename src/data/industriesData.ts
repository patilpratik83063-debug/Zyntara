import { IndustryProfile } from '../types';

export const INDUSTRIES_DATA: IndustryProfile[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    headline: 'Predictive maintenance, automated quality control, and factory digital twins.',
    industryProblem: 'Disjointed operational technology (OT) and information technology (IT) silos, unpredictable equipment downtime, high scrap rates, and inflexible supply chain schedules.',
    aiOpportunity: 'Unifying plant telemetry into real-time digital twins that anticipate machine degradation, automate visual inspection, and dynamically optimize throughput.',
    solutions: ['AI Digital Twin', 'Intelligent Operations', 'Enterprise Intelligence'],
    workforceModules: ['AI Operations Director', 'AI Procurement & Contract Negotiator', 'AI Systems & Security Sentinel'],
    intelligenceLayerUse: [
      'Shop-floor sensor ingestion (temperature, vibration, pressure) into edge anomaly models',
      'Computer vision inspection models running on high-speed assembly lines',
      'Automated root-cause analysis on equipment failure logs'
    ],
    operationalTransformation: 'Shift from reactive scheduled maintenance to predictive self-healing factory operations.',
    revenueOpportunities: [
      'Servitization of industrial machinery with predictive warranty contracts',
      'Faster changeovers enabling high-margin custom product runs'
    ],
    architectureComponents: ['Edge Inference Nodes', 'Industrial IoT Gateway', 'SAP MES Connector', 'Digital Twin Physics Engine'],
    expectedOutcomes: [
      { metric: 'Downtime Reduction', description: 'Preempts up to 45% of unplanned mechanical stoppages' },
      { metric: 'Quality Yield', description: 'Reduces defect scrap rates by 30% via inline optical inspection' },
      { metric: 'Energy Efficiency', description: 'Optimizes HVAC and motor power consumption dynamically' }
    ]
  },
  {
    id: 'financial-services',
    name: 'Financial Services & Banking',
    headline: 'Autonomous compliance, algorithmic underwriting, and predictive wealth intelligence.',
    industryProblem: 'Mounting regulatory compliance burdens, slow manual credit risk assessments, fragmented legacy mainframes, and escalating cyber fraud vectors.',
    aiOpportunity: 'End-to-end multi-agent orchestration for instant KYC/AML verification, real-time transaction surveillance, and personalized algorithmic advisory.',
    solutions: ['AI Business Transformation', 'Enterprise Intelligence', 'AI Core & Infrastructure'],
    workforceModules: ['AI Finance Analyst', 'AI Market & Competitive Intelligence', 'AI Systems & Security Sentinel'],
    intelligenceLayerUse: [
      'Multi-modal document parsing for complex cross-border financial audits',
      'Sub-millisecond fraud pattern detection on real-time payment streams',
      'Knowledge graph reasoning over complex corporate ownership structures'
    ],
    operationalTransformation: 'Instant loan origination and real-time auditable regulatory reporting.',
    revenueOpportunities: [
      'Dynamic hyper-personalized wealth and lending products',
      'Accelerated institutional onboarding that captures higher deposit volumes'
    ],
    architectureComponents: ['Air-Gapped Sovereign AI Enclave', 'Core Banking Connectors', 'Graph Intelligence DB', 'Zero-Trust Gateway'],
    expectedOutcomes: [
      { metric: 'Underwriting Latency', description: 'Compresses commercial loan origination from 14 days to 4 hours' },
      { metric: 'False Positive Reduction', description: 'Reduces AML false positives by 60% with deep graph context' },
      { metric: 'Audit Readiness', description: 'Instant, continuous generation of regulatory compliance binders' }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Health Systems',
    headline: 'Clinical workflow acceleration, patient triage, and administrative automation.',
    industryProblem: 'Physician burnout from EHR documentation, delayed insurance prior-authorizations, high billing denial rates, and disconnected patient records.',
    aiOpportunity: 'Ambient clinical documentation, autonomous prior-authorization submission, and predictive hospital bed capacity management.',
    solutions: ['Intelligent Operations', 'Enterprise Intelligence', 'AI Workforce'],
    workforceModules: ['AI Operations Director', 'AI Customer Success Specialist', 'AI Talent & People Partner'],
    intelligenceLayerUse: [
      'Ambient multi-speaker clinical transcription with ICD-10/CPT coding mapping',
      'Automated medical policy cross-referencing for prior authorizations',
      'Predictive inpatient admission and ICU bed allocation modeling'
    ],
    operationalTransformation: 'Zero-touch administrative revenue cycle and hands-free physician charting.',
    revenueOpportunities: [
      'Drastic reduction in rejected insurance claims and faster billing cycles',
      'Increased patient throughput and improved patient retention scores'
    ],
    architectureComponents: ['HIPAA-Compliant Private Cloud', 'Epic/Cerner FHIR Connectors', 'Medical NLP Engine', 'Encrypted Vector Store'],
    expectedOutcomes: [
      { metric: 'Physician Charting', description: 'Saves 2+ hours per clinician per shift on EHR data entry' },
      { metric: 'Prior Auth Turnaround', description: 'Compresses prior-authorization approval cycle from 5 days to 20 minutes' },
      { metric: 'Claim Denial Rate', description: 'Cuts initial billing denials by 40% with upstream policy validation' }
    ]
  },
  {
    id: 'retail-consumer',
    name: 'Retail & Consumer Goods',
    headline: 'Hyper-personalized omnichannel commerce, dynamic inventory, and voice commerce.',
    industryProblem: 'High customer acquisition costs, inventory stockouts or oversupply, high return rates, and fragmented customer data across retail and digital channels.',
    aiOpportunity: 'Autonomous demand forecasting, personalized real-time styling/recommendation engines, and automated returns diagnosis.',
    solutions: ['AI Revenue Engine', 'AI-Native Products', 'AI Workforce'],
    workforceModules: ['AI Sales Specialist', 'AI Customer Success Specialist', 'AI Operations Director'],
    intelligenceLayerUse: [
      'Real-time behavioral intent modeling for tailored basket recommendations',
      'Predictive localized weather and trend-based store inventory replenishment',
      'Conversational multi-lingual shopping assistants across web, mobile, and WhatsApp'
    ],
    operationalTransformation: 'Autonomous supply-demand balancing with real-time dynamic pricing.',
    revenueOpportunities: [
      '30%+ higher conversion on personalized search and recommendation modules',
      'Higher basket sizes through contextual upsells and bundle generation'
    ],
    architectureComponents: ['Real-Time Vector Recommendations', 'Shopify Plus/SAP Commerce Connectors', 'Voice AI SDK', 'Inventory Optimizer'],
    expectedOutcomes: [
      { metric: 'Conversion Rate', description: 'Generates 25-35% uplift in digital storefront checkout conversions' },
      { metric: 'Stockout Reduction', description: 'Prevents out-of-stock incidents across high-velocity SKU lines' },
      { metric: 'Return Rate Mitigation', description: 'Preempts size/fit returns using interactive visual guidance' }
    ]
  },
  {
    id: 'logistics-supply-chain',
    name: 'Logistics & Supply Chain',
    headline: 'Autonomous freight orchestration, dynamic route dispatch, and warehouse intelligence.',
    industryProblem: 'Unpredictable port delays, soaring deadhead miles, manual carrier negotiations, and fragmented bill of lading paperwork.',
    aiOpportunity: 'Intelligent multi-modal dispatch, autonomous load matching, computer vision parcel tracking, and predictive ETA communication.',
    solutions: ['Intelligent Operations', 'AI Digital Twin', 'AI Core & Infrastructure'],
    workforceModules: ['AI Operations Director', 'AI Procurement & Contract Negotiator', 'AI Finance Analyst'],
    intelligenceLayerUse: [
      'Dynamic weather and traffic route recalculation for fleet telematics',
      'Instant extraction and validation of bills of lading, customs declarations, and hazmat docs',
      'Autonomous rate negotiation with third-party carrier networks'
    ],
    operationalTransformation: 'Self-adjusting logistics grid that optimizes fuel, fleet capacity, and delivery reliability.',
    revenueOpportunities: [
      'Higher asset utilization across trucks, containers, and distribution centers',
      'Premium dynamic pricing for expedited high-guarantee delivery corridors'
    ],
    architectureComponents: ['Fleet Telemetry Hub', 'TMS Connectors', 'Geospatial Optimization Mesh', 'Document OCR AI'],
    expectedOutcomes: [
      { metric: 'Fuel & Fleet Efficiency', description: 'Cuts empty miles by up to 22% through dynamic route optimization' },
      { metric: 'On-Time Delivery', description: 'Improves delivery SLA adherence from 82% to 96%+' },
      { metric: 'Paperwork Processing', description: 'Processes customs documentation 100x faster with zero errors' }
    ]
  },
  {
    id: 'technology-saas',
    name: 'Technology & Enterprise SaaS',
    headline: 'AI product transformation, autonomous developer operations, and product-led growth.',
    industryProblem: 'Need to rapidly embed generative and agentic AI capabilities into legacy SaaS architectures without compromising stability or profitability.',
    aiOpportunity: 'End-to-end re-architecture into AI-native workflows, automated customer onboarding, and dynamic usage monetization.',
    solutions: ['AI-Native Products', 'AI Revenue Engine', 'AI Business Transformation'],
    workforceModules: ['AI Sales Specialist', 'AI Systems & Security Sentinel', 'AI Market & Competitive Intelligence'],
    intelligenceLayerUse: [
      'Multi-tenant agent orchestration embedded directly into SaaS interfaces',
      'Autonomous code review, test generation, and pull-request validation',
      'Usage-based intent detection for automated expansion sales'
    ],
    operationalTransformation: 'Transition from passive software tool to proactive autonomous platform.',
    revenueOpportunities: [
      'Unlocking high-margin AI add-on pricing tiers and consumption-based revenue',
      'Drastic reduction in customer onboarding churn'
    ],
    architectureComponents: ['Multi-Tenant Inference Cluster', 'Stripe Billing Webhooks', 'Model Evaluation Pipeline', 'SDK Generator'],
    expectedOutcomes: [
      { metric: 'Feature Velocity', description: 'Accelerates AI feature roadmap delivery by 6 months' },
      { metric: 'Net Revenue Retention', description: 'Drives expansion revenue through automated product-led triggers' },
      { metric: 'Support Deflection', description: 'Resolves 80%+ of technical API queries autonomously' }
    ]
  },
  {
    id: 'pharma-life-sciences',
    name: 'Pharma & Life Sciences',
    headline: 'Accelerated clinical trial design, regulatory synthesis, and literature discovery.',
    industryProblem: 'Decade-long drug development timelines, massive unstructured biomedical literature, complex protocol amendments, and strict regulatory submissions.',
    aiOpportunity: 'Multi-modal biomedical RAG over scientific papers, automated clinical study report (CSR) drafting, and trial cohort optimization.',
    solutions: ['Enterprise Intelligence', 'AI Business Transformation', 'AI Core & Infrastructure'],
    workforceModules: ['AI Research Specialist', 'AI Finance Analyst', 'AI Systems & Security Sentinel'],
    intelligenceLayerUse: [
      'Semantic querying across millions of PubMed papers and internal lab notebooks',
      'Automated harmonization of clinical trial protocol drafts with FDA/EMA guidelines',
      'In silico trial patient matching using de-identified EHR cohorts'
    ],
    operationalTransformation: 'Compressing clinical protocol authoring from months to days while elevating scientific rigor.',
    revenueOpportunities: [
      'Earlier commercialization milestones generating hundreds of millions in patent life value',
      'Substantial cost savings in clinical trial execution and audit preparation'
    ],
    architectureComponents: ['Biomedical Vector Index', 'FDA Validation Rig', 'Clinical EDC Connectors', 'Secure Research Enclave'],
    expectedOutcomes: [
      { metric: 'CSR Drafting Speed', description: 'Cuts regulatory submission authoring time by 75%' },
      { metric: 'Literature Synthesis', description: 'Summarizes multi-thousand paper corpora in minutes with citations' },
      { metric: 'Trial Recruitment', description: 'Identifies eligible trial candidate profiles 3x faster' }
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Infrastructure',
    headline: 'Smart asset management, lease abstraction, and automated valuation models.',
    industryProblem: 'Disparate municipal data, thousands of unstructured commercial leases, opaque asset valuation, and fragmented facility maintenance.',
    aiOpportunity: 'Automated lease clause extraction, predictive building energy management, and algorithmic property underwriting.',
    solutions: ['Enterprise Intelligence', 'Intelligent Operations', 'AI Digital Twin'],
    workforceModules: ['AI Procurement & Contract Negotiator', 'AI Operations Director', 'AI Finance Analyst'],
    intelligenceLayerUse: [
      'Automated extraction of rent escalation, CAM charges, and termination clauses',
      'Building management system (BMS) telemetry optimization for carbon reduction',
      'Algorithmic micro-market rent and cap-rate prediction'
    ],
    operationalTransformation: 'Continuous asset intelligence and automated lease lifecycle accounting.',
    revenueOpportunities: [
      'Elimination of missed rent escalations and unbilled tenant expenses',
      'Higher commercial asset valuation through optimized net operating income (NOI)'
    ],
    architectureComponents: ['Yardi/MRI Connectors', 'BMS IoT Ingest', 'Lease Parser AI', 'Geospatial Valuation Grid'],
    expectedOutcomes: [
      { metric: 'Lease Processing', description: 'Extracts critical terms from 50-page leases in 90 seconds' },
      { metric: 'Utility OPEX', description: 'Reduces commercial HVAC electricity spend by 18-25%' },
      { metric: 'Underwriting Speed', description: 'Enables rapid underwriting of multi-property portfolio acquisitions' }
    ]
  }
];
