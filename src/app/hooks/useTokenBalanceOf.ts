import { Asset } from 'types/asset';import { getTokenContractName } from 'utils/blockchain/contract-helpers';import { useCacheCallWithValue } from './useCacheCallWithValue';import { useAccount } from './useAccount';import { useEffect, useState } from 'react';export function useTokenBalanceOf(asset: Asset) {  const account = useAccount();  const [contractName, setContractName] = useState(getTokenContractName(asset));  useEffect(() => {    setContractName(getTokenContractName(asset));  }, [asset]);  return useCacheCallWithValue(contractName, 'balanceOf', '0', account);}