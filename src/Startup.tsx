import { useLocation, useRoutes } from "react-router-dom";
import App from "./App";
import { About } from "./pages/About";
import { Works } from "./pages/Works";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { AnimationLayout } from "./components/AnimationLayout";

export const Startup = () => {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <App />,

      children: [
        {
          path: "",
          element: (
            <AnimationLayout>
              <About />
            </AnimationLayout>
          ),
        },
        {
          path: "calismalarim",
          element: (
            <AnimationLayout>
              <Works />
            </AnimationLayout>
          ),
        },
      ],
    },
  ]);

  const location = useLocation();

  if (!routeElement) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {cloneElement(routeElement, { key: location.pathname })}
    </AnimatePresence>
  );
};
