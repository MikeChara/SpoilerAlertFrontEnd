import * as React from "react";
// import MainContainer from "./navigation/MainContainer";
import RootNavigation from "./navigation/RootNavigation";
import { styles } from "./styles.js";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { LogBox } from "react-native";
import registerNNPushToken from "native-notify";
//ignores all messages that may otherwise be passed to the device
//they still show in the terminal
LogBox.ignoreAllLogs();

function App() {
  registerNNPushToken(6107, "RscfdJGUHSLru74JJd6STe");
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <RootNavigation styles={styles} />
    </ApplicationProvider>
  );
}

export default App;
