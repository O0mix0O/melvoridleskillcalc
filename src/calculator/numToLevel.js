import getAvailableActions from './getAvailableActions';
import getActionsRequired from './getActionsRequired';

const numToLevel = (currentLevel, desiredLevel, skillData) => {
    const availableActions = getAvailableActions(currentLevel, skillData);
    const actionsRequired = getActionsRequired(currentLevel, desiredLevel, availableActions);

    return actionsRequired;
};

export default numToLevel;
