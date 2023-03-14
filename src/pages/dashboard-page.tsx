import { MainLayout } from "../layouts/main-layout";
import { SideBar } from "../components/side-bar/side-bar";
import { SideBarTab } from "../components/side-bar-tab/side-bar-tab";
import { UsersList } from "../components/users-list/users-list";
import { UsersForm } from "../components/users-form/users-form";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { logout } from "../store/slices/auth-slice";

function DashboardPage() {
  const dispath = useAppDispatch();
  const [currentTab, setCurrentTab] = useState<Tab>("list");
  const loading = useAppSelector((state) => state.users.loading);

  useEffect(() => {
    if (loading === "succeded") {
      setCurrentTab("list");
    }
  }, [loading]);

  function getTabs(): JSX.Element {
    switch (currentTab) {
      case "list":
        return <UsersList />;
      case "add":
        return <UsersForm />;
      default:
        return <h2>No hay tab seleccionado</h2>;
    }
  }

  return (
    <MainLayout>
      <SideBar>
        <SideBarTab
          text="Lista de usuarios"
          iconText="view_list"
          isSelected={currentTab === "list"}
          onClick={() => setCurrentTab("list")}
        />
        <SideBarTab
          text="Agregar usuario"
          iconText="add_circle"
          isSelected={currentTab === "add"}
          onClick={() => setCurrentTab("add")}
        />
        <SideBarTab
          text="Salir"
          iconText="logout"
          onClick={() => dispath(logout())}
        />
      </SideBar>
      <main className="w-full">{getTabs()}</main>
    </MainLayout>
  );
}

type Tab = "list" | "add";

export default DashboardPage;
