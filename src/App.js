import { Provider } from "react-redux";
import "./App.css";
import Body from "./component/Body";
import Header from "./component/Header";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./component/Maincontainer";
import Watchpage from "./component/Watchpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
