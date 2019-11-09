import React, { Component } from "react";
import Card from '@material-ui/core/Card'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class Competitions extends Component {
    constructor(props){
      super(props)
    this.state = {}
    
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

          const compArray = this.props.items.competitions;

          compArray.forEach(element => {
              this.comps = element.name;
          });

    console.dir(this.props);
    return(
        <Card>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Competition Name</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell>
                            {this.props.items.competitions[0].name}
                        </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>
                            {this.props.items.competitions[1].name}
                        </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>
                            {this.props.items.competitions[2].name}
                        </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>
                            {this.props.items.competitions[3].name}
                        </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>
                            {this.props.items.competitions[4].name}
                        </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>
                            {this.props.items.competitions[5].name}
                        </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>
                            {this.props.items.competitions[6].name}
                        </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>
                            {this.props.items.competitions[7].name}
                        </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>
                            {this.props.items.competitions[8].name}
                        </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>
                            {this.props.items.competitions[9].name}
                        </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>
                            {this.props.items.competitions[10].name}
                        </StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </Card>
        )
    }
}