# @riotjs/now
Riot.js [now](https://zeit.co/docs/v2/deployments/builders/overview/) builder

[![Build Status][travis-image]][travis-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]


## Usage

Configure your `now.json` file:

```json
{
  "builds": [
    { "src": "*.riot", "use": "@riotjs/now" }
  ]
}
```

Now all your riot files will be served compiled as javascript

[travis-image]:https://img.shields.io/travis/riot/now.svg?style=flat-square
[travis-url]:https://travis-ci.org/riot/now

[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE

[npm-version-image]:http://img.shields.io/npm/v/@riotjs/now.svg?style=flat-square
[npm-downloads-image]:http://img.shields.io/npm/dm/@riotjs/now.svg?style=flat-square
[npm-url]:https://npmjs.org/package/@riotjs/now