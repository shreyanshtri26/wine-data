export const createGamma = (data) => {
  const newData = data.map((entry) => ({
    ...entry,
    Gamma: ((entry.Ash * entry.Hue) / entry.Magnesium).toFixed(3),
  }));
  return newData;
};

export function calculateGamma(data) {
  const results = {};

  // Group data by Alcohol class
  const dataByClass = data.reduce((groups, item) => {
    const alcoholClass = item.Alcohol;
    groups[alcoholClass] = groups[alcoholClass] || [];
    groups[alcoholClass].push(item.Gamma); 
    return groups;
  }, {});
  // Calculate measures for each class  
  for (const alcoholClass in dataByClass) {
    const gammaValues = dataByClass[alcoholClass];

    results[alcoholClass] = {
      mean: calculateMean(gammaValues),
      median: calculateMedian(gammaValues),
      mode: calculateMode(gammaValues)
    };
  }

  return results;
}
function calculateMean(data) {
  const sum = data.reduce((total, num) => total + num, 0);
  return sum / data.length;
}

function calculateMedian(data) {
  const sortedData = data.sort((a, b) => a - b);
  const midIndex = Math.floor(sortedData.length / 2);

  if (sortedData.length % 2 === 0) {
    return (sortedData[midIndex - 1] + sortedData[midIndex]) / 2;
  } else {
    return sortedData[midIndex];
  }
}

function calculateMode(data) {
  const frequencyMap = {};
  let maxFreq = 0;
  let mode;

  for (const num of data) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    if (frequencyMap[num] > maxFreq) {
      maxFreq = frequencyMap[num];
      mode = num;
    }
  }

  return mode;
}

