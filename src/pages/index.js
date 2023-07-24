import RootLayout from "../../Components/Layouts/RootLayout";


const HomePage = () => {

  return (
    <div>
      <h1>This is Home Page</h1>
    </div>
  );
};
export default HomePage;



HomePage.getLayout = function getLayout(page) {
  return (

     <RootLayout>{page}</RootLayout>
    )
}
