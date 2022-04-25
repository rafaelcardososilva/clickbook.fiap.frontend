import { useState } from 'react';

export function useRequest(request: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFailure, setIsFailure] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  const createRequest = async (params: any | null) => {
    setIsLoading(false);
    try {
      setIsLoading(true);
      const response = await request(params);
      setData(response.data);
      setIsSuccess(true);
    } catch (error) {
      setIsFailure(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isFailure, isSuccess, createRequest };
}
