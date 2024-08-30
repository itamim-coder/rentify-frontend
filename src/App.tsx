import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" min-h-screen w-full ">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
