import React from 'react';
import { useState } from 'react';
import UserOrder from './UserOrder';
import UserDashboardLayout from '@/app/components/userdashboardlayout/layout/UserDashboardLayout';


const page: React.FC = () => {

 

  return (
    <UserDashboardLayout>
      <UserOrder />
    </UserDashboardLayout>
  );
}

export default page;
