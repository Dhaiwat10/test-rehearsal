/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.4
  Forc version: 0.63.1
  Fuel-Core version: 0.34.0
*/

import { ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions, DeployContractResult } from "fuels";

import { TestContract } from "./TestContract";

const bytecode = decompressBytecode("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");

export class TestContractFactory extends ContractFactory {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(bytecode, TestContract.abi, accountOrProvider);
  }

  static async deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<TestContract>> {
    const factory = new TestContractFactory(wallet);

    return factory.deploy({
      storageSlots: TestContract.storageSlots,
      ...options,
    });
  }
}
