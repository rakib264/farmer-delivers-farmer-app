import { View, Text, SafeAreaView, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react';
import GlobalSafeareaStyle from '../utils/GlobalSafeArea.jsx';
import { Ionicons } from 'react-native-vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Animated, {
  LightSpeedInLeft, 
  LightSpeedOutRight,
  Layout
} from 'react-native-reanimated';

const screenWidth = Dimensions.get('window').width;


const ProductScreen = ({ navigation }) => {
  const [productName, setProductName] = useState('');
  const [description, setDesription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [readyTime, setReadyTime] = useState('');
  const [foodType, setFoodType] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [data, setData] = useState({
    errorMsgName: '',
    errorMsgDescription: '',
    errorMsgCategory: '',
    errorMsgPrice: '',
    errorMsgReadyTime: '',
    errorMsgFoodType: '',
    errorMsgRating: '',
    errorMsgImage: '',
    errorMsgQuantity: '',
    isValidName: true,
    isValidDesc: true,
    isValidCate: true,
    isValidPrice: true,
    isValidFoodType: true,
    isValidRating: true,
    isValidReadyTime: true,
    isValidImage: true,
    isValidQuantity: true,
  })

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      let newFile = {
        uri: result.assets[0].uri,
        type: `test/${result.assets[0].uri.split(".")[1]}`,
        name: `test.${result.assets[0].uri.split(".")[1]}`,
      }
      handleUpload(newFile)
      // setImage(result.assets[0].uri);
    }
  };

  const handleUpload = async(image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'project2');
    formData.append('cloud_name', 'rakib264');
      const res = await fetch(
            'https://api.cloudinary.com/v1_1/rakib264/image/upload',
            {
              method: 'POST',
              body: formData,
            }
          );
          const data = await res.json();
          setImage(data.secure_url);
  }


  const handleSignupButton = () => {
    console.log(productName + '' + category + ' ' + image)
   }
   const onTapBack = () => {
     navigation.goBack()
   }
    

  return (
    <SafeAreaView style={GlobalSafeareaStyle.androidSafeArea}>
    <View style={styles.container}>
    <ScrollView>
    <View style={styles.wrapper}>
       <View style={styles.textWrapper}>
       <Text style={styles.textTitleStyle}>Add Product</Text>
       <Text style={styles.textLittleStyle}>Please, add your product and services...</Text>
       </View>
       <View style={{ paddingTop: 5}}>
        <View style={{ justifyContent: 'center',}}>
        <TextInput
         style={styles.textInputName}
         placeholder="Product Name"
         onChangeText={(text) => {
          if(text.length >= 3){
            setProductName(text)
            setData({
              ...data,
              isValidName: true
            })
          }
          else{
            setData({
              ...data,
              isValidName: false,
              errorMsgName: 'Product Name must be 3 digits'
            })
          }
         }}
         />
         <Ionicons style={{position: 'absolute', left: 10}} name='aperture-outline' size={30} color="black" />
        </View>
        <Animated.View
        entering={LightSpeedInLeft}
        exiting={LightSpeedOutRight}
        layout={Layout.springify()}>
        <Text style={styles.formErrors}>
          {
            data.isValidName === false ? `${data.errorMsgName}` : null
          }
        </Text>
        </Animated.View>
       </View>
       <View style={{ paddingTop: 5}}>
        <View style={{ justifyContent: 'center',}}>
        <TextInput
         style={styles.textInputDesc}
         placeholder="Product Description"
         onChangeText={(text) => {
          if(text.length >= 3){
            setDesription(text)
            setData({
              ...data,
              isValidDesc: true
            })
          }
          else{
            setData({
              ...data,
              isValidDesc: false,
              errorMsgDescription: 'Description must be 3 digits'
            })
          }
         }}
         />
         <Ionicons style={{position: 'absolute', left: 10}} name='aperture-outline' size={30} color="black" />
        </View>
        <Animated.View
        entering={LightSpeedInLeft}
        exiting={LightSpeedOutRight}
        layout={Layout.springify()}>
        <Text style={styles.formErrors}>
          {
            data.isLastName === false ? `${data.errorMsgLast}` : null
          }
        </Text>
        </Animated.View>
       </View>
       <View style={{ paddingTop: 5}}>
        <View style={{ justifyContent: 'center',}}>
        <TextInput
         style={styles.textInputName}
         placeholder="Product Price"
         onChangeText={(text) => {
          if(text.length >= 1){
            setPrice(text)
            setData({
              ...data,
              isValidPrice: true
            })
          }
          else{
            setData({
              ...data,
              isValidPrice: false,
              errorMsgPrice: 'Product price must be requied'
            })
          }
         }}
         />
         <Ionicons style={{position: 'absolute', left: 10}} name='aperture-outline' size={30} color="black" />
        </View>
        <Animated.View
        entering={LightSpeedInLeft}
        exiting={LightSpeedOutRight}
        layout={Layout.springify()}>
        <Text style={styles.formErrors}>
          {
            data.isValidPrice === false ? `${data.errorMsgPrice}` : null
          }
        </Text>
        </Animated.View>
       </View>
       <View style={{ paddingTop: 5}}>
        <View style={{ justifyContent: 'center',}}>
        <TextInput
         style={styles.textInputName}
         placeholder="Product Category"
         onChangeText={(text) => {
          if(text.length >= 3){
            setCategory(text)
            setData({
              ...data,
              isValidCate: true
            })
          }
          else{
            setData({
              ...data,
              isValidCate: false,
              errorMsgCategory: 'Product category must be required'
            })
          }
         }}
         />
         <Ionicons style={{position: 'absolute', left: 10}} name='aperture-outline' size={30} color="black" />
        </View>
        <Animated.View
        entering={LightSpeedInLeft}
        exiting={LightSpeedOutRight}
        layout={Layout.springify()}>
        <Text style={styles.formErrors}>
          {
            data.isValidCate === false ? `${data.errorMsgCategory}` : null
          }
        </Text>
        </Animated.View>
       </View>
       <View style={{ paddingTop: 5}}>
        <View style={{ justifyContent: 'center',}}>
        <TextInput
         style={styles.textInputName}
         placeholder="Product Quantity"
         onChangeText={(text) => {
          if(text.length >= 1){
            setQuantity(text)
            setData({
              ...data,
              isValidQuantity: true
            })
          }
          else{
            setData({
              ...data,
              isValidQuantity: false,
              errorMsgQuantity: 'Product quantity must be required'
            })
          }
         }}
         />
         <Ionicons style={{position: 'absolute', left: 10}} name='aperture-outline' size={30} color="black" />
        </View>
        <Animated.View
        entering={LightSpeedInLeft}
        exiting={LightSpeedOutRight}
        layout={Layout.springify()}>
        <Text style={styles.formErrors}>
          {
            data.isValidQuantity === false ? `${data.errorMsgQuantity}` : null
          }
        </Text>
        </Animated.View>
       </View>
       <View style={{ paddingTop: 5}}>
        <View style={{ justifyContent: 'center',}}>
        <TextInput
         style={styles.textInputName}
         placeholder="Product Reday Time"
         onChangeText={(text) => {
          if(text.length >= 1){
            setReadyTime(text)
            setData({
              ...data,
              isValidReadyTime: true
            })
          }
          else{
            setData({
              ...data,
              isValidReadyTime: false,
              errorMsgReadyTime: 'Product delivery time must be required'
            })
          }
         }}
         />
         <Ionicons style={{position: 'absolute', left: 10}} name='aperture-outline' size={30} color="black" />
        </View>
        <Animated.View
        entering={LightSpeedInLeft}
        exiting={LightSpeedOutRight}
        layout={Layout.springify()}>
        <Text style={styles.formErrors}>
          {
            data.isValidReadyTime === false ? `${data.errorMsgReadyTime}` : null
          }
        </Text>
        </Animated.View>
       </View>
       <View style={{ paddingTop: 5}}>
        <View style={{ justifyContent: 'center',}}>
        <TextInput
         style={styles.textInputName}
         placeholder="Product Type"
         onChangeText={(text) => {
          if(text.length >= 3){
            setFoodType(text)
            setData({
              ...data,
              isValidFoodType: true
            })
          }
          else{
            setData({
              ...data,
              isValidFoodType: false,
              errorMsgFoodType: 'Product type must be required'
            })
          }
         }}
         />
         <Ionicons style={{position: 'absolute', left: 10}} name='aperture-outline' size={30} color="black" />
        </View>
        <Animated.View
        entering={LightSpeedInLeft}
        exiting={LightSpeedOutRight}
        layout={Layout.springify()}>
        <Text style={styles.formErrors}>
          {
            data.isValidFoodType === false ? `${data.errorMsgFoodType}` : null
          }
        </Text>
        </Animated.View>
       </View>
       <View style={{ paddingTop: 5}}>
        <View style={{ justifyContent: 'center',}}>
          <View style={styles.newAccountWrapper}>
          <TouchableOpacity style={styles.uploadImage} onPress={pickImage}>
            <Ionicons name="image" size={22} color="black" />
            <Text style={styles.uploadText}>Upload Image</Text>
          </TouchableOpacity>
          <View>
          {image && <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />}
          </View>
          </View>
        </View>
       </View>
       <View style={{ paddingTop: 30, paddingHorizontal: 10}}>
       <TouchableOpacity style={{
          width: '95%',
          height: 60,
          backgroundColor: productName.length > 3 ? '#FD6A65' : '#FAA0A0',
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}  onPress={handleSignupButton}>
          <Text style={styles.submitBtn}>Submit</Text>
        </TouchableOpacity>
       </View>
      </View>
    </ScrollView>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
},
  wrapper: {
    backgroundColor: '#ECEEF2',
    borderRadius: 20,
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 20
  },
  textWrapper: {
    paddingTop: 10,
    paddingBottom: 20
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20
  },
  textTitleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10
  } ,
  textLittleStyle: {
    fontSize: 16,
    fontWeight: '300'
  },
  smallTextBtn:{
    fontSize: 16,
    fontWeight: '3',
    color: 'black'
  },
  smallBtn:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FD6A65'
  },
  submitBtn:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  textInputName:{
    width: '95%',
    height: 40,
    borderRadius: 15,
    padding: 8,
    backgroundColor: '#F8F9F9',
    borderWidth: 2,
    borderColor: '#EAEAEA',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 6,
    shadowRadius: 2 ,
    shadowOffset : { width: 1, height: 2},
    position: 'relative',
    fontSize: 20,
    paddingHorizontal: 50,
    fontSize: 14
  },
  textInputDesc:{
    width: '95%',
    height: 70,
    borderRadius: 15,
    padding: 8,
    backgroundColor: '#F8F9F9',
    borderWidth: 2,
    borderColor: '#EAEAEA',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 6,
    shadowRadius: 2 ,
    shadowOffset : { width: 1, height: 2},
    position: 'relative',
    fontSize: 20,
    paddingHorizontal: 50,
    fontSize: 14
  },
  textInput:{
    width: '95%',
    height: 65,
    borderRadius: 15,
    padding: 15,
    backgroundColor: '#F8F9F9',
    borderWidth: 2,
    borderColor: '#EAEAEA',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 6,
    shadowRadius: 2 ,
    shadowOffset : { width: 1, height: 2},
    position: 'relative',
    fontSize: 20
  },

backButton:{
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 6,
    shadowRadius: 2 ,
    shadowOffset : { width: 1, height: 2},
},

newAccountWrapper:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},

submitButton:{
  width: '95%',
  height: 60,
  backgroundColor: '#FD6A65',
  borderRadius: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10,
},

formErrors:{
  color: '#FD6A65',
  fontSize: 16,
  fontWeight: 'bold',
  paddingVertical: 5,
  paddingHorizontal: 10
 },

 uploadImage:{
  width: 140,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
 },
 uploadText:{
  fontSize: 18, 
  fontWeight: 'bold'
 }
   
})

export default ProductScreen