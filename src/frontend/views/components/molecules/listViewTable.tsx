import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Link from "@material-ui/core/Link";

export type Column = {
  id: string;
  name: string;
};

export type Row = {
  id: string;
  data: object;
};

export type Props = {
  columns: Column[];
  rows: any;
  linkKey?: string;
  handleAction: (id: string | number) => void;
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const listViewTable: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {props.columns.map((column: Column) => {
                return (
                  <TableCell key={column.id} align="left">
                    {column.name}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: Row) => {
                return (
                  <TableRow role="checkbox" tabIndex={-1} key={row.id}>
                    {props.columns.map((column: Column) => {
                      const value: string | number = row.id;
                      if (props.linkKey && column.name == props.linkKey) {
                        return (
                          <TableCell key={column.id} align="left">
                            <Link
                              onClick={() => {
                                props.handleAction(value);
                              }}
                            >
                              {value}
                            </Link>
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell key={column.id} align="left">
                            {value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default listViewTable;
