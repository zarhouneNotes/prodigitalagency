"use client"
import { createTheme , responsiveFontSizes } from "@mui/material";
import { blue, brown, grey, orange, pink, teal } from "@mui/material/colors";

const myTheme = createTheme({

    palette : {
        primary : {
            main : "#C11FB0"
            
        } , 
        secondary : {
            main : '#66545e'
        } ,
        info : {
            main : 'rgba(255, 255, 255, 1)'
        } ,
        error : {
            main : "#f44336"
        },
        success : {
            main : "#217346"
        },
   
        
    } ,
    components : {
        MuiButton : {
            styleOverrides : {
                root : {
                    /////////style
                    borderRadius :'0px' , 
                    padding : "9px 20px",
                    textTransform :'none',
                    fontFamily : 'Poppins',
                    textWrap  :"nowrap" , 
                    // color : 'white'
                    // scale :''
               
                }
            }
        } , 
         
        MuiTypography :{
            styleOverrides :{
                root : {
                    fontFamily : 'Poppins',
                }
            }
        },
        MuiTableHead : { 
            styleOverrides :{
            root : {
                // fontFamily : 'Poppins',
                color : "orange",
                background : grey[200]
            }
        }} ,
        MuiTableCell : {styleOverrides :{
            root : {
                // fontFamily : 'Poppins',
                textAlign : 'center',
                height : '60px'
            }
        }}
    
    }
})

export default responsiveFontSizes(myTheme)