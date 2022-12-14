package com;

public class Question implements Comparable<Question> {
  private String question;

  private String answer;

  public Question(String question, String answer) {
    this.question = question;
    this.answer = answer;
  }

  public String getQuestion() {
    return question;
  }

  public String getAnswer() {
    return answer;
  }

  @Override
  public int compareTo(Question q) {
    return question.compareTo(q.getQuestion());
  }
}
