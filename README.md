# DEX AMM Project

## Overview

This project implements a simplified **Decentralized Exchange (DEX)** using an **Automated Market Maker (AMM)** model inspired by Uniswap V2. The system allows users to trade tokens without relying on centralized order books.

The exchange uses a **constant product formula** to determine token prices and maintain liquidity.

---

## Features

* Add liquidity to a token pair
* Remove liquidity from the pool
* Swap Token A for Token B and vice‑versa
* Liquidity providers receive LP shares
* Trading fees accumulate for liquidity providers

---

## Architecture

The system consists of the following components:

* **DEX.sol** – Core AMM logic and liquidity management
* **MockERC20.sol** – ERC‑20 tokens used for testing
* **Tests** – Hardhat test suite validating AMM behavior
* **Deployment Script** – Deploys tokens and the DEX
* **Docker Environment** – Reproducible testing environment

Project structure:

```
dex-amm/
├── contracts/
│   ├── DEX.sol
│   ├── MockERC20.sol
├── test/
│   └── DEX.test.js
├── scripts/
│   └── deploy.js
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── hardhat.config.js
├── package.json
└── README.md
```

---

## Mathematical Model

### Constant Product Formula

The exchange follows the AMM equation:

```
x * y = k
```

Where:

* `x` = reserve of Token A
* `y` = reserve of Token B
* `k` = constant product

Swaps adjust reserves while keeping `k` approximately constant.

---

## Fee Mechanism

Each trade charges a **0.3% fee**.

Formula used:

```
amountInWithFee = amountIn * 997
amountOut = (amountInWithFee * reserveOut) / (reserveIn * 1000 + amountInWithFee)
```

The fee remains in the pool and increases LP share value.

---

## Liquidity Provider Tokens

When a user adds liquidity, they receive **LP tokens** representing their proportional share of the pool.

Example:

If the pool contains:

* 100 Token A
* 200 Token B

and a user owns **10% of LP tokens**, they can withdraw:

* 10 Token A
* 20 Token B

plus accumulated trading fees.

---

## Setup Instructions

### Prerequisites

* Node.js (v18 recommended)
* npm
* Docker (optional but recommended)

---

### Installation

Clone the repository:

```
git clone https://github.com/the-sadanand/dex-AMM.git
cd dex-amm
```

Install dependencies:

```
npm install
```

Compile contracts:

```
npx hardhat compile
```

Run tests:

```
npx hardhat test
```

Deploy locally:

```
npx hardhat run scripts/deploy.js --network localhost
```

---

## Running With Docker

Build and start the container:

```
docker compose up --build
```

Run tests inside container:

```
docker exec -it dex-amm-evaluation npx hardhat test
```

---

## Testing

The test suite verifies:

* Liquidity provisioning
* Liquidity removal
* Token swaps
* Fee distribution
* Edge cases
* Event emissions

Example test command:

```
npx hardhat test
```

---

## Security Considerations

The following practices are implemented:

* Input validation for swaps and liquidity
* Reserve checks before trades
* Protection against zero‑value operations
* Consistent reserve updates

Potential improvements for production:

* Reentrancy protection
* Price oracle integration
* Slippage protection

---

## Known Limitations

* Supports only a single token pair
* No frontend interface
* No advanced routing across pools

---

## Future Improvements

* Multi‑pair support
* Factory and Router contracts
* Frontend UI
* On‑chain price oracle
* Liquidity mining incentives

---

## Author

Sadanand Kumar

BTech student building decentralized finance infrastructure for learning and experimentation.
