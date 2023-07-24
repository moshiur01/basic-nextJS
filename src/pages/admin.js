import React from "react";
import DashboardLayout from "../../Components/Layouts/DashboardLayout";
import RootLayout from "../../Components/Layouts/RootLayout";

const AdminHomePage = () => {
  return (
    <div>
      <h1>This is Admin Page</h1>
    </div>
  );
};

export default AdminHomePage;

AdminHomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
