import React from 'react';
import DayOfTheWeek from './DayOfTheWeek';
import Zodiac from './Zodiac';

export default function App() {
  return (
    <div>
      <Zodiac />
      <DayOfTheWeek />
      <ul>
        <li>Monday</li>
        <li>Tuesday</li>
        <li>Wednesday</li>
        <li>Thursday</li>
        <li>Friday</li>
        <li>Saturday</li>
        <li>Sunday</li>
      </ul>
    </div>
  );
}
