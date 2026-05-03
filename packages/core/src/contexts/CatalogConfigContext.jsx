import { createContext, useContext } from 'react';
import {
  DEFAULT_BUSINESS,
  DEFAULT_THEME,
  DEFAULT_DELIVERY,
  DEFAULT_PAYMENTS,
  DEFAULT_FEATURE_FLAGS,
  mergeBusiness,
  mergeTheme,
  mergeFeatureFlags,
} from '../config/defaults.js';

/**
 * CatalogConfigContext
 *
 * Patrón de extensión de Hermes: el cliente inyecta su config al core.
 * El core consume `useCatalogConfig()` y NUNCA lee strings/branding de archivos
 * locales del cliente.
 *
 * Forma esperada del config:
 * {
 *   business: { name, shortName, geo, phone, ... },
 *   theme: { primary, bg, text, ... },
 *   delivery: { enabled, zones, ... },
 *   payments: { cash, mercadopago, alias, ... },
 *   featureFlags: { delivery, reviews, push, ... },
 *   categoryGroups: [{ name, icon, subs: [...] }],   // específico cliente
 *   dailyDeals: { 0: [...], 1: [...], ... },         // específico cliente
 *   whatsappMessages: { ... },                       // opcional
 * }
 */

const FALLBACK = {
  business: DEFAULT_BUSINESS,
  theme: DEFAULT_THEME,
  delivery: DEFAULT_DELIVERY,
  payments: DEFAULT_PAYMENTS,
  featureFlags: DEFAULT_FEATURE_FLAGS,
  categoryGroups: [],
  dailyDeals: {},
};

const CatalogConfigContext = createContext(FALLBACK);

export function CatalogConfigProvider({ config = {}, children }) {
  const merged = {
    business: mergeBusiness(config.business),
    theme: mergeTheme(config.theme),
    delivery: { ...DEFAULT_DELIVERY, ...(config.delivery || {}) },
    payments: { ...DEFAULT_PAYMENTS, ...(config.payments || {}) },
    featureFlags: mergeFeatureFlags(config.featureFlags),
    categoryGroups: config.categoryGroups || [],
    dailyDeals: config.dailyDeals || {},
    whatsappMessages: config.whatsappMessages || {},
  };

  return (
    <CatalogConfigContext.Provider value={merged}>
      {children}
    </CatalogConfigContext.Provider>
  );
}

/** Hook principal — todo componente del core que necesite branding o categorías lo usa. */
export function useCatalogConfig() {
  return useContext(CatalogConfigContext);
}

/** Atajo: solo el bloque business. */
export function useBusiness() {
  return useContext(CatalogConfigContext).business;
}

/** Atajo: solo feature flags. */
export function useFeatureFlags() {
  return useContext(CatalogConfigContext).featureFlags;
}
