# @pnpm/plugin-better-defaults

> Improved defaults for pnpm

## What it changes

- Sets [enableGlobalVirtualStore](https://pnpm.io/settings#enableglobalvirtualstore) to `true`.
- Sets [enablePrePostScripts](https://pnpm.io/cli/run#enableprepostscripts) to `false`.
- Sets [hoistPattern](https://pnpm.io/settings#hoistpattern) to an empty array, disabling hoisting.
- Sets [ignorePatchFailures](https://pnpm.io/settings#ignorepatchfailures) to `false`.
- Sets [optimisticRepeatInstall](https://pnpm.io/settings#optimisticrepeatinstall) to `true`.
- Sets [resolutionMode](https://pnpm.io/settings#resolutionmode) to `lowest-direct`.
- Sets [verifyDepsBeforeRun](https://pnpm.io/settings#verifydepsbeforerun) to `install`.

You can extend or override these settings in your own `.pnpmfile.cjs`.

## Installation

```
pnpm add --config @pnpm/plugin-better-defaults
```

This will add `@pnpm/plugin-better-defaults` to the [configDependencies](https://pnpm.io/config-dependencies) field in your `pnpm-workspace.yaml`.

## License

MIT
