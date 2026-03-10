export interface PostLite {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  category: string;
  readTime: string;
  url: string;
}

export interface BudgetOption {
  value: string;
  label: string;
  desc: string;
}

export interface Perk {
  icon: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
