import {useContext} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { UserDataContext } from '../../State'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'time', headerName: 'Time', width: 130 },
  { field: 'score', headerName: 'Score', width: 130,   sortable: false, },
];


export default function DataTable() {
    const {value3} = useContext(UserDataContext)
    const [data] = value3; 

    const rows = [...data];

  return (
    <div style={{ height: 400, width: '25%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}  
