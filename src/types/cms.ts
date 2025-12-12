export interface Page {
  title: string;
  slug: string;
  hero_heading: string;
  hero_subheading: string;
  hero_image: string;
  meta_title: string;
  meta_description: string;
  hide_from_nav: boolean;
}

export interface Feature {
  title: string;
  short_description: string;
  icon_svg: string;
  image: string;
  order: number;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar_image: string;
  rating: number;
  order: number;
}

export interface Plan {
  name: string;
  price_monthly: number;
  features_list: string;
  cta_text: string;
  cta_link: string;
  highlight: boolean;
  order: number;
}

export interface FAQ {
  question: string;
  answer: string;
  order: number;
}

