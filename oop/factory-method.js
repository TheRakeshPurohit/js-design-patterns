/*
interface Interviewer {
  askQuestions()
}
*/

class Creator1 {
  askQuestions() {
    console.log('Hello I\'m ', this);
  }
}

class Creator2 {
  askQuestions() {
    console.log('Hello I\'m ', this);
  }
}

// #########################################

class CommonCreator {
  takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

// #########################################
class CreateInterviewer1 extends CommonCreator {
  makeInterviewer() {
    return new Creator1();
  }
}

class CreateInterviewer2 extends CommonCreator {
  makeInterviewer() {
    return new Creator2();
  }
}

// #########################################

const interviewer1 = new CreateInterviewer1();
interviewer1.takeInterview();

const interviewer2 = new CreateInterviewer2();
interviewer2.takeInterview();
