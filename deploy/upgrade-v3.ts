// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");
const contract = require('../export/contract.json');

async function main3() {
  const Tokenavgprice = await ethers.getContractFactory("Tokenavgprice3");
  const tokenavgprice = await upgrades.upgradeProxy(contract.address, Tokenavgprice);
  console.log("upgraded v3");
}

(async function () {
  main3();
})();
