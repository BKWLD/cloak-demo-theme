# @cloak-app/demo-theme

Standard theme for @cloak-app package demos.  [View demo](https://cloak-demo-theme.netlify.app/).

```vue
<cloak-demo-theme />
```

## Install

1. Install with `yarn add @cloak-app/demo-theme`
2. Add to `nuxt.config` with `buildModules: ['@cloak-app/demo-theme/nuxt']`

### Project Dependencies

- `.max-w*` styles (included in Cloak via `whitespace.styl`)

### Module Options

- `cloak.demo-theme:`
  - `maxWidthClass` - The default max-width class to use for the block.

## Components

### `cloak-demo-theme-block`

Renders a Block to be used within a Tower.

- props:
  - `maxWidthClass` - A `max-w-*` class to apply to the block
