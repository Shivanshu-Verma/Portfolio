import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import type { MouseEventHandler, ReactNode, RefObject } from "react";

export interface INavMenuItem {
  id: string;
  title: string;
  path: string;
  section: string;
  submenu?: INavMenuItem[];
}

export interface INavItem {
  name: string;
  link: string;
  icon: IconProp;
}

export interface IExperienceItem {
  icon: string;
  designation: string;
  company: string;
  startDate: string;
  endDate: string;
  isCurrentJob: boolean;
  location: string;
  shortDescription: string;
  description: string;
}

export enum RepoType {
  Public,
  Private,
}

export enum ProjectType {
  Personal,
  TeamProject,
  CourseWork,
}

export interface IProjectItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  repoType: RepoType;
  projectType?: ProjectType;
  githubUrl?: string;
  url?: string;
  tags?: string[];
  summary?: string;
  duration?: string;
  location?: string;
  roles?: string[];
  responsibilities?: string[];
  highlights?: string[];
  metrics?: IProjectMetric[];
  links?: IProjectLink[];
  screenshots?: string[];
  about?: string;
  context?: string;
  approach?: string;
  impact?: string;
}

export interface IProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface IProjectLink {
  title: string;
  url: string;
  type?: "github" | "live" | "demo" | "deck" | "docs" | "press";
}

export type IServiceItem = {
  id: number | string;
  title: string;
  icon?: IconDefinition;
  shortDescription: string;
  description: string;
  icons: string[];
};

export interface ISkillListItem {
  title: string;
  items: ISkillItem[];
}

export enum SkillLevel {
  Expert,
  Intermediate,
  Begginer,
}

export interface ISkillItem {
  title: string;
  level?: SkillLevel;
  icon?: string;
}

export interface ISocialLinkItem {
  url: string;
  icon: IconDefinition;
  text: string;
  name?: string;
}

export interface MenutItemProps {
  items: INavMenuItem;
  depthLevel: number;
  mobileNav: boolean;
  handleCloseMobileMenu: () => void;
  current?: string;
}

export interface DropdownMenuProps
  extends Omit<MenutItemProps, "items" | "current"> {
  submenus: INavMenuItem[];
  dropdown: boolean;
}

export interface ButtonComponentProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  classNames?: string;
  name?: string;
}

export interface CoreComponentsProps {
  children: ReactNode;
  classNames?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  id?: string;
  elementRef?: RefObject<HTMLDivElement>;
  role?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

export interface ViewportProps {
  root?: null | undefined;
  rootMargin?: string | undefined;
  threshold?: number | undefined;
}

export interface ShootingStarProps {
  vw: number;
  vh: number;
}
