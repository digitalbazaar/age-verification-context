# Age Verification Context _(@digitalbazaar/age-verification-context)_

[![Node.js CI](https://github.com/digitalbazaar/age-verification-context/workflows/Node.js%20CI/badge.svg)](https://github.com/digitalbazaar/age-verification-context/actions?query=workflow%3A%22Node.js+CI%22)
[![NPM Version](https://img.shields.io/npm/v/@digitalbazaar/age-verification-context.svg)](https://npm.im/@digitalbazaar/age-verification-context)

> NPM package for the JSON-LD context for OverAge credentials.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

TBD

## Install

Requires Node.js 14+

To install via NPM:

```
npm install @digitalbazaar/age-verification-context
```

## Usage

```js
import ageCtx from '@digitalbazaar/age-verification-context';
// or
const ageCtx = require('@digitalbazaar/age-verification-context');
const {contexts, constants} = ageCtx;

ageCtx.CONTEXT_URL_V1
// 'https://w3id.org/age/v1'

// get context data for a specific context
ageCtx.CONTEXT_V1
// full context object
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports the following properties:
- `CONTEXT_URL_V1` and `CONTEXT_V1` (it's recommended that context repositories only export one context).
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CONTEXT_URL_V1` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps URLs to full context data.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- BSD 3-Clause © Digital Bazaar
- See the [LICENSE](./LICENSE) file for details.

[webpack]: https://webpack.js.org/
