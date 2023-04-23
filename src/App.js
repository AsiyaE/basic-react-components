import {useState} from 'react'
import './index.scss';

const Modal = ({open, setOpen, children}) => (
  <div className={`overlay animated ${open ? 'show' : ''}`}>
    <div className="modal">
      <svg onClick={()=> setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      {children}
    </div>
  </div>
)
  


function App() {
const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={()=> setOpen(true)} className="open-modal-button">
       Открыть окно
      </button>
      <Modal open ={open} setOpen= {setOpen} >
        <img width ="300px"src="https://media1.giphy.com/media/l2Jho5fnv7sfNAAZq/giphy.gif?cid=ecf05e47y4bezle9o7luw7q5f3z3zusxt7510c1ohj1bqt5k&rid=giphy.gif" alt='unicorn'/>
        <h3>Это модальное окно</h3>
      </Modal>
    </div>
  );
}

export default App;
