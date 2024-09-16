import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {reactQuestions} from '../config/question';
import Score from './Score';
import * as Progress from 'react-native-progress';

const Questions = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const[quizProgress, setQuizProgress] = useState(reactQuestions.length);




   //  progress will be ==current question index + 1/ total length 
  
   const progress = (currentQuestionIndex +1) / quizProgress

  // console.log({isCorrect});

  // handle Next Press

  const handleNext = () => {
    if (currentQuestionIndex === reactQuestions.length - 1) {
      // return;

      navigation.navigate('Score', {Score: score});
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  // handle Pesssed option

  const handleOptionPress = pressedOption => {
    setSelectedOption(pressedOption);

    const isAnswerCorrect =
      reactQuestions[currentQuestionIndex].correctAnswers === pressedOption;

    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setScore(prevScore => prevScore + 10);
    }
  };

  return (
    <View style={styles.quesContainer}>
      <View style={styles.progress}>
        <View>
          <Progress.Bar progress={progress} width={null} height={30} color='purple' />
        </View>
      </View>
      <Text style={styles.textQues}>
        {reactQuestions[currentQuestionIndex].question}
      </Text>
      {reactQuestions[currentQuestionIndex].options.map(option => (
        <Pressable
          style={[
            styles.optionContainer,
            selectedOption === option
              ? {backgroundColor: isCorrect ? 'green' : 'red'}
              : {borderColor: 'purple'},
          ]}
          onPress={() => handleOptionPress(option)}
          disabled={!!selectedOption}>
          <Text style={styles.optionText}>{option}</Text>
        </Pressable>
      ))}
      <Pressable style={styles.btnContainer} onPress={handleNext}>
        <Text style={styles.btn}>
          {currentQuestionIndex === reactQuestions.length - 1
            ? 'Finish'
            : 'Next'}
        </Text>
      </Pressable>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  textQues: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginBottom: 20,
  },
  quesContainer: {
    marginTop: 50,
    padding: 20,
  },
  optionContainer: {
    borderWidth: 2,
    borderColor: 'purple',
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  btn: {
    color: 'white',
    fontSize: 25,
    padding: 10,
  },
  btnContainer: {
    backgroundColor: 'purple',
    marginTop: 20,
    borderRadius: 10,
    width: 380,
    paddingLeft: 150,
  },
  progress: {

  },
});
