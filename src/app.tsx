import { Route, Routes } from "react-router-dom";
import CTS from "./CTS";
import Home from "./home";

export default function App(){
	return(
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/CTS" element={<CTS />} />
		</Routes>
	  )

}
