# @hermes/core

Core publicable del SaaS gastronómico Hermes.

## Instalación (en un cliente)

```bash
npm install @hermes/core
```

## Uso

```jsx
import { CatalogConfigProvider } from '@hermes/core/contexts';
import { useCart, useTheme } from '@hermes/core/hooks';
import { Catalog, Admin } from '@hermes/core/components';
import { supabase } from '@hermes/core/services/supabase';

// Tu app cliente sólo aporta config y branding
const catalogConfig = {
  categoryGroups: [...],   // categorías específicas del cliente
  branding: { logo, name, ... },
};

export default function App() {
  return (
    <CatalogConfigProvider config={catalogConfig}>
      <Catalog />
    </CatalogConfigProvider>
  );
}
```

## Patrón de extensión

El cliente NO forkea componentes del core. Inyecta config vía Context (ver `CatalogConfigProvider`) o sobreescribe slots cuando el componente lo expone.

## Versionado

SemVer estricto. Conventional commits → release-please → publish automático.

- `fix:` → patch (0.1.X)
- `feat:` → minor (0.X.0)
- `feat!:` o `BREAKING CHANGE:` → major (X.0.0)

## Estado: 0.1.0-alpha — En migración desde la-nona-pato monolito.
