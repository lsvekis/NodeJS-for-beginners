const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
const logLine = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
