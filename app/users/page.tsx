import React, {Suspense} from 'react';
import UserTable from "@/app/users/UserTable";
import Link from "next/link";

interface  Props {
    searchParams: { sortOrder: string };
}

const UserPage =  ({ searchParams: { sortOrder }}: Props) => {
    return (
        <>
            <h1>Users</h1>
            <Link href='/users/new' className='btn'>New User</Link>
            {/*<Suspense fallback={<p>Loading...</p>}>*/}
            {/*    <UserTable sortOrder={sortOrder} />*/}
            {/*</Suspense>*/}
            <UserTable sortOrder={sortOrder} />
        </>
    );
};

export default UserPage;
