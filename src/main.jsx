import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider} from 'react-redux';
import { Provider as RootProvider} from './Context';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './Redux/Reducer/rootreducer';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Root from './Root'
import './index.css'


const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ReduxProvider store = {store}>
        <RootProvider>
          <Root />
        </RootProvider>
      </ReduxProvider>
    </BrowserRouter>
)
