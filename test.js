const test = require('tape')
const atom = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(atom, 'object')
})

test('should create state from an object', function (t) {
  t.plan(2)
  const state = atom({
    foo: 'bar'
  })
  t.equal(typeof state, 'function')
  t.equal(state.foo, 'bar')
})

test('should create updateable collections', function (t) {
  t.plan(2)
  const state = atom({
    todos: atom.array([todo('foo'), todo('bar')])
  })
  t.equal(state.todos.get(0)(), 'foo')

  state.todos.push(todo('baz'))
  t.equal(state.todos.get(2)(), 'baz')

  function todo (title) {
    return atom.value(title)
  }
})
