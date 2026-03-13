export interface CompanyInfo {
  name: string;
  description: string;
  logoUrl?: string;
  email: string;
  phone: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}
