pragma solidity ^0.4.24;

contract ExampleContract {
  mapping(uint256 => uint256) public numberMapping;

  function getExample() public pure returns (string) {
    return "Example";
  }

  function writeToMapping(uint256 key, uint256 value) public {
    if (key == 42) {
      revert("The key to the universe does not belong here.");
    }
    numberMapping[key] = value;
  }

}
