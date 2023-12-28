import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function AutoHeightGrid({MyData}) {
    const [nbRows, setNbRows] = React.useState(3);
    const removeRow = () => setNbRows((x) => Math.max(0, x - 1));
    const addRow = () => setNbRows((x) => Math.min(100, x + 1));

    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 6,
    });
    const Dcol= [{field:'status', width: '100px' },{field:'from'},{field:'to'}];
    const TransformData = ()=>{
        const transformedObj = Object.keys(MyData).map((value, index) => {
            if(MyData[value]['status']!== "-"){
                return (
                    {
                        id: index + 1,
                        ...MyData[value]
                    }
                )
                return null;
            };
        });
        Object.keys(transformedObj).forEach(key => {
            if (transformedObj[key] === undefined) {
                delete transformedObj[key];
            }
        });
        const finalObj = transformedObj.filter(item => item !== undefined);
        return finalObj;
    }
    const filteredArr = TransformData(MyData);
    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                {/*<Button size="small" onClick={removeRow}>*/}
                {/*    Remove a row*/}
                {/*</Button>*/}
                {/*<Button size="small" onClick={addRow}>*/}
                {/*    Add a row*/}
                {/*</Button>*/}
            </Stack>
            <DataGrid autoHeight {...MyData} rows={filteredArr.slice(0, nbRows)} columns={Dcol} rowHeight={25}/>
            {/*<DataGrid autoHeight {...data} rows={data.rows.slice(0, nbRows)} columns={data.columns}/>*/}
        </Box>
    );
}
