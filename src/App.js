// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import authServiceObj from "./appwrite/auth.service";
// import { login, logout } from "./redux/authSlice";
import "./App.css";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   authServiceObj
  //     .getUserData()
  //     .then((userData) => {
  //       if (userData) {
  //         dispatch(login({ userData }));
  //       } else {
  //         dispatch(logout());
  //       }
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [dispatch]);

  return (
    <>
      <div className='min-h-screen flex flex-wrap content-center bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
