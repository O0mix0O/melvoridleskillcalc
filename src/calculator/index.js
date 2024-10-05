import React, { useState } from 'react';
import fishingData from '../skills/fishing/fishingData';
import experienceData from '../experience/experienceData';

const Calculator = () => {
  const [currentLevel, setCurrentLevel] = useState('');
  const [desiredLevel, setDesiredLevel] = useState('');
  const [actionsRequired, setActionsRequired] = useState(null); // State to hold fish data

  // Function to handle the calculation
  const handleCalculate = () => {
    const currLevelData = experienceData.find(l => l.Level === parseInt(currentLevel));
    const desLevelData = experienceData.find(l => l.Level === parseInt(desiredLevel));

    if (currLevelData && desLevelData) {
      const fishingData = fishToCatch(parseInt(currentLevel), parseInt(desiredLevel));
      setActionsRequired(fishingData); // Store the fish calculation result in state
    } else {
      alert('Please make sure all inputs are valid.');
    }
  };

  // XP calculation function (from level data)
  function xpToLevel(level) {
    const levelData = experienceData.find(l => l.Level === level);
    if (!levelData) {
      return { XP: 0 };
    }
    return levelData;
  }

  // Function to calculate number of fish required to reach target level
  function fishToCatch(currentLevel, desiredLevel) {
    // Step 1: Calculate XP required
    const currentXp = xpToLevel(currentLevel).XP;   // XP required to be at current level
    const targetXp = xpToLevel(desiredLevel).XP;    // XP required to reach desired level
    const xpNeeded = targetXp - currentXp;          // Total XP needed to level up

    // Step 2: Check if xpNeeded is valid
    if (xpNeeded <= 0) {
      throw new Error("Invalid XP calculation. Check current and desired levels.");
    }

    // Step 3: Filter fish based on current level
    const availableFish = fishingData.filter(fish => fish.Level <= currentLevel);

    // Step 4: Calculate how many of each fish is needed
    const fishRequired = {};
    availableFish.forEach(fish => {
      const fishXP = parseFloat(fish.XP);
      
      if (!isNaN(fishXP) && fishXP > 0) {
        const numFish = xpNeeded / fishXP;
        fishRequired[fish.fish] = {
          count: Math.ceil(numFish), // Number of fish required
          minCatchTime: parseFloat(fish.Mincatchtime) * Math.ceil(numFish), // Total min catch time
          maxCatchTime: parseFloat(fish.Maxcatchtime) * Math.ceil(numFish), // Total max catch time
          avgCatchTime: parseFloat(fish.Averagecatchtime) * Math.ceil(numFish), // Total average catch time
          totalValue: parseFloat(fish.Value) * Math.ceil(numFish) // Total value of fish
        };
      } else {
        console.error(`Invalid XP value for fish: ${fish.fish}`);
      }
    });

    return fishRequired;
  }

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

      {/* Display the calculated fish */}
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
