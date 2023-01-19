import { StyleSheet } from "react-native";
import React, { useState } from "react";
import MainContainer from "./MainContainer";
import AuthContainer from "./AuthContainer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import verifyAndInsert from "../Functions/verifyAndInsert";

export default function RootNavigation() {
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // user is signed in
      setLoggedIn(true);
      verifyAndInsert(user.uid);
    } else {
      // User is signed out
      setLoggedIn(false);
    }
  });

  return loggedIn ? (
    <MainContainer styles={styles} />
  ) : (
    <AuthContainer styles={styles} />
  );
}

const styles = StyleSheet.create({
  purplebutton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 20,
    elevation: 0,
    backgroundColor: "#5951B7",
  },

  purplebuttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  addpagetext: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "left",
  },

  pagestyle: {
    flex: 1,
    alignItems: "center",
    textAlign: "left",
    backgroundColor: "white",
  },

  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 5,
  },

  displaybox: {
    backgroundColor: "white",
    borderRadius: 25,
    width: "100%",
  },

  wholepagecontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingLeft: 8,
    paddingRight: 8,
  },

  textinput: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  DatePickerAtRendercontainer: {
    minHeight: 16,
    backgroundColor: 0,
    width: "80%",
  },

  editButton: {},

  editbuttontext: {},

  dashboardParent: {
    flexDirection: "column",
  },
  dashboardSquare1: {
    backgroundColor: "#9FE7D5",
    width: 150,
    height: 150,
    borderRadius: 10,
    flex: 1,
    margin: 15,
  },
  dashboardSquare2: {
    backgroundColor: "#F8CB63",
    width: 150,
    height: 150,
    borderRadius: 10,
    flex: 1,
    margin: 15,
  },
  dashboardSquare3: {
    backgroundColor: "#ADC8EB",
    width: 150,
    height: 150,
    borderRadius: 10,
    flex: 1,
    margin: 15,
  },

  dashboardSquare4: {
    backgroundColor: "#F9CBC3",
    width: 150,
    height: 150,
    borderRadius: 10,
    flex: 1,
    margin: 15,
  },

  textGray: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "gray",
    marginLeft: 10,
  },

  dashboardSubtitle: {
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 3,
    color: "#160042",
  },

  dashboardPrice: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#160042",
    padding: 10,
  },

  dashboardrowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
