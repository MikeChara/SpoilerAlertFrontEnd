import * as React from "react";
// import MainContainer from "./navigation/MainContainer";
import RootNavigation from "./navigation/RootNavigation";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
const environmentVariables = { myIP: "", PORT: 3000 };

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <RootNavigation />
    </ApplicationProvider>
  );
}

export default App;
