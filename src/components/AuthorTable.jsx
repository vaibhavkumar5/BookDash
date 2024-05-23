import React, { useEffect, useState } from "react";
import { fetchAuthors } from "../services/api";
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

const AuthorTable = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  const [submitQuery, setSubmitQuery] = useState("");

  useEffect(() => {
    const loadAuthors = async () => {
      if (submitQuery) {
        const data = await fetchAuthors(submitQuery);
        console.log("Fetched author Data:", data); // Log the fetched books data
        setBooks(data.docs);
      }
    };
    loadAuthors();
  }, [submitQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitQuery(searchQuery);
  };

  const columns = [
    { id: "name", name: "Name" },
    { id: "birth_date", name: "Author DOB" },
    { id: "top_work", name: " Top Work" },
    
  ];

  const handleChangePage = (event, newpage) => {
    setPage(newpage);
  };
  const handleRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Search Authors"
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
          Downlaoad CSV
        </Button>
      </form>
      <Paper sx={{ width: "100%", marginTop: "20px" }}>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    style={{ backgroundColor: "#F18070", color: "white" }}
                    key={column.id}
                  >
                    <TableSortLabel active={true} direction="asc">
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

export default AuthorTable;
