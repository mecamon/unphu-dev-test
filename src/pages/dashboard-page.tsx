import { MainLayout } from "../layouts/main-layout";
import { SideBar } from "../components/side-bar/side-bar";
import { SideBarTab } from "../components/side-bar-tab/side-bar-tab";
import { UsersList } from "../components/users-list/users-list";
import { UserPreview } from "../models/models";
import { UsersForm } from "../components/users-form/users-form";
import { useAuthContext } from "../providers/auth-provider";
import { useState } from "react";

const users: UserPreview[] = [
  {
    id: "1",
    completeName: "Carlo Alberto Mejia Aquino",
    email: "carlos@mail.com",
    gender: "m",
  },
  {
    id: "2",
    completeName: "Maria Contreras",
    email: "maria@mail.com",
    gender: "f",
  },
  {
    id: "3",
    completeName: "Ramon Perez Sosa",
    email: "ramon@mail.com",
    gender: "m",
  },
  {
    id: "4",
    completeName: "Carlos Mejia",
    email: "carlos@mail.com",
    gender: "m",
  },
  {
    id: "5",
    completeName: "Carlos Mejia",
    email: "carlos@mail.com",
    gender: "m",
  },
];

function DashboardPage() {
  const { logout } = useAuthContext();
  const [currentTab, setCurrentTab] = useState<Tab>("list");

  function getTabs(): JSX.Element {
    switch (currentTab) {
      case "list":
        return <UsersList users={users} />;
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
          text="Listar usuarios"
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
        <SideBarTab text="Salir" iconText="logout" onClick={() => logout()} />
      </SideBar>
      <main className="w-full">{getTabs()}</main>
    </MainLayout>
  );
}

type Tab = "list" | "add";

export default DashboardPage;
