const os = require('os');

const currensOS = {
name: os.type(),
release: os.release(),
totalMem: os.totalmem(),
freeMem: os.freemem()
};


module.exports = {currensOS};