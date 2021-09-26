// import demo from './Assets/SvgImages/demo.svg'
import { Box, Container } from "@material-ui/core";
import "./App.css";
import NavBar from "./Components/AppBar";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";
import AllLanding from "./Components/AllLanding";
import Contact from "./Components/Contact";

function App() {
  return (
    <Box className="App" mt={4}>
      <Container>
        {/* <img src={demo} className="App-logo" alt="logo" /> */}
        <NavBar />
      </Container>
      <Switch>
        {/* <Route path="/signup" component={SignUp} /> */}
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
