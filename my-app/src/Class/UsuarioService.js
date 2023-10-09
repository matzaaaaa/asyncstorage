import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//npmi@react-native-async-storage/async-storage
//Definicionesdeconstantes.
const USERNAME_KEY = "KEY_USER"; //
const PASSWORD_KEY = "KEY_PASSWORD"; //
class UsuarioService {
  static login = async (userName, password) => {
    let isValid;
    
    
      console.log("hola");
      if (userName === "M" && password ==="M")
      {
        console.log("el username en login es:", userName);
       // almacenarCredenciales(userName, password);
        console.log("hola1");
        isValid= true;
      }
      else{
        console.log("el username en login(false) es:", userName, password);
        isValid = false;
      }
    
    console.log(isValid, "isValid login");
    return isValid;
    
  };
  static automaticlogin = async () => {
    //Obtiene las credenciales almacenadas e intenta loguearse.

    let isValid = false;
    let userPass = await this.obtenerCredenciales();
     isValid = await this.login(userPass.userName, userPass.password);
     console.log(isValid, "isValid");
    return isValid;
  };
  //Eliminalascredencialesalmacenadasalcerrarsesión
  static eliminarCredenciales = async () => {
    let returnValue = false;  
    try {    
      await AsyncStorage.removeItem(USERNAME_KEY);
      await AsyncStorage.removeItem(PASSWORD_KEY);
      returnValue  = true;  
    } 
    catch(e) {    
      console.log("error", e); 
    }  
    return returnValue;

  };
  static almacenarCredenciales = async (userName, password) => {
    //Almacena las credenciales en el asyncStorage
    //(para leer las al iniciar la próxima vez)
    try 
    {    
      await AsyncStorage.setItem(USERNAME_KEY, userName);  
      await AsyncStorage.setItem(PASSWORD_KEY, password);  
    } 
    catch(e) {    
      // error  
    } 
  };
  static obtenerCredenciales = async () => {
    let  returnValue;
    const storedUserName = await AsyncStorage.getItem(USERNAME_KEY); 
    const storedPassword = await AsyncStorage.getItem(PASSWORD_KEY); 

    returnValue = { 
        userName: storedUserName, 
        password: storedPassword 
    };
    return returnValue;
  };
}
export default UsuarioService;