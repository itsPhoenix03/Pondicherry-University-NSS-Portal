import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import SignUpAndLogin from "./pages/SignUpAndLogin.tsx";
import NotFound from "./components/NotFound.tsx";
import News from "./pages/News.tsx";
import Events from "./pages/Events.tsx";
import User from "./pages/User.tsx";
import NewsArticle from "./components/NewsArticle.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<SignUpAndLogin />} />
      <Route path="news" element={<News />} />
      <Route path="article/:newsId" element={<NewsArticle />} />
      <Route path="events" element={<Events />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
