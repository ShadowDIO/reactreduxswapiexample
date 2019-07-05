import SWAPI from '../apis/SWAPI';

export const selectCategory = (category = '', searchTerm ='') => {
    console.log('selectCategory Action Hit!', category);

    return async (dispatch) => { 

        if (category) {

            var urlPath = `/${category}`;

            if (searchTerm)
                urlPath = `/${category}/?search=${searchTerm}`;

            console.log("Url Path", urlPath);

            var response = await SWAPI.get(urlPath);

            var results = [];

            if (response)
                results = response.data.results;
        }

        console.log(response);

            dispatch({
                type: 'CATEGORY_SELECTED',
                payload: {
                    category: category,
                    filteredSubCategories: results
                }
        });
    };
}

export const selectSubcategory = (url = '') => {
    console.log('selectSubcategory Action Hit!', url);

    return async (dispatch) => {

        var response = [];

        if (url) {
            const urlPath = url.slice(21, -1);

            response = await SWAPI.get(`/${urlPath}`);

            if (!response)
                response = [];
        }

        dispatch({
            type: 'SUBCATEGORY_SELECTED',
            payload: {
                subCategory: url,
                filteredResults: response.data
            }
        });
    };
}


export const FilterResultsDetails = (searchTerm = '') => {
    console.log('FilterResultsDetails', searchTerm);

    return (
        {
            type: 'RESULT_DETAIL_FILTERED',
            payload: {
                        "climate": "Arid",
                        "diameter": "10465",
                        "gravity": "1 standard",
                        "name": "Tatooine",
                        "orbital_period": "304",
                        "population": "200000",
                        "residents": [
                        "https://swapi.co/api/people/1/",
                        "https://swapi.co/api/people/2/"
                        ]
                }
        });
}