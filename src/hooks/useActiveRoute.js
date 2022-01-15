import { useRouter } from "next/router";

const useActiveRoute = () => {
  // use location to get current location in url
  const route = useRouter();

  // handle set current route
  const handleActiveRoute = (routeItem) =>
    route.slice(0, routeItem.length) === routeItem;

  return [route, handleActiveRoute];
};

export default useActiveRoute;
