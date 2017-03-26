import test from 'ava'

import apply   from '../../source/immut/apply'
import symbols from '../../source/consts/symbols'

import {
  _,
} from '../../source/utils/curry.js'

import { testRefs } from '../helpers'

test('immut#apply: should be curryable', t => {
  t.is(apply(_), apply)
})


test('immut#apply: should error if data type is not an immut', t => {
  t.throws(() => apply({}, [ 'p' ], f => f), TypeError)
})


test('immut#apply: should error if immut does not contain key', t => {
  const m = {
    __data__: {},
  }

  t.throws(() => apply(m, [ 'p' ], f => f), TypeError)
})


test('immut#apply: should apply f to map type', t => {
  const path = [ 'p' ]
  const m1 = {
    __type__: symbols.map,
    __data__: { p: 1 },
  }

  const m2 = apply(m1, path, f => f + 1)

  t.not(testRefs(m1, m2, path))
  t.is(m2.__data__.p, 2)
})


test('immut#apply: should apply f to list type', t => {
  const path = [ 1 ]
  const l1 = {
    __type__: symbols.list,
    __data__: [ 1, 4 ],
  }

  const l2 = apply(l1, path, f => f + 1)

  t.not(testRefs(l1, l2, path))
  t.is(l2.__data__[1], 5)
})


test('immut#apply: should apply f to nested map types', t => {
  const path = [ 'nestedMap', 'p' ]
  const m1 = {
    __type__: symbols.map,
    __data__: {
      nestedMap: {
        __type__: symbols.map,
        __data__: { p: 21 },
      }
    },
  }

  const m2 = apply(m1, path, f => f + 10)

  t.not(testRefs(m1, m2, path))
  t.is(m2.__data__.nestedMap.__data__.p, 31)
})


test('immut#apply: should apply f to nested list types', t => {
  const path = [ 1, 3 ]
  const l1 = {
    __type__: symbols.list,
    __data__: [
      'zero',
      {
        __type__: symbols.list,
        __data__: [ 0, 1, 2, 'three'],
      },
    ],
  }

  const l2 = apply(l1, path, f => f + ' pees in a pod')

  t.not(testRefs(l1, l2, path))
  t.is(l2.__data__[1].__data__[3],  'three pees in a pod')
})


test('immut#apply: should apply f to nested immut types', t => {
  const path = [ 1, 'p' ]
  const m1 = {
    __type__: symbols.list,
    __data__: [
      'zero',
      {
        __type__: symbols.map,
        __data__: { p: -6 },
      },
      'two',
    ],
  }

  const m2 = apply(m1, path, f => f + 7)

  t.not(testRefs(m1, m2, path))
  t.is(m2.__data__[1].__data__.p, 1)
})
