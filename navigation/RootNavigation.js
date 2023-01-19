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
    backgroundColor: "#ED914D",
    width: 150,
    height: 150,
    borderRadius: 10,
    flex: 1,
    margin: 10,
    marginLeft: 20,
  },
  dashboardSquare2: {
    backgroundColor: "#FECB2F",
    width: 150,
    height: 150,
    borderRadius: 10,
    flex: 1,
    margin: 10,
    marginRight: 20,
  },
  dashboardSquare3: {
    backgroundColor: "#0E7835",
    width: 150,
    height: 150,
    borderRadius: 10,
    flex: 1,
    margin: 10,
    marginLeft: 20,
  },

  dashboardSquare4: {
    backgroundColor: "#DE4D28",
    width: 150,
    height: 150,
    borderRadius: 10,
    flex: 1,
    margin: 10,
    marginRight: 20,
  },

  textGray: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    marginLeft: 18,
  },

  dashboardSubtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    color: "white",
    alignSelf: "center",
  },

  dashboardPrice: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },

  dashboardrowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  dashboardWelcome: {
    color: "black",
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 20,
    padding: 5,
  },

  dashboardProgresstitle: {
    color: "grey",
    fontSize: 16,
    marginLeft: 20,
    padding: 5,
  },
});
