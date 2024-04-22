# Wine Data Analysis

This project calculates statistical measures (mean, median, mode) for the "Flavanoids" and "Gamma" properties of the Wine Data Set, grouped by the "Alcohol" class. The results are displayed in two separate tables using the Mantine UI library.

## Installation

1. Clone the repository: `git clone https://github.com/shreyanshtri26/wine-data.git`
2. Navigate to the project directory: `cd wine-data`
3. Install dependencies: `yarn install`

## Usage

1. Start the development server: `yarn start`
2. Open your browser and visit `http://localhost:3000`

## Screenshots

![Flavanoid Table](screenshots/flavanoid-table.png)
![Gamma Table](screenshots/gamma-table.png)

## Project Structure

- `src/data/wineData.js`: Contains the wine data set as a JavaScript object.
- `src/utils/calculateMeasures.js`: Utility functions to calculate class-wise mean, median, and mode.
- `src/utils