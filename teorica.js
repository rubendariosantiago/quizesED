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
    solution: "El factor integrante se define como $$ \\mu(x) = e^{\\int P(x)dx}.$$  La ecuación diferencial original se transforma en exacta al multiplicarla por el factor integrante."
  },
    {
    question: "Determina el factor integrante de la ecuación diferencial lineal $$ y' + 2xy = 4x^3 $$",
    options: [
      "\\( \\mu(x)= e^{x^2} \\)",
      "\\( \\mu(x)= x^4\\)",
      "\\( \\mu(x)= 8x^4 \\)",
      "\\( \\mu(x)= e^{2x} \\)"
    ],
    answer: 0,
    solution: "El factor integrante es $$ \\mu(x) = e^{\\int P(x)dx}=  e^{\\int 2xdx}=  e^{x^2}.$$  La ecuación diferencial original se transforma en exacta al multiplicarla por el factor integrante."
  },
  {
    question: "La solución general de $$\\displaystyle{ \\frac{dy}{dx}  - 3y = 0  } $$ es:",
    options: [
      "\\( y = Ce^{3x} \\)",
      "\\( y = Ce^{-3x} \\)",
      "\\( y = C + e^{3x} \\)",
      "\\( y = Cx^3 \\)"
    ],
    answer: 0,
    solution: "La ecuación diferencial es separable: $$ \\frac{dy}{y} = 3dx \\Longrightarrow \\ln|y| = 3x + C \\Longrightarrow y = Ce^{3x} $$"
  },
    {
    question: "Determina la ecuación diferencial de primer orden que es lineal",
    options: [
      "\\( \\displaystyle{ y\\frac{dy}{dx} + 2y = e^{3x} }\\)",
      "\\( \\displaystyle{ \\frac{dy}{dx} + 2x^2y = xe^{3x} } \\)",
      "\\( \\displaystyle{ \\frac{dy}{dx} + 2y = e^{3y} }\\)",
      "\\( \\displaystyle{ y\\frac{dy}{dx} + x^2y^2 = e^{3x} } \\)"
    ],
    answer: 1,
    solution: "La forma de una ecuación diferencial lineal de primer orden es:  \\[ \\frac{dy}{dx}+P(x)y=Q(x)  \\]"
  },
{
    question: "La solución general de \\(\\displaystyle{ \\frac{dy}{dx}  +4y = 0  } \\) es:",
    options: [
      "\\( y = Ce^{-4x} \\)",
      "\\( y = Ce^{4x} \\)",
      "\\( y = C + e^{4x} \\)",
      "\\( y = Cx^4 \\)"
    ],
    answer: 0,
    solution: "La ecuación diferencial es separable: \\[ \\frac{dy}{y} = -4dx \\Longrightarrow \\ln|y| = -4x + C \\Longrightarrow y = Ce^{-4x} \\]"
  },
];
