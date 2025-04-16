const practicalTemplates = [
  {
    type: "positivo",
    template: "Resuelve: \\( y' + {{a}}y = {{b}} \\), \\( y(0) = {{d}} \\)",
    solution: "\\frac{ {{b}} }{ {{a}} } + \\left( {{d}} - \\frac{ {{b}} }{ {{a}} } \\right) e^{-{{a}}x}",
    conditions: ["b != 0"],
    params: {
      a: {min: 2, max: 5},
      b: {min: -4, max: 4},
      d: {min: -3, max: 3}
    }
  },
  {
    type: "negativo",
    template: "Resuelve: \\( y' - {{a}}y = {{b}}e^{ {{c}}x } \\), \\( y(0) = {{d}} \\)",
    solution: "\\frac{ {{b}} }{ {{c}}-{{a}} } e^{ {{c}}x } + \\left( {{d}} - \\frac{ {{b}} }{ {{c}}-{{a}} } \\right) e^{ {{a}}x }",
    conditions: ["c != a"],
    params: {
      a: {min: 2, max: 4},
      b: {min: 2, max: 4},
      c: {min: 2, max: 4},
      d: {min: -3, max: 3}
    }
  },
  {
    type: "exponencial_positivo",
    template: "Resuelve: \\( y' + {{a}}y = {{b}}e^{ {{c}}x } \\), \\( y(0) = {{d}} \\)",
    solution: "\\frac{ {{b}} }{ {{c}}+{{a}} } e^{ {{c}}x } + \\left( {{d}} - \\frac{ {{b}} }{ {{c}}+{{a}} } \\right) e^{-{{a}}x}",
    conditions: ["c != -a"],
    params: {
      a: {min: 2, max: 4},
      b: {min: 2, max: 4},
      c: {min: 2, max: 4},
      d: {min: -3, max: 3}
    }
  },
  {
    type: "trigonometrico_coseno",
    template: "Resuelve: \\( y' + {{a}}y = {{b}} \\cos( {{c}}x ) \\), \\( y(0) = {{d}} \\)",
    solution: "\\frac{ {{a}}^2 {{d}} e^{-{{a}} x} + {{a}} {{b}} \\cos( {{c}} x) - {{a}} {{b}} e^{-{{a}} x} + {{c}}^2 {{d}} e^{-{{a}} x} + {{b}} {{c}} \\sin( {{c}} x) }{ {{a}}^2 + {{c}}^2 }",
    params: {
      a: {min: 2, max: 4},
      b: {min: 2, max: 4},
      c: {min: 2, max: 4},
      d: {min: -3, max: 3}
    }
  }
];
