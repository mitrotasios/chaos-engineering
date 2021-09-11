import { format } from 'date-fns';

export const COMP_COLUMNS = [
    {
        Header: 'Company',
        accessor: 'company',
    },
    {
        Header: 'Location',
        accessor: 'location',
    },
    {
        Header: 'Job Title',
        accessor: 'job_title',
    },
    {
        Header: 'Years of Experience',
        accessor: 'years_of_experience',
    },
    {
        Header: 'Total Compensation',
        accessor: 'total_compensation',
        Cell: ({value}) => (value!=null ? "USD "+numberWithCommas(String(Number(value).toFixed(2))): '')
    },
    {
        Header: 'Posted At',
        accessor: 'created_at',
        Cell: ({value}) => (value!=null ? format(new Date(value), 'dd/MM/yyyy'): '')
    },    
]

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}