import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import CircularProgress from '@mui/material/CircularProgress';

export default function AutoHeightGrid({MyData,object}) {
    const [nbRows, setNbRows] = React.useState(3);
    const removeRow = () => setNbRows((x) => Math.max(0, x - 1));
    const addRow = () => setNbRows((x) => Math.min(100, x + 1));

    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 6,
    });
    const Dcol = {
        "door":[{field:'status', width: 'auto !important' },{field:'from', width: 'auto !important' },{field:'to', width: 'auto !important' }],
        "cooling":[{field:'Triggered', width: 'auto !important' },{field:'Time', width: 'auto !important' }]
    }
    // const Dcol= [{field:'status', width: 'auto !important' },{field:'from', width: 'auto !important' },{field:'to', width: 'auto !important' }];
    const TransformData = ()=>{
        const transformedObj =Object.keys(MyData).map((value, index) => {
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
    const filteredArr =MyData && TransformData(MyData);
    console.log(filteredArr);
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
            {/*<DataGrid autoHeight {...MyData} rows={filteredArr.slice(0, nbRows)} columns={Dcol} rowHeight={25} initialState={{*/}
            {/*    ...MyData,*/}
            {/*    pagination: { paginationModel: { pageSize: 5 } },*/}
            {/*}}*/}
            {/*          pageSizeOptions={[5, 10, 25]}/>*/}
            {MyData ? <DataGrid
                rows={MyData && filteredArr}
                columns={Dcol[object]}
                initialState={{
                    pagination: {paginationModel: {pageSize: 5}},
                }}
                pageSizeOptions={[5, 10, 25]}
            /> :
                <Box justifyContent={'center !important'} alignItems={'center !important'} display={'flex !important'} marginTop={'auto !important'} marginBottom={'auto !important'}>
                    <CircularProgress />
                </Box>
            }
        </Box>
    );
}
