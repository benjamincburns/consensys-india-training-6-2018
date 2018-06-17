pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "../contracts/ExampleContract.sol";

contract TestExampleContract {

  function testGetExampleShouldReturnStringExample() public {

    ExampleContract instance = new ExampleContract();

    Assert.equal(instance.getExample(), "Example", "ExampleContract should always return string 'Example'");
  }
}


