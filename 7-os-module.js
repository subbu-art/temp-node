const os = require('os');

//info about current user

const user = os.userInfo();

console.log(user);

//method return system's uptime

console.log(os.uptime());

const current = {
    name : os.type(),
    release : os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}

console.log(current);