// import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import React from 'react';
import { useState } from 'react';
import { fetchCountry } from '../server/country';
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Example /> */}
      <Todos />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

// function Example() {
//   const { isLoading, error, data } = useQuery('results', () => {
//     axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
//   });

//   if (isLoading) return 'Loading...';

//   if (error) return 'An error has occurred: ' + error;

//   return (
//     <div>
//       <h1>{data.results}</h1>
//       {/* <p>{data.description}</p>
//       <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
//       <strong>🍴 {data.forks_count}</strong> */}
//     </div>
//   );
// }
// const queryClient = useQueryClient();
function Todos() {
  console.log(fetchCountry.getAll);
  const [contries, setContries] = useState([]);
  const { isLoading, data, error, status } = useQuery('country list', fetchCountry.getAll(), {
    onSuccess: data => setContries(data),
  });
  console.log(data);
  console.log(isLoading);
  console.log(error);
  console.log(status);
  // return (
  //   <>
  //     {isLoading && <span>Loading...</span>}
  //     {error && <p>elements no found</p>}
  //     {data && (
  //       <ul>
  //         {data.map(country => (
  //           <li key={country.id}>
  //             <h3>{country.title}</h3>
  //             <p>{country.population}</p>
  //             <img src={country.image} alt="foto cantry"></img>
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </>
  // );
}
