import { StyleSheet } from "react-native";

export default StyleSheet.create({
    cotainerStyle:{
     padding:25,
     flex:1,
     backgroundColor:'white',
    },
    colorItem:{
        width:15,
        height:15,
        borderWidth:1,
        borderColor:'black',
        marginHorizontal:3,
    },
    itemContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        borderWidth:2,
        padding:10,
        borderRadius:6,
        borderWidth:1,
        marginBottom:15,
    },
    colorsContainer:{
        flexDirection:'row',
    },
    titleStyle:{
        fontSize:18,
        // fontWeight:600,
      color:'white'
    }
})