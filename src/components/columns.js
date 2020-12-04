import { format } from 'date-fns'
export const COLUMNS = [
    {
        Header : 'Id',
        Footer : 'Id',
        accessor : 'id'
    },
    {
        Header : 'First Name',
        Footer : 'First Name',
        accessor : 'first_name'
    },
    {
        Header : 'Last Name',
        Footer : 'Last Name',
        accessor : 'last_name'
    },
    {
        Header : 'Email',
        Footer : 'Email',
        accessor : 'email'
    },
    {
        Header : 'Date of Birth',
        Footer : 'Date of Birth',
        accessor : 'dob',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy')}
    },
    {
        Header : 'Gender',
        Footer : 'Gender',
        accessor : 'gender'
    }
] 

export const GROUP_COLUMNS = [
    {
        Header : 'Id',
        Footer : 'Id',
        accessor : 'id'
    },
    {
        Header : 'Name',
        Footer : 'Name',
        columns : [
            {
                Header : 'First Name',
                Footer : 'First Name',
                accessor : 'first_name'
            },
            {
                Header : 'Last Name',
                Footer : 'Last Name',
                accessor : 'last_name'
            },
        ]
    },  
    {
        Header : 'info',
        Footer : 'info',
        columns : [
            {
                Header : 'Email',
                Footer : 'Email',
                accessor : 'email'
            },
            {
                Header : 'Gender',
                Footer : 'Gender',
                accessor : 'gender'
            },
            {
                Header : 'Date of Birth',
                Footer : 'Date of Birth',
                accessor : 'dob'
            }
        ] 
    }, 
]
