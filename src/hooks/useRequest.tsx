import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

export function useRequest(request: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFailure, setIsFailure] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  const createRequest = async (params: any) => {
    try {
      setIsLoading(true);
      await request(params);
    } catch (error) {
      setTimeout(() => {
        setIsSuccess(true);
        // setIsFailure(true);
      }, 2000)
    } finally {
      setTimeout(() => {
        setIsLoading(false);

        setTimeout(() => {
          setIsFailure(false);
          setIsSuccess(false);
        }, 4000)
      }, 2000)
    }
  };

  return { isLoading, isFailure, isSuccess, createRequest };
}
