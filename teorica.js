const theoryQuestions = [
  {
    question: "Para la EDO lineal \\( y' + P(x)y = Q(x) \\), el factor integrante es:",
    options: [
      "\\( e^{\\int P(x)dx} \\)",
      "\\( \\int Q(x)dx \\)",
      "\\( P(x) \\cdot Q(x) \\)",
      "\\( e^{Q(x)} \\)"
    ],
    answer: 0,
    solution: "El factor integrante se define como \\( \\mu(x) = e^{\\int P(x)dx} \\). Multiplica ambos lados de la EDO para hacerla exacta."
  },
  {
    question: "La solución general de \\( y' - 3y = 0 \\) es:",
    options: [
      "\\( y = Ce^{3x} \\)",
      "\\( y = Ce^{-3x} \\)",
      "\\( y = C + e^{3x} \\)",
      "\\( y = Cx^3 \\)"
    ],
    answer: 0,
    solution: "Es separable: \\( \\frac{dy}{y} = 3dx \\Rightarrow \\ln|y| = 3x + C \\Rightarrow y = Ce^{3x} \\)."
  },
  // Resto de las preguntas...
];
