import React, { useState, useEffect, useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext'; // 파일 이름과 일치시킵니다.
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const { theme, toggleTheme } = useContext(ThemeContext); // ThemeContext 사용

  const handleNameChange = (e) => setName(e.target.value); // 이름 설정
  const handleSubmit = () => {
    alert(`Name: ${name}, Date: ${date.toLocaleString('ko-KR')}`);
  };

  // useEffect를 이용하여 실시간 날짜 표현
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 interval 정리
  }, []);

  const formattedDate = date.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric' // 초까지 표시
  });

  return (
    <div className={`App ${theme}`}>
      <input type="text" value={name} onChange={handleNameChange} placeholder="이름을 입력하세요" />
      <button onClick={handleSubmit}>확인</button>
      <p>{formattedDate}</p>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '다크 모드' : '라이트 모드'}
      </button>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}