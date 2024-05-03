const dummyBookData = [
  {
    id: "0000",
    title: "Wimpy Kid",
    author: "Greg",
    categories: [{ categ: "Comedy" }, { categ: "Adventure" }],
  },
  {
    id: "1",
    title: "Wimpy Kid V2.0",
    author: "Greg",
    categories: [{ categ: "Comedy" }, { categ: "Adventure" }],
  },
  {
    id: "2",
    title: "Wimpy Kid V3.0",
    author: "Greg",
    categories: [{ categ: "Comedy" }, { categ: "Adventure" }],
  },
];

const genres = [
  //   { value: "All", label: "All" },
  { value: "Fiction", label: "Fiction" },
  { value: "Mystery", label: "Mystery" },
  { value: "Action", label: "Action" },
  { value: "Adventure", label: "Adventure" },
  { value: "Drama", label: "Drama" },
  { value: "Science", label: "Science" },
  { value: "Humor", label: "Humor" },
  { value: "Crime", label: "Crime" },
  { value: "Horror", label: "Horror" },
  { value: "Fantasy", label: "Fantasy" },
  { value: "Conspiracy", label: "Conspiracy" },
  { value: "Thriller", label: "Thriller" },
  { value: "Suspense" , label : "Suspense"} ,
];

const options = [
  { value: 'lower first', label: 'Lower first' },
  { value: 'higher first', label: 'Higher first' },
  { value: 'name (a-z)', label: 'Name (A-Z)' },
  { value: 'name (z-a)', label: 'Name (Z-A)'}
]

const sortOpt = [
  { value: 'borrow recent', label: 'Borrow Date (Recent first)' },
  { value: 'borrow older', label: 'Borrow Date (Older first)' }
];

const statusOpt = [
  { value: 'all', label:"All"},
  { value: 'pending', label: 'Pending' },
  { value: 'retunred', label: 'Returned' }
];


export { dummyBookData, genres,options, sortOpt, statusOpt };
