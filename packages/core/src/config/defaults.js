/**
 * @hermes/core — Default config (agnóstico de cliente)
 *
 * Estos valores son fallbacks. El cliente sobreescribe lo que necesite vía
 * CatalogConfigProvider o vía su `src/config/business.js` local.
 *
 * Lo que vive acá NO debe contener nombres de marca, ubicaciones, teléfonos,
 * emails, ni ningún string visible al usuario final que sea cliente-específico.
 */

export const DEFAULT_BUSINESS = {
  name: 'Hermes Demo',
  shortName: 'hermes',
  tagline: 'SaaS gastronómico',
  description: 'Plantilla por defecto. El cliente debe sobreescribir esto.',
  type: 'restaurant', // 'bakery' | 'pizzeria' | 'restaurant' | etc
  emoji: '🍴',
  geo: { lat: 0, lng: 0 },
  phone: '',
  whatsapp: '',
  website: '',
  email: '',
};

export const DEFAULT_THEME = {
  primary: '#C45D3E',         // accent terracotta (placeholder)
  bg: '#FBF7F2',
  text: '#2D1B0E',
  fontFamily: 'DM Sans, sans-serif',
  fontDisplay: 'DM Serif Display, serif',
  radiusBase: 16,
};

export const DEFAULT_DELIVERY = {
  enabled: true,
  freeDeliveryThreshold: null,
  baseFee: 0,
  zones: [], // [{ name, fee, polygon }]
};

export const DEFAULT_PAYMENTS = {
  cash: true,
  mercadopago: false,
  card: false,
  transfer: false,
  alias: '',
};

export const DEFAULT_FEATURE_FLAGS = {
  delivery: true,
  scheduling: false,
  reviews: true,
  push: false,
  loyalty: false,
  coupons: true,
  recipes: false,
  invoicing: false,
};

/**
 * Fusiona overrides del cliente con los defaults.
 * @param {Partial<typeof DEFAULT_BUSINESS>} overrides
 * @returns {typeof DEFAULT_BUSINESS}
 */
export function mergeBusiness(overrides = {}) {
  return { ...DEFAULT_BUSINESS, ...overrides };
}

export function mergeTheme(overrides = {}) {
  return { ...DEFAULT_THEME, ...overrides };
}

export function mergeFeatureFlags(overrides = {}) {
  return { ...DEFAULT_FEATURE_FLAGS, ...overrides };
}
