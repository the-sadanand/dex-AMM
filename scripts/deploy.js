const hre = require("hardhat");

async function main() {

  const MockERC20 = await hre.ethers.getContractFactory("MockERC20");

  const tokenA = await MockERC20.deploy("TokenA", "TKA");
  await tokenA.waitForDeployment();

  const tokenB = await MockERC20.deploy("TokenB", "TKB");
  await tokenB.waitForDeployment();

  console.log("TokenA deployed to:", await tokenA.getAddress());
  console.log("TokenB deployed to:", await tokenB.getAddress());

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});