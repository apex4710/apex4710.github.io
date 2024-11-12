# UEFA Champions League Predictor

Welcome to the UEFA Champions League Predictor! This web application allows you to enter match scores and view the updated points table based on the League Phase Tiebreakers.

## Features
- **View Fixtures**: See all the match fixtures for each matchday.
- **Enter Scores**: Input the scores to update the points table.
- **Updated Points Table**: Automatically updates based on the entered results.
- **Export Results**: (Available in export version) Export your predictions and results as a PDF file.

## How to Use

### Method 1: Download Files

1. **Ensure File Placement**: Ensure that `index.html` and `script.js` are in the same directory.

2. **Open the Application**: Open the `index.html` file in your preferred web browser.

3. **View Fixtures**:
   - The fixtures for each matchday are listed under the "Fixtures" section.
   - Each matchday button will expand to show the fixtures. Each fixture shows the match date, teams, and score input fields.

4. **Enter Scores**:
   - Use the input fields to enter the scores for each fixture.
   - The scores will automatically update the points table based on the entered results.

5. **View Points Table**:
   - The points table is displayed under the "Points Table" section.
   - The table shows the position, team name, matches played, wins, draws, losses, goals for, goals against, goal difference, and points.
   - Teams are color-coded in the points table:
     - **Green**: Top 8 teams will directly qualify to the Round of 16.
     - **Yellow**: Teams ranked 9 to 24 will play playoffs.
     - **Red**: Teams ranked 25 to 36 are eliminated from the UEFA Champions League.

6. **Export Data** (Available in export version):
   - Click the "Export as PDF" button to save your predictions and results as a PDF file.

### Method 2: Use JSFiddle

#### Without Export Feature
If you prefer not to download the files, you can use the version without the export feature on JSFiddle:

1. **Open JSFiddle**: Go to [this JSFiddle link](https://jsfiddle.net/apexpred/pj42n8f5/).

2. **Run the Application**: Click on the "Run" button at the top of the JSFiddle interface.

3. **Follow the steps in Method 1**: View fixtures, enter scores, and view the points table as described above.

#### With Export Feature
For the version with the export feature, use the following JSFiddle link:

1. **Open JSFiddle**: Go to [this JSFiddle link](https://jsfiddle.net/apexpred/q0wtu4cL/).

2. **Run the Application**: Click on the "Run" button at the top of the JSFiddle interface.

3. **Follow the steps in Method 1**: View fixtures, enter scores, view the points table, and export data as described above.

## Tiebreakers

The points table is sorted using the following League Phase Tiebreakers:
1. Goal difference
2. Goals scored
3. Away goals scored
4. Wins
5. Away wins

## Disclaimer

The results are updated till Matchday 4.

## Credits

This project was made with the help of Copilot.

Credit to football.db for providing the fixtures data: [football.db Champions League](https://github.com/openfootball/champions-league).

## License

This project is licensed under the MIT License.
