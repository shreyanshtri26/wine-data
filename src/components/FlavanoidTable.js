import React from 'react';
import './style.css';

const FlavonoidTable = ({ data }) => {
  if (!data || Object.keys(data).length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>Flavanoids Measures</h2>
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th><h3>Measure</h3></th>
            {Object.keys(data).map((classValue) => (
              <th key={classValue}>Class {classValue}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavonoids Mean</td>
            {Object.keys(data).map((classValue) => (
              <td key={classValue}>{data[classValue]['mean']}</td>
            ))}
          </tr>
          <tr>
            <td>Flavonoids Median</td>
            {Object.keys(data).map((classValue) => (
              <td key={classValue}>{data[classValue]['median']}</td>
            ))}
          </tr>
          <tr>
            <td>Flavonoids Mode</td>
            {Object.keys(data).map((classValue) => (
              <td key={classValue}>{data[classValue]['mode']}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlavonoidTable;
