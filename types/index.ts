export interface ApiResponse<T = any> {
  status: boolean;
  status_code: number;
  data: T;
  message: string;
}

export interface RegisterData {
  name: string;
  email: string;
  mobile: string;
  mobile_country_code: string;
  password: string;
  password_confirmation: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface VerifyData {
  code: string;
}

export interface UserData {
  id: number;
  type: string;
  name: string;
  email: string;
  mobile_country_code: string;
  mobile: string;
  image: string;
  email_verified_at: boolean;
  token: string;
  is_complete: boolean;
  is_approved: boolean;
  status_docs: string;
  documents?: any;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  original_price?: number;
  discount?: number;
  image: string;
  images?: string[];
  colors?: Color[];
  sizes?: Size[];
  rating?: number;
  reviews_count?: number;
  in_stock: boolean;
  category?: string;
}

export interface Color {
  id: number;
  name: string;
  hex: string;
}

export interface Size {
  id: number;
  name: string;
  available: boolean;
}

export interface Review {
  id: number;
  user_name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface FormErrors {
  [key: string]: string[];
}