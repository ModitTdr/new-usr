import { RouterProvider } from "react-router";
import router from "./routes/router";
import { useDispatch } from "react-redux";
import { restoreSession } from "./features/Authentication/authSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(restoreSession());
  }, []);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App;