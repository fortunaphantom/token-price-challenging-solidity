// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");
const contract = require('../export/contract.json');

async function main2() {
  const Tokenavgprice = await ethers.getContractFactory("Tokenavgprice2");
  const tokenavgprice = await upgrades.upgradeProxy(contract.address, Tokenavgprice);
  console.log("upgraded v2");
}

(async function () {
  main2();
})();
