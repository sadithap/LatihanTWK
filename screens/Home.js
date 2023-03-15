import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { firebase } from "../Database/index";
import { useNavigation } from "@react-navigation/native";

import colors from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.container}>
        <Text style={styles.text1}>
          Latihan{"\n"}
          <Text style={styles.text2}>Soal{"\n"}</Text>TWK
          <Text style={styles.text2}>.</Text>
        </Text>
        <View style={styles.tes}>
        <PrimaryButton onpressed={() => navigation.navigate("Latihan")} >Mulai</PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: colors.primary1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  container: {
    marginTop: 200,
  },
  text1: {
    fontSize: 90,
    color: colors.primary4,
  },
  text2: {
    fontSize: 90,
    color: colors.primary2,
  },
});
