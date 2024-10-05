import React, { useState } from 'react';
import fishToCatch from './fishToCatch';
import experienceData from '../experience/experienceTable';

const Calculator = () => {
  const [currentLevel, setCurrentLevel] = useState('');
  const [desiredLevel, setDesiredLevel] = useState('');
  const [actionsRequired, setActionsRequired] = useState(null);

  const handleCalculate = () => {
    const currLevelData = experienceData.find(l => l.Level === parseInt(currentLevel));
    const desLevelData = experienceData.find(l => l.Level === parseInt(desiredLevel));

    if (currLevelData && desLevelData) {
      const fishingData = fishToCatch(parseInt(currentLevel), parseInt(desiredLevel));
      setActionsRequired(fishingData);
    } else {
      alert('Please make sure all inputs are valid.');
    }
  };

  return (
    <div>
      <h1>XP Calculator</h1>
      
      <div>
        <label>
          Current Level:
          <input 
            type="number" 
            value={currentLevel} 
            onChange={(e) => setCurrentLevel(e.target.value)} 
            min="1" 
            max="120"
          />
        </label>
      </div>

      <div>
        <label>
          Desired Level:
          <input 
            type="number" 
            value={desiredLevel} 
            onChange={(e) => setDesiredLevel(e.target.value)} 
            min="2" 
            max="120"
          />
        </label>
      </div>

      <button onClick={handleCalculate}>Calculate</button>

      {actionsRequired && (
        <div>
          <h2>Required to Level Up:</h2>
          <ul>
            {Object.entries(actionsRequired).map(([fish, data]) => (
              <li key={fish}>
                <h3>{fish}</h3>
                <p>Number of fish: {data.count}</p>
                <p>Total Min Catch Time: {data.minCatchTime} seconds</p>
                <p>Total Max Catch Time: {data.maxCatchTime} seconds</p>
                <p>Total Average Catch Time: {data.avgCatchTime} seconds</p>
                <p>Total Value: {data.totalValue} coins</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Calculator;
