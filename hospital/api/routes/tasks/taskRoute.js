'use strict';

module.exports = function (app) {
    var task = require('../../controllers/tasks/taskController');

    app.route('/task')
        .get(task.listAllTasks)
        .post(task.createNewTask);

    app.route('/task/:id')
        .get(task.getTaskById)
        .put(task.updateTaskById)
        .delete(task.deleteTaskById);
}