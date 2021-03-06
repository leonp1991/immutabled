import test from 'ava'

import pop from '../../source/list/pop'

import {
  _,
} from '../../source/utils/curry.js'

import * as A from '../assert'


test('list#pop: should be curryable', t => {
  t.is(pop(_), pop)
})


test('list#pop: should pop new value', t => {
  const k = 3
  const v = 'd'

  const l1 = {
    __data__: [ 'a', 'b', 'c', 'd' ],
    __size__: 4,
  }

  const l2 = pop(l1)

  t.true(A.testRefs(l1, l2, [k]))
  t.is(l1.__data__[k], v)
  t.is(l2.__data__[k], undefined)
  t.is(l2.__size__, l1.__size__ - 1)
  t.deepEqual(l2.__data__, [ 'a', 'b', 'c' ])
})
