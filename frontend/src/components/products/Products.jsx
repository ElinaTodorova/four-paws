// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import * as services from "../../services/categoryServices";

// export default function Products() {
//   const [allProducts, setAllProducts] = useState([]);
//   const { animal } = useParams();

//   useEffect(() => {
//     services
//       .getAll(animal)
//       .then((res) => console.log(res))
//       .catch((error) => {
//         // Gérer les erreurs ici
//         console.error("Error fetching products:", error);
//       });
//   }, []);
// }
