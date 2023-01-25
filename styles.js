import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  greenButton: {
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: "50%",
    marginRight: "50%",
    width: "50%",
    height: "5%",
    borderRadius: 20,
    elevation: 0,
    backgroundColor: "#0E7835",
  },

  greenButtonText: {
    fontSize: 16,
    // lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
  },

  editButton: {
    justifyContent: "center",
    width: 100,
    borderRadius: 13,
    backgroundColor: "grey",
    alignSelf: "center",
  },

  editButtonText: {
    fontSize: 12,
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

  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 36,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
    paddingBottom: "5%",
  },

  wholepagecontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 8,
    paddingRight: 8,
  },

  textInputBox: {
    width: "90%",
    alignSelf: "center",
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    color: "black",
    paddingLeft: "3%",
    backgroundColor: "white",
    marginBottom: "2%",
  },

  bodyText: {
    alignSelf: "center",
    fontSize: 16,
    textAlign: "center",
  },

  DatePickerAtRendercontainer: {
    minHeight: 16,
    backgroundColor: 0,
    width: "90%",
    alignSelf: "center",
    marginBottom: "2%",
  },

  dashboardSquare: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    flex: 1,
    margin: "2%",
  },

  dashboardrowContainer: {
    flexDirection: "row",
    marginLeft: "3%",
    marginRight: "3%",
    paddingBottom: "3%",
    // flexWrap: "wrap",
  },

  dashboardText: {
    fontSize: 14,
    lineHeight: 21,
    color: "white",
    marginLeft: "7%",
  },

  dashboardSubtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginLeft: "7%",
    marginTop: "4%",
  },

  dashboardPrice: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    paddingTop: "6%",
    marginLeft: "7%",
  },

  dashboardWelcome: {
    color: "black",
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: "3%",
    marginTop: "4%",
    padding: 5,
  },

  dashboardProgresstitle: {
    color: "grey",
    fontSize: 16,
    marginLeft: "3%",
    padding: 5,
  },

  backgroundcover: {
    width: "100%",
    height: "100%",
    position: "absolute",
    flex: 1,
    opacity: 0.2,
  },

  inputPageContainer: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },

  profilepicture: {
    width: 130,
    height: 130,
    flex: 0,
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

  pantryItemName: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },

  pantryExpiryDate: {
    flex: 1,
    // alignSelf: "center",
    alignItems: "flex-end",
    paddingRight: 8,
    width: "60%",
    borderRadius: 35,
  },

  pantryExpiryDateParent: {
    backgroundColor: "lightblue",
  },

  pantryItemParentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5f5f4",
    width: "100%",
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
    height: 175,
    width: "50%",
    // alignItems: "center",
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
    height: "50%",
    backgroundColor: "lightgray",
    margin: 0,
  },

  logoGif: { width: 400, height: 400, opacity: 0.3, alignSelf: "center" },
});
