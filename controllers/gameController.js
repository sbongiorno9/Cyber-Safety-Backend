const Game = require('../models/game.model')

exports.getGames = async(req, res) => {
    Game.find()
    .then(games =>{
        return res.status(200).json(games)
    })
    .catch(err => {
        res.status(500).json({message: 'Could not GET games'})
    })
}

exports.getOneGame = (req, res) => {
    const id = req.params.id

    Game.findById(id)
        .then(game =>{
            return res.status(201).json(game)
        })
        .catch(err => {
            res.status(501).json({message: 'Could not GET game'})
        })
} 

exports.updateGame = (req, res) => {
    const id = req.params.id

    try{
        Game.findOneAndUpdate(id, req.params)
        return res.status(203).json({message: 'Game Updated'})
    } catch(err){
        return res.status(503).json({message: 'Could not update game'})
    }
}

