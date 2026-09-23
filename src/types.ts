export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  priceFormatted: string;
  category: 'standard' | 'cardio' | 'pt';
  billingCycle: string;
  popular?: boolean;
  savings?: string;
  features: string[];
}

export interface RegistrationFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  membershipPlan: string;
  preferredStartDate: string;
  message: string;
}

export interface ContactInfo {
  gymName: string;
  subName: string;
  tagline: string;
  admissionFee: number;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappLink: string;
  email: string;
  instagramUrl: string;
  instagramHandle: string;
  googleMapsEmbedUrl: string;
  addressText: string;
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}
