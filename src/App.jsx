import AppRouter from "./router/AppRouter";
import { MingelProvider } from "./context/MingelContext";

export default function App() {
  return (
    <MingelProvider>
      <AppRouter />
    </MingelProvider>
  );
}

//export default function App() {
  //return <h1>Hello and welcome to TalentTalk!</h1>;
//}