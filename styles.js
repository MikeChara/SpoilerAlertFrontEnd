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
    paddingRight: 8,
    paddingLeft: 8,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
  },

  wholepagecontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

  backgroundcover: {
    width: "100%",
    height: "100%",
    position: "absolute",
    flex: 1,
    opacity: 0.2,
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

  tinyCategoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 26,
  },

  swipeIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow",
  },

  pantryitemname: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },

  pantryexpirydate: {
    flex: 1,
    // backgroundColor: "green",
    alignSelf: "center",
    alignItems: "flex-end",
    paddingRight: 8,
  },

  pantryitemparentcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "orange",
    width: "100%",
    // padding: "2%",
    borderRadius: 35,
  },

  modalCenteredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "green",
    bottom: "10%",
  },

  modalTouchableOpacity: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
    // backgroundColor: "purple",
  },

  modalButtons: {
    // backgroundColor: "red",
    height: 100,
    width: 100,
  },

  modalParentView: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: "5%",
    paddingBottom: "8%",
    paddingRight: "5%",
    paddingLeft: "5%",
    height: "25%",
    width: "50%",
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

  modalIcons: { flex: 1, flexDirection: "row" },

  modalSmallText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "10%",
  },

  modalText: {
    textAlign: "center",
    paddingBottom: "15%",
    fontSize: 18,
    fontWeight: "bold",
    textColor: "white",
  },

  modalLine: {
    width: 1,
    height: 40,
    backgroundColor: "lightgray",
    margin: 0,
  },
});
