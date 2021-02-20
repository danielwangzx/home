'use strict'
const Koa = require('koa')
const Router = require('koa-router')
const fetch = require('node-fetch')
const LRU = require('lru-cache')
const assert  = require('assert')

const serverRouter = new Router()

const APPID = process.env.APPID
// assert(APPID,"APPID must be set before USE")

const flickerURL='https://www.flickr.com/services/feeds/photos_public.gne'
const maxAge = process.env.port ? 60000 * 60 : 5000;
// const cache = new Map();
const cache = new LRU({
    maxAge,
    max: 100,
})

serverRouter.get('/api/pictures/:tag', async ctx=>{
   const {tag} = ctx.params;
   if (cache.peek(tag)){
       ctx.body = cache.get(tag);
       console.log(`fetch picture feed for ${tag} from local cache`)
       return
   }
   const requestURL = `${flickerURL}?tags=${tag}&format=json&nojsoncallback=1`
   const res = await fetch(requestURL)
   console.log(res)
   console.log(`fetch flicker img feed for ${tag} from remote server!`)
   if (res.ok) {
    //    const imgContent = await res.json()
    //    cache.set(tag,imgContent)
    //    ctx.body = imgContent
    const data = await res.json();
    console.log(data.items)
    ctx.body = {data:data.items}
   } else {
       if (res.status === 404){
           ctx.body = {
               message: `${tag} not found`
           }
           ctx.status = 404
       }
   }
   console.log(res)  
})

const app = new Koa()
//hello
app.use(serverRouter.routes())
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`App listens on PORT: ${PORT}`)
})

