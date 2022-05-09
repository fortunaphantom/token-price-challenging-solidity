const { expect } = require("chai");

describe("Tokenavgprice", function() {
  it('works', async () => {
    const Tokenavgprice = await ethers.getContractFactory("Tokenavgprice");
    const TokenavgpriceV2 = await ethers.getContractFactory("Tokenavgprice2");

    const instance = await upgrades.deployProxy(Tokenavgprice, [42]);
    const upgraded = await upgrades.upgradeProxy(instance.address, TokenavgpriceV2);

    const value = await upgraded.value();
    expect(value.toString()).to.equal('42');
  });
});