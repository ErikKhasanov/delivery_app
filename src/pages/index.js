import React from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header"
import Categories from "../components/Categories/Categories";
import Market from "../components/Market/Market";

const HomePage = () => {
	return (
		<Layout>
			<Header/>
			<Categories/>
			<Market/>
		</Layout>
	)
}

export default HomePage