import { Box, Container } from "@material-ui/core";

import PerfectPlace from "./PerfectPlace";
import HowItActs from "./HowItActs";

function AllLanding() {
  return (
    <Box className="App" mt={4}>
      <Container>
        <PerfectPlace />
      </Container>
      <Box style={{ backgroundColor: "#fff" }} mt={4} pb={4}>
        <HowItActs />
      </Box>
    </Box>
  );
}

export default AllLanding;
