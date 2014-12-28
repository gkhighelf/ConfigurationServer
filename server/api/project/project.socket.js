/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Project = require('./project.model');

exports.register = function(socket, socketio) {
  Project.schema.post('save', function (doc) {
    onSave(socket, socketio, doc);
  });
  Project.schema.post('remove', function (doc) {
    onRemove(socket, socketio, doc);
  });
}

function onSave(socket, socketio, doc, cb) {
    socketio.to(socket.id).emit('project:save', doc);
}

function onRemove(socket, socketio, doc, cb) {
    socketio.to(socket.id).emit('project:remove', doc);
}