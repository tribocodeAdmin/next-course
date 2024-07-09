import React from 'react';
import UserTable from "@/app/users/UserTable";

interface  Props {
    searchParams: { sortOrder: string };
}

const UserPage = async ({ searchParams: { sortOrder }}: Props) => {
    console.log(sortOrder)
    return (
        <>
            <h1>Users</h1>
            <UserTable sortOrder={sortOrder} />
        </>
    );
};

export default UserPage;
