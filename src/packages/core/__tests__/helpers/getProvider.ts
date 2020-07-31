import Ganache from "../../src/";
import {FlavoredProviderOptions} from "@ganache/options";
import EthereumProvider from "@ganache/ethereum/src/provider";

const mnemonic = "into trim cross then helmet popular suit hammer cart shrug oval student";
const getProvider = (options: FlavoredProviderOptions = {flavor: "ethereum", mnemonic}) => {
  return Ganache.provider(options) as EthereumProvider;
};

export default getProvider;
