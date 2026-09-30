import type { ComponentType } from "react";

export type IconComponent = ComponentType<{ className?: string }>;

export interface ISocialLink {
  name: string;
  url: string;
  icon: IconComponent;
}

export interface IMetric {
  value: string;
  label: string;
  description?: string;
}

export interface IProjectLink {
  title: string;
  url: string;
  type: "github" | "live" | "paper";
}

export interface IProjectItem {
  id: string;
  title: string;
  kind: "Team project" | "Personal project" | "Coursework";
  repo: "public" | "private";
  year: string;
  /** Short context shown on the card next to the project kind. */
  note: string;
  description: string;
  summary: string;
  duration: string;
  location: string;
  roles: string[];
  tags: string[];
  /** Headline number on the project card. */
  lead: IMetric;
  metrics: IMetric[];
  links: IProjectLink[];
  context: string;
  approach: string;
  impact: string;
  responsibilities: string[];
  highlights: string[];
}

export interface IExperienceItem {
  role: string;
  company: string;
  start?: string;
  end?: string;
  current?: boolean;
  summary?: string;
  highlights?: string[];
}

export interface IStackGroup {
  title: string;
  items: string[];
}
