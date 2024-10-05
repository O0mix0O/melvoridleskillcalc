import experienceData from '../experience/experienceTable';

const xpToLevel = (level) => {
  const levelData = experienceData.find(l => l.Level === level);
  if (!levelData) {
    return { XP: 0 };
  }
  return levelData;
};

export default xpToLevel;
