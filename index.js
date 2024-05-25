require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const gitHub_data={
  "login": "arijit3111w",
  "id": 168861779,
  "node_id": "U_kgDOChCgUw",
  "avatar_url": "https://avatars.githubusercontent.com/u/168861779?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/arijit3111w",
  "html_url": "https://github.com/arijit3111w",
  "followers_url": "https://api.github.com/users/arijit3111w/followers",
  "following_url": "https://api.github.com/users/arijit3111w/following{/other_user}",
  "gists_url": "https://api.github.com/users/arijit3111w/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/arijit3111w/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/arijit3111w/subscriptions",
  "organizations_url": "https://api.github.com/users/arijit3111w/orgs",
  "repos_url": "https://api.github.com/users/arijit3111w/repos",
  "events_url": "https://api.github.com/users/arijit3111w/events{/privacy}",
  "received_events_url": "https://api.github.com/users/arijit3111w/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Arijit Ghosh",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Making a difference",
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-05-03T18:41:03Z",
  "updated_at": "2024-05-25T09:31:14Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Arijit')
})
app.get('/login' , (req,res)=>{
  res.send('<h1>login page</h1>')
})
app.get('/youtube' , (req,res)=>{
  res.send('<h1>youtube page</h1>')
})
app.get('/github',(req,res)=>{
  res.json(gitHub_data)
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 