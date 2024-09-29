// import { motion } from "framer-motion";
// import { useAuthStore } from "../store/authStore";
// import { formatDate } from "../utils/date";

// const DashboardPage = () => {
//     const { user, logout } = useAuthStore();

//     const handleLogout = () => {
//         logout();
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.5 }}
//             className='max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800'
//         >
//             <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-sky-400 to-sky-600 text-transparent bg-clip-text'>
//                 Dashboard
//             </h2>

//             <div className='space-y-6'>
//                 <motion.div
//                     className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                 >
//                     <h3 className='text-xl font-semibold text-sky-400 mb-3'>Profile Information</h3>
//                     <p className='text-gray-300'>Name: {user.name}</p>
//                     <p className='text-gray-300'>Email: {user.email}</p>
//                 </motion.div>
//                 <motion.div
//                     className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 }}
//                 >
//                     <h3 className='text-xl font-semibold text-sky-400 mb-3'>Account Activity</h3>
//                     <p className='text-gray-300'>
//                         <span className='font-bold'>Joined: </span>
//                         {new Date(user.createdAt).toLocaleDateString("en-US", {
//                             year: "numeric",
//                             month: "long",
//                             day: "numeric",
//                         })}
//                     </p>
//                     <p className='text-gray-300'>
//                         <span className='font-bold'>Last Login: </span>
//                         {formatDate(user.lastLogin)}
//                     </p>
//                 </motion.div>
//             </div>

//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className='mt-4'
//             >
//                 <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={handleLogout}
//                     className='w-full py-3 px-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white 
//                 font-bold rounded-lg shadow-lg hover:from-sky-600 hover:to-sky-700
//                     focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900'
//                 >
//                     Logout
//                 </motion.button>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default DashboardPage;

import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore"; // Adjust the path as needed
import { formatDate } from "../utils/date"; // Adjust the path as needed

const DashboardPage = () => {
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className='max-w-5xl w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800'
        >
            <h2 className='text-4xl font-bold mb-6 text-center bg-gradient-to-r from-sky-400 to-sky-600 text-transparent bg-clip-text'>
                Welcome to Your Secure Dashboard
            </h2>
            <p className='text-lg text-gray-300 mb-4 text-center'>
                Here, you can manage your account settings, view your profile information, and stay updated with your recent activities.
            </p>

            <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6'>
                {/* Profile Information */}
                <motion.div
                    className='p-6 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 flex-1'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className='text-xl font-semibold text-sky-400 mb-3'>Profile Information</h3>
                    <p className='text-gray-300'>Name: {user.name}</p>
                    <p className='text-gray-300'>Email: {user.email}</p>
                </motion.div>

                {/* Account Activity */}
                <motion.div
                    className='p-6 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 flex-1'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className='text-xl font-semibold text-sky-400 mb-3'>Account Activity</h3>
                    <p className='text-gray-300'>
                        <span className='font-bold'>Joined: </span>
                        {new Date(user.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    <p className='text-gray-300'>
                        <span className='font-bold'>Last Login: </span>
                        {formatDate(user.lastLogin)}
                    </p>
                </motion.div>
            </div>

            {/* Images Section */}
            <motion.div
                className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <div className='relative'>
                    <img
                        src='https://th.bing.com/th/id/OIP.DPQXuDdAqeweI3bgRzXXnwHaEF?w=324&h=180&c=7&r=0&o=5&dpr=2&pid=1.7'
                        alt='Secure Access'
                        className='rounded-lg shadow-lg'
                    />
                    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg'>
                        <p className='text-white text-center p-2'>
                            Secure Access: Manage your data with confidence and know that your information is protected.
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <img
                        src='https://th.bing.com/th/id/R.ce7d01ef0ca25c11d0dc4ceb28233475?rik=sYGJKqpVotT7%2bg&pid=ImgRaw&r=0'
                        alt='Activity Overview'
                        className='rounded-lg shadow-lg'
                    />
                    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg'>
                        <p className='text-white text-center p-2'>
                            Activity Overview: Stay updated with your recent actions and account activity.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Logout Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className='mt-6'
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    className='w-full py-3 px-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white 
                font-bold rounded-lg shadow-lg hover:from-sky-600 hover:to-sky-700
                    focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900'
                >
                    Logout
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default DashboardPage;
