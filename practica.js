const practicalTemplates = [
    {
    type: "lineal_constante",
    template: "Resuelve: \\( y' + {{a}}y = {{b}} \\) con \\( y(0) = {{c}} \\)",
    solution_mathjs: "{{b/a}} + ({{c}} - {{b/a}}) * exp(-{{a}}*x)",
    solution_latex: "{{b/a}} + \\left( {{c -b/a}} \\right) e^{-{{a}}x}",
    params: {
      a: { min: 2, max: 5 },
      b: { min: 2, max: 5 },
      c: { min: -3, max: 3 }
    },
    conditions: ["a != 0"]
  },
  {
    type: "trigonometrica_coseno",
    template: "Resuelve: \\( y' + {{a}}y = {{b}} \\cos({{c}}x) \\) con \\( y(0) = {{d}} \\)",
    solution_mathjs: "({{a*b}}*cos({{c}}*x) + {{b*c}}*sin({{c}}*x))/{{a^2 + c^2}} + ({{d}} - {{a*b/(a^2 + c^2)}}) * exp(-{{a}}*x)",
    solution_latex: "\\frac{ {{a*b}} \\cos({{c}}x) + {{b*c}} \\sin({{c}}x) }{ {{a^2 + c^2}} } + \\left( {{d}} - \\frac{ {{a*b}} }{ {{a^2 + c^2}} } \\right) e^{-{{a}}x}",
    params: {
      a: { min: 2, max: 5 },
      b: { min: 2, max: 5 },
      c: { min: 2, max: 5 },
      d: { min: -3, max: 3 }
    }
  },
  {
    type: "exponencial_positivo",
    template: "Resuelve: \\( y' + {{a}}y = {{b}}e^{ {{c}}x } \\) con \\( y(0) = {{d}} \\)",
    solution_mathjs: "({{b/(c+a)}}*exp({{c}}*x) + {{d-b/(c+a) }}*exp({-{a}}*x))",
    solution_latex: "\\frac{ {{b}} }{ {{c}}+{{a}} } e^{ {{c}}x } + \\left( {{d}} - \\frac{ {{b}} }{ {{c}}+{{a}} } \\right) e^{-{{a}}x}",
    conditions: ["c != -a"],
    params: {
      a: {min: 2, max: 4},
      b: {min: 2, max: 4},
      c: {min: 2, max: 4},
      d: {min: -3, max: 3}
    }
  }
];
