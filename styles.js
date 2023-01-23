import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  purplebutton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 20,
    elevation: 0,
    backgroundColor: "#0E7835",
  },

  purplebuttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    alignSelf: "center",
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
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
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
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    outline: "white",
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
    marginLeft: "12%",
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
  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    height: "80%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    paddingVertical: 12,
    paddingHorizontal: 60,
    margin: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },

  profilescreenbg: {
    width: 500,
    height: 700,
    position: "absolute",
    flex: 1,
  },

  profilepagecontainer: {
    paddingLeft: 40,
    paddingRight: 40,
    // alignItems: "center",
    top: 50,
  },

  profilepicture: {
    width: 130,
    height: 130,
    flex: 0,
    alignSelf: "center",
  },

  editbutton: {
    justifyContent: "center",
    width: 100,
    borderRadius: 13,
    backgroundColor: "grey",
    alignSelf: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 26,
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
