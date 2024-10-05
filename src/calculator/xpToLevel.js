import experienceData from '../experience/experienceTable';

// Optional: Convert the array into a Map for faster lookups
const experienceMap = new Map(experienceData.map(item => [item.Level, item]));

const xpToLevel = (level) => {
    // Early return for invalid levels
    if (level <= 0) {
        return { Level: null, XP: 0 };
    }

    // Use Map for faster lookups, or fallback to the original array search if you prefer not to use Map
    const levelData = experienceMap.get(level);

    if (!levelData) {
        return { Level: null, XP: 0 };  // Return null Level for clarity
    }

    // Destructure XP and Level for more explicit returns
    const { Level, XP } = levelData;
    return { Level, XP };
};

export default xpToLevel;
