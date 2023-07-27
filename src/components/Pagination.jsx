import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      <Link 
        className='paginationBtn'
        to={`/${currentPage <= 1 ? 1 : currentPage - 1}`}
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1)
          }
        }}
      >Назад</Link>
      <div className='paginationNumbers'>
        {pageNumbers.map(pageNumber => (
          <Link
            key={pageNumber}
            to={`/${pageNumber}`}
            onClick={() => onPageChange(pageNumber)}
            className={pageNumber === currentPage ? 'activePage' : ''}
          >
            {pageNumber}
          </Link>
        ))}
      </div>
      <Link 
        className='paginationBtn'
        to={`/${currentPage === totalPages ? totalPages : currentPage + 1}`}
        onClick={() => {
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1)
          }
        }}
      >Далее</Link>
    </div>
  );
};
export default Pagination;