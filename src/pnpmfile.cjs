const esmNodePath = require('@pnpm/plugin-esm-node-path')

module.exports = {
  hooks: {
    updateConfig (config) {
      Object.assign(config, {
        blockExoticSubdeps: true,
        enableGlobalVirtualStore: true,
        enablePrePostScripts: false,
        ignorePatchFailures: false,
        optimisticRepeatInstall: true,
        resolutionMode: 'lowest-direct',
        trustPolicy: 'no-downgrade',
        verifyDepsBeforeRun: 'install',
      })
      if (config.hoistPattern?.length === 1 && config.hoistPattern[0] === '*') {
        config.hoistPattern = []
      }
      return esmNodePath.hooks.updateConfig(config)
    }
  }
}
