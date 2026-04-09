export interface Module {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  color: string;
  icon: string;
  stats: Stat[];
  features: string[];
  featuresAr: string[];
}

export interface Stat {
  label: string;
  labelAr: string;
  value: string;
  change: string;
}

export interface NavItem {
  id: string;
  label: string;
  labelAr: string;
  icon: string;
}