import React from 'react';

function CurrentDate() {
  const formatDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const formatTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    return `${hours.toString().padStart(2, '0')} : ${minutes} ${ampm}`;
  };


  return (
    <div>
      <div>{formatDate()}</div>
      <div className='time'>{formatTime()}</div>
    </div>
  );
}

export default CurrentDate;
