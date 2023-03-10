import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="h-fit min-h-screen bg-[#121212] px-2 pb-28">
        <Header />
        <Main />
        {/* <Footer /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
