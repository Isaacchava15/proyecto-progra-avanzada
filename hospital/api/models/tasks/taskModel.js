'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Nombre del paciente'
    },
    apellidos: {
        type: String,
        required: 'Apellidos del paciente'
    },
    correo: {
        type: String,
        required: 'Correo del paciente'
    },
    numero: {
        type: String,
        required: 'Número de telefono del paciente'
    },
    cédula: {
        type: String,
        required: 'Número de cédula del paciente'
    },
    direccion: {
        type: String,
        required: 'Dirección del paciente'
    },
    consulta: {
        type: String,
        required: 'Consulta del paciente.'
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'in progress', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Task', TaskSchema);