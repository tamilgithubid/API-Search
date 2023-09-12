import axios from 'axios';

const SearchImages = async (term)=>{
   const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID DztPMFs3U619OF5ljYsJ7PQ6ea2e3krP9_zgDoGhmJA',

        },
        params:{
           query:term,
        },
        

    });
   
   return response.data.results;
};

export  default SearchImages;