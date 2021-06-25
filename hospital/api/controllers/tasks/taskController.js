'use strict';

var mongoose = require('mongoose'),
Task = mongoose.model('Task');

exports.listAllTasks = function (req, res) {
    Task.find({}, function (err, task) {
        if (task)
            res.json(task);
        res.send(err);
    })
}

exports.createNewTask = (req, res) => {
    var newTask = new Task(req.body);
    newTask.save((err, task) => {
        if(err)
            res.send(err);
        res.json(task);
    });
}

exports.getTaskById = (req, res) => {
    Task.findById(req.params.id, (err, task) => {
        if(err)
            res.send(err);
        res.json(task);
    })
}

exports.updateTaskById = (req, res) => {
    Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, task) => {
        if(err)
            res.send(err);
        res.json(task);
    })
}

exports.deleteTaskById = (req, res) => {
    Task.remove({_id: req.params.id}, (err, task) => {
        if(err)
            res.send(err);
        res.json({status: 200, message: 'Task deleted successfully', data: null});
    })
}
