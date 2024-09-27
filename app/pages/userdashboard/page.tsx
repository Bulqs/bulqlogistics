// pages/dashboard/index.tsx
import UserDashboardLayout from '../../components/layout/UserDashboardLayout';
import { BsBoxFill } from "react-icons/bs";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { VscPassFilled } from "react-icons/vsc";
import { MdCancel } from "react-icons/md";


const DashboardHome = () => {
    return (
        <UserDashboardLayout>
            {/* Statistics board section goes here */}
            <div className='flex flex-row items-center justify-between mt-5 w-full shadow-lg shadow-appTitleBgColor '>
                {/* Total SHipping */}
                <div className='min-w-2/12 p-2 rounded-lg'>
                    <div className="flex flex-col bg-white rounded-lg overflow-hidden border-[1.7px] border-appNav">
                        <div className='flex items-center gap-4 p-2 bg-white rounded-lg text-appTitleBgColor'>
                            <div className="border-[1.8px] border-appTitleBgColor p-1 rounded-lg">
                                <BsBoxFill className=' w-7 h-7' />
                            </div>
                            <h4>Total Shipping</h4>
                        </div>

                        <div className='flex items-center justify-center p-2 bg-appTitleBgColor rounded-t-[-4px]'>
                            <h4 className='text-white'>2000</h4>
                        </div>
                    </div>
                </div>
                {/* Total SHipping */}

                {/* In Transit Section */}
                <div className='min-w-2/12 w-2/12 p-2 rounded-lg'>
                    <div className="flex flex-col bg-white rounded-lg overflow-hidden border-[1.7px] border-appNav">
                        <div className='flex items-center gap-4 p-2 bg-white rounded-lg text-appTitleBgColor'>
                            <div className="border-[1.8px] border-blue-700 p-1 rounded-lg">
                                <MdOutlineDirectionsBike className='text-blue-700 w-7 h-7' />
                            </div>
                            <h4 className='text-blue-700'>In Transit</h4>
                        </div>

                        <div className='flex items-center justify-center p-2 bg-appTitleBgColor rounded-t-[-4px]'>
                            <h4 className='text-white'>85</h4>
                        </div>
                    </div>
                </div>
                {/* In Transit Section */}

                {/* delivery */}
                <div className='min-w-2/12 w-2/12 p-2 rounded-lg'>
                    <div className="flex flex-col bg-white rounded-lg overflow-hidden border-[1.7px] border-appNav">
                        <div className='flex items-center gap-4 p-2 bg-white rounded-lg text-appTitleBgColor'>
                            <div className="border-[1.8px] border-orange-400 p-1 rounded-lg">
                                <TbTruckDelivery className=' text-orange-400 w-7 h-7' />
                            </div>
                            <h4 className='text-orange-400'>In Delivery</h4>
                        </div>

                        <div className='flex items-center justify-center p-2 bg-appTitleBgColor rounded-t-[-4px]'>
                            <h4 className='text-white'>400</h4>
                        </div>
                    </div>
                </div>
                {/* delivery */}

                {/* Completed */}
                <div className='min-w-2/12 w-2/12 p-2 rounded-lg'>
                    <div className="flex flex-col bg-white rounded-lg overflow-hidden border-[1.7px] border-appNav">
                        <div className='flex items-center gap-4 p-2 bg-white rounded-lg text-appTitleBgColor'>
                            <div className="border-[1.8px] border-green-500 p-1 rounded-lg">
                                <VscPassFilled className='text-green-500 w-7 h-7' />
                            </div>
                            <h4 className="text-green-500">Completed</h4>
                        </div>

                        <div className='flex items-center justify-center p-2 bg-appTitleBgColor rounded-t-[-4px]'>
                            <h4 className='text-white'>1,500</h4>
                        </div>
                    </div>
                </div>
                {/* Completed */}

                {/* Rejected */}
                <div className='min-w-2/12 w-2/12 p-2 rounded-lg'>
                    <div className="flex flex-col bg-white rounded-lg overflow-hidden border-[1.7px] border-appNav">
                        <div className='flex items-center gap-4 p-2 bg-white rounded-lg text-appTitleBgColor'>
                            <div className="border-[1.8px] border-red-700 p-1 rounded-lg">
                                <MdCancel className='text-red-700 w-7 h-7' />
                            </div>
                            <h4 className='text-red-700'>Rejected</h4>
                        </div>

                        <div className='flex items-center justify-center p-2 bg-appTitleBgColor rounded-t-[-4px]'>
                            <h4 className='text-white'>15</h4>
                        </div>
                    </div>
                </div>
                {/* Rejected */}
            </div>
            {/* Statistics board section ends here */}

            {/* Chart Section Goes here */}
            <div className='flex flex-row items-center justify-between mt-5 w-full shadow-lg shadow-appTitleBgColor '>

            </div>
            {/* Chart Section Ends Here */}

        </UserDashboardLayout>
    );
};

export default DashboardHome;
