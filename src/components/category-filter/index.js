import Link from "next/link";
import { CategoryFilterList, CategoryFilterItem } from "./style";
import useGetHashUrl from "../../hooks/useGetHashUrl";
import funcReplaceAll from "../../helper/funcReplaceAll";

const CategoryFilter = ({ data }) => {
  // use get hash url hook
  const { pathname, hashUrl, hasHash } = useGetHashUrl();

  return (
    <div className="wrapper flex-wrapper flex-center" data-aos="fade-up">
      <CategoryFilterList>
        <CategoryFilterItem active={!hasHash}>
          <Link href={`${pathname}`}>همه</Link>
        </CategoryFilterItem>
        {data.map(({ name, id }) => (
          <CategoryFilterItem
            active={hashUrl === funcReplaceAll(name, " ", "-")}
            key={id}
          >
            <Link href={`${pathname}#${funcReplaceAll(name, " ", "-")}`}>
              {name}
            </Link>
          </CategoryFilterItem>
        ))}
      </CategoryFilterList>
    </div>
  );
};

export default CategoryFilter;
