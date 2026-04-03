// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../contracts/core/contracts/Nofeeswap.sol";
import "../contracts/core/contracts/NofeeswapDelegatee.sol";

contract DeployProtocol is Script {
    function run() external {
        vm.startBroadcast();

        NofeeswapDelegatee delegate = new NofeeswapDelegatee();
        Nofeeswap nofeeswap = new Nofeeswap(address(delegate));

        vm.stopBroadcast();
    }
}
