import fishingData from '../skills/fishing/fishingData';
import xpToLevel from './xpToLevel';

const fishToCatch = (currentLevel, desiredLevel) => {
  const currentXp = xpToLevel(currentLevel).XP;
  const targetXp = xpToLevel(desiredLevel).XP;
  const xpNeeded = targetXp - currentXp;

  if (xpNeeded <= 0) {
    throw new Error("Invalid XP calculation. Check current and desired levels.");
  }

  const availableFish = fishingData.filter(fish => fish.Level <= currentLevel);
  const fishRequired = {};
  
  availableFish.forEach(fish => {
    const fishXP = parseFloat(fish.XP);
    
    if (!isNaN(fishXP) && fishXP > 0) {
      const numFish = xpNeeded / fishXP;
      fishRequired[fish.fish] = {
        count: Math.ceil(numFish),
        minCatchTime: parseFloat(fish.Mincatchtime) * Math.ceil(numFish),
        maxCatchTime: parseFloat(fish.Maxcatchtime) * Math.ceil(numFish),
        avgCatchTime: parseFloat(fish.Averagecatchtime) * Math.ceil(numFish),
        totalValue: parseFloat(fish.Value) * Math.ceil(numFish)
      };
    } else {
      console.error(`Invalid XP value for fish: ${fish.fish}`);
    }
  });

  return fishRequired;
};

export default fishToCatch;
