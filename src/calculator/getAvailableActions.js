/**
 * Returns the list of available actions (e.g., fish) that the user can perform at the current level.
 *
 * @param {number} currentLevel - The current level of the user.
 * @param {Array} skillData - An array of available actions (e.g., fish) with their level requirements.
 * @returns {Array} - An array of actions available at or below the current level.
 */
const getAvailableActions = (currentLevel, skillData) => {
    if (currentLevel <= 0) {
      return { error: 'Invalid current level. Please enter a valid level.' };
    }

    // Filter available actions based on the current level
    const availableActions = skillData.filter(action => action.Level <= currentLevel);

    return availableActions.length > 0 ? availableActions : { error: 'No actions available at current level.' };
  };
  
  export default getAvailableActions;
  