import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../actions';
import RankingItem from './rankingItem';


class rankings extends Component {
    constructor(props){
      super(props)
      this.state = {
        redirect: false
      }
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

        console.log(this.props);

        return(
          <div>
            <Card>
            <h1>Rankings</h1>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Division</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.rankings.map( r => {
                      return <StyledTableRow key={r.name}>
                          <StyledTableCell>
                            {r.name}
                          </StyledTableCell>
                        </StyledTableRow>           
                    })}
                </TableBody>
            </Table>
            </Card>
          </div>
        )
    }
}

const Rankings = connect(mapStateToProps, mapDispatchToProps)(rankings);

export default Rankings;