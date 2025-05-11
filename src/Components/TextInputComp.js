import {
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {hp, wp} from '../Utils/Responsive';
  import {Colors} from '../Utils/Colors';
  import {fontSize} from '../Utils/Fonts';
  
  const Textinput = props => {
    const [securePassword, setSecurePassword] = useState(props?.secureTextEntry);
    const [isFocused, setFocused] = useState(false);
  
    return (
      <View style={[{marginVertical: hp(1)}, props?.mainStyling]}>
        <Text style={[styles.title, props?.titleStyle]}>{props?.title}</Text>
        <View
          style={[
            styles.inputCotainer,
            props?.inputContainer,
            {
              borderColor: isFocused ? Colors.primary : Colors.lightGray,
            },
          ]}>
          <TextInput
            value={props?.value}
            placeholder={props?.placeholder}
            textAlignVertical={props?.placeholderTextAlign}
            style={[styles.inputStyle, props?.inputStyle]}
            keyboardType={props?.keyboardType}
            placeholderTextColor={Colors.gray}
            secureTextEntry={securePassword}
            autoCapitalize={props?.autoCapitalize || 'none'}
            onChangeText={props?.onChangeText}
            multiline={props?.multiline}
            numberOfLines={props?.numberOfLines}
            onFocus={() => {
              props?.onFocus, setFocused(true);
            }}
            onBlur={() => setFocused(false)}
            editable={props?.editable}
            onSubmitEditing={props?.onSubmitEditing}
          />
          {/* {props?.rightIcon ? (
            <TouchableOpacity onPress={props?.onIconPress}>
              <Image
                source={props?.rightIcon}
                tintColor={props?.tintColor}
                style={styles.rightIcon}
              />
            </TouchableOpacity>
          ) : props?.secureTextEntry ? (
            <TouchableOpacity onPress={() => setSecurePassword(!securePassword)}>
              <Icon
                name={securePassword ? 'eye-off' : 'eye'}
                size={fontSize.L2}
                color={isFocused ? Colors.gray : Colors.gray}
                type="feather"
              />
            </TouchableOpacity>
          ) : null} */}
        </View>
  
        {props?.errorMessage && (
          <Text
            numberOfLines={2}
            style={[styles.errorMessage, props?.errorMessageStyle]}>
            {props?.errorMessage}
          </Text>
        )}
      </View>
    );
  };
  
  export default Textinput;
  
  const styles = StyleSheet.create({
    inputCotainer: {
      width: wp(90),
      // height: hp(6.7),
      borderRadius: wp(2),
      backgroundColor: Colors.bg,
      paddingHorizontal: wp(3),
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: hp(0.5),
      borderWidth: wp(0.3),
    },
    title: {
      color: Colors.black,
      fontSize: fontSize.M1,
    },
    errorMessage: {
      color: Colors.red,
      marginLeft: wp(3),
      width: wp(85),
    },
    inputStyle: {
      flex: 1,
      color: Colors.slateGray,
      fontSize: fontSize.M,
    },
    // rightIcon: {width: wp(6), height: wp(6), resizeMode: 'center'},
  });
  