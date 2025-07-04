// import UserAnalytics from 'path/to/UserAnalytics';
// import RevenueMetrics from 'path/to/RevenueMetrics';
// import Notifications from 'path/to/Notifications';
import '../globals.css'

export default function ConplexDashboeadLayout({children,
    users, revenue, notifications, login,
}:{
    children:React.ReactNode,
    users:React.ReactNode,
    revenue:React.ReactNode,
    notifications:React.ReactNode,
    login:React.ReactNode,


}){
    // const isLoggedIn = false;
    const isLoggedIn = true;
    return isLoggedIn ? (
        <>
        <div>

            <div>{children}</div>
            <div className='flex'>
                <div className='flex flex-col'>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div className='flex flex-1'>{notifications}</div>
            </div>
        </div>
        {/* <UserAnalytics/>
        <RevenueMetrics/>
        <Notifications/> */}
        </>
    ): (login);
}