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
import store, { persistor } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import SlideShow from "./pages/SlideShow.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<SlideShow />} />
      <Route path="auth" element={<SignUpAndLogin />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="news" element={<News />} />
      <Route path="article/:newsId" element={<NewsArticle />} />
      <Route path="events" element={<Events />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
