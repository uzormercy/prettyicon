import {Fragment} from "react";
import DataTable from 'react-data-table-component';
import Image from "next/image";


const ActionComponent = ({ prop }) => {


    return (
        <Fragment>
            <div className="w-full flex gap-2 items-center justify-center">
                <a className="p-2 bg-blue-600 text-white cursor-pointer rounded">View</a>
                <button className="p-2 bg-green-600 text-white rounded">Edit</button>
                <button className="p-2 bg-red-600 text-white rounded">Delete</button>
            </div>
        </Fragment>
    )
}

const PageantListingPage = () => {

    const columns = [
        {
            name: "Full Name",
            selector: row => {

                return (<div className="flex gap-2 items-center justify-evenly">
                    <div className="w-[30px] h-[30px] relative">
                         <Image  src="/images/01.jpg" style={{objectFit: "cover", width: "100%", height: "100%"}} fill={true} alt={row.firstname} className="rounded-full absolute" />
                    </div>
                    <div className="">
                        {row.firstname}  {row.lastname}
                    </div>
                </div>)

            }
        },
        {
            name: "Votes",
            selector: row => row.votes
        },
        {
            name: "Status",
            selector: row => row.status
        },
        {
            name: "",
            selector: (row) => <ActionComponent prop={row} />
        }
    ];
    const pageantData = [
    {
        id: 1,
        firstname: 'Bridget',
        lastname: "Briggs",
        votes: '1988',
        status: "Active"
    },
    {
        id: 2,
        firstname: 'Glory',
        lastname: "Johns",
        votes: '188',
        status: "Active"
    },
]

    return (
        <Fragment>
            <div className="container mx-auto flex flex-col">

                <div className="mb-3.5 w-full flex justify-end">
                    <button className="p-2 bg-blue-600 text-white cursor-pointer rounded">Add Pageant</button>
                </div>
                <DataTable columns={columns} data={pageantData} />
            </div>
        </Fragment>
    )
}

export  default  PageantListingPage;