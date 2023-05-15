import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Modal from './components/Main/Modal/Modal';
import { useState } from 'react';

// public css,img 같은거 넣는거
// public : 빌드를 할때 안에 있는 결과물의 루트폴더
// 

function App() {  
  const [modal, setModal] = useState(false)
  
  return (
    <>
      <Header />
      <Main setModal={setModal}/>
      <Footer />
      {modal && <Modal setModal={setModal}/>}
    </>
  );
}
export default App;
