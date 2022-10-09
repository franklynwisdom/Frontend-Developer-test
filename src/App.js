import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SearchContainer from "./components/SearchContainer";
import Star from "./components/Star";
import StyledApp from "./styles/App.styled";
import GlobalStyle from "./styles/Global.styled";


function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Nav />
      <Hero/>
      <Star/>
      <SearchContainer/>
    </StyledApp>
  );
}

export default App;
