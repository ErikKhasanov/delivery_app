import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {initApp} from "../redux/actions/app";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header"
import Categories from "../components/Categories/Categories";
import Market from "../components/Market/Market";

const HomePage = () => {
	const dispatch = useDispatch();

	const {app} = useSelector(state => ({
		app: state.app
	}))

	useEffect(() => {
		dispatch(initApp())
	}, [dispatch])

	return (
		<Layout>
			<Header/>
			<Categories/>
			<Market/>
		</Layout>
	)
}

export default HomePage