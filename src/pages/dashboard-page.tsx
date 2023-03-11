import { MainHeader } from "../components/main-header/main-header";
import { SideBar } from "../components/side-bar/side-bar";
import { SideBarTab } from "../components/side-bar-tab/side-bar-tab";

function DashboardPage() {
  return (
    <div>
      <MainHeader></MainHeader>
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
    </div>
  );
}

export default DashboardPage;
