const ExampleContract = artifacts.require("ExampleContract");

contract("ExampleContract", accounts => {
  describe('getExample', () => {
    it("should always return 'Example'", async () => {
      let instance = await ExampleContract.new();
      let result = await instance.getExample.call();
      assert.equal(result, 'Example');
    })
  })
})
