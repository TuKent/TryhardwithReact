import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E52326",
    // alignItems: "center",
    // justifyContent: "center",

  },
  image: {
    height: 400,
    width: undefined,
    resizeMode: "contain",
  },
  textButton: {
    padding: 25, height: 80, overflow: 'hidden', 
    borderRadius: 40, backgroundColor: '#EE3B3B' , 
    marginHorizontal: 50, marginVertical: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  }
});
export default styles;