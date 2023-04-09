import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


type AuthContextType = {
    user: AccountData | null;
  };

  interface AccountData {
    id: string;
    lifetimeStakingRewards: string;
    unstaking: string;
    staked: string;
    available: string;
    totalBalance: string
  }

  const AuthContext = createContext<AuthContextType>({
    user: null,
  });
function AuthProviderWrapper(props: any) {
    const [accountData, setAccountData] = useState<AccountData | null>(null);


    async function fetchAccountData(secret: string): Promise<AccountData> {
        const response = await axios.get<AccountData>('https://sideshift.ai/api/v1/account', {
          headers: {
            'x-sideshift-secret': secret,
          },
        });
        return response.data;
      }

      async function fetchData() {
        const secret = "2d880aab08340f43c3803515f19a0ebf";
        const data = await fetchAccountData(secret);
        setAccountData(data);
      }
 

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
    value={{ user: accountData }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };