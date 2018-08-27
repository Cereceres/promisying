# p-ing
module to p-ing a function
# usage

```js
async () => {
    const promised = pIng((param, cb)=>{
        assert(param === 'param');
        cb('error')
    })

    const error = await promised('param').catch(error=>error)
    assert(error==='error');
}
```