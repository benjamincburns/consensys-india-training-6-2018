const ExampleContract = artifacts.require("ExampleContract.sol");

module.exports = function(deployer) {
  deployer.deploy(ExampleContract, /* constructor args, if any, go here */);
}

