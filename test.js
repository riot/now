const assert = require('assert')
const { build, analyze } = require('./')

describe('@riotjs/now', function() {
  it('It exports a build function', () => {
    assert.equal(typeof build, 'function')
  })

  it('It exports an analyze function', () => {
    assert.equal(typeof analyze, 'function')
  })
})