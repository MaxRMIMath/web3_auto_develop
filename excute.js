var Web3 = require('web3');

var Url="http://127.0.0.1:8180/"

var web3 = new Web3(new Web3.providers.HttpProvider(Url));

var abi=
[{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newgreeting","type":"string"}],"name":"setGreeting","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"msgsender","type":"address"},{"indexed":false,"name":"greet","type":"string"}],"name":"setgreet","type":"event"}]


var address=
"0xbb01da2f6b60593eddf2f20d7f1375d21ffd067c";


var contractInstance=web3.eth.contract(abi).at(address);

web3.eth.defaultAccount=web3.eth.accounts[0];

// functions~~~

var a=contractInstance.greet();
console.log(a);

contractInstance.setGreeting("喵涵涵～星期三喝飲料嗎～",{value:0,gas:100000});


var c;
for(var i=0;i<100;i++)
{
    c=contractInstance.greet();
    console.log(c);
}
