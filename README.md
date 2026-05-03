# Hermes

> Matriz SaaS gastronómico. Core publicable a npm como `@hermes/core` + tooling para crear clientes derivados.

## Filosofía

Un fix en la matriz Hermes se publica a npm. Todos los clientes corren `npm update @hermes/core` y reciben la mejora **sin merge conflicts y sin fork manual**.

Cliente #1: [`la-nona-pato`](https://github.com/diviancocorp-a11y/la-nona-pato).

## Estructura

```
hermes/
├── packages/
│   └── core/                      # @hermes/core (publicable a npm)
│       ├── src/
│       │   ├── components/        # UI base, admin genérico, catalog base
│       │   ├── services/          # Supabase, auth, orders, catalog, theme
│       │   ├── hooks/             # useCart, useTheme, useAuth, useCatalogConfig
│       │   ├── lib/               # utils, schemas, queryClient
│       │   ├── contexts/          # AuthContext, CatalogConfigContext
│       │   ├── config/            # defaults agnósticos
│       │   ├── constants/         # CHECKOUT_STEPS, haversine
│       │   └── types/
│       └── supabase/migrations/   # migrations base del SaaS
├── scripts/
│   └── create-client.mjs          # CLI: genera nuevo repo cliente
├── .github/workflows/
│   └── publish-core.yml           # CI: tests + publish a npm en push a main
└── docs/
```

## Estado

- [x] Repo creado
- [ ] Core scaffold inicial
- [ ] Primera publicación `@hermes/core@0.1.0-alpha`
- [ ] `la-nona-pato` migrado como cliente #1
- [ ] CI/CD publish-on-push

## Cómo crear un cliente nuevo

```bash
npx @hermes/cli create --name="Pizza Pepe" --type=pizzeria
cd pizza-pepe && npm install && npm run dev
```

(Pendiente: empaquetar el CLI. Por ahora `node scripts/create-client.mjs`).

## Cómo propagar un fix

```bash
# 1. Hacer el fix en packages/core/src/
# 2. Conventional commit:
git commit -m "fix(catalog): productos archivados ahora ocultos en feed público"
# 3. Push a main → GitHub Actions publica @hermes/core@0.1.1 a npm
# 4. Cada cliente recibe PR de Renovate para upgrade
```

## Licencia

MIT
