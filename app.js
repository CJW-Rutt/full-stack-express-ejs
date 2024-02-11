const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')

const posts = [
    {title: 'Title 1', body: 'Body 1', author: 'Corey J. Rutt' },
    {title: 'Title 2', body: 'Body 2', author: 'Corey J. Rutt'  },
    {title: 'Title 3', body: 'Body 3', author: 'Corey J. Rutt'  },
    {title: 'Title 4', body: 'Body 4', author: 'Corey J. Rutt'  },
]
const user = {
    firstName: 'Corey J.',
    lastName: 'Rutt',
}

const author = {
    name: 'Corey J. Rutt',
}

app.get('/', (req, res) => {
    res.render('pages/index', {
        user,
        title: "Home Page"
    })
})

app.get('/articles', (req, res) => {
    res.render('pages/articles', {
        articles: posts,
        title: "Articles"
    })
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})