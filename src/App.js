// import demo from './Assets/SvgImages/demo.svg'
import { Box, Container } from "@material-ui/core";
import "./App.css";
import NavBar from "./Components/AppBar";
import PerfectPlace from "./Components/PerfectPlace";
import HowItActs from "./Components/HowItActs";
import Footer from "./Components/Footer";

function App() {
  return (
    <Box className="App" mt={4}>
      <Container>
        {/* <img src={demo} className="App-logo" alt="logo" /> */}
        <NavBar />
        <PerfectPlace />
      </Container>
      <Box style={{ backgroundColor: "#fff" }} mt={4} pb={4}>
        <HowItActs />
      </Box>
      <Box pt={4} style={{ backgroundColor: "#06063F" }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
