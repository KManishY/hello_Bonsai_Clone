import "./App.css";
import Footer from "./Components/Footer.jsx";
import NavbarPage from "./Components/NavbarPage.jsx";
import AllRoutes from "./Pages/AllRoutes.jsx";

function App() {
	return (
		<div className="App">
			<div style={{ position: "sticky", top: "0" }}>
				<NavbarPage />
			</div>
			<AllRoutes />
			<Footer />
		</div>
	);
}

export default App;
