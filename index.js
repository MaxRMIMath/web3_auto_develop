const Web3=require('web3');
const solc=require('solc');
const personal=require('web3-eth-personal');

const Uri='http://127.0.0.1:8180/';

var web3=new Web3(new Web3.providers.HttpProvider(Uri));


console.log("connected to "+Uri);
var coinbase=web3.eth.coinbase;
console.log("coinbase is "+coinbase);
var balance=web3.eth.getBalance(coinbase);
console.log("balance is "+web3.fromWei(balance,'ether'));
var account=web3.eth.accounts;
console.log("accounts are "+account);


var source=fs.readFileSync('./contracts/localgreater.sol','utf8')
console.log('compile contract ...');
var compiledContract=solc.compile(source);
console.log('compile complete');
for(var contractName in compiledContract.contracts)
{
    var bytecode=compiledContract.contracts[contractName].bytecode;
    var abi=JSON.parse(compiledContract.contracts[    contractName].interface);
    console.log(contractName +':'+ compiledContract.contracts[contractName].bytecode);
    console.log(contractName +';'+ JSON.parse(compiledContract.contracts[contractName].interface));
    console.log(JSON.parse(compiledContract.contracts[contractName].interface,undefined,2));
}

var gasestimate=web3.eth.estimateGas({data:'0x'+bytecode});
console.log('gas estimate = '+gasestimate);

var mycontract=web3.eth.contract(abi);
console.log("deploying contract ... ");

var mycontractreturn=mycontract.new("Meow Meow~~",
        {
            from: account[0],
            data: '0x'+bytecode,
            gas:gasestimate+50000
        })

console.log("transactionHash = "+mycontractreturn.transactionHash);
setTimeout(function(){console.log("address = "+mycontractreturn.address);console.log("abi = "+JSON.stringify(JSON.parse(compiledContract.contracts[contractName].interface,undefined,2)))},10000);
