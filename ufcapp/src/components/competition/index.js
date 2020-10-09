import React, { Component } from "react";
import Card from '@material-ui/core/Card'
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
        redirect: false
      };
    }
    
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
          
          function createData(name, calories, fat, carbs, protein) {
            return { name, calories, fat, carbs, protein };
          }

          const rows = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
          ];

          // const compArray = this.props.competitions;

          // compArray.forEach(element => {
          //     this.comps = element.name;
          // });

    console.dir(this.props);
    return(
        // <Card>
        //     <Table aria-label="customized table">
        //         <TableHead>
        //             <TableRow>
        //                 <StyledTableCell>Competition Name</StyledTableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {this.props.competitions.map( c => {
        //                 return <StyledTableRow key={c.name}>
        //                 <StyledTableCell>
        //                     {c.name}
        //                 </StyledTableCell>
        //             </StyledTableRow>
        //             })}
        //         </TableBody>
        //     </Table>
        // </Card>
    //   <React.Fragment>
    <h1>Jake Help</h1>
    // <h2>{this.props.competitions.map( r => {
    //   return <StyledTableRow key={r.name}><h3>{r.name}</h3></StyledTableRow>
      
    // })}</h2>
    // </React.Fragment>

          // this.props.competitions.map( c => {
          //   return <h4 key={c.name}></h4>;
          // })
          
        )
    }
}

const Competitions = connect(mapStateToProps, mapDispatchToProps)(competitions);

export default Competitions;
