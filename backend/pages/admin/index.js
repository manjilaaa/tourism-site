import React from 'react';
import Link from 'next/link';

import { getSession } from 'next-auth/react';

import AdminMessages from './AdminMessages';
import { redirect } from 'next/dist/server/api-utils';
const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! Manage your content below.</p>
       <ul>
        <li><Link href="/admin/AdminMessages">View Contact Messages</Link></li>
        {/* <li><Link href="/admin/gallery">Manage Gallery</Link></li>
        <li><Link href="/admin/content">Edit Homepage Text</Link></li> */}
      </ul>
    
    </div>
  );
};

export default AdminDashboard;

export async function getServerSideProps(context) {
  const session = await getSession(context);
   console.log("SESSION ON ADMIN PAGE:", session);

  if (!session || session.user.role !== "admin") {
    return {
      redirect: {
        destination: "/auth/signin?callbackUrl=/admin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}