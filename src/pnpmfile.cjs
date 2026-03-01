const esmNodePath = require('@pnpm/plugin-esm-node-path')

module.exports = {
  hooks: {
    updateConfig (config) {
      Object.assign(config, {
        blockExoticSubdeps: true,
        enableGlobalVirtualStore: true,
        enablePrePostScripts: false,
        ignorePatchFailures: false,
        minimumReleaseAge: 1 * 24 * 60, // 1 day in minutes
        optimisticRepeatInstall: true,
        resolutionMode: 'lowest-direct',
        trustPolicy: 'no-downgrade',
        trustPolicyIgnoreAfter: 7 * 24 * 60, // 7 days in minutes
        verifyDepsBeforeRun: 'install',
      })
      if (config.hoistPattern?.length === 1 && config.hoistPattern[0] === '*') {
        config.hoistPattern = []
      }
      return esmNodePath.hooks.updateConfig(config)
    }
  }
}
