import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";
import AllRoutes from "./AllRoutes";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <AllRoutes />
      </PersistGate>
    </Provider>
  );
}
