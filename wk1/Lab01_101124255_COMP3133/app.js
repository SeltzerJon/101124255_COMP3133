const fs = require('fs');
const csv = require('csv-parser');

const canada_txt = 'canada.txt';
const usa_txt = 'usa.txt';
const countries = 'input_countries.csv';

const deleteIfExists = (fileName) => {
  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
    console.log(`${fileName} deleted successfully.`);
  } else {
    console.log(`${fileName} does not exist.`);
  }
};

deleteIfExists(canada_txt);
deleteIfExists(usa_txt);

fs.createReadStream(countries)
  .pipe(csv())
  .on('data', (row) => {
    if (row.country) {
      const countryLowerCase = row.country.toLowerCase();
      
      if (countryLowerCase === 'canada') {
        fs.appendFileSync(canada_txt, `${row.country},${row.year},${row.population}\n`);
      } else if (countryLowerCase === 'united states') {
        fs.appendFileSync(usa_txt, `${row.country},${row.year},${row.population}\n`);
      }
    }
  })
  .on('end', () => {
    console.log('Filtering and writing to canada.txt and usa.txt.');
  });
