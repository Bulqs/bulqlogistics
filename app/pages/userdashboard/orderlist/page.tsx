import UserDashboardLayout from '@/app/components/layout/UserDashboardLayout';
import React from 'react';

const page = () => {
  return (
      <UserDashboardLayout>
          <h2 className="text-2xl font-bold text-black">Order List</h2>
          <p>Adjust your settings here.</p>
      </UserDashboardLayout>
  );
}

export default page;
