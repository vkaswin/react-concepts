import { createRoot } from "react-dom/client";
import App from "./App";
import ProvideStore from "./redux/store";
import { Fragment } from "react";

let root = createRoot(document.getElementById("root"));

root.render(
  <Fragment>
    <ProvideStore>
      <App />
    </ProvideStore>
  </Fragment>
);
