'use strict'

const t = (module.exports = require('../tester').createServiceTester())

t.create('First request')
  .get('.json')
  .expectJSON({ name: 'flip', value: 'on' })

t.create('Second request')
  .get('.json')
  .expectJSON({ name: 'flip', value: 'off' })
