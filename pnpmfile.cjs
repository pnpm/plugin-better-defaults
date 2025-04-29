module.exports = {
  hooks: {
    updateConfig (config) {
      Object.assign(config, {
        enablePrePostScripts: false,
        ignorePatchFailures: false,
        optimisticRepeatInstall: true,
        resolutionMode: 'lowest-direct',
        verifyDepsBeforeRun: 'install',
      })
      if (config.hoistPattern?.length === 1 && config.hoistPattern[0] === '*') {
        config.hoistPattern = []
      }
      return config
    }
  }
}
