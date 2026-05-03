// @hermes/core — entry point
// Re-exporta los módulos públicos del core agrupados por dominio.
// Para imports más específicos usar subpath exports: '@hermes/core/services', '@hermes/core/hooks', etc.

export * as services from './services/index.js';
export * as hooks from './hooks/index.js';
export * as lib from './lib/index.js';
export * as contexts from './contexts/index.js';
