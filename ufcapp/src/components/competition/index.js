import React, { Component } from "react";
import Pagination from 'react-bootstrap/Pagination'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { mapStateToProps, mapDispatchToProps } from "../../actions";
import { connect } from "react-redux";

class competitions extends Component {
    constructor(props){
      super(props)
      this.state = {
        redirect: false,
        activePage: 1
      };
    }
    
    render() {
          const StyledTableCell = withStyles(theme => ({
            head: {
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white,
            },
            body: {
              fontSize: 14,
            },
          }))(TableCell);

          const StyledTableRow = withStyles(theme => ({
            root: {
              '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.background.default,
              },
            },
          }))(TableRow);

    return(
        <Card>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Competition Name</StyledTableCell>
                    </TableRow>
                </TableHead>
                <div>
                <TableBody>
                    {this.props.competitions.map( (c, i) => {
                        return <StyledTableRow key={i}>
                        <StyledTableCell>
                            {c.name}
                        </StyledTableCell>
                    </StyledTableRow>
                    })}
                </TableBody>
                </div>
            </Table>
        </Card>
        )
    }
}

const Competitions = connect(mapStateToProps, mapDispatchToProps)(competitions);

export default Competitions;
