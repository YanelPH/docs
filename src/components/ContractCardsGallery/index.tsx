import React from 'react';
import CardWithTwoLinks from '../CardWithTwoLinks';

const Contracts_AccountsInteraction = [
  {
    name: '👤 LSP0 ERC725 Account',
    url: './overview/UniversalProfile',
    urlABI: './contracts/LSP0ERC725Account',
    description:
      'A smart contract based account that can be used to represent an identity on-chain.',
  },
  {
    name: '📢 LSP1 Universal Receiver',
    url: './overview/LSP1Delegate',
    urlABI: './contracts/LSP6KeyManager',
    description:
      'Allows to react on transfers and informations received (token transfers, notifications, etc...)',
  },
  {
    name: '🌐 LSP3 Profile Metadata',
    url: './overview/UniversalProfile',
    urlABI: '',
    description:
      'Add information to an account or a vault, such as a profile/cover image, external links, attributes, etc...',
  },
  {
    name: '🏦 LSP9 Vault',
    url: '',
    urlABI: './contracts/LSP9Vault',
    description:
      'A digital vault that can hold and transfer any assets, for storing funds separate from your main account.',
  },
  {
    name: '🧩 LSP17 Contract Extension',
    url: '',
    urlABI: './contracts/LSP17ContractExtension/LSP17Extendable',
    description:
      'Uses this to add more functionality to your contract, so that it can be flexible and extended overtime.',
  },
  {
    name: '🔄 LSP20 Call Verification',
    url: '',
    urlABI: './contracts/LSP20CallVerification',
    description:
      'Module to make interacting with a smart contract easier, without having to resolve through its owner first.',
  },
  {
    name: '⛽ LSP25 Execute Relay Call',
    url: './overview/ExecuteRelayCall',
    urlABI: './contracts/LSP25ExecuteRelayCall/LSP25MultiChannelNonce',
    description:
      'Add Meta Transactions on your contract to enable gas-less transactions and more easily onboard new users.',
  },
];

const Contracts_DigitalAssets = [
  {
    name: '🔍 LSP4 Digital Asset Metadata',
    url: './overview/DigitalAssets/#lsp4-digital-asset-metadata',
    urlABI: './contracts/LSP6KeyManager',
    description:
      'Enables to add metadata to any digital asset contract (token or NFT).',
  },
  {
    name: '🪙 LSP7 Digital Asset',
    url: './overview/DigitalAssets/#lsp7-digital-asset',
    urlABI: './contracts/LSP7DigitalAsset',
    description:
      'Creates your own fungible token with the possibility to make it divisible or not.',
  },
  {
    name: '🎨 LSP8 Identifiable Digital Asset',
    url: './overview/DigitalAssets/#lsp8-identifiable-digital-asset',
    urlABI: './contracts/LSP8IdentifiableDigitalAsset',
    description:
      'Creates a non-fungible token where each NFT can be represented differently (numbers, serial numbers, an ERC725Y contract per NFT...).',
  },
];

const Contracts_OwnershipAccessControl = [
  {
    name: '🔐 LSP6 Key Manager',
    url: './overview/KeyManager',
    urlABI: './contracts/LSP6KeyManager',
    description:
      'Allows multi-control over the account using different permissions.',
  },
  {
    name: '🌱 LSP11 Basic Social Recovery',
    url: '',
    urlABI: './contracts/LSP11BasicSocialRecovery/',
    description:
      'Recover access to your Blockchain based account if you are locked using a social recovery mechanism.',
  },
  {
    name: '2️⃣ LSP14 Ownable 2 Steps',
    url: '',
    urlABI: './contracts/LSP14Ownable2Step/',
    description:
      'A module to allow secure owner management of a smart contract using a 2-steps process for transferring and renouncing ownership.',
  },
];

export const ContractCardsGallery = () => {
  return (
    <>
      <div className="row">
        <div className="col col--6 margin-bottom--lg">
          <h2>Ownership & Access Control</h2>
          {Contracts_OwnershipAccessControl.map((contract) => (
            <CardWithTwoLinks key={contract.name} {...contract} />
          ))}
        </div>
        <div className="col col--6 margin-bottom--lg">
          <h2>Digital Assets</h2>
          {Contracts_DigitalAssets.map((contract) => (
            <CardWithTwoLinks key={contract.name} {...contract} />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col col--12 margin-bottom--lg">
          <h2>Accounts & Interactions</h2>
        </div>
        {Contracts_AccountsInteraction.map((contract) => (
          <div className="col col--6 margin-bottom--lg">
            <CardWithTwoLinks key={contract.name} {...contract} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ContractCardsGallery;
