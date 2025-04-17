const theoryQuestions = [
  {
    question: "Determina el factor integrante de la ecuación diferencial lineal $$ y' + P(x)y = Q(x) $$",
    options: [
      "\\( e^{\\int P(x)dx} \\)",
      "\\( \\int Q(x)dx \\)",
      "\\( P(x) \\cdot Q(x) \\)",
      "\\( e^{Q(x)} \\)"
    ],
    answer: 0,
    solution: "El factor integrante se define como \\( \\mu(x) = e^{\\int P(x)dx} \\).  Al multiplicar ambos lados de la ecuación diferencial original la transforma en exacta."
  },
  {
    question: "La solución general de \\(\\displaystyle\\{ \\frac{dy}{dx}  - 3y = 0  \\} \\) es:",
    options: [
      "\\( y = Ce^{3x} \\)",
      "\\( y = Ce^{-3x} \\)",
      "\\( y = C + e^{3x} \\)",
      "\\( y = Cx^3 \\)"
    ],
    answer: 0,
    solution: "La ecuación diferencial es separable: \\[ \\frac{dy}{y} = 3dx \\longrightarrow \\ln|y| = 3x + C \\longrightarrow y = Ce^{3x} \\]"
  },
  // Resto de las preguntas...
];
