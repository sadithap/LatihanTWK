import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import colors from "../constants/Colors";
import formSoal from "../constants/FormSoal";
import PrimaryButton from "../components/PrimaryButton";
import OptionButton from "../components/OptionButton";
import { SafeAreaView } from "react-native-safe-area-context";

const Latihan = () => {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [respon, setRespon] = useState("");

  function answerHandler(answer) {
    setRespon(answer);
  }

  function nextHandler(){
    if (respon === formSoal[currentIndex].jawaban) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
  }

  function finishHandler() {
    alert(`Your score : ${score}`);
    setCurrentIndex(0);
    setScore(0);
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.container}>
        <Text style={styles.question}>{formSoal[currentIndex].soal}</Text>
        {console.log(formSoal[currentIndex].pilgan)}
        {formSoal[currentIndex].pilgan.map((option, index) => (
          <OptionButton
            key={index}
            respon={respon}
            onpressed={() => answerHandler(option)}
          >
            {option}
          </OptionButton>
        ))}
        <View style={styles.changeQuestion}>
          <View>
          
          </View>
          <View>
          {currentIndex!==formSoal.length-1 && <PrimaryButton onpressed={nextHandler} >Next</PrimaryButton>}
          {currentIndex===formSoal.length-1 && <PrimaryButton onpressed={finishHandler}>Finish</PrimaryButton> }
          </View>
        </View>
      </View>
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
});
