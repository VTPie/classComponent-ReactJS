import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss'
import App from './views/App';
import reportWebVitals from './reportWebVitals';

//Ép React khởi động cùng Redux. Tạo 2 ứng dụng chạy song song.
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './stores/reducers/rootReducer'

const reduxStore = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//Nạp dữ liệu cho Redux
//reduxStore: Nơi lưu trữ dữ liệu
//rootReducer: Xử lý các action (ở đây là nạp dữ liệu)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
