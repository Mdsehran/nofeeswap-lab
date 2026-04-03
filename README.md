# NoFeeSwap Lab
### Full-Stack Web3 Protocol Deployment • dApp Interface • Mempool Sandwich Bot

This project demonstrates the deployment, integration, and monitoring of the **NoFeeSwap decentralized exchange protocol** in a fully local development environment.

The repository implements three major components:

1. **Protocol Deployment**
2. **Web3 Frontend dApp**
3. **Mempool Monitoring Sandwich Bot**

Together these components simulate the real interaction between **users, smart contracts, and automated off-chain infrastructure** in decentralized trading environments.

---

# 🚀 Project Overview

The objective of this project is to reproduce the core workflow of a decentralized exchange ecosystem:

```
User Interface
      │
      ▼
Web3 dApp (React / Browser Interface)
      │
      ▼
NoFeeSwap Smart Contracts
      │
      ▼
Local Ethereum Blockchain (Anvil)
      │
      ▼
Mempool Monitoring Bot
```

This architecture mirrors how modern DeFi protocols operate where **off-chain automation observes and reacts to on-chain transactions**.

---

# ✨ Features

## 1. Protocol Deployment

The NoFeeSwap protocol contracts are compiled and deployed using **Foundry**.

Deployment includes:

- Core NoFeeSwap contracts
- Operator interaction contracts
- Deployment scripts for reproducible local setup

Capabilities demonstrated:

- smart contract compilation
- contract deployment automation
- ABI interaction
- transaction lifecycle management

---

## 2. Local Blockchain Environment

A local Ethereum network is launched using **Foundry Anvil**.

Benefits:

- deterministic transaction ordering
- funded development accounts
- instant block production
- controlled development environment

This environment allows the protocol, frontend, and monitoring bot to interact in a fully isolated test network.

---

## 3. Mock ERC-20 Tokens

Two ERC-20 tokens are deployed to simulate trading activity.

Example tokens:

- **TokenA**
- **TokenB**

Tokens are minted to a local test wallet and used to:

- initialize liquidity pools
- perform swaps
- test arbitrage scenarios

---

## 4. Web3 Frontend dApp

A browser-based Web3 interface allows users to interact with the deployed protocol.

Capabilities include:

### Wallet Integration

- wallet connection connection
- Local network interaction
- transaction signing through wallet

Transaction states are handled with UI feedback:

- pending
- confirmed
- reverted

---

### Liquidity Pool Initialization

Users can create a new liquidity pool by specifying:

- token pair
- fee tier
- initial price

This initializes the NoFeeSwap trading pair.

---

### Liquidity Management

Users can manage liquidity positions.

Features:

- add liquidity (Mint)
- remove liquidity (Burn)
- view current position

---

### Token Swap Interface

A swap UI allows users to trade tokens between pools.

Features include:

- token selection
- swap amount input
- slippage tolerance control
- estimated output preview
- price impact estimation

All transactions are submitted through wallet connection and executed on the local blockchain.

---

# 🤖 Mempool Monitoring Bot

A Node.js bot runs in parallel to the frontend and monitors blockchain activity.

Responsibilities:

- monitor pending transactions
- detect swap transactions
- decode calldata parameters
- identify profitable MEV opportunities
- simulate sandwich attack strategies

---

## Bot Workflow

When a swap transaction is detected:

```
1. Front-Run Transaction
2. Victim Swap Transaction
3. Back-Run Transaction
```

Transaction ordering is achieved through:

- gas priority adjustment
- nonce sequencing

This demonstrates how **MEV strategies interact with decentralized exchanges**.

---

# 🏗 System Architecture

The system consists of four main components.

---

## 1. Local Blockchain

Anvil provides the execution environment for all transactions.

Responsibilities:

- transaction processing
- contract execution
- mempool management

---

## 2. Protocol Smart Contracts

The NoFeeSwap contracts implement the trading logic used by the application.

Contracts include:

- core protocol contracts
- operator interaction contracts

These contracts govern:

- pool initialization
- liquidity positions
- swaps

---

## 3. Web3 Frontend Interface

The frontend provides user interaction with the protocol.

Responsibilities:

- wallet connection
- liquidity pool management
- swap execution

All interactions are signed through wallet connection.

---

## 4. Mempool Monitoring Bot

The monitoring bot observes pending transactions before they are mined.

Core logic:

1. subscribe to pending transactions
2. filter swap interactions
3. decode calldata
4. simulate profitability
5. construct front-run and back-run transactions

---

# 🔄 System Interaction Flow

```
User executes swap
        │
        ▼
Frontend submits transaction
        │
        ▼
Protocol processes swap
        │
        ▼
Transaction enters mempool
        │
        ▼
Monitoring bot detects transaction
        │
        ▼
Bot simulates sandwich strategy
```

---

# 📂 Project Structure

```
nofeeswap-lab
│
├── contracts
│   ├── core
│   └── operator
│
├── bot
│   └── bot.js
│
├── frontend
│   ├── index.html
│   ├── app.js
│   └── style.css
│
├── scripts
│   └── deploy_protocol.sol
│
├── images
│
└── README.md
```

---

# ⚙️ Prerequisites

Required software:

```
Node.js >= 18
Foundry
Git
wallet connection
```

Install Foundry:

```
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

---

# 🛠 Setup Instructions

## 1. Start Local Blockchain

```
anvil --code-size-limit 100000
```
<img width="500" height="500" alt="Screenshot 2026-04-03 142051" src="https://github.com/user-attachments/assets/16ef2bc8-109b-4274-920a-3733dc8597d9" />


---

## 2. Deploy Protocol Contracts

```
forge script scripts/deploy_protocol.sol:DeployProtocol \
--rpc-url http://127.0.0.1:8545 \
--private-key <PRIVATE_KEY> \
--broadcast \
--via-ir
```
<img width="500" height="500" alt="Screenshot 2026-04-03 142115" src="https://github.com/user-attachments/assets/78dca82a-6ac7-4d51-8027-5dd6c5cad4eb" />

---

## 3. Start Monitoring Bot

```
cd bot
node bot.js
```
<img width="500" height="500" alt="Screenshot 2026-04-03 142002" src="https://github.com/user-attachments/assets/d35ec972-374a-478c-8c6c-baee08e9a86e" />

The bot begins monitoring pending transactions.

---

## 4. Launch Frontend

Open:

```
frontend/index.html
```
<img width="500" height="500" alt="Screenshot 2026-04-03 142149" src="https://github.com/user-attachments/assets/902d3a8f-2b6c-41f7-96a4-565718e012d2" />

<img width="500" height="500" alt="Screenshot 2026-04-03 142201" src="https://github.com/user-attachments/assets/66a04253-7656-43f1-8ef3-d97b26af1853" />

---

## 5. Execute a Swap

Steps:

1. connect wallet connection
2. select tokens
3. execute swap
4. confirm transaction

The monitoring bot detects the swap and simulates a sandwich attack.

<img width="500" height="500" alt="Screenshot 2026-04-03 142220" src="https://github.com/user-attachments/assets/f3ba0056-3f7b-478b-9d65-2aaa7fcbb57f" />
<img width="500" height="500" alt="Screenshot 2026-04-03 142231" src="https://github.com/user-attachments/assets/66c4d400-ca92-4d96-91ae-32bc19318813" />
<img width="500" height="500" alt="Screenshot 2026-04-03 142002" src="https://github.com/user-attachments/assets/3bb1778b-58c3-4169-8f1d-8139a0257c1a" />

---

# 📊 Assignment Requirement Coverage

| Requirement | Implementation |
|-------------|---------------|
| Local blockchain | Foundry Anvil |
| Protocol deployment | Foundry deployment scripts |
| Operator contracts | Included |
| ERC-20 tokens | Mock tokens deployed |
| Wallet integration | wallet connection |
| Pool initialization | UI interface |
| Liquidity management | Mint / Burn |
| Swap interface | Token swap UI |
| Mempool monitoring | Node.js bot |
| Sandwich attack simulation | Automated bot logic |

---

# ⚠ Known Limitations

The following areas could be expanded with additional time:

- graphical liquidity kernel visualization
- more advanced MEV profitability modeling
- full React implementation for the frontend
- production-grade UI/UX improvements

---

# 🔍 Transparency Statement

This implementation focuses on the core capabilities requested in the assignment:

- protocol deployment
- Web3 interaction
- transaction monitoring
- automated MEV simulation

All major architectural components are implemented and demonstrated in a local development environment.

---

# 🛠 Technologies Used

### Smart Contracts
- Solidity
- Foundry
- Anvil

### Backend Infrastructure
- Node.js
- Ethers.js

### Frontend
- HTML
- JavaScript
- wallet connection

---
# 🎬 Video Walkthrough

A full walkthrough of the project can be viewed here:

▶ [https://your-video-link.com](https://drive.google.com/drive/folders/1xOxqhRM3D1xoZiEGslJalBgsabsCn1vv?usp=drive_link)

The video demonstrates:

1. Launching the local blockchain
2. Deploying NoFeeSwap contracts
3. Starting the monitoring bot
4. Launching the frontend
5. Executing a swap
6. Bot detecting and simulating sandwich strategy
---
# 👤 Author

Md Sehran
