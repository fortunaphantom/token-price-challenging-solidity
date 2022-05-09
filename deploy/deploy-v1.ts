// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");
const fs = require('fs-extra');

async function main1() {
  const Tokenavgprice = await ethers.getContractFactory("Tokenavgprice");
  const tokenavgprice = await upgrades.deployProxy(Tokenavgprice, []);
  await tokenavgprice.deployed();
  console.log("deployed to:", tokenavgprice.address);
  
  const contract = {
    address: tokenavgprice.address
  };
  fs.mkdirSync('./export', {recursive: true});
  fs.writeFileSync('./export/contract.json', JSON.stringify(contract, null, 2))
}

(async function () {
  main1();
})();
