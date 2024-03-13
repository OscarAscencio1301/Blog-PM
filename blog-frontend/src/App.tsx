import { AppRouter } from "./router/AppRouter";
import { Provider } from "react-redux";
import { storeBlog } from "./store/storeBlog";

const App = () => {
  return (
    <Provider store={storeBlog}>
      <AppRouter />
    </Provider>
  );
};

export default App;
