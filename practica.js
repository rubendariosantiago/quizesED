const practicalTemplates = [
  {
    type: "lineal_constante",
    template: "Resuelve: \\( y' + {{a}}y = {{b}} \\) con \\( y(0) = {{c}} \\)",
    solution_mathjs: "({{b}}/{{a}}) + ({{c}} - ({{b}}/{{a}}))*exp(-{{a}}*x)",
    solution_latex: "$$\\frac{ {{b}} }{ {{a}} } + \\left( {{c}} - \\frac{ {{b}} }{ {{a}} } \\right) e^{-{{a}}x}$$",
    steps: [
      "Primero identificamos que es una ecuación diferencial lineal de primer orden: \\[ y' + P(x)y = Q(x) \\]",
      "En este caso, el factor integrante es: \\[ \\mu(x) = e^{\\int {{a}} \\, dx} = e^{ {{a}} x} \\]",
      "Al multiplicar la ecuación por este factor se tiene",
      "\\[ e^{ {{a}} x}y' + {{ a }}e^{ {{a}} x}y = {{b}}e^{ {{a}} x} \\]",
      "El lado izquierdo es la derivada de un producto:",
      "\\[ \\frac{d}{dx}(e^{ {{a}} x}y) = {{b}}e^{ {{a}} x} \\]",
      "Integrando en ambos lados se obtiene:",
      "\\[ e^{{{a}}x}y = \\frac{ {{b}} }{ {{a}} }e^{ {{a}} x} + C \\]",
      "Despejamos la variable \\\\( y \\\\), tenemos entonces:",
      "\\[ y = \\frac{ {{b}} }{ {{a}} } + Ce^{-{{a}}x} \\]",
      "Al aplicar la condición inicial \\\\( y(0) = {{c}} \\\\) se obtiene:",
      "\\[ {{c}} = \\frac{ {{b}} }{ {{a}} } + C \\) ⇒ \\( C = {{c}} - \\frac{ {{b}} }{ {{a}} }={{c - b/ a}} \\]",
      "Finalmente, la solución de la ecuación diferencial es:",
      "\\[ y(x) = \\frac{ {{b}} }{ {{a}} } + \\left( {{c}} - \\frac{ {{b}} }{ {{a}} } \\right) e^{-{{a}}x}= {{b/a}}+{{c-b/a}} e^{-{{a}} x} \\]"
    ],
    params: {
      a: { min: 2, max: 5, nonZero: true },
      b: { min: 2, max: 5 },
      c: { min: -3, max: 3 }
    },
    conditions: ["a != 0"]
  },
  {
    type: "trigonometrica_coseno",
    template: "Resuelve: \\( y' + {{a}}y = {{b}} \\cos({{c}}x) \\) con \\( y(0) = {{d}} \\)",
    solution_mathjs: "({{a}}*{{b}}*cos({{c}}*x) + {{b}}*{{c}}*sin({{c}}*x))/({{a}}**2 + {{c}}**2) + ({{d}} - ({{a}}*{{b}})/({{a}}**2 + {{c}}**2))*exp(-{{a}}*x)",
    solution_latex: "$$\\frac{ {{a}}{{b}} \\cos({{c}}x) + {{b}}{{c}} \\sin({{c}}x) }{ {{a}}^2 + {{c}}^2 } + \\left( {{d}} - \\frac{ {{a}}{{b}} }{ {{a}}^2 + {{c}}^2 } \\right) e^{-{{a}}x}$$",
    steps: [
      "Identificamos la EDO lineal no homogénea: \\[ y' + {{a}}y = {{b}}\\cos({{c}}x) \\]",
      "Solución homogénea: $$ y_h = Ce^{-{{a}}x} $$",
      "Buscamos solución particular por coeficientes indeterminados:",
      "Suponemos \\\\( y_p = A\\cos({{c}}x) + B\\sin({{c}}x) \\\\)",
      "Calculamos \\( y_p' = -{{c}}A\\sin({{c}}x) + {{c}}B\\cos({{c}}x) \\)",
      "Sustituimos en la EDO:",
      "\\( (-{{c}}A\\sin({{c}}x) + {{c}}B\\cos({{c}}x)) + {{a}}(A\\cos({{c}}x) + B\\sin({{c}}x)) = {{b}}\\cos({{c}}x) \\)",
      "Agrupamos términos:",
      "\\( (-{{c}}A + {{a}}B)\\sin({{c}}x) + ({{c}}B + {{a}}A)\\cos({{c}}x) = {{b}}\\cos({{c}}x) \\)",
      "Obtenemos sistema de ecuaciones:",
      "\\( {{a}}A + {{c}}B = {{b}} \\)",
      "\\( -{{c}}A + {{a}}B = 0 \\)",
      "Resolviendo: \\( A = \\frac{ {{a}}{{b}} }{ {{a}}^2 + {{c}}^2 } \\), \\( B = \\frac{ {{c}}{{b}} }{ {{a}}^2 + {{c}}^2 } \\)",
      "Solución general: \\( y = y_h + y_p \\)",
      "Aplicamos condición inicial \\( y(0) = {{d}} \\) para hallar \\( C \\)"
    ],
    params: {
      a: { min: 2, max: 5 },
      b: { min: 2, max: 5 },
      c: { min: 2, max: 5 },
      d: { min: -3, max: 3 }
    },
    conditions: []
  }
];
