// import React, { useEffect, useState } from "react";
// import FlavanoidTable from "./components/FlavanoidTable";
// import GammaTable from './components/GammaTable';
// import { calculateFlavonoidMeasures } from "./utils/calculateMeasures";
// import {createGamma, calculateGamma} from "./utils/createGamma";
// import * as wineData from "./data/Wine-Data.json";

// const App = () => {
//   const [flavanoidMeasures, setFlavanoidMeasures] = useState({});
//   const [gammaValues, setGammaValues] = useState({});
//   useEffect(() => {
//     const calculateMeasures = () => {
//       const flavanoids = calculateFlavonoidMeasures(wineData.default);
//       setFlavanoidMeasures(flavanoids);
//     };

//     calculateMeasures();
//   }, []);

//   const gammaData = createGamma(wineData.default);
  
//   useEffect(() => {
//     const calculateGammaMeasures = () => {
//       const gamma = calculateGamma(gammaData);
//       setGammaValues(gamma);
//     };

//     calculateGammaMeasures();
//   }, []);
//   return (
//     <div>
//       <div>
//         <FlavanoidTable data={flavanoidMeasures} />
//       </div>
//       <div>
//         <GammaTable data={gammaValues} />
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useEffect, useState } from "react";
import FlavanoidTable from "./components/FlavanoidTable";
import GammaTable from './components/GammaTable';
import { calculateFlavonoidMeasures } from "./utils/calculateMeasures";
import { createGamma, calculateGamma } from "./utils/createGamma";
import * as wineData from "./data/Wine-Data.json";

const App = () => {
  const [flavanoidMeasures, setFlavanoidMeasures] = useState({});
  const [gammaValues, setGammaValues] = useState({});

  useEffect(() => {
    const calculateAllMeasures = async () => { // Make an async function for potential future work
      const flavanoids = calculateFlavonoidMeasures(wineData.default);
      const gammaData = createGamma(wineData.default);
      const gamma = calculateGamma(gammaData);

      setFlavanoidMeasures(flavanoids);
      setGammaValues(gamma);
    };

    calculateAllMeasures();
  }, []); 

  return (
    <div>
      <div>
        <FlavanoidTable data={flavanoidMeasures} />
      </div>
      <div>
        <GammaTable data={gammaValues} />
      </div>
    </div>
  );
};

export default App;
