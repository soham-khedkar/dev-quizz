export const jsQuizz = {
  questions: [
    {
      question: "The useState hook is used to add _____ to functional components in React.",
      type: "FIB",
      correctAnswer: "state",
    },
    
    {
      question: "React Hook Form simplifies form validation in React by reducing _____ code.",
      type: "FIB",
      correctAnswer: "boilerplate",
    },
    {
      question: "Appwrite supports various authentication methods including email/password, OAuth2, and API _____.",
      type: "FIB",
      correctAnswer: "key",
    },
    
    {
      question: "The 'let' keyword is used to declare variables that can be _____ .",
      type: "FIB",
      correctAnswer: "reassigned",
    },
    
    {
      question: "The 'alt' attribute in HTML images provides alternative text for screen readers and is displayed if the image fails to _____.",
      type: "FIB",
      correctAnswer: "load",
    },
    
    {
      question: "The box model in CSS consists of content, padding, border, and _____.",
      type: "FIB",
      correctAnswer: "margin",
    },
    
    {
      question: "Props are passed to a component as attributes, and they can be accessed inside the component using the 'props' _____.",
      type: "FIB",
      correctAnswer: "object",
    },
    
    {
      question: "Utility classes in Tailwind CSS provide pre-defined styles for common CSS _____.",
      type: "FIB",
      correctAnswer: "properties",
    },
    
    {
      question: "The 'createSlice' function in Redux Toolkit is used to define a slice of state along with its reducers and action _____ .",
      type: "FIB",
      correctAnswer: "creators",
    },
      {
        question: "What is JSX in React?",
        choices: [
          "JavaScript XML",
          "JavaScript Extension",
          "JavaScript Xpath",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "JavaScript XML",
      },
      {
        question: "What is React Fiber?",
        choices: [
          "A data structure",
          "A reconciliation algorithm",
          "A way to write React components",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "A reconciliation algorithm",
      },
      
      {
        question: "What utility class is used in Tailwind CSS for margin bottom?",
        choices: [
          "mb",
          "margin-bottom",
          "m-bottom",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "mb",
      },
      {
        question: "Which of the following is not a Tailwind CSS utility?",
        choices: [
          "flex",
          "align-center",
          "border",
          "rounded",
        ],
        type: "MCQs",
        correctAnswer: "align-center",
      },
      
      {
        question: "What is the purpose of createAction in Redux Toolkit?",
        choices: [
          "To define actions",
          "To define reducers",
          "To create action creators",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "To create action creators",
      },
      {
        question: "What is the difference between createAction and createReducer in Redux Toolkit?",
        choices: [
          "createAction is for defining actions and createReducer is for defining reducers",
          "createAction is for defining reducers and createReducer is for defining actions",
          "Both createAction and createReducer are for defining actions",
          "Both createAction and createReducer are for defining reducers",
        ],
        type: "MCQs",
        correctAnswer: "createAction is for defining actions and createReducer is for defining reducers",
      },
      
      {
        question: "What does '===' operator do in JavaScript?",
        choices: [
          "Checks for equality of value",
          "Checks for equality of value and type",
          "Assigns value",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Checks for equality of value and type",
      },
      {
        question: "What does the 'typeof' operator return in JavaScript?",
        choices: [
          "The data type of a variable",
          "The value of a variable",
          "The length of a variable",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "The data type of a variable",
      },
      
      {
        question: "What is the correct HTML tag for inserting a line break?",
        choices: [
          "<lb>",
          "<break>",
          "<br>",
          "<line>",
        ],
        type: "MCQs",
        correctAnswer: "<br>",
      },
      {
        question: "Which of the following is a block-level element in HTML?",
        choices: [
          "<span>",
          "<div>",
          "<a>",
          "<strong>",
        ],
        type: "MCQs",
        correctAnswer: "<div>",
      },
      
      {
        question: "Which CSS property is used to control the space between elements?",
        choices: [
          "margin",
          "padding",
          "border",
          "spacing",
        ],
        type: "MCQs",
        correctAnswer: "margin",
      },
      {
        question: "Which of the following is not a valid value for the display property in CSS?",
        choices: [
          "block",
          "inline",
          "flex",
          "grid",
        ],
        type: "MCQs",
        correctAnswer: "grid",
      },
      
      {
        question: "What is the role of defaultProps in React?",
        choices: [
          "To set default values for props",
          "To validate props",
          "To define prop types",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "To set default values for props",
      },
  ],
};

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};