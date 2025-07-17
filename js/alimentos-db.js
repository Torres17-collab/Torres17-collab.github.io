// Base de datos de alimentos organizados por categorías
const alimentosDB = {
    carnes: [
        {
            nombre: "Pollo (pechuga)",
            puntosFuertes: ["Alto en proteínas", "Bajo en grasas", "Rico en niacina"],
            proteinas: 23.1,
            carbohidratos: 0,
            grasas: 3.6,
            calorias: 165
        },
        {
            nombre: "Carne de res (magra)",
            puntosFuertes: ["Rica en hierro", "Alto contenido proteico", "Fuente de vitamina B12"],
            proteinas: 26.1,
            carbohidratos: 0,
            grasas: 8.2,
            calorias: 250
        },
        {
            nombre: "Pescado (salmón)",
            puntosFuertes: ["Rico en omega-3", "Alto en proteínas", "Buena fuente de vitamina D"],
            proteinas: 25.4,
            carbohidratos: 0,
            grasas: 13.4,
            calorias: 208
        }
    ],
    
    frutas: [
        {
            nombre: "Manzana",
            puntosFuertes: ["Rica en fibra", "Antioxidantes", "Vitamina C"],
            proteinas: 0.3,
            carbohidratos: 13.8,
            grasas: 0.2,
            calorias: 52
        },
        {
            nombre: "Plátano",
            puntosFuertes: ["Rico en potasio", "Energía rápida", "Vitamina B6"],
            proteinas: 1.1,
            carbohidratos: 22.8,
            grasas: 0.3,
            calorias: 89
        },
        {
            nombre: "Naranja",
            puntosFuertes: ["Alta en vitamina C", "Fibra soluble", "Antioxidantes"],
            proteinas: 0.9,
            carbohidratos: 11.8,
            grasas: 0.1,
            calorias: 47
        }
    ],
    
    verduras: [
        {
            nombre: "Espinaca",
            puntosFuertes: ["Rica en hierro", "Folato", "Vitamina K"],
            proteinas: 2.9,
            carbohidratos: 3.6,
            grasas: 0.4,
            calorias: 23
        },
        {
            nombre: "Brócoli",
            puntosFuertes: ["Alto en vitamina C", "Fibra", "Antioxidantes"],
            proteinas: 2.8,
            carbohidratos: 6.6,
            grasas: 0.4,
            calorias: 34
        },
        {
            nombre: "Zanahoria",
            puntosFuertes: ["Rica en beta-caroteno", "Fibra", "Vitamina A"],
            proteinas: 0.9,
            carbohidratos: 9.6,
            grasas: 0.2,
            calorias: 41
        }
    ],
    
    granos: [
        {
            nombre: "Avena",
            puntosFuertes: ["Rica en fibra", "Proteína completa", "Beta-glucanos"],
            proteinas: 16.9,
            carbohidratos: 66.3,
            grasas: 6.9,
            calorias: 389
        },
        {
            nombre: "Quinoa",
            puntosFuertes: ["Proteína completa", "Sin gluten", "Rica en minerales"],
            proteinas: 14.1,
            carbohidratos: 64.2,
            grasas: 6.1,
            calorias: 368
        },
        {
            nombre: "Arroz integral",
            puntosFuertes: ["Fibra", "Vitaminas B", "Minerales"],
            proteinas: 7.9,
            carbohidratos: 77.2,
            grasas: 2.9,
            calorias: 370
        }
    ],
    
    cereales: [
        {
            nombre: "Trigo integral",
            puntosFuertes: ["Rica en fibra", "Vitaminas B", "Minerales"],
            proteinas: 13.7,
            carbohidratos: 71.2,
            grasas: 2.5,
            calorias: 340
        },
        {
            nombre: "Maíz",
            puntosFuertes: ["Energía", "Fibra", "Antioxidantes"],
            proteinas: 9.4,
            carbohidratos: 74.3,
            grasas: 4.7,
            calorias: 365
        },
        {
            nombre: "Cebada",
            puntosFuertes: ["Beta-glucanos", "Fibra soluble", "Minerales"],
            proteinas: 12.5,
            carbohidratos: 73.5,
            grasas: 2.3,
            calorias: 354
        }
    ],
    
    tuberculos: [
        {
            nombre: "Papa",
            puntosFuertes: ["Rica en potasio", "Vitamina C", "Energía"],
            proteinas: 2.1,
            carbohidratos: 17.5,
            grasas: 0.1,
            calorias: 77
        },
        {
            nombre: "Camote",
            puntosFuertes: ["Beta-caroteno", "Fibra", "Vitaminas"],
            proteinas: 2.0,
            carbohidratos: 20.1,
            grasas: 0.1,
            calorias: 86
        },
        {
            nombre: "Yuca",
            puntosFuertes: ["Energía", "Fibra", "Vitamina C"],
            proteinas: 1.4,
            carbohidratos: 38.1,
            grasas: 0.3,
            calorias: 160
        }
    ],
    
    suplementos: [
        {
            nombre: "Proteína en polvo (whey)",
            puntosFuertes: ["Proteína completa", "Absorción rápida", "Aminoácidos"],
            proteinas: 80.0,
            carbohidratos: 4.0,
            grasas: 1.9,
            calorias: 354
        },
        {
            nombre: "Creatina",
            puntosFuertes: ["Mejora rendimiento", "Fuerza muscular", "Recuperación"],
            proteinas: 0,
            carbohidratos: 0,
            grasas: 0,
            calorias: 0
        },
        {
            nombre: "Multivitamínico",
            puntosFuertes: ["Vitaminas esenciales", "Minerales", "Antioxidantes"],
            proteinas: 0,
            carbohidratos: 0,
            grasas: 0,
            calorias: 0
        }
    ],
    
    derivados: [
        {
            nombre: "Leche entera",
            puntosFuertes: ["Calcio", "Proteína completa", "Vitamina D"],
            proteinas: 3.4,
            carbohidratos: 4.8,
            grasas: 3.6,
            calorias: 61
        },
        {
            nombre: "Queso fresco",
            puntosFuertes: ["Alto en calcio", "Proteínas", "Probióticos"],
            proteinas: 11.0,
            carbohidratos: 4.1,
            grasas: 4.3,
            calorias: 98
        },
        {
            nombre: "Yogurt natural",
            puntosFuertes: ["Probióticos", "Calcio", "Proteínas"],
            proteinas: 10.0,
            carbohidratos: 3.6,
            grasas: 0.4,
            calorias: 59
        }
    ],
    
    legumbres: [
        {
            nombre: "Lentejas",
            puntosFuertes: ["Rica en proteínas", "Hierro", "Folato"],
            proteinas: 25.8,
            carbohidratos: 60.1,
            grasas: 1.1,
            calorias: 353
        },
        {
            nombre: "Garbanzos",
            puntosFuertes: ["Proteína vegetal", "Fibra", "Minerales"],
            proteinas: 19.3,
            carbohidratos: 61.0,
            grasas: 6.0,
            calorias: 364
        },
        {
            nombre: "Frijoles negros",
            puntosFuertes: ["Antioxidantes", "Proteína", "Fibra"],
            proteinas: 21.6,
            carbohidratos: 62.4,
            grasas: 1.4,
            calorias: 341
        }
    ]
};

// Exportar la base de datos para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = alimentosDB;
}