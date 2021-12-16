export const simplePagination = `
    import SimplePagination from "components/SimplePagination";

    const [page, setPage] = useState(1);

    const handlePage = (par: String) => {
      par === "next" && setPage(page + 1);
      par === "prev" && page > 1 && setPage(page - 1);
    };

    return(
      <SimplePagination
        currentPage={page}
        pageSize={3}
        handlePrev={() => handlePage("prev")}
        handleNext={() => handlePage("next")}
      />
    )
`;

export const pagination = `
    import Pagination from "components/Pagination";

    const [page, setPage] = useState(1);
    const length = 20;
    const size = 5;
    
    const handlePageChange = (page: number) => {
      setPage(page);
    };
  
    const handlePage = (par: String) => {
      const numberOfPages = Math.ceil(length / size);
  
      par === "next" &&
        numberPage < numberOfPages &&
        setNumberPage(numberPage + 1);
      par === "prev" && numberPage !== 1 && setNumberPage(numberPage - 1);
    };

    return(
      <Pagination
        dataLength={length}
        pageSize={size}
        currentPage={numberPage}
        onPageChange={handlePageChange}
        handlePrev={() => handlePage("prev")}
        handleNext={() => handlePage("next")}
      />
    )
`;
