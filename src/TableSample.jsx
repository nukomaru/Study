import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from './DropDownMenuSample';

const TableSample = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>項目名</TableHeaderColumn>
        <TableHeaderColumn>○/×</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>りんご</TableRowColumn>
        <TableRowColumn>
          <DropDownMenu />
        </TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>もも</TableRowColumn>
        <TableRowColumn>
          <DropDownMenu />
        </TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>いちご</TableRowColumn>
        <TableRowColumn>
          <DropDownMenu />
        </TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>ばなな</TableRowColumn>
        <TableRowColumn>
          <DropDownMenu />
        </TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>ぶどう</TableRowColumn>
        <TableRowColumn>
          <DropDownMenu />
        </TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableSample
