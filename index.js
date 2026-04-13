const os = require("os");

const totalMemGB = os.totalmem() / (1024 * 1024 * 1024);
const freeMemGB = os.freemem() / (1024 * 1024 * 1024);
const usageMemGB = totalMemGB - freeMemGB;
const usageprecentGB = ((usageMemGB / totalMemGB ) * 100).toFixed(2);



console.log(`Total Memory GB is ${totalMemGB}`);
console.log(`Free Memory GB is ${freeMemGB}`);
console.log(`Usage Memory GB is ${usageMemGB}`);
console.log(`Usage precent GB is ${usageprecentGB}`);