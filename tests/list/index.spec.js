import test from 'ava'

import list from '../../source/list'

import symbols from '../../source/consts/symbols'


test('exports: type is symbols.list', t => {
  t.true(list.type === symbols.list)
})


test('exports: of is included', t => {
  t.true(list.of instanceof Function)
})


test('exports: apply is included', t => {
  t.true(list.apply instanceof Function)
})

test('exports: size is included', t => {
  t.true(list.size instanceof Function)
})


test('exports: get is included', t => {
  t.true(list.get instanceof Function)
})


test('exports: set is included', t => {
  t.true(list.set instanceof Function)
})


test('exports: update is included', t => {
  t.true(list.update instanceof Function)
})


test('exports: push is included', t => {
  t.true(list.push instanceof Function)
})


test('exports: pop is included', t => {
  t.true(list.pop instanceof Function)
})
