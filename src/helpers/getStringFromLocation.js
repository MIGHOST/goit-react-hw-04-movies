import queryString from 'query-string';
const getStringFromLocation = location => queryString.parse(location.search).query; 
export default  getStringFromLocation;