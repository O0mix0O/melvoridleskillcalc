import React, { useState } from 'react';
import experienceData from '../experience/experienceTable';
import fishingData from '../skills/fishing/fishingData';
import getAvailableActions from './getAvailableActions';
import getActionsRequired from './getActionsRequired';

const Calculator = () => {
  const [currentLevel, setCurrentLevel] = useState('');
  const [desiredLevel, setDesiredLevel] = useState('');
  const [actionsRequired, setActionsRequired] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    const currentLevelInt = parseInt(currentLevel);
    const desiredLevelInt = parseInt(desiredLevel);

    // Input validation before calculation
    if (Number.isNaN(currentLevelInt) || Number.isNaN(desiredLevelInt) || currentLevelInt <= 0 || desiredLevelInt <= currentLevelInt) {
      setError('Please enter valid level values. Desired level must be higher than the current level.');
      setActionsRequired(null);
      return;
    }

    // Finding level data from experienceTable
    const currLevelData = experienceData.find(l => l.Level === currentLevelInt);
    const desLevelData = experienceData.find(l => l.Level === desiredLevelInt);

    if (!currLevelData || !desLevelData) {
      setError('Invalid level range. Please enter levels between 1 and 120.');
      setActionsRequired(null);
      return;
    }

    // Perform the fish-to-catch calculation
    try {
      const availableActions = getAvailableActions(currentLevelInt, fishingData);
      const data = getActionsRequired(currentLevelInt, desiredLevelInt, availableActions);
  
      if (data.error) {
        setError(data.error);
        setActionsRequired(null);
      } else {
        setActionsRequired(data);
        setError(null);
      }
    } catch (e) {
      setError('An error occurred during the calculation. Please try again.');
      setActionsRequired(null);
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
            placeholder="Enter current level"
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
            placeholder="Enter desired level"
          />
        </label>
      </div>

      <button 
        onClick={handleCalculate} 
        disabled={!currentLevel || !desiredLevel || parseInt(desiredLevel) <= parseInt(currentLevel)}
      >
        Calculate
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

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
