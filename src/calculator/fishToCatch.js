import fishingData from '../skills/fishing/fishingData';
import xpToLevel from './xpToLevel';

const fishToCatch = (currentLevel, desiredLevel) => {
  // Input validation
  if (currentLevel <= 0 || desiredLevel <= currentLevel) {
    return { error: 'Invalid level inputs. Check current and desired levels.' };
  }

  // XP calculations
  const currentXp = xpToLevel(currentLevel).XP;
  const targetXp = xpToLevel(desiredLevel).XP;
  const xpNeeded = targetXp - currentXp;

  // Validate if XP needed makes sense
  if (xpNeeded <= 0) {
    return { error: 'Target level must require more XP than the current level.' };
  }

  // Filter fish available at the current level or lower
  const availableFish = fishingData.filter(fish => fish.Level <= currentLevel);
  const fishRequired = {};

  // Calculate number of each fish required
  availableFish.forEach(fish => {
    const { fish: fishName, XP: fishXP, Mincatchtime, Maxcatchtime, Averagecatchtime, Value } = fish;
    const fishXPFloat = parseFloat(fishXP);

    if (!isNaN(fishXPFloat) && fishXPFloat > 0) {
      const numFish = Math.ceil(xpNeeded / fishXPFloat);

      // Store calculated values in the result object
      fishRequired[fishName] = {
        count: numFish,
        minCatchTime: parseFloat(Mincatchtime) * numFish,
        maxCatchTime: parseFloat(Maxcatchtime) * numFish,
        avgCatchTime: parseFloat(Averagecatchtime) * numFish,
        totalValue: parseFloat(Value) * numFish
      };
    } else {
      console.warn(`Skipping fish: ${fishName} due to invalid XP value.`);
    }
  });

  // Return calculated fish data or empty if none available
  return Object.keys(fishRequired).length > 0 ? fishRequired : { error: 'No fish available at current level.' };
};

export default fishToCatch;
