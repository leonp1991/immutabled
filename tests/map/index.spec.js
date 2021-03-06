import test from 'ava'

import map from '../../source/map'

import symbols from '../../source/consts/symbols'


test('exports: type is symbols.map', t => {
  t.true(map.type === symbols.map)
})


test('exports: of is included', t => {
  t.true(map.of instanceof Function)
})


test('exports: apply is included', t => {
  t.true(map.apply instanceof Function)
})


test('exports: updateIn is included', t => {
  t.true(map.updateIn instanceof Function)
})


test('exports: size is included', t => {
  t.true(map.size instanceof Function)
})


test('exports: data is included', t => {
  t.true(map.data instanceof Function)
})


test('exports: get is included', t => {
  t.true(map.get instanceof Function)
})

test('exports: getIn is included', t => {
  t.true(map.getIn instanceof Function)
})

test('exports: setIn is included', t => {
  t.true(map.setIn instanceof Function)
})


test('exports: set is included', t => {
  t.true(map.set instanceof Function)
})


test('exports: update is included', t => {
  t.true(map.update instanceof Function)
})


test('exports: merge is included', t => {
  t.true(map.merge instanceof Function)
})


test('exports: partition is included', t => {
  t.true(map.partition instanceof Function)
})


test('exports: pluck is included', t => {
  t.true(map.pluck instanceof Function)
})

test('exports: del is included', t => {
  t.true(map.del instanceof Function)
})
