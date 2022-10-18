package com;

import java.util.List;
import java.util.Optional;

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

  @Autowired
  private QuestionRepository questionRepository;

  @GetMapping("/question/{gameId}")
  public ResponseEntity<Question> getUnansweredQuestion(@PathVariable Integer gameId) {
    try {
      List<Question> _questions = questionRepository.findAll();

      for (Question _question : _questions) {
        if (_question.getGameId() == gameId && _question.getAnswered() == false) {
          return new ResponseEntity<>(_question, HttpStatus.OK);
        }
      }

      return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PostMapping("/question/true")
  public ResponseEntity<Question> setAnsweredToTrue(@RequestBody Integer questionId) {
    try {
      Optional<Question> _question = questionRepository.findById(questionId);

      _question.get().setAnsweredToTrue();

      return new ResponseEntity<>(_question.get(), HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PostMapping("/question/create")
  public ResponseEntity<Question> createQuestion(@RequestBody Question question) {
    try {
      Question _question = questionRepository
          .save(new Question(question.getPlayerId(), question.getGameId(), question.getQuestion(), question.getAnswer(),
              false));
      return new ResponseEntity<>(_question, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/question/check")
  public ResponseEntity<Boolean> checkGuess(@RequestBody Question question, @RequestParam(name = "guess") String guess) {
    try {
      List<Question> _questions = questionRepository.findAll();

      for (Question _question : _questions) {
        if (_question.getQuestionId() == question.getQuestionId() && _question.getAnswer().equals(guess)) {
          return new ResponseEntity<>(true, HttpStatus.OK);
        }
      }
      return new ResponseEntity<>(false, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}