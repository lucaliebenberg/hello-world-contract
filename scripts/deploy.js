const hre = require("hardhat");

async function main() {
  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await HelloWorld.deploy("HelloWorld");

  await hello_world.deployed();

  console.log("Contract deployed to address:", hello_world.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
