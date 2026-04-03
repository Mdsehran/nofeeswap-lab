// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import {Nofeeswap} from "@core/Nofeeswap.sol";
import {NofeeswapDelegatee} from "@core/NofeeswapDelegatee.sol";

contract DeployProtocol is Script {
    function run() external {
        vm.startBroadcast();

        address owner = msg.sender;

        NofeeswapDelegatee delegate = new NofeeswapDelegatee(owner);
        Nofeeswap nofeeswap = new Nofeeswap(address(delegate), owner);

        vm.stopBroadcast();
    }
}