import React, { useEffect, useReducer } from 'react';
import './App.css';
import 'mdbootstrap/css/bootstrap.min.css';
import axios from 'axios';

// const URL = 'https://react-controlador-gastos.firebaseio.com/';
const URL = 'http://localhost:3001/movimentacoes';

const initialState = {
  loading: true,
  data: {}
}

const reducer = (state, action) => {
  if(action.type === 'REQUEST') {
    return {
      ...state,
      loading: true
    }
  }

  if(action.type === 'SUCCESS') {
    return {
      ...state,
      loading: false,
      data: action.data
    }
  }

  return state;
}

const App = () => {

  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

    dispatch({ type: 'REQUEST' });

    axios.get(URL)
      .then((res) => {
        dispatch({
          type: 'SUCCESS',
          data: res.data
        });
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
