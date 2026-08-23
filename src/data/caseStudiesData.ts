import { CaseStudyItem } from '../types';

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'industrial-parts-distributor',
    title: 'Industrial Equipment & B2B Parts Distributor',
    clientTier: 'Mid-Market B2B Enterprise',
    industry: 'Industrial Supply & Manufacturing',
    theBusiness: 'A leading industrial replacement parts distributor supplying manufacturing plants across 8 states with 40,000+ SKU inventory.',
    theProblem: 'Inbound quote requests and purchase orders arriving via WhatsApp and email required manual cross-referencing against ERP inventory tables, leading to a 24-hour quote turnaround time and lost high-margin deals.',
    theSystem: 'Zyntara engineered an integrated B2B Commerce & Revenue Engine connecting WhatsApp Business API, PDF parser, and PostgreSQL ERP inventory ledger.',
    theWorkflow: [
      'Inbound parts inquiry arrives via WhatsApp or email with attached equipment photo or serial number',
      'AI OCR extracts part numbers, machine specs, and requested quantity in 1.2 seconds',
      'System checks real-time warehouse inventory and pricing tiers in ERP database',
      'Generates and dispatches formal PDF quote with one-click approval link back to client WhatsApp',
      'Upon customer approval, creates sales order in ERP, reserves warehouse inventory, and routes to shipping'
    ],
    theResult: [
      { metric: '< 2 Minutes', label: 'Quote Turnaround', detail: 'Reduced formal quote turnaround time from 24 hours to under 2 minutes' },
      { metric: '38% Increase', label: 'Quote-to-Order Conversion', detail: 'Rapid response time captured time-sensitive emergency maintenance orders' },
      { metric: 'Zero', label: 'Manual Data Entry', detail: 'Inside sales reps shifted from manual catalog lookups to proactive account relationship building' }
    ],
    theNextStep: 'Expanding the system with a predictive re-order agent that monitors customer consumption patterns and suggests scheduled replenishment orders automatically.',
    solutionsUsed: ['AI Revenue Engine', 'Intelligent Operations', 'AI-Native Custom Software'],
    architectureStack: ['WhatsApp Business Cloud API', 'PostgreSQL', 'FastAPI', 'Llama 3 Vision', 'ERP Sync']
  },
  {
    id: 'commercial-logistics-fleet',
    title: 'Regional Freight & Cold-Chain Logistics Provider',
    clientTier: 'Regional Logistics Fleet Operator',
    industry: 'Transportation & Logistics',
    theBusiness: 'A temperature-controlled freight logistics fleet managing 120 trucks and 4 regional distribution fulfillment hubs.',
    theProblem: 'Dispatchers spent 4+ hours daily manually matching driver availability, reefer temperature compliance logs, and customer delivery time windows across disconnected spreadsheets and driver messaging chats.',
    theSystem: 'Zyntara deployed an Autonomous Operations Dispatch Mesh with driver WhatsApp coordination and real-time telematics ingestion.',
    theWorkflow: [
      'Customer shipment booking event ingested via API or booking form',
      'System calculates optimal routing, capacity availability, and cold-chain constraints',
      'Automated dispatch offer sent to driver via WhatsApp with one-tap confirmation',
      'Driver GPS milestones and temperature sensor telemetry stream into live operations dashboard',
      'Automated proof-of-delivery captured via driver photo upload; invoice generated and dispatched immediately'
    ],
    theResult: [
      { metric: '4 Hours Saved', label: 'Daily Dispatcher Time', detail: 'Eliminated manual driver phone calls and spreadsheet scheduling updates' },
      { metric: '100%', label: 'Cold-Chain Compliance', detail: 'Automated temperature alert triggers prevented spoiled load insurance claims' },
      { metric: 'Same-Day', label: 'Invoice Settlement', detail: 'Accelerated invoice generation upon delivery confirmation from 5 days to real time' }
    ],
    theNextStep: 'Integrating multi-depot dynamic fuel optimization and predictive maintenance telemetry into the Zyntara One™ Digital Twin.',
    solutionsUsed: ['Intelligent Operations', 'AI Workforce', 'Digital Twin & Simulation'],
    architectureStack: ['Zyntara One™ Event Mesh', 'IoT Telemetry Ingestion', 'WhatsApp Cloud API', 'Postgres GIS']
  },
  {
    id: 'healthcare-specialty-clinic',
    title: 'Multi-Location Specialty Medical Network',
    clientTier: 'Healthcare Provider Network',
    industry: 'Healthcare & Medical Services',
    theBusiness: 'A network of 6 specialized diagnostic and outpatient clinics handling 1,500+ patient inquiries and consultations weekly.',
    theProblem: 'High patient call volumes led to 22% dropped calls, unconfirmed appointments, an 18% no-show rate, and delayed pre-authorization insurance verification.',
    theSystem: 'Zyntara built a HIPAA-compliant Patient Communication & Scheduling Engine connecting WhatsApp, SMS, telephony, and EHR calendar systems.',
    theWorkflow: [
      'Patient reaches out via WhatsApp or website seeking specialist consultation',
      'Conversational AI collects referral details, verifies insurance eligibility, and checks calendar slots',
      'Appointment confirmed with calendar sync and instant prep instructions delivered via WhatsApp',
      'Automated multi-channel reminders dispatched 48 hours and 2 hours prior with one-tap reschedule button',
      'Post-visit follow-up collects satisfaction feedback and delivers care plan documents securely'
    ],
    theResult: [
      { metric: '60% Reduction', label: 'No-Show Rate', detail: 'Multi-channel interactive reminders reduced clinic no-shows from 18% to under 7%' },
      { metric: 'Zero', label: 'Dropped Inquiries', detail: '24/7 automated booking captures after-hours appointments without receptionist overtime' },
      { metric: '15 Minutes', label: 'Insurance Verification', detail: 'Automated pre-authorization check accelerated from 2 days to under 15 minutes' }
    ],
    theNextStep: 'Deploying a clinical voice intake assistant to transcribe doctor consultation notes directly into structured EHR records.',
    solutionsUsed: ['Intelligent Operations', 'AI Revenue Engine', 'AI Core & Sovereign Infrastructure'],
    architectureStack: ['HIPAA-Compliant Sovereign VPC', 'WhatsApp API', 'EHR HL7/FHIR Connector', 'Postgres']
  }
];
