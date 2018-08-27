# p-fying
module to p-fying a function
# usage

```js
async () => {
    const promised = pFying((param, cb)=>{
        assert(param === 'param');
        cb('error')
    })

    const error = await promised('param').catch(error=>error)
    assert(error==='error');
}
```