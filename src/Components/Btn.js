import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {hp, wp} from '../Utils/Responsive';
  import {fontSize} from '../Utils/Fonts';
  import {Colors} from '../Utils/Colors';
  
  const Btn = props => {
  
    return (
      <TouchableOpacity
        onPress={props?.onPress}
        style={[styles.buttonContainer, props?.buttonContainer]}
        disabled={props?.loading}>
        {props?.loading ? (
          <ActivityIndicator size={'large'} color={Colors?.bg} />
        ) : (
          <Text style={[styles.text, props?.textStyle]}>{props?.text}</Text>
        )}
      </TouchableOpacity>
    );
  };
  
  export default Btn;
  
  const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.primary,
      width: wp(90),
      borderRadius: wp(2),
      paddingVertical: hp(1.1),
    },
    text: {
      color: Colors.bg,
      fontSize: fontSize.Normal1,
    },
  });
  