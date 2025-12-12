import { Page, Feature, Testimonial, Plan, FAQ } from '../types/cms';

export const pageData: Page = {
  title: 'Lumen — Smart Ambient Light',
  slug: 'home',
  hero_heading: 'Light that understands your mood.',
  hero_subheading: 'Lumen adapts to your environment, syncs with your music, and learns your preferences to create the perfect ambient lighting experience.',
  hero_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop',
  meta_title: 'Lumen — Smart Ambient Light That Adapts to You',
  meta_description: 'Lumen learns your mood and syncs with music to create perfect ambient lighting.',
  hide_from_nav: false
};

export const features: Feature[] = [
  {
    title: 'Mood Detection',
    short_description: 'Advanced sensors detect your mood and adjust lighting automatically to enhance your well-being.',
    icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
    order: 1
  },
  {
    title: 'Music Sync',
    short_description: 'Seamlessly syncs with your favorite music, creating immersive light shows that match the rhythm and beat.',
    icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13M9 18c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm12-3c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zM9 10l12-2"/></svg>',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    order: 2
  },
  {
    title: 'Smart Learning',
    short_description: 'AI-powered learning system remembers your preferences and creates personalized lighting schedules.',
    icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    order: 3
  },
  {
    title: 'Voice Control',
    short_description: 'Works with Alexa, Google Assistant, and Siri. Control your lighting with simple voice commands.',
    icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/></svg>',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
    order: 4
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Interior Designer',
    quote: 'Lumen has completely transformed how I think about ambient lighting. The mood detection feature is incredible—it knows exactly what I need.',
    avatar_image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    order: 1
  },
  {
    name: 'Marcus Johnson',
    role: 'Music Producer',
    quote: 'The music sync feature is mind-blowing. My studio sessions have never been more immersive. Lumen creates an atmosphere that enhances creativity.',
    avatar_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    order: 2
  },
  {
    name: 'Emily Rodriguez',
    role: 'Wellness Coach',
    quote: 'As someone who values wellness, Lumen\'s ability to adapt to my circadian rhythm has improved my sleep quality significantly. Highly recommend!',
    avatar_image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    order: 3
  }
];

export const plans: Plan[] = [
  {
    name: 'Starter',
    price_monthly: 129,
    features_list: 'Single room coverage\nBasic mood detection\nMusic sync\nMobile app\n1-year warranty',
    cta_text: 'Buy Now',
    cta_link: '#',
    highlight: false,
    order: 1
  },
  {
    name: 'Pro',
    price_monthly: 199,
    features_list: 'Multi-room coverage\nAdvanced mood detection\nMusic sync + rhythm matching\nVoice control integration\nSmart learning AI\nMobile app + web dashboard\n2-year warranty\nPriority support',
    cta_text: 'Buy Now',
    cta_link: '#',
    highlight: true,
    order: 2
  },
  {
    name: 'Studio',
    price_monthly: 299,
    features_list: 'Unlimited room coverage\nPremium mood detection\nAdvanced music sync\nAll voice assistants\nAI learning + customization\nMobile, web, and desktop apps\nLifetime warranty\n24/7 priority support\nProfessional installation',
    cta_text: 'Buy Now',
    cta_link: '#',
    highlight: false,
    order: 3
  }
];

export const faqs: FAQ[] = [
  {
    question: 'How does Lumen detect my mood?',
    answer: 'Lumen uses advanced sensors and AI algorithms to analyze ambient conditions, your activity patterns, and environmental factors to detect your mood and adjust lighting accordingly.',
    order: 1
  },
  {
    question: 'Can I control Lumen when I\'m away from home?',
    answer: 'Yes! The Lumen mobile app allows you to control your lights remotely, set schedules, and adjust settings from anywhere in the world.',
    order: 2
  },
  {
    question: 'What music services does Lumen sync with?',
    answer: 'Lumen syncs with Spotify, Apple Music, YouTube Music, and most major streaming services. You can also connect it to your local music library.',
    order: 3
  },
  {
    question: 'Is professional installation required?',
    answer: 'No, Lumen is designed for easy DIY installation. Simply plug it in, download the app, and follow the setup guide. Professional installation is available for Studio plans.',
    order: 4
  },
  {
    question: 'What is the warranty coverage?',
    answer: 'Starter plans include a 1-year warranty, Pro plans include 2 years, and Studio plans come with a lifetime warranty covering all hardware and software updates.',
    order: 5
  }
];

