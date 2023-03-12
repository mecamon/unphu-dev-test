import { MainLayout } from "../layouts/main-layout";
import { SideBar } from "../components/side-bar/side-bar";
import { SideBarTab } from "../components/side-bar-tab/side-bar-tab";
import { UsersList } from "../components/users-list/users-list";
import { UserPreview } from "../models/models";
import { useState } from "react";
import { UsersForm } from "../components/users-form/users-form";

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
  const [name, setName] = useState("");

  return (
    <MainLayout>
      <SideBar>
        <SideBarTab
          text="Listar usuarios"
          iconText="view_list"
          onClick={() => null!}
          isSelected={true}
        />
        <SideBarTab
          text="Agregar usuario"
          iconText="add_circle"
          onClick={() => null!}
        />
        <SideBarTab text="Salir" iconText="logout" onClick={() => null!} />
      </SideBar>
      <main className="w-full">
        {/* <UsersList users={users} /> */}
        <UsersForm />
      </main>
    </MainLayout>
  );
}

export default DashboardPage;
