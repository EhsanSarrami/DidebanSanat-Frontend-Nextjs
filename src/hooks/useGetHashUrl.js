import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useGetHashUrl = () => {
  const [param, setParam] = useState("");

  // use location hook
  const { asPath, pathname } = useRouter();

  // when component mounts get location
  useEffect(() => {
    setParam(asPath);
  }, [asPath]);

  const hashUrl = decodeURI(param.slice(param.indexOf("#") + 1));

  return { pathname, hashUrl };
};

export default useGetHashUrl;
