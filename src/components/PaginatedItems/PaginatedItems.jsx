import ReactPaginate from "react-paginate";
import AlbumList from "../AlbumsList/AlbumsList";
import { useState } from "react";
import PaginatedItemsCSS from "./PaginatedItems.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function PaginatedItems({ items, itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems && <AlbumList albums={currentItems} />}
      <ReactPaginate
        activeClassName={`${PaginatedItemsCSS.item} ${PaginatedItemsCSS.active}`}
        breakClassName={`${PaginatedItemsCSS.item} ${PaginatedItemsCSS.break_me}`}
        breakLabel="..."
        containerClassName={`${PaginatedItemsCSS.pagination}`}
        disabledClassName={`${PaginatedItemsCSS.disabled_page}`}
        nextLabel={
          <ArrowForwardIcon className={`${PaginatedItemsCSS.arrow}`} />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <ArrowBackIcon className={`${PaginatedItemsCSS.arrow}`} />
        }
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        nextClassName={`${PaginatedItemsCSS.item} ${PaginatedItemsCSS.next}`}
        pageClassName={`${PaginatedItemsCSS.item} ${PaginatedItemsCSS.pagination_page}`}
        previousClassName={`${PaginatedItemsCSS.item} ${PaginatedItemsCSS.previous}`}
      />
    </>
  );
}
