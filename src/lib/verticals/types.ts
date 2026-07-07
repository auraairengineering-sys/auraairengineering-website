import { type LucideIcon } from "lucide-react";
import { type Faq } from "@/lib/faqs";

/** A narrative section on a vertical page: heading + paragraphs, with an optional list. */
export type VerticalSection = {
  heading: string;
  body: string[];
  /** Optional bullet list rendered after the body paragraphs. */
  bullets?: string[];
};

/** A numbered item (engineering benefit or application) — title + description. */
export type NumberedItem = {
  title: string;
  body: string[];
  bullets?: string[];
};

/** A child landing page nested under a vertical (industry- or application-specific). */
export type ChildPage = {
  slug: string;
  title: string;
  heroSubhead?: string;
  intro: string[];
  sections?: VerticalSection[];
  faqs?: Faq[];
};

/** A solution vertical — the pillar pages living under /industries. */
export type Vertical = {
  slug: string;
  /** Full page/menu title, e.g. "Dust Suppression Systems". */
  title: string;
  /** Short label used in compact nav/cards. */
  menuLabel: string;
  /** One-line summary for cards. */
  short: string;
  icon: LucideIcon;
  /** Optional hero photograph (public path). Falls back to gradient hero when absent. */
  image?: string;
  /** Hero sub-headline, e.g. "Intelligent Dust Suppression … Solutions for …". */
  heroSubhead: string;
  /** Opening intro paragraphs beneath the hero. */
  intro: string[];
  /** Main narrative sections. */
  sections: VerticalSection[];
  /** Optional lead-in paragraph for the benefits block. */
  benefitsIntro?: string[];
  /** Numbered "Engineering Benefits" items (1.x). */
  benefits?: NumberedItem[];
  /** Optional lead-in paragraph for the applications block. */
  applicationsIntro?: string[];
  /** Numbered "Applications" items (2.x). */
  applications?: NumberedItem[];
  /** "Why Choose Aura Air" closing paragraphs. */
  whyChoose?: string[];
  faqs: Faq[];
  /** Child landing pages nested under this vertical. */
  children?: ChildPage[];
};
