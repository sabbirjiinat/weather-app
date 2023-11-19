import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoApiOptions, GeoApiUrl } from "../../Api/Api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOption  = async (inputValue) => {
    return fetch(`${GeoApiUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,GeoApiOptions).then(res => res.json()).then(data =>{
        console.log(data);
        return {
            options:data.data.map(city => {
                return{
                    value:`${city.latitude} ${city.longitude}`,
                    label:`${city.name} ${city.countryCode}`,
                }
            })
        }
    })
  };
  return (
    <AsyncPaginate
   
      placeholder="Search For City"
      debounceTimeout={6000}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOption}
    />
  );
};

export default Search;
