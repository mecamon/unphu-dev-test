import { MainLayout } from "../layouts/main-layout";
import { SideBar } from "../components/side-bar/side-bar";
import { SideBarTab } from "../components/side-bar-tab/side-bar-tab";
import { UsersList } from "../components/users-list/users-list";
import { UserPreview } from "../models/models";

const users: UserPreview[] = [
  {
    id: "1",
    completeName: "Carlos Mejia",
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
    completeName: "Carlos Mejia",
    email: "carlos@mail.com",
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
      <main>
        <UsersList users={users} />
      </main>
    </MainLayout>
  );
}

export default DashboardPage;
