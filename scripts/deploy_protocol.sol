// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "contracts/Nofeeswap.sol";
import "contracts/NofeeswapDelegatee.sol";
import "contracts/MockERC20.sol";

contract DeployProtocol is Script {

    function run() external {

        vm.startBroadcast();

        address admin = msg.sender;

        Nofeeswap nofeeswap = new Nofeeswap(address(0), admin);
        NofeeswapDelegatee delegate =
            new NofeeswapDelegatee(address(nofeeswap));

        MockERC20 tokenA = new MockERC20("TokenA","TKA");
        MockERC20 tokenB = new MockERC20("TokenB","TKB");

        vm.stopBroadcast();
    }
}
