import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import dayjs from 'dayjs'; // Импортируем библиотеку dayjs для работы с датой и временем
import axios from 'axios'; // Импортируем axios для AJAX-запросов

function App() {
  const [currentTime, setCurrentTime] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss')); // Для отображения обновляемого времени
  const [data, setData] = useState(null); // Для хранения данных из API
  
  useEffect(() => {   // Обновление времени каждую секунду
    const timer = setInterval(() => {
      setCurrentTime(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    }, 1000);
    return () => clearInterval(timer); // очистка при размонтировании
  }, []);

  useEffect(() => { // Загрузка данных из API один раз при монтировании компонента
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App" style={{ padding: '20px' }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Отображение текущего времени */}
        <h1>Текущая дата и время:</h1>
        <p>{currentTime}</p>

        {/* Отображение данных из API */}
        <h1>Данные из API:</h1>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Загрузка...</p>
        )}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;