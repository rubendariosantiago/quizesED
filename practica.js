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
      "Como la suma del lado izquierdo  es la derivada de un producto resulta:",
      "\\[ \\frac{d}{dx}(e^{ {{a}} x}y) = {{b}}e^{ {{a}} x} \\]",
      "Integrando en ambos lados se obtiene:",
      "\\[ e^{ {{a}} x}y = \\frac{ {{b}} }{ {{a}} }e^{ {{a}} x} + C \\]",
      "Al despejar la variable \\\( y \\\) se tiene:",
      "\\[ y = \\frac{ {{b}} }{ {{a}} } + Ce^{-{{a}}x} \\]",
      "Al aplicar la condición inicial \\\( y(0) = {{c}} \\\) se obtiene:",
      "\\[ {{c}} = \\frac{ {{b}} }{ {{a}} } + C \\longrightarrow  C = {{c}} - \\frac{ {{b}} }{ {{a}} }=\\frac{ {{a*c-b}} }{ {{a}} }={{c - b/ a}} \\]",
      "Finalmente, la solución de la ecuación diferencial es:",
      "\\[ y(x) = \\frac{ {{b}} }{ {{a}} } + \\left( \\frac{ {{a*c-b}} }{ {{a}} } \\right) e^{-{{a}}x}= {{b/a}}+{{c-b/a}} e^{-{{a}} x} \\]"
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
    template: "Resuelve: $$ y' + {{a}}y = {{b}} \\cos({{c}}x) $$ con \\( y(0) = {{d}} \\)",
    solution_mathjs: "({{a}}*{{b}}*cos({{c}}*x)+{{b}}*{{c}}*sin({{c}}*x))/({{a*a}}+{{c*c}}) + ({{d}}-({{a}}*{{b}})/({{a*a}}+{{c*c}}))*exp(-{{a}}*x)",
    solution_latex: "$$\\frac{ {{a}}{{b}} \\cos({{c}}x) + {{b}}{{c}} \\sin({{c}}x) }{ {{a}}^2 + {{c}}^2 } + \\left( {{d}} - \\frac{ {{a}}{{b}} }{ {{a}}^2 + {{c}}^2 } \\right) e^{-{{a}}x}$$",
    steps: [
      "Primmero se identifica la ecuación diferencial lineal de primer orden: \\[ y' + {{a}}y = {{b}}\\cos({{c}}x) \\]",
      "La solución homogénea es: $$ y_h = Ce^{-{{a}}x} $$",
      "Para continuar, se propone una solución particular por coeficientes indeterminados:",
      "En este caso se propone: $$ y_p = A\\cos({{c}}x) + B\\sin({{c}}x) $$",
      "Al calcular la derivada se tiene $$ y_p' = -{{c}}A\\sin({{c}}x) + {{c}}B\\cos({{c}}x) $$",
      "Sustituyendo en la ecuación diferencial se tiene:",
      "\\[ (-{{c}}A\\sin({{c}}x) + {{c}}B\\cos({{c}}x)) + {{a}}(A\\cos({{c}}x) + B\\sin({{c}}x)) = {{b}}\\cos({{c}}x) \\]",
      "Al agrupar términos se obtiene:",
      "\\[ (-{{c}}A + {{a}}B)\\sin({{c}}x) + ({{c}}B + {{a}}A)\\cos({{c}}x) = {{b}}\\cos({{c}}x) \\]",
      "De aquí, obtenemos el sistema de ecuaciones:",
      "\\[ {{a}}A + {{c}}B = {{b}} \\\\ ",
      " -{{c}}A + {{a}}B = 0 \\]",
      "Al resolver el sistema resulta: \\[ A = \\frac{ {{a}}{{b}} }{ {{a}}^2 + {{c}}^2 } \\\\ B = \\frac{ {{c}}{{b}} }{ {{a}}^2 + {{c}}^2 } \\]",
      "La solución general está dada por: \\[ y = y_h + y_p \\]",
      "Finalmente, al aplicar la condición inicial \\( y(0) = {{d}} \\) se encuentra  \\( C \\)"
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
