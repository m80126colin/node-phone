'use stricts';

// if no country is given, default to USA. DO NOT move this position

// http://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#900.E2.80.93999
// http://www.howtocallabroad.com/usa/
// http://areacode.org/
// http://countrycode.org/usa

function getISO3166(country) {
  // assign default to USA country first
  var iso3166 = {};
  var upper_case_country = country.toUpperCase();

  switch (country.length) {
    case 0:
      iso3166 = iso3166_data[0];
      break;
    case 2:
      iso3166_data.every(function (iso3166_datum) {
        if (upper_case_country === iso3166_datum.alpha2) {
          iso3166 = iso3166_datum;
          return false;
        }

        return true;
      });
      break;
    case 3:
      iso3166_data.every(function (iso3166_datum) {
        if (upper_case_country === iso3166_datum.alpha3) {
          iso3166 = iso3166_datum;
          return false;
        }

        return true;
      });
      break;
    default:
      iso3166_data.every(function (iso3166_datum) {
        if (upper_case_country === iso3166_datum.country_name.toUpperCase()) {
          iso3166 = iso3166_datum;
          return false;
        }

        return true;
      });
  }

  return iso3166;
};
