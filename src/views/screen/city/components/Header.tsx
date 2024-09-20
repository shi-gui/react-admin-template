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
    <>
      <h1 className="leading-[80px] text-white">智慧城市</h1>
      <div className="absolute top-0 right-10 text-gray-100 leading-[70px]">当前时间：{time}</div>
    </>
  );
};

export default Header;
