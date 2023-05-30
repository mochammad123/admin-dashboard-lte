import React from "react";
import MainApp from "./components/dashboard/MainApp";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import Overview from "./components/dashboard/layout/reports/Overview";
import Asset from "./components/dashboard/layout/reports/Asset";
import Login from "./components/login/Login";
import PrivateRoutes from "./components/private-routes/PrivateRoutes";
import User from "./components/dashboard/layout/user_manajement/user/User";
import Role from "./components/dashboard/layout/user_manajement/role/Role";
import MenuRole from "./components/dashboard/layout/user_manajement/menu_role/MenuRole";
import UserRole from "./components/dashboard/layout/user_manajement/user_role/UserRole";
import Registration from "./components/dashboard/layout/reports/Registration";
import Receive from "./components/dashboard/layout/reports/Receive";
import Distribution from "./components/dashboard/layout/reports/Distribution";
import Mutation from "./components/dashboard/layout/reports/Mutation";
import Inspection from "./components/dashboard/layout/reports/Inspection";
import SetupAsset from "./components/dashboard/layout/asset/setup_asset/SetupAsset";
import RegistrationAsset from "./components/dashboard/layout/asset/registration/RegistrationAsset";
import ReceiveAsset from "./components/dashboard/layout/asset/receive/ReceiveAsset";
import DistributionAsset from "./components/dashboard/layout/asset/distribution/DistributionAsset";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="*" element={<PrivateRoutes />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="report" element={<MainApp />}>
            <Route path="overview" element={<Overview />} />
            <Route path="asset" element={<Asset />} />
            <Route path="registration" element={<Registration />} />
            <Route path="receive" element={<Receive />} />
            <Route path="distribution" element={<Distribution />} />
            <Route path="mutation" element={<Mutation />} />
            <Route path="inspection" element={<Inspection />} />
          </Route>
          <Route path="management" element={<MainApp />}>
            <Route path="user" element={<User />} />
            <Route path="role" element={<Role />} />
            <Route path="menu-role" element={<MenuRole />} />
            <Route path="user-role" element={<UserRole />} />
          </Route>
          <Route path="asset" element={<MainApp />}>
            <Route path="setup-asset" element={<SetupAsset />} />
            <Route path="registration" element={<RegistrationAsset />} />
            <Route path="receive" element={<ReceiveAsset />} />
            <Route path="distribution" element={<DistributionAsset />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
