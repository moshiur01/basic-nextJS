import DashboardLayout from "../../Components/Layouts/DashboardLayout";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Home Page</h1>
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page){
    return(

        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}