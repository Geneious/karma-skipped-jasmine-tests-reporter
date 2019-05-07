# Karma plugin to fail if any tests are skipped

Fails a Karma test run if any tests were skipped and it was a single run. E.g. Using `fit()`, `xit()`, `fdescribe()` or `xdescribe()` in Jasmine.

Inspired by [Karma Jasmine issue #225](https://github.com/karma-runner/karma-jasmine/issues/225).

## Installation

```bash
yarn add karma-skipped-tests-reporter
```

Add `'skipped-tests'` to the `reporters` array in `karma.conf.js`:

```js
config.set({
    reporters: config.reporters.concat(['skipped-tests']),
})
```
