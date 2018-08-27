const promisying = require('./index')

const assert = require('assert')


describe('test to promisying', function () {
    it('should return a promise', async () => {
        const promised = promisying((param, cb)=>{
            assert(param === 'param');
            cb(null, 'response', 'other')
        })

        const res = await promised('param')
        assert.deepEqual(res, ['response', 'other']);
    })

    it('should return a promise', async () => {
        const promised = promisying((param, cb)=>{
            assert(param === 'param');
            cb('error')
        })

        const error = await promised('param').catch(error=>error)
        assert(error==='error');
    })
})