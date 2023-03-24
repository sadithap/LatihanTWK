import { StyleSheet, Text, View, } from "react-native";
import * as Animatable from 'react-native-animatable'
import React, { useState } from "react";
import colors from "../constants/Colors";
import formSoal from "../constants/FormSoal";
import PrimaryButton from "../components/PrimaryButton";
import OptionButton from "../components/OptionButton";
import { SafeAreaView } from "react-native-safe-area-context";

const Latihan = ({navigation}) => {
  const [showWrong, setShowWrong] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [respon, setRespon] = useState([]);

  function answerHandler(answer) {
    if (currentIndex !== 0) {
      if (currentIndex === respon.length - 1) {
        setRespon((prevRespon) => {
          const tempRespon = [...prevRespon];
          tempRespon[tempRespon.length - 1] = answer;
          return tempRespon;
        });
      } else {
        setRespon((prevRespon) => {
          return [...prevRespon, answer];
        });
      }
    } else {
      setRespon([answer]);
    }
  }

  function nextHandler() {
    if (respon[currentIndex] === formSoal[currentIndex].jawaban) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setRespon((prevRespon) => {
        const tempRespon = [...prevRespon];
        tempRespon.pop();
        return tempRespon;
      });
      this.shakeView.shake(800);
      setShowWrong(true);
      setTimeout(() => {
        setShowWrong(false);
      }, 2000);
    }
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Animatable.View ref={(ref) => (this.shakeView = ref)} style={styles.container}>
        <Text style={styles.question}>{formSoal[currentIndex].soal}</Text>
        {console.log(formSoal[currentIndex].pilgan)}
        {formSoal[currentIndex].pilgan.map((option, index) => (
          <OptionButton
            key={index}
            respon={respon[currentIndex]}
            onpressed={() => answerHandler(option)}
          >
            {option}
          </OptionButton>
        ))}
        <View style={styles.changeQuestion}>
          <View></View>
          <View style={styles.changeQuestion}>
            <View>
              {showWrong && <Text style={styles.wrongSign}>Salah</Text>}
            </View>
            <View>
              {currentIndex !== formSoal.length - 1 && (
                <PrimaryButton onpressed={nextHandler}>Next</PrimaryButton>
              )}
              {currentIndex === formSoal.length - 1 && (
                <PrimaryButton onpressed={() => navigation.navigate("Hasil")}>Finish</PrimaryButton>
              )}
            </View>
          </View>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default Latihan;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.primary1,
  },
  container: {
    marginTop: 50,
    padding: 10,
  },
  question: {
    color: colors.primary4,
    fontSize: 20,
    marginBottom: 100,
  },
  changeQuestion: {
    marginTop: 40,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrongSign: {
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#990000",
    color: colors.primary4,
  },
});
