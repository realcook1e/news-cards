import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store/index.js";
import { Provider } from "react-redux";
import Cards from "./containers/Cards/Cards.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<Cards />
	</Provider>
);
