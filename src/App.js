import React, { useState, useEffect } from 'react';
import './App.css';
import 'mdbootstrap/css/bootstrap.min.css';
import axios from 'axios';

// const URL = 'https://react-controlador-gastos.firebaseio.com/';
const URL = 'http://localhost:3001/movimentacoes';



const App = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios.get(URL)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);


  return (
    <main className='App mt-3'>
      <section className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className="card">
              <div className="card-body">
                <h1 className='main-title'>My Money</h1>
                <p>Data: {JSON.stringify(data)}</p>

                {loading &&
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
