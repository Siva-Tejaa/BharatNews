export const API_KEY = `21fd36a8ae3543528f6dd5531fb1d3fb` ;

export const FILTERS = `&language=en&pageSize=100&apiKey=${API_KEY}`

// https://newsapi.org/v2/top-headlines?${FILTERS}
export const TOP_HEADLINES_IN_WORLD = `https://newsapi.org/v2/top-headlines?sortBy=`;

// https://newsapi.org/v2/top-headlines?country=in&${FILTERS}
export const TOP_HEADLINES_IN_COUNTRY = `https://newsapi.org/v2/top-headlines?country=`;

// https://newsapi.org/v2/top-headlines?category=entertainment&${FILTERS}
export const CATEGORY_HEADLINES = `https://newsapi.org/v2/top-headlines?category=`;

// https://newsapi.org/v2/everything?q=india&${FILTERS}
export const SEARCH_NEWS = `https://newsapi.org/v2/everything?q=`;

export const NewsCategories = [
    {
      id:1,
      categoryName:"General",
      categoryValue:"general"

    },
    {
      id:2,
      categoryName:"India",
      categoryValue:"india"
    },
    // {
    //   id: 3,
    //   categoryName:"General",
    //   categoryValue: "general"
    // },
    {
      id: 3,
      categoryName:"Business",
      categoryValue: "business"
    },
    {
      id: 4,
      categoryName:"Entertainment",
      categoryValue: "entertainment"
    },
   {
      id: 5,
      categoryName:"Health",
      categoryValue: "health"
   },
   {
    id: 6,
    categoryName:"Science",
    categoryValue: "science"
  },
  {
    id: 7,
    categoryName:"Sports",
    categoryValue: "sports"
  },
  {
    id: 8,
    categoryName:"Technology",
    categoryValue: "technology"
 }
]

export const sort_articles = [
  {
    id:1,
    sortName:"Relevancy",
    sortValue:"relevancy"
  },
  {
    id:2,
    sortName:"Popularity",
    sortValue:"popularity"
  },
  {
    id:3,
    sortName:"PublishedAt",
    sortValue:"publishedAt"
  }
]


// export const countries = [
//   {
//     id:1,
//     countryName:"Argentina",
//     countryFlag:"https://newsapi.org/images/flags/ar.svg",
//     countryCode:"ar"
//   },
//   {
//     id:2,
//     countryName:"Australia",
//     countryFlag:"https://newsapi.org/images/flags/au.svg",
//     countryCode:"au"
//   },
//   {
//     id:3,
//     countryName:"Austria",
//     countryFlag:"",
//     countryCode:"at"
//   },
//   {
//     id:4,
//     countryName:"Belgium",
//     countryFlag:"",
//     countryCode:"be"
//   },
//   {
//     id:5,
//     countryName:"Brazil",
//     countryFlag:"",
//     countryCode:"br"
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
//   {
//     id:,
//     countryName:"",
//     countryFlag:"",
//     countryCode:""
//   },
  
// ]


