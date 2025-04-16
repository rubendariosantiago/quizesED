const teorica = {
[
  {
    "question": "Para la EDO lineal \\( y' + P(x)y = Q(x) \\), el factor integrante es:",
    "options": [
      "\\( e^{\\int P(x)dx} \\)",
      "\\( \\int Q(x)dx \\)",
      "\\( P(x) \\cdot Q(x) \\)",
      "\\( e^{Q(x)} \\)"
    ],
    "answer": 0,
    "solution": "El factor integrante se define como \\( \\mu(x) = e^{\\int P(x)dx} \\). Multiplica ambos lados de la EDO para hacerla exacta."
  },
  {
    "question": "La solución general de \\( y' - 3y = 0 \\) es:",
    "options": [
      "\\( y = Ce^{3x} \\)",
      "\\( y = Ce^{-3x} \\)",
      "\\( y = C + e^{3x} \\)",
      "\\( y = Cx^3 \\)"
    ],
    "answer": 0,
    "solution": "Es separable: \\( \\frac{dy}{y} = 3dx \\Rightarrow \\ln|y| = 3x + C \\Rightarrow y = Ce^{3x} \\)."
  },
  {
    "question": "¿Cuál es la solución particular de \\( y' + 2y = 4 \\) con \\( y(0) = 1 \\)?",
    "options": [
      "\\( y = 2 - e^{-2x} \\)",
      "\\( y = 2 + e^{-2x} \\)",
      "\\( y = 4 - 3e^{-2x} \\)",
      "\\( y = e^{-2x} + 2x \\)"
    ],
    "answer": 0,
    "solution": "Solución general: \\( y = 2 + Ce^{-2x} \\). Aplicando \\( y(0)=1 \\): \\( C = -1 \\)."
  },
  {
    "question": "Si \\( y' + y = e^{-x} \\), ¿cuál método es más adecuado?",
    "options": [
      "Variación de parámetros",
      "Coeficientes indeterminados",
      "Separación de variables",
      "Sustitución lineal"
    ],
    "answer": 0,
    "solution": "Variación de parámetros, ya que el término no homogéneo \\( e^{-x} \\) es solución de la homogénea."
  },
  {
    "question": "La EDO \\( y' + \\frac{2}{x}y = x^2 \\) tiene como factor integrante:",
    "options": [
      "\\( x^2 \\)",
      "\\( e^{2x} \\)",
      "\\( \\ln|x| \\)",
      "\\( \\frac{1}{x^2} \\)"
    ],
    "answer": 0,
    "solution": "\\( \\mu(x) = e^{\\int \\frac{2}{x}dx} = e^{2\\ln|x|} = x^2 \\)."
  },
  {
    "question": "¿Qué condición debe cumplir \\( c \\) en \\( y' + ay = be^{cx} \\) para usar coeficientes indeterminados?",
    "options": [
      "\\( c \\neq -a \\)",
      "\\( c \\neq 0 \\)",
      "\\( c \\neq a \\)",
      "\\( c \\neq b \\)"
    ],
    "answer": 0,
    "solution": "Si \\( c = -a \\), la solución particular debe ajustarse para evitar conflicto con la homogénea."
  },
  {
    "question": "La solución de \\( y' + y = \\cos(x) \\) incluye términos como:",
    "options": [
      "\\( A\\cos(x) + B\\sin(x) \\)",
      "\\( Ae^{x} + Be^{-x} \\)",
      "\\( A + Bx \\cos(x) \\)",
      "\\( A\\cos^2(x) \\)"
    ],
    "answer": 0,
    "solution": "Método de coeficientes indeterminados sugiere una solución de la forma \\( y_p = A\\cos(x) + B\\sin(x) \\)."
  },
  {
    "question": "¿Cuál es la solución general de \\( y' = ky \\)?",
    "options": [
      "\\( y = Ce^{kx} \\)",
      "\\( y = C + e^{kx} \\)",
      "\\( y = Ckx \\)",
      "\\( y = Ce^{-kx} \\)"
    ],
    "answer": 0,
    "solution": "EDO separable clásica: \\( \\frac{dy}{y} = kdx \\Rightarrow \\ln|y| = kx + C \\Rightarrow y = Ce^{kx} \\)."
  }
]
};
