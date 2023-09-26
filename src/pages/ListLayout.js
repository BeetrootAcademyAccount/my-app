import { Outlet, useNavigation } from "react-router-dom";

function ListLayout() {
  const navigation = useNavigation();

  console.log(navigation.state);

  return (
    <div>
      {navigation.state === "loading" && <p>Loading...</p>}

      {navigation.state === "idle" && <Outlet></Outlet>}
    </div>
  );
}

export default ListLayout;
