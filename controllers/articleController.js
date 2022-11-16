const Article = require('../models/article.model.js')

exports.getArticles = (req, res) => {
    Article.find()
        .then(articles =>{
            return res.status(200).json(articles)
        })
        .catch(err => {
            res.status(500).json({message: 'Could not GET articles: ' + err})
        })
} 

exports.getOneArticle = (req, res) => {
    const id = req.params.id

    Article.findById(id)
        .then(article =>{
            return res.status(201).json(article)
        })
        .catch(err => {
            res.status(501).json({message: 'Could not GET articles: ' + err})
        })
} 

exports.createArticle = (req, res) => {
    const title = req.params.title
    const author = req.params.author
    const content = req.params.content
    const images = req.params.images

    const newArticle = Article.create({
            title: title,
            author: author,
            content: content,
            images: images
        })
        
    newArticle.save()
        .then( article => {
            return res.status(202).json(article)
        })
        .catch( err => {
            return res.status(502).json({message: 'Could not save article: ' + err})
        })
}

exports.updateArticle = (req, res) => {
    const id = req.params.id

    try{
        Article.findOneAndUpdate(id, req.params)
        return res.status(203).json({message: 'Article Updated'})
    } catch(err){
        return res.status(503).json({message: 'Could not update article' + err})
    }
}

exports.deleteArticle = (req, res) => {
    const id = req.params.id

    Article.findByIdAndDelete(id)
    .then(res.status(209).json({message: 'Article Deleted'}))
    .catch(err => {
        return res.status(509).json({message: 'Article could not be deleted: ' + err})
    })
}