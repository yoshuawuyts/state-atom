# state-atom
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Create an [`immutable`](https://npmjs.com/package/seamless-immutable)
application state atom. Uses cursors and events to manage state.

## Installation
```sh
$ npm install state-atom
```

## Usage
```js
const stateAtom = require('state-atom')

// create global state & local state
const atom = stateAtom()
const animals = atom(node => node.type === 'cat')
var localAnimals = []

animals.on('change', nwAnimals => localAnimals = nwAnimals)

// update global state with new array value
animals([{ type: 'cat', name: 'luna' }].concat(localAnimals))

// get value from global state
animals()
// => [{ type: 'cat', name: 'luna' }]
```

## API
### atom = stateAtom()
Create a new state atom. Generally you should only create 1 atom per
application.

### cursor = atom(filterFunction)
Create a new cursor. Iterates over all items and checks if they fulfill the
query conditions.

### cursor.on(event, cb)
Attach a callback to an event. See [events](#Events) for an overview of
available events.

### cursor(value)
Set a value at the cursor; overrides all existing elements at the cursor.
Alias: `cursor.set`.

### cursor()
Get an immutable copy of the value in the cursor. Alias: `cursor.get`.

## Events
### .on('change', cb(curr, prev))
Listen to changes on the cursor. Emits the current and previous values of the
cursor's value.

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
