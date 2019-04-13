import { analyze, build } from './'
import { FileBlob } from '@now/build-utils'
import assert from 'assert'

describe('@riotjs/now', function() {
  it('It exports a build function', () => {
    assert.equal(typeof build, 'function')
  })

  it('It exports an analyze function', () => {
    assert.equal(typeof analyze, 'function')
  })

  it('It generates correctly the output files', async function(){
    const entrypoint = 'my-test.riot'
    const files = {
      [entrypoint]: new FileBlob({ data: '<my-test></my-test>'})
    }

    const output = await build({ files, entrypoint })

    assert(/<html>/.test(output['my-test.html'].data))
    assert(/<my-test>/.test(output['my-test.riot'].data))
    assert(/export/.test(output['my-test.js'].data))
  })
})