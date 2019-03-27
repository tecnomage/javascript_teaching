const cities = {
  Lyon: 'France',
  Berlin: 'Germany',
  Paris: 'France',
  Dossemdorf : 'Germany'
};
let countries = Object.keys(cities).reduce(
  (acc, k) => (acc[cities[k]] = [...(acc[cities[k]] || []), k], acc), {});

  console.log(countries)
   console.log(Object.entries(countries))