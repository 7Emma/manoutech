export interface TermsSection {
  id: string;
  title: string;
  icon: string;
  content: TermsContent[];
}

export interface TermsContent {
  subtitle: string;
  text: string;
}

export interface RightsChip {
  label: string;
  icon: string;
}
