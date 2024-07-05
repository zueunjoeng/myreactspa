import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Child'; //상대경로는 모두 src집에서 찾아라 //우선순위- intro에 있는게 더 높다.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App msg="전달중?" num="10" bgcls="bg-dark fixed-top" textcls="text-white" />

);

