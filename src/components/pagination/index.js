import React, { useState } from "react";
import {
  PaginationWrapper,
  PaginationList,
  PaginationItem,
  NavigateBtn,
} from "./style";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Pagination = ({ postPerPage, totalPosts, changePage, currentPage }) => {
  const [minItem, setMinItem] = useState(0);
  const [maxItem, setMaxItem] = useState(5);

  // handle makeing available page number
  const numbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    numbers.push(i);
  }

  // handle navigate next page
  const handleNavigateNext = () => {
    changePage(currentPage + 1);

    // increase max page number
    if (currentPage + 1 > maxItem) {
      setMaxItem(maxItem + 5);
      setMinItem(minItem + 5);
    }
  };

  // handle navigate prev page
  const handleNavigatePrev = () => {
    changePage(currentPage - 1);

    // increase min page number
    if ((currentPage - 1) % 5 === 0) {
      setMaxItem(maxItem - 5);
      setMinItem(minItem - 5);
    }
  };

  return (
    <PaginationWrapper className="wrapper">
      <NavigateBtn
        onClick={handleNavigateNext}
        active={currentPage === numbers.length ? true : false}
      >
        <MdNavigateNext />
      </NavigateBtn>

      <PaginationList>
        {totalPosts > maxItem && (
          <PaginationItem
            onClick={handleNavigatePrev}
            active={currentPage === numbers[0] ? true : false}
          >
            &hellip;
          </PaginationItem>
        )}

        {numbers.map((num) => {
          if (num <= maxItem && num > minItem)
            return (
              <PaginationItem
                key={num}
                active={num === currentPage && "true"}
                onClick={() => changePage(num)}
              >
                {num}
              </PaginationItem>
            );

          return null;
        })}

        {totalPosts > maxItem && (
          <PaginationItem
            onClick={handleNavigateNext}
            active={currentPage === numbers.length ? true : false}
          >
            &hellip;
          </PaginationItem>
        )}
      </PaginationList>

      <NavigateBtn
        onClick={handleNavigatePrev}
        active={currentPage === numbers[0] ? true : false}
      >
        <MdNavigateBefore />
      </NavigateBtn>
    </PaginationWrapper>
  );
};

export default Pagination;
