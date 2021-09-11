import { format } from 'date-fns';

export const REVIEWS_COLUMNS = [
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
        Header: 'Rating',
        accessor: 'rating',
    },
    {
        Header: 'Review',
        accessor: 'review',
    },
    {
        Header: 'Posted At',
        accessor: 'created_at',
        Cell: ({value}) => (value!=null ? format(new Date(value), 'dd/MM/yyyy'): '')
    },    
]