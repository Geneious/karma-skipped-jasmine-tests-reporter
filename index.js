// @see https://karma-runner.github.io/3.0/dev/plugins.html
// @see https://github.com/karma-runner/karma-jasmine/issues/225

module.exports = {
    'reporter:skipped-tests': ['type', function (config) {
        this.onBrowserComplete = (browser) => {
            if (config.singleRun && browser.lastResult.skipped) {
                const message = '⁉️ Tests skipped! Are you still using fit(), xit(), fdescribe() or xdescribe()?'
                console.error(message)

                // Something about `ng test` (Angular's version of Karma) causes it to ignore failure from
                // `throw new Error()` and exit with successful status code of 0. Crash a bit more severely
                // if the Karma configuration looks like it is for Angular. This causes stand-alone Karma
                // to leave the browser running. So just `throw new Error()` for other scenarios.
                if (config.reporters.includes('@angular-devkit/build-angular--event-reporter')) {
                    process.exit(1)
                } else {
                    throw new Error(message)
                }
            }
        }
    }],
}
