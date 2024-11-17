// controllers/rankingController.js

const User = require('../models/user');

exports.getGlobalRanking = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'name', 'level', 'points'],
            order: [['points', 'DESC']],
            limit: 100, // Exemplo: top 100 usuários
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter ranking', error });
    }
};
