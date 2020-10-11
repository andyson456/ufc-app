import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../actions';


class rankings extends Component {
    constructor(props){
      super(props)
      this.state = {
        // items: {rankings: []},
        // isLoaded: false,
        redirect: false
      }
    }

    // componentDidMount() {
    //   fetch(`http://localhost:3333/api/rankings/`)
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data);
    //       this.setState({
    //         items: data,
    //         isLoaded: true
    //       })
    //     })
    // }
    
      render() {
        const useStyles = makeStyles(theme => ({
          root: {
            width: '100%',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
          },
          table: {
            minWidth: 700,
          },
        }));

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
                        <StyledTableCell align="right">Competitor</StyledTableCell>
                        <StyledTableCell align="right">Rank</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.rankings.map( r => {
                      return <StyledTableRow key={r.name}><h3>{r.name}</h3></StyledTableRow>
                      
                    })}
                </TableBody>
            </Table>
            </Card>
          </div>
          // <React.Fragment>
          //   <h1>JEK PREEEEEASE</h1>
          //   <h2>{this.props.rankings.map( r => {
          //           return <StyledTableRow key={r.name}><h3>{r.name}</h3></StyledTableRow>
                      
          //           })}</h2>
          // </React.Fragment>
        )
    }
}

const Rankings = connect(mapStateToProps, mapDispatchToProps)(rankings);

export default Rankings;