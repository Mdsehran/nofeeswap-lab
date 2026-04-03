const { ethers } = require("ethers");

const RPC = "http://127.0.0.1:8545";

const provider = new ethers.JsonRpcProvider(RPC);

const SWAP_SELECTOR = "0xa9059cbb";

async function main() {

    console.log("Sandwich bot started...");

    provider.on("block", async (blockNumber) => {

        console.log("New block:", blockNumber);

        const block = await provider.getBlock(blockNumber);

        if (!block) return;

        for (const txHash of block.transactions) {

            const tx = await provider.getTransaction(txHash);

            if (!tx || !tx.data) continue;

            if (tx.data.startsWith(SWAP_SELECTOR)) {

                console.log("\nSwap detected!");

                console.log("tx:", txHash);
                console.log("from:", tx.from);
                console.log("to:", tx.to);

                const amountHex = "0x" + tx.data.slice(74);
                const amount = ethers.getBigInt(amountHex);

                console.log("amount:", amount.toString());

                if (amount > 500n) {

                    console.log("⚡ Profitable opportunity detected!");

                    console.log("Strategy:");
                    console.log("Front-run → buy before victim");
                    console.log("Victim swap executes");
                    console.log("Back-run → sell after price impact");

                }

            }

        }

    });

}

main();
