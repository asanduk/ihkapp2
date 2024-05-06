import { Component, ChangeDetectorRef } from '@angular/core';
import { QuestionService } from '../question.service';

interface Question {
  ID: number;
  Frage: string;
  Bild: string | null;
  Antworten: { Text: string, Korrekt: boolean }[];
  correctIndex: number;
  userSelectedIndex?: number; 
}


@Component({
  selector: 'app-quiz-mode',
  templateUrl: './quiz-mode.component.html',
  styleUrls: ['./quiz-mode.component.css']
})
export class QuizModeComponent {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  selectedOptionIndex: number | null = null;
  showStatistics: boolean = false;
  correctAnswers: number = 0;
  incorrectAnswers: number = 0;
  progressValue: number = 0; // Progress value for the progress bar

  constructor(private questionService: QuestionService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadQuestions();
  }

  // Seçenekleri karıştırma fonksiyonu
  shuffleOptions(options: any[]): any[] {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]]; // ES6 değişim notasyonu
    }
    return options;
  }

  loadQuestions() {
    this.questionService.getQuestions().subscribe((data: any) => {
      this.questions = data.Fragen.map((question: any) => {
        const shuffledOptions = this.shuffleOptions(question.Antworten);
        const correctIndex = shuffledOptions.findIndex(option => option.Korrekt);
        return {
          ...question,
          Antworten: shuffledOptions,
          correctIndex 
        };
      });
    });
  }


  selectOption(optionIndex: number) {
    this.selectedOptionIndex = optionIndex;
    this.questions[this.currentQuestionIndex].userSelectedIndex = optionIndex; 
  }
  

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedOptionIndex = null; 
      this.updateProgress(); 
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.selectedOptionIndex = null; 
      this.updateProgress(); 
    }
  }

  finishQuiz() {
    this.showStatistics = true;
    this.correctAnswers = this.questions.filter(question => question.Antworten[question.userSelectedIndex ?? -1]?.Korrekt).length;
    this.incorrectAnswers = this.questions.length - this.correctAnswers;
  }
  
  

  updateProgress() {
    this.progressValue = (this.currentQuestionIndex + 1) / this.questions.length * 100;
    this.cdr.detectChanges(); // Manually trigger change detection
  }
}
