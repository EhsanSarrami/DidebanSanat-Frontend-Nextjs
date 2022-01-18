import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useGetHashUrl = () => {
  const [param, setParam] = useState("");
  const [pathname, setPathname] = useState("");

  // use location hook
  const { asPath } = useRouter();

  // when component mounts get location
  useEffect(() => {
    setParam(asPath);
    setPathname(
      typeof window !== "undefined" && decodeURI(window.location.pathname)
    );
  }, [asPath]);

  const hashUrl = decodeURI(param.slice(param.indexOf("#") + 1));

  // url has hash
  const hasHash =
    typeof window !== "undefined" && Boolean(window.location.hash);

  return { pathname, hashUrl, hasHash };
};

export default useGetHashUrl;
