import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import colors from "../constants/Colors";
const PrimaryButton = ({ children, onpressed }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.content, styles.press]
            : [styles.content, styles.contentColor]
        }
        onPress={onpressed}
      >
        <Text style={styles.textContent}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    margin: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.primary2,
  },
  content: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  contentColor: {
    backgroundColor: colors.primary1,
  },
  press: {
    opacity: 0.7,
    backgroundColor: colors.primary2,
  },
  textContent: {
    color: colors.primary4,
    textAlign: "center",
    fontSize: 20,
  },
});
