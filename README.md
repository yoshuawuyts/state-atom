# state-atom
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Create an immutable state atom. Forms the basis for hot reloading, infinite
undo / redo (time-travel) and more.

## Installation
```sh
$ npm install state-atom
```

## Usage
```js
const atom = require('state-atom')

const array = atom.array
const value = atom.value

const state = atom({
  foo: array([ value('bin'), value('baz') ]),
  bar: array([ value('beep'), value('boop') ])
})

state((curr) => {
  console.log(curr.foo)
  // => [ 'bin', 'baz' ]
  console.log(curr.bar)
  // => [ 'beep', 'boop' ]
})
```

## API
### state = atom(obj)
Create a new immutable state atom from an object.

### state(cb(curr))
Register a handler function that is called whenever state changes.

### struct = atom.struct
Access [`observ-struct`](https://github.com/Raynos/observ-struct).

### array = atom.array
Access [`observ-array`](https://github.com/Raynos/observ-array).

### value = atom.value
Access [`observ`](https://github.com/Raynos/observ).

## FAQ
### What is a "state atom"?
A state atom holds all the state of your application, generally implemented as
an object that holds several arrays. Think of it as the in-memory database of
your application from where your ui components can query data.

### Why did you write this module?
I've always been annoyed by managing state; when refactoring it's a great
slowdown. By having all state live in a single location you can do interesting
things such as persist application state to local storage, dump full
application state to debug, hot reload code and more!

### How does this module reduce application complexity?
Backend applications have both persistant state (database) and application
state (memory). `state-atom` takes this analogy and applies it to the
frontend. Changes saved to the atom are immutable, returning mutable copies
when read. Only when actively persisting the state back to the atom will
listeners fire and changes propagate throughout the application.

## Thanks
Shout out to [Raynos](https://github.com/raynos) for creating Mercury and its
dependencies of which this package makes heavy use. The original version of
this package was extracted from Mercury.

## See Also
- [barracks](https://github.com/yoshuawuyts/barracks) - action dispatcher for unidirectional data flows
- [wayfarer](https://github.com/yoshuawuyts/wayfarer) - composable trie based router
- [vel](https://github.com/yoshuawuyts/vel) - create and render virtual-dom elements

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/state-atom.svg?style=flat-square
[npm-url]: https://npmjs.org/package/state-atom
[travis-image]: https://img.shields.io/travis/yoshuawuyts/state-atom/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/state-atom
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/state-atom.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/state-atom?branch=master
[downloads-image]: http://img.shields.io/npm/dm/state-atom.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/state-atom
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
