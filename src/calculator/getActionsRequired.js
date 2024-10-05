import xpToLevel from './xpToLevel';

/**
 * Calculates the number of actions required to reach the desired level.
 *
 * @param {number} currentLevel - The current level of the user.
 * @param {number} desiredLevel - The target level the user wants to reach.
 * @param {Array} skillData - An array of available actions (e.g., fish) with their XP and other details.
 * @returns {Object} - An object containing the required number of actions or an error message.
 */
const getActionsRequired = (currentLevel, desiredLevel, skillData) => {
  if (currentLevel <= 0 || desiredLevel <= currentLevel) {
    return { error: 'Invalid level inputs. Check current and desired levels.' };
  }

  const currentXp = xpToLevel(currentLevel).XP;
  const targetXp = xpToLevel(desiredLevel).XP;
  const xpNeeded = targetXp - currentXp;


  if (xpNeeded <= 0) {
    return { error: 'Target level must require more XP than the current level.' };
  }

  const actionsRequired = {};

  // Calculate number of each action (fish) required
  skillData.forEach(action => {
    const { fish: actionName, XP: actionXP, Mincatchtime, Maxcatchtime, Averagecatchtime, Value } = action;
    const actionXPFloat = parseFloat(actionXP);

    if (!isNaN(actionXPFloat) && actionXPFloat > 0) {
      const numActions = Math.ceil(xpNeeded / actionXPFloat);

      // Store calculated values in the result object
      actionsRequired[actionName] = {
        count: numActions,
        minCatchTime: parseFloat(Mincatchtime) * numActions,
        maxCatchTime: parseFloat(Maxcatchtime) * numActions,
        avgCatchTime: parseFloat(Averagecatchtime) * numActions,
        totalValue: parseFloat(Value) * numActions
      };
    } else {
      console.warn(`Skipping action: ${actionName} due to invalid XP value.`);
    }
  });

  return Object.keys(actionsRequired).length > 0 ? actionsRequired : { error: 'No actions available at current level.' };
};

export default getActionsRequired;
