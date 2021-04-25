import { useStorage } from "@ionic/react-hooks/storage";
import { useEffect, useState } from "react";
import getTokenFromUri from "util/getTokenFromUri";

const TOKEN_STORAGE = "token";

export function useToken(hash: string) {
  const { get, set } = useStorage();

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (hash) {
      //save token localy and then make api request
      const token = getTokenFromUri(hash);

      setToken(token);
      set(TOKEN_STORAGE, token);
    }
  }, [hash, set]);

  useEffect(() => {
    const loadSaved = async () => {
      const token = await get(TOKEN_STORAGE);
      setToken(token);
    };
    loadSaved();
  }, [get]);

  return {
    token,
  };
}
