import store from "../redux/store";
import {Provider} from "react-redux";
import '../global.scss'

const myApp = ({Component, pageProps}) => {
    return(
        <Provider store={store}>
            <Component{...pageProps} />
        </Provider>
    )
}

export default myApp