import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

const Header = () => {
  const initTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const [time, setTime] = useState(initTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = dayjs().format('YYYY-MM-DD HH:mm:ss');
      setTime(date);
    }, 1000);
    // 清除定时器
    return () => clearInterval(timer);
  });

  return (
    <div className="screen-city-header">
      <h1>智慧城市</h1>
      <div>当前时间：{time}</div>
    </div>
  );
};

export default Header;
