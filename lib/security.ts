/**
 * Security utilities for input validation, sanitization, and protection
 */

// Email validation with strict regex
export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Sanitize string input to prevent XSS
export function sanitizeString(input: string): string {
  if (typeof input !== 'string') return '';
  
  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '');
  
  // Escape special characters
  sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
  
  return sanitized.trim();
}

// Validate string length
export function validateLength(
  input: string,
  min: number,
  max: number
): boolean {
  const length = input.trim().length;
  return length >= min && length <= max;
}

// Validate phone number (international format)
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone.replace(/[\s()-]/g, ''));
}

// Detect and block SQL injection attempts
export function detectSQLInjection(input: string): boolean {
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/i,
    /(;|\-\-|\/\*|\*\/)/,
    /(\bOR\b.*=.*)/i,
    /(\bAND\b.*=.*)/i,
    /(UNION.*SELECT)/i,
  ];
  
  return sqlPatterns.some(pattern => pattern.test(input));
}

// Detect XSS attempts
export function detectXSS(input: string): boolean {
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<embed/gi,
    /<object/gi,
  ];
  
  return xssPatterns.some(pattern => pattern.test(input));
}

// Validate and sanitize form data
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export function validateContactForm(data: any): {
  valid: boolean;
  errors: string[];
  sanitized?: ContactFormData;
} {
  const errors: string[] = [];
  
  // Validate name
  if (!data?.name || typeof data.name !== 'string') {
    errors.push('Name is required');
  } else if (!validateLength(data.name, 2, 100)) {
    errors.push('Name must be between 2 and 100 characters');
  } else if (detectSQLInjection(data.name) || detectXSS(data.name)) {
    errors.push('Invalid characters in name');
  }
  
  // Validate email
  if (!data?.email || typeof data.email !== 'string') {
    errors.push('Email is required');
  } else if (!validateEmail(data.email)) {
    errors.push('Invalid email address');
  }
  
  // Validate message
  if (!data?.message || typeof data.message !== 'string') {
    errors.push('Message is required');
  } else if (!validateLength(data.message, 10, 5000)) {
    errors.push('Message must be between 10 and 5000 characters');
  } else if (detectSQLInjection(data.message) || detectXSS(data.message)) {
    errors.push('Invalid characters in message');
  }
  
  // Validate optional fields
  if (data?.company && typeof data.company === 'string') {
    if (!validateLength(data.company, 0, 200)) {
      errors.push('Company name must be less than 200 characters');
    } else if (detectSQLInjection(data.company) || detectXSS(data.company)) {
      errors.push('Invalid characters in company name');
    }
  }
  
  if (errors.length > 0) {
    return { valid: false, errors };
  }
  
  // Sanitize all fields
  const sanitized: ContactFormData = {
    name: sanitizeString(data.name),
    email: data.email.toLowerCase().trim(),
    company: data.company ? sanitizeString(data.company) : undefined,
    service: data.service ? sanitizeString(data.service) : undefined,
    message: sanitizeString(data.message),
  };
  
  return { valid: true, errors: [], sanitized };
}

// Generate CSRF token
export function generateCSRFToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Verify CSRF token
export function verifyCSRFToken(token: string, storedToken: string): boolean {
  return token === storedToken && token.length === 64;
}

// Hash sensitive data (using Web Crypto API)
export async function hashData(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

// Rate limiting helper
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  
  constructor(
    private maxRequests: number,
    private windowMs: number
  ) {}
  
  check(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    // Get existing requests for this identifier
    let requests = this.requests.get(identifier) || [];
    
    // Filter out old requests
    requests = requests.filter(time => time > windowStart);
    
    // Check if limit exceeded
    if (requests.length >= this.maxRequests) {
      return false;
    }
    
    // Add new request
    requests.push(now);
    this.requests.set(identifier, requests);
    
    return true;
  }
  
  cleanup(): void {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    for (const [key, requests] of this.requests.entries()) {
      const validRequests = requests.filter(time => time > windowStart);
      if (validRequests.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, validRequests);
      }
    }
  }
}
