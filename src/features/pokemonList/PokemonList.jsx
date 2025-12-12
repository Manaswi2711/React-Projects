// import React from "react";
// import { useGetAllPokemonQuery } from "../../services/pokemonApi";
// import { Link } from "react-router-dom";

// function PokemonList() {
//   const { data, isLoading } = useGetAllPokemonQuery();

//   if (isLoading) return <h2 style={styles.loading}>Loading...</h2>;
  
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Pokémon List</h1>
//       <ul style={styles.list}>
//         {data.results.map((pokemon) => (
//           <li key={pokemon.name} style={styles.listItem}>
//             <Link to={`/pokemon/${pokemon.name}`} style={styles.link}>
//               {pokemon.name.toUpperCase()}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "40px 20px",
//     textAlign: "center",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   title: {
//     fontSize: "2.5rem",
//     fontWeight: "700",
//     marginBottom: "30px",
//     color: "#ffcb05",
//     textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
//   },
//   loading: {
//     textAlign: "center",
//     marginTop: "50px",
//     fontSize: "2rem",
//     color: "#555",
//   },
//   list: {
//     listStyle: "none",
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
//     gap: "20px",
//     padding: 0,
//     margin: 0,
//   },
//   listItem: {
//     background: "linear-gradient(135deg, #f5af19, #f12711)",
//     borderRadius: "12px",
//     padding: "20px 10px",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//     transition: "transform 0.3s, box-shadow 0.3s",
//   },
//   link: {
//     color: "white",
//     fontWeight: "600",
//     textDecoration: "none",
//     fontSize: "1.1rem",
//   },
// };

// export default PokemonList;


import React from "react";
import { useGetAllPokemonQuery } from "../../services/pokemonApi";
import { Link } from "react-router-dom";

function PokemonList() {
  const { data, isLoading } = useGetAllPokemonQuery();

  if (isLoading)
    return <h2 style={styles.loading}>Loading Pokémon...</h2>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pokémon Explorer</h1>

      <ul style={styles.list}>
        {data.results.map((pokemon) => (
          <li key={pokemon.name} style={styles.listItem}>
            <Link to={`/pokemon/${pokemon.name}`} style={styles.link}>
              {pokemon.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          li:hover {
            transform: scale(1.05);
            box-shadow: 0 12px 30px rgba(0,0,0,0.35);
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    background: "linear-gradient(135deg, #1cd8d2, #93edc7)",
    backgroundSize: "400% 400%",
    animation: "gradientMove 15s ease infinite",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#ffffff",
    textShadow: "2px 2px 12px rgba(0,0,0,0.6)",
  },
  loading: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "2rem",
    color: "#ffffff",
    textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
  },
  list: {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "20px",
    padding: 0,
    margin: 0,
  },
  listItem: {
    background: "linear-gradient(135deg, #00f2fe, #4facfe)",
    borderRadius: "16px",
    padding: "25px 10px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  link: {
    color: "#ffffff",
    fontWeight: "700",
    textDecoration: "none",
    fontSize: "1.2rem",
    textShadow: "1px 1px 6px rgba(0,0,0,0.4)",
  },
};

export default PokemonList;
