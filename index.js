const os = require("os");

// system 
console.log("System");
console.log(`os ${os.type()}`); 
console.log(`os ${os.version()}`); 
console.log(`os Architecture ${os.arch()}`);
console.log(`os Hostname ${os.hostname()}`);

console.log('//////////////////////////////////////////////////////');

// memory 
console.log("Memory");
const totalMemGB = os.totalmem() / (1024 * 1024 * 1024);
const freeMemGB = os.freemem() / (1024 * 1024 * 1024);
const usageMemGB = totalMemGB - freeMemGB;
const usageprecentGB = ((usageMemGB / totalMemGB ) * 100).toFixed(2);

console.log(`Total Memory GB is ${totalMemGB}`);
console.log(`Free Memory GB is ${freeMemGB}`);
console.log(`Usage Memory GB is ${usageMemGB}`);
console.log(`Usage precent GB is ${usageprecentGB}`);

console.log('//////////////////////////////////////////////////////');

// user
console.log("User");
console.log(` Username: ${os.userInfo().username}`);
console.log(` Home director ${os.homedir()}`);

console.log('//////////////////////////////////////////////////////');

// CPU
console.log("CPU information");
console.log(`number of cors ${os.cpus().length}`);
console.log(`up time or time of running in seconds ${os.uptime()}`);
