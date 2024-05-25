"use strict";
class Client {
    constructor() {
        this.socket = io();
        this.socket.on('connection', () => {
            document.body.innerHTML += 'Id de la socket client' + this.socket.id + '<br/>';
            this.socket.emit('message', 'Hello from client');
        });
        this.socket.on('message', function (message) {
            document.body.innerHTML += 'Message du serveur ' + message + '<br/>';
        });
        this.socket.on('hello', function (message) {
            console.log(message);
            document.body.innerHTML += 'General ' + message + '<br/>';
        });
    }
}
const client = new Client();