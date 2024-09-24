import App from "./App.tsx";
import "./index.css";
import { MyProvider } from "./MyProvider.tsx";

export default function AppEntrypoint() {
  return (
    <MyProvider>
      <App />
    </MyProvider>
  );
}