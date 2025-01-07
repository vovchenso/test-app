import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./modules/app-wrapper/app";
import { Spinner } from "./components/spinner";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <Suspense fallback={<Spinner />}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>
);
