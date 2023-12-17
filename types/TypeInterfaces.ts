export interface themesInterface {
  id: number,
  fanlar: number,
  name: string,
  description: string
  image: string
  slug: string
  questions_count: number
}

export interface themeInterface {
  id: number;
  fanlar: { id: number; name: string; user: number };
  name: string;
  testlar_soni: number;
  user: number;
}

export interface Subject {
  name: string;
  id: number;
};

export interface TestsInterface {
  quiz: {
    id: number,
    name: string,
    description: string,
    image: string,
    slug: string,
    roll_out: boolean,
    timestamp: string,
    fanlar: number,
    quiztakers_set: {
      id: number,
      usersanswer_set:
      {
        id: number,
        quiz_taker: number,
        question: number,
        answer: null | number
      }[],
      score: number,
      completed: boolean,
      date_finished: null,
      timestamp: string,
      user: number,
      quiz: number
    },
    question_set:
    {
      id: number,
      answer_set:
      {
        id: number,
        question: number,
        label: string
      }[],
      label: string,
      order: number,
      quiz: number
    }[],
  },
  last_question_id: null,
  detail: string
}

export interface TestItemInterface {
  id: number,
  answer_set:
  {
    id: number,
    question: number,
    label: string
  }[],
  label: string,
  order: number,
  quiz: number
}

export interface AnswerSetInterface {
  id: number,
  question: number,
  label: string
}

export interface QuiztakersSetInterface {
  id: number,
  usersanswer_set:
  {
    id: number,
    quiz_taker: number,
    question: number,
    answer: null | number
  }[],
  score: number,
  completed: boolean,
  date_finished: null,
  timestamp: string,
  user: number,
  quiz: number
}

export interface AnswerIdInterface {
  id: number,
  quiz_taker: number,
  question: number,
  answer: null | number
}

export interface HeadsInterface {
  name: string,
  width: number,
  key: string
}

export interface AnswerInterface {
  id: number,
  quiz_taker: number,
  question: number,
  answer: number | null
}

export interface AlertInterface {
  success: boolean,
  message: string
}

export interface ErrorInterface {
  detail: string
}

export interface MyResults {
  id: number,
  name: string,
  description: string,
  image: string,
  slug: string,
  questions_count: number,
  completed: boolean,
  score: number |  null,
  progress: null | number,
  date_finished: string | null,
  timestamp: string | null,
}