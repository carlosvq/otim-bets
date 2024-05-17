Welcome to **Otim Bets** — Connect your wallet and start playing today!

<img src="https://raw.githubusercontent.com/carlosvq/juniorvillegas.com/main/public/otim-bets.svg" style="max-height: 160px;">

<div style="margin-top: 32px">

## Getting Started

This quick start guide will help you get up and running with Otim Bets.

### Step 1: Install Dependencies

Begin by installing the necessary dependencies using your preferred package manager. While I prefer using pnpm, you can use npm, yarn, or bun as well.

### Step 2: Run the Development Server

Start the development server with one of the following commands, depending on your chosen package manager:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Once started, the app should be running on http://localhost:4321.

Note: The `.env` file is included in this repository intentionally for testing purposes only.

## App structure

To maintain a clear and organized codebase, I have implemented a traditional Atomic Design structure for the project. This hierarchical approach allows us to quickly understand the project repository.

```
src
├── app
├── common
├── components
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   └── templates
├── utils
├── index.css
└── index.tsx
```

- **app**: Contains the app's view, which is a composed component integrating all sections of the product.
- **common**: Stores shared types and constants.
- **components**: Houses all components, organized according to Atomic Design principles.
  - **atoms**: Basic building blocks.
  - **molecules**: Simple groupings of atoms.
  - **organisms**: Complex components made up of molecules.
  - **templates**: High-level layouts and structures.
- **utils**: Contains configurations for third-party libraries and other utility functions.

## Technical decisions

- **Vite**: We chose Vite over Remix or Next.js because we needed a React app without routing or any SSR functionality.
- **Vitest**: It offers the best compatibility with Vite and is my go-to tool for unit testing.
- **Tailwind**: It is the most convenient way to speed up styling in a test environment.

## Funny-Facts 😂

- I tried 11 times to buy ETH with my cards, but my bank declined each attempt haha. The banks in my country are bad guys! haha.

## Video

## TO-DO for the future

- [ ] E2E tests, definitely needed.
- [ ] Add a more optimistic UI, there are set of good opportunities to implement.
- [ ] More robust unit tests for some components.
- [ ] Add advanced animations to make the app more engaging.
- [ ] Add more testnets.

## Struggling

- I tried to query a list of events on-chain, but I wasn't able to do it; I think (not-sure, need more research) that is related with the http transport used by default for Holesky, I will continue researching about it during the weekend to test with Infura or another infrastructure.
- Transaction timestamp: The `watchContractEvent` function does not return the transaction (txn) timestamp. I tried other functions in wagmi and viem, but for practical purposes, I decided to create the timestamp locally when the event logs into the watcher.

## Future

**cryptoreact.dev**<br />
As I continue my journey in the crypto space, I plan to create a dedicated course for front-end engineers who want to transition into crypto development (front-end for crypto).

**Continue learning more about Wagmi hooks.**<br />
Wagmi offers a variety of interesting hooks that I plan to explore further.

**Error handling**<br />
Since the errors returned by the contract can vary and not just be limited to `ContractFunctionExecutionError` (which is a generic term for various potential errors), we can create an error mapping function to help identify specific errors like `TooSoon()` based on keywords in the error message. For practical purposes in this test, I'm assuming that any `ContractFunctionExecutionError` will always correspond to the `TooSoon()` error and will display that message for this purpose.

</div>
