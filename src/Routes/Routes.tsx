import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "@src/BaseLayout/BaseLayout";
import { HomePage } from "@src/Pages/Home/HomePage";
import { NotFoundPage } from "@src/Pages/NotFound/NotFoundPage";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/bolsa',
        element: <HomePage />
      }
    ]
  },
]);
