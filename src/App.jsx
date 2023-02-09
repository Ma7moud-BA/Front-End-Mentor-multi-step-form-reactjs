import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form/Form";
import { FormProvide } from "./components/form/context/FormContext";
function App() {
	return (
		<div className="main-container">
			<FormProvide>
				<Form></Form>
			</FormProvide>
		</div>
	);
}

export default App;
