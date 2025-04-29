# @pnpm/better-defaults

> Improved defaults for pnpm

## What it changes

- Sets [enablePrePostScripts](https://pnpm.io/cli/run#enableprepostscripts) to `false`.
- Sets [hoistPattern](https://pnpm.io/settings#hoistpattern) to an empty array, disabling hoisting.
- Sets [ignorePatchFailures](https://pnpm.io/settings#ignorepatchfailures) to `false`.
- Sets [optimisticRepeatInstall](https://pnpm.io/settings#optimisticrepeatinstall) to `true`.
- Sets [resolutionMode](https://pnpm.io/settings#resolutionmode) to `lowest-direct`.
- Sets [verifyDepsBeforeRun](https://pnpm.io/settings#verifydepsbeforerun) to `install`.

You can extend or override these settings in your own `.pnpmfile.cjs`.

## Installation

```
pnpm add --config @pnpm/better-defaults
```

This will add `@pnpm/better-defaults` to the [configDependencies](https://pnpm.io/config-dependencies) field in your `pnpm-workspace.yaml`.

## Usage

If you don't have a [pnpmfile](https://pnpm.io/pnpmfile) in your project, then add this to `pnpm-workspace.yaml`:

```yaml
pnpmfile: node_modules/.pnpm-config/@pnpm/better-defaults/pnpmfile.cjs
```

If you have a `.pnpmfile.cjs` already in your project, then you can reexport the `updateConfig` hooks from `@pnpm/better-defaults`. This should be your `.pnpmfile.cjs`:

```js
module.exports = {
  hooks: {
    ...require('.pnpm-config/@pnpm/better-defaults/pnpmfile.cjs').hooks,
    // Other hooks in your project
  }
}
```

Alternatively, you may have other changes in your `updateConfig` hook:

```js
const { updateConfig: makeBetterDefaults } = require('.pnpm-config/@pnpm/better-defaults/pnpmfile.cjs').hooks

module.exports = {
  hooks: {
    updateConfig (config) {
      return {
        ...makeBetterDefaults(config),
        hoistPattern: ['*'],
      }
    }
  }
}
```

## License

MIT
