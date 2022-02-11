# Preact useContext Bug

Demonstrating a bug with `useContext`.


## Getting Started

(Optional) Use Dev Container

```
npm install
```


## Reproducing Error

The following error occurs when [running these tests](src/preact-bug.test.jsx) with vitest.

 - Run `npm run vitest` to reproduce. Occasionally there is no output, so re-run
 - The error does not occur in jest `npm run jest`
 - The error does not occur in React equivalent code in jest or vitest
 - The error does not occur when using `<ExampleContext.Consumer>` instead of hook

```
node:internal/process/promises:246
          triggerUncaughtException(err, true /* fromPromise */);
          ^
TypeError [Error]: Cannot read properties of null (reading 'context')
    at Proxy.exports.useContext (/app/node_modules/preact/hooks/dist/hooks.js:1:2437)
    at d.ExampleConsumer [as constructor] (/app/app/src/preact-bug.test.jsx:38:41)
    at d.M [as render] (/app/node_modules/preact/dist/preact.js:1:7837)
    at j (file:///app/node_modules/preact/dist/preact.mjs:1:5752)
    at file:///app/node_modules/preact/dist/preact.mjs:1:1494
    at Array.some (<anonymous>)
    at g (file:///app/node_modules/preact/dist/preact.mjs:1:1392)
```
