import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import "./App.css";
import ArtContainer from "./components/ArtContainer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SearchContainer from "./components/SearchContainer";
import Star from "./components/Star";
import StyledApp from "./styles/App.styled";
import GlobalStyle from "./styles/Global.styled";

function App() {
  const queryClient = new QueryClient();

  return (
    <StyledApp>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Nav />
        <Hero />
        <Star />
        <SearchContainer />
        <ArtContainer/>
      </QueryClientProvider>
    </StyledApp>
  );
}

export default App;
