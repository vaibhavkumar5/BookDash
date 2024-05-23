import React, { useEffect, useState } from "react";
import { fetchBooks } from "../services/api";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
} from "@mui/material";
import { CSVLink } from "react-csv";

const BookTable = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("title");
  const [searchQuery, setSearchQuery] = useState("");
  const [submitQuery, setSubmitQuery] = useState("");

  
  

  
  useEffect(() => {
    const loadBooks = async () => {
      if (submitQuery) {
        const data = await fetchBooks(submitQuery);
        console.log("Fetched Books Data:", data); // Log the fetched books data
        setBooks(data.docs);
      }
    };
    loadBooks();
  }, [submitQuery]);




  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitQuery(searchQuery);
  };

  const columns = [
    { id: "title", name: "Book title" },
    { id: "author_name", name: "Author Name" },
    { id: "first_publish_year", name: " first publish year" },
    { id: "ratings_average", name: "average rating" },
  ];
  const headers = [
    { key: "title", label: "Book title" },
    { key: "author_name", label: "Author Name" },
    { key: "first_publish_year", label: " first publish year" },
    { key: "ratings_average", label: "average rating" },
  ];

  const handleChangePage = (event, newpage) => {
    setPage(newpage);
  };
  const handleRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleRequestSort=(event, property)=>{
    const isAscending= (orderBy=== property && order === 'asc')
    setOrderBy(property)
    setOrder(isAscending? "desc" : 'asc')

  }
  const createSortHandler = (property)=>(event) =>{
    handleRequestSort(event,property)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Search Books"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          sx={{
            backgroundColor: "#F18070",
            color: "white",
            margin: "10px",
            "&:hover": { color: "red", backgroundColor: "#F3C6B7" },
          }}
          type="submit"
        >
          Search
        </Button>
        <Button
          sx={{
            backgroundColor: "#F18070",
            color: "white",
            "&:hover": { color: "red", backgroundColor: "#F3C6B7" },
          }}
        >
          <CSVLink data={books} headers={headers} filename={"Books_Data.csv"}>
            Download CSV
          </CSVLink>
        </Button>
      </form>
      <Paper sx={{ width: "100%", marginTop: "20px" }}>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{ backgroundColor: "#F18070", color: "white" }}
                    key={column.id}
                  >
                    <TableSortLabel active={orderBy === columns} direction={orderBy == "title" ? order: 'asc'} onClick={createSortHandler("title")} >
                      {column.name}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {books &&
                books
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((book, i) => {
                    return (
                      <TableRow key={i}>
                        {columns &&
                          columns.map((column, i) => {
                            let value = book[column.id];
                            return <TableCell key={value}>{value}</TableCell>;
                          })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 50, 100]}
          page={page}
          count={books.length}
          rowsPerPage={rowsPerPage}
          component="div"
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleRowsPerPage}
        ></TablePagination>
      </Paper>
    </>
  );
};

export default BookTable;
