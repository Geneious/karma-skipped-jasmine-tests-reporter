# Karma plugin to fail if any tests are skipped

Fails a Karma test run if any tests were skipped. E.g. using `fit()`, `xit()`, `fdescribe()` or `xdescribe()` in Jasmine. 

Inspired by [Karma Jasmine issue #225](https://github.com/karma-runner/karma-jasmine/issues/225).

## Installation

```bash
yarn add karma-skipped-tests-reporter
```

Add something like this to `karma.conf.js`:

```js
config.set({
    reporters: ['skipped-tests'],
})
```
