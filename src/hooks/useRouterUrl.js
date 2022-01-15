import { useEffect } from "react";
import { useRouter } from "next/router";

const useParameter = () => {
  // calling use router hooks
  const router = useRouter();

  // calling use effect
  useEffect(() => {
    console.log(router.parameter && router.parameter);
  }, [router]);

  return null;
};

export default useParameter;
