// import demo from './Assets/SvgImages/demo.svg'
import { Box, Container } from "@material-ui/core";
import "./App.css";
import NavBar from "./Components/AppBar";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";
import AllLanding from "./Components/AllLanding";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import About from "./Components/About";

function App() {
  return (
    <Box className="App" mt={4}>
      <Container>
        <NavBar />
      </Container>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={AllLanding} />
      </Switch>
      <Box pt={4} style={{ backgroundColor: "#06063F" }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
