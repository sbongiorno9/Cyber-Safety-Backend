const Article = require('../models/article.model')
const Checklists = require('../models/checklist.model')
const LearningPath = require('../models/learningPath.model')

exports.getContent = async(req, res) => {
    const articles = await Article.find()
    const checklists = await Checklists.find()
    const learningPath = await LearningPath.find()

    res.status(210).json({
        data: {
            articles: articles,
            checklists: checklists,
            learningPath: learningPath
        }
    })
}