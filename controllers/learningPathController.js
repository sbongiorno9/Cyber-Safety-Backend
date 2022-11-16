const LearningPath = require('../models/learningPath.model.js')

exports.getLearningPaths = (req, res) => {
    LearningPath.find()
        .then(learningPaths =>{
            return res.status(200).json(learningPaths)
        })
        .catch(err => {
            res.status(500).json({message: 'Could not GET learning paths: ' + err})
        })
} 

exports.getOneLearningPath = (req, res) => {
    const id = req.params.id

    LearningPath.findById(id)
        .then(learningPath =>{
            return res.status(201).json(learningPath)
        })
        .catch(err => {
            res.status(501).json({message: 'Could not GET learning paths: ' + err})
        })
} 

exports.createLearningPath = (req, res) => {
    const title = req.params.title
    const author = req.params.author
    const content = req.params.content
    const images = req.params.images

    const newLearningPath = LearningPath.create({
            title: title,
            author: author,
            content: content,
            images: images
        })
        
    newLearningPath.save()
        .then( learningPath => {
            return res.status(202).json(learningPath)
        })
        .catch( err => {
            return res.status(502).json({message: 'Could not save learning path: ' + err})
        })
}

exports.updateLearningPath = (req, res) => {
    const id = req.params.id

    try{
        LearningPath.findOneAndUpdate(id, req.params)
        return res.status(203).json({message: 'LearningPath Updated'})
    } catch(err){
        return res.status(503).json({message: 'Could not update learning path' + err})
    }
}

exports.deleteLearningPath = (req, res) => {
    const id = req.params.id

    LearningPath.findByIdAndDelete(id)
    .then(res.status(209).json({message: 'Learning Path Deleted'}))
    .catch(err => {
        return res.status(509).json({message: 'LearningPath could not be deleted: ' + err})
    })
}