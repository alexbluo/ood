package com;

import java.util.Optional;
import java.util.PriorityQueue;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionController {

  Logger logger = LoggerFactory.getLogger(QuestionController.class);

  PriorityQueue<Question> questions = new PriorityQueue<>();

  Question current = null;

  @GetMapping("/question/next")
  public Question getNext() {
    if (questions.isEmpty())
      return null;

    current = questions.remove();
    return current;
  }

  @PostMapping("/question/create")
  public void createQuestion(@RequestBody Question question) {
    questions.add(new Question(question.getQuestion(), question.getAnswer()));
  }

  @GetMapping("/question/check")
  public boolean checkGuess(@RequestParam String guess, @RequestParam String player) {
    logger.info(guess);
    return guess.equals(current.getAnswer());
  }

  @PostMapping("/question/reset") 
  public void resetQuestion() {
    questions = new PriorityQueue<>();
  }
}