import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="logo-link">
      <img src="/media/icons/YrgoLogo.png" alt="YrgoLogo" />
    </Link>
  );
}


// export default function Logo() {
//   return (
//     <img
//       src="/media/icons/YrgoLogo.png"
//       alt="Yrgo logo"
//       className="app-logo"
//     />
//   );
// }