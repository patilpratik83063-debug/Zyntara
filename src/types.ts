export type ViewType = 
  | 'home'
  | 'zyntara-one'
  | 'automation'
  | 'solutions'
  | 'industries'
  | 'technology'
  | 'case-studies'
  | 'insights'
  | 'about'
  | 'contact'
  | 'assessment';

export interface ArchitectureLayer {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  technicalDetails: string[];
  connectedSystems: string[];
  enterpriseBenefits: string[];
  colorHex?: string;
  status: 'active' | 'synced' | 'streaming';
}

export interface AutomationItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  level: 1 | 2 | 3 | 4 | 5;
  levelName: string;
  targetScale: 'Small Businesses & Startups' | 'SMEs & Mid-Market' | 'Large Enterprise' | 'All Business Tiers';
  department: 'Sales' | 'Marketing' | 'Customer Support' | 'Finance' | 'HR' | 'Operations' | 'Procurement' | 'Inventory' | 'Supply Chain' | 'IT' | 'Executive';
  tagline: string;
  description: string;
  problemSolved: string;
  trigger: string;
  workflowSteps: string[];
  systemsInvolved: string[];
  automationLogic: string;
  aiRole: string;
  humanInTheLoop: string;
  outcomes: string[];
  keyFeatures: string[];
  securityAndGovernance: string;
  integrations: string[];
  zyntaraOneLayer: string;
}

export interface DepartmentMaturityModel {
  department: string;
  levels: {
    level: number;
    levelName: string;
    title: string;
    description: string;
    keyCapabilities: string[];
    humanRole: string;
    systemsInvolved: string[];
  }[];
}

export interface MultiAgentDepartmentSwarms {
  id: string;
  department: string;
  name: string;
  objective: string;
  agents: {
    name: string;
    role: string;
    responsibility: string;
    toolSet: string[];
  }[];
  executionFlow: string[];
  impact: string;
}

export interface IntegratedWorkflowExample {
  id: string;
  title: string;
  subtitle: string;
  trigger: string;
  steps: {
    step: number;
    title: string;
    system: string;
    action: string;
    automated: boolean;
    aiPowered?: boolean;
    humanApproval?: boolean;
  }[];
  businessOutcome: string;
  implementationDuration: string;
}

export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  headline: string;
  description: string;
  whatWeBuild?: string;
  whereItFits?: string;
  typicalUseCases?: string[];
  connectedSystems?: string[];
  aiCapability?: string;
  capabilities: string[];
  businessOutcomes: string[];
  architectureLayers: string[];
  category: 'core' | 'advanced' | 'infrastructure';
  iconName: string;
  implementationTimeline: string;
  ctaText?: string;
}

export interface CapabilityItem {
  id: string;
  number?: string;
  name?: string;
  title?: string;
  category?: string;
  tagline?: string;
  description?: string;
  technicalCapabilities?: string[];
  technicalSpecs?: string[];
  enterpriseReadiness?: string;
  businessOutcomes?: string[];
  supportedProtocols?: string[];
  architectureTier?: string;
}

export interface AIWorkforceModule {
  id: string;
  name: string;
  role: string;
  department: string;
  objective: string;
  capabilities: string[];
  workflow: {
    step: number;
    name: string;
    description: string;
    systemsInvolved: string[];
  }[];
  autonomousLevel: 'Supervised' | 'Autonomous' | 'Human-in-Loop';
  enterpriseImpact: string;
  sampleAction: string;
}

export interface IndustryProfile {
  id: string;
  name: string;
  headline: string;
  industryProblem: string;
  aiOpportunity: string;
  solutions: string[];
  workforceModules: string[];
  intelligenceLayerUse: string[];
  operationalTransformation: string;
  expectedOutcomes?: any[];
  revenueOpportunities?: any[];
  architectureComponents?: string[];
  roiTimeline?: string;
  keyUseCases?: {
    title: string;
    description: string;
    systems: string[];
    roi: string;
  }[];
}

export interface CaseStudyItem {
  id: string;
  title?: string;
  clientBadge?: string;
  clientTier?: string;
  clientType?: string;
  industry: string;
  businessChallenge?: string;
  zyntaraApproach?: string;
  systemArchitecture?: string[];
  implementationDuration?: string;
  verifiedOutcomes?: {
    label: string;
    description: string;
  }[];
  theBusiness?: string;
  theProblem?: string;
  theSystem?: string;
  theWorkflow?: string[];
  theResult?: {
    metric: string;
    label: string;
    detail: string;
  }[];
  theNextStep?: string;
  solutionsUsed?: string[];
  architectureStack?: string[];
  isConceptValidation?: boolean;
}

export interface InsightArticle {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  readTime: string;
  date: string;
  summary?: string;
  excerpt?: string;
  fullBody?: string | string[];
  keyInsights?: string[];
  author: {
    name: string;
    role: string;
  };
  contentSections?: {
    heading: string;
    body: string;
    points?: string[];
  }[];
  tags?: string[];
}

export interface ExecutiveFAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'WhatsApp' | 'CRM & ERP' | 'Architecture' | 'AI Agents' | 'Human Oversight';
  relatedSolution?: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  role: string;
  primaryGoal: string;
  selectedSystems: string[];
  currentChallenges: string;
  preferredTimeline: string;
}
