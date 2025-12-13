export type WorkflowComplexity = 'low' | 'medium' | 'high';
export type WorkflowCategory = 'marketing' | 'sales' | 'productivity' | 'data' | 'ai' | 'social' | 'ecommerce' | 'devops';

export interface Workflow {
  id: string;
  name: string;
  description: string;
  complexity: WorkflowComplexity;
  category: WorkflowCategory;
  downloads: number;
  rating: number;
  tags: string[];
  previewImage?: string;
  jsonUrl?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  credits: number;
  price: number;
  popular?: boolean;
  description: string;
}

export const COMPLEXITY_CREDITS: Record<WorkflowComplexity, number> = {
  low: 1,
  medium: 3,
  high: 5,
};

export const COMPLEXITY_LABELS: Record<WorkflowComplexity, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

export const CATEGORY_LABELS: Record<WorkflowCategory, string> = {
  marketing: 'Marketing',
  sales: 'Sales',
  productivity: 'Productivity',
  data: 'Data & Analytics',
  ai: 'AI & ML',
  social: 'Social Media',
  ecommerce: 'E-commerce',
  devops: 'DevOps',
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    credits: 10,
    price: 2,
    description: 'Perfect for trying out a few workflows',
  },
  {
    id: 'popular',
    name: 'Popular',
    credits: 30,
    price: 5,
    popular: true,
    description: 'Best value for regular users',
  },
  {
    id: 'pro',
    name: 'Pro',
    credits: 75,
    price: 10,
    description: 'For power users and teams',
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    credits: 125,
    price: 15,
    description: 'Maximum credits at the best rate',
  },
];

// Mock workflows for initial display
export const MOCK_WORKFLOWS: Workflow[] = [
  {
    id: '1',
    name: 'Slack to Notion Daily Summary',
    description: 'Automatically summarize Slack channel messages and create daily digest in Notion',
    complexity: 'medium',
    category: 'productivity',
    downloads: 1245,
    rating: 4.8,
    tags: ['slack', 'notion', 'automation', 'summary'],
  },
  {
    id: '2',
    name: 'Lead Enrichment Pipeline',
    description: 'Enrich leads from your CRM with company data from multiple sources',
    complexity: 'high',
    category: 'sales',
    downloads: 892,
    rating: 4.9,
    tags: ['crm', 'leads', 'enrichment', 'sales'],
  },
  {
    id: '3',
    name: 'Twitter Post Scheduler',
    description: 'Schedule and auto-post tweets with image generation',
    complexity: 'low',
    category: 'social',
    downloads: 2341,
    rating: 4.6,
    tags: ['twitter', 'social', 'scheduling'],
  },
  {
    id: '4',
    name: 'Invoice Data Extractor',
    description: 'Extract data from PDF invoices using AI and save to spreadsheet',
    complexity: 'high',
    category: 'data',
    downloads: 567,
    rating: 4.7,
    tags: ['pdf', 'ai', 'extraction', 'invoices'],
  },
  {
    id: '5',
    name: 'Email Campaign Tracker',
    description: 'Track email opens, clicks, and responses automatically',
    complexity: 'medium',
    category: 'marketing',
    downloads: 1823,
    rating: 4.5,
    tags: ['email', 'tracking', 'marketing'],
  },
  {
    id: '6',
    name: 'GPT Content Generator',
    description: 'Generate blog posts and social content with GPT-4',
    complexity: 'medium',
    category: 'ai',
    downloads: 3421,
    rating: 4.9,
    tags: ['gpt', 'content', 'ai', 'writing'],
  },
  {
    id: '7',
    name: 'Shopify Order Alerts',
    description: 'Get instant notifications for new orders with customer details',
    complexity: 'low',
    category: 'ecommerce',
    downloads: 1567,
    rating: 4.4,
    tags: ['shopify', 'orders', 'notifications'],
  },
  {
    id: '8',
    name: 'GitHub CI/CD Monitor',
    description: 'Monitor deployments and get alerts on failures',
    complexity: 'medium',
    category: 'devops',
    downloads: 789,
    rating: 4.6,
    tags: ['github', 'ci-cd', 'monitoring'],
  },
  {
    id: '9',
    name: 'RSS to Email Digest',
    description: 'Compile RSS feeds into beautiful email newsletters',
    complexity: 'low',
    category: 'productivity',
    downloads: 1234,
    rating: 4.3,
    tags: ['rss', 'email', 'newsletter'],
  },
  {
    id: '10',
    name: 'Customer Feedback Analyzer',
    description: 'Analyze customer feedback sentiment with AI and create reports',
    complexity: 'high',
    category: 'ai',
    downloads: 456,
    rating: 4.8,
    tags: ['ai', 'sentiment', 'feedback', 'analysis'],
  },
  {
    id: '11',
    name: 'Calendar Sync Multi-Platform',
    description: 'Sync events across Google, Outlook, and Apple calendars',
    complexity: 'medium',
    category: 'productivity',
    downloads: 2100,
    rating: 4.7,
    tags: ['calendar', 'sync', 'google', 'outlook'],
  },
  {
    id: '12',
    name: 'Database Backup Scheduler',
    description: 'Automated database backups to cloud storage',
    complexity: 'low',
    category: 'devops',
    downloads: 890,
    rating: 4.5,
    tags: ['backup', 'database', 'automation'],
  },
];

export const FEATURES = [
  {
    title: 'Instant Download',
    description: 'Download JSON workflows instantly and import directly into n8n',
    icon: 'Download',
  },
  {
    title: 'Tested & Verified',
    description: 'All workflows are tested and verified to work with the latest n8n version',
    icon: 'CheckCircle',
  },
  {
    title: 'Credits Never Expire',
    description: 'Buy credits once and use them whenever you need - they last forever',
    icon: 'Infinity',
  },
  {
    title: '2000+ Workflows',
    description: 'Massive library of automation workflows across all categories',
    icon: 'Layers',
  },
  {
    title: 'Community Rated',
    description: 'See ratings and reviews from other automation enthusiasts',
    icon: 'Star',
  },
  {
    title: 'Regular Updates',
    description: 'New workflows added weekly to keep up with the latest tools',
    icon: 'RefreshCw',
  },
];

export const STATS = [
  { value: '2000+', label: 'Workflows' },
  { value: '50K+', label: 'Downloads' },
  { value: '4.8', label: 'Avg Rating' },
  { value: '24/7', label: 'Support' },
];
