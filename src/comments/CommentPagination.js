import React from 'react';
import ReactPaginate from 'react-paginate';

const CommentPagination =  ({itemsPerPage,setItemOffset,data}) => {
    const pageCount = Math.ceil(data.length / itemsPerPage);
    
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
      };
    return (

                <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName='page-num'
        previousClassName='page-num'
        NextClassName='page-num'
        activeLinkClassName='active'
      />
   
    );
}

export default CommentPagination;
