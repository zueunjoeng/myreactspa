import 'bootstrap/dist/css/bootstrap.min.css'
//npm i sass / npm i node-sass(실전 노드버전은 12-14버전) 챗에게 물어보기 node 버전이~이건데 컴벌트시키는 sass버전은 뭘까
import './App.css';
import logo from './logo.svg'

function App() {
  return (
  <header id="id">
    <div className="container d-flex justify-content-between">
      <h1 className='col-4 col-md-2'>
        <a href="" className='d-block'>
          <img src={logo} className="w-100" alt="" />
        </a>
      </h1>
      <ul id="gnb" className='d-flex align-items-center'>
        <li className='me-3'><a href="">대메뉴</a></li>
        <li className='me-3'><a href="">대메뉴</a></li>
        <li className='me-3'><a href="">대메뉴</a></li>
        <li className='me-3'><a href="">대메뉴</a></li>
      </ul>
      
    </div>
  </header>
  );
}

export default App;
