import React from 'react';
import './App.css';
import 'mdbootstrap/css/bootstrap.min.css';
import useGet from './useGet';

// const URL = 'https://react-controlador-gastos.firebaseio.com/';
const URL = 'http://localhost:3001/movimentacoes';

const App = () => {
  const data = useGet(URL);
  const data2 = useGet('https://official-joke-api.appspot.com/jokes/random');

  return (
    <main className='App mt-3'>
      <section className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className="card">
              <div className="card-body">
                <h1 className='main-title'>My Money</h1>
                <p>Data: {JSON.stringify(data)}</p>
                <p>Data2: {JSON.stringify(data2)}</p>

                {data.loading &&
                  <p className="alert alert-info text-center pt-3">Carregando...</p>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
