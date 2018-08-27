module.exports = (cb)=> (...args) => new Promise((resolve, reject)=>cb(...args, (err, ...res)=>{
if (err) return reject(err)

resolve(res.length > 1? res: res[0])
}))