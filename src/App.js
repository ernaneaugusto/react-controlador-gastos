import React from 'react';
import './App.css';
import 'mdbootstrap/css/bootstrap.min.css';

const URL = 'https://react-controlador-gastos.firebaseio.com/';

const App = () => {
  return (
    <main className='App mt-3'>
      <section className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className="card">
              <div className="card-body">
                <h1 className='main-title'>Gerenciador gastos</h1></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
