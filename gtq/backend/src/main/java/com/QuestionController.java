package com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionController {

  @Autowired
  private QuestionRepository questionRepository;

  @PostMapping("/question/create")
  public ResponseEntity<Question> createPlayer(@RequestBody Question question) {
    try {
      Question _question = questionRepository
          .save(new Question(question.getPlayerId(), question.getQuestion(), question.getAnswered()));
      return new ResponseEntity<>(_question, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}