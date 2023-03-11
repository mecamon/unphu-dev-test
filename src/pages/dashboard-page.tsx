import { GenericDropdown } from "../components/generic-dropdown";

function DashboardPage() {
  return (
    <div>
      <h1>This is the dashboard page</h1>
      <GenericDropdown
        text=""
        iconText="account_circle"
        childrenList={[<button key="logout-button">Log out</button>]}
      />
    </div>
  );
}

export default DashboardPage;
