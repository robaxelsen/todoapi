var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {
        //seed database with some initial objectsi
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy t-shirt',
                isDone: false,
                isFavorite: false
            },
            {
                username: 'test',
                todo: 'Pick up flowers',
                isDone: false,
                isFavorite: false
            },
            {
                username: 'test',
                todo: 'Write email to Bob',
                isDone: false,
                isFavorite: false
            }
        ];
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    })
};
