function mostrarAlimentos(categoria) {
    const alimentos = alimentosDB[categoria];
    if (!alimentos) return;

    let html = `
        <div class="alimentos-container">
            <h2>Alimentos de ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>
            <div class="alimentos-grid">
    `;

    alimentos.forEach(alimento => {
        html += `
            <div class="alimento-card">
                <h3>${alimento.nombre}</h3>
                <div class="puntos-fuertes">
                    <h4>Puntos Fuertes:</h4>
                    <ul>
                        ${alimento.puntosFuertes.map(punto => `<li>${punto}</li>`).join('')}
                    </ul>
                </div>
                <div class="valores-base">
                    <p><strong>Valores por 100g:</strong></p>
                    <p>Proteínas: ${alimento.proteinas}g</p>
                    <p>Carbohidratos: ${alimento.carbohidratos}g</p>
                    <p>Grasas: ${alimento.grasas}g</p>
                    <p>Calorías: ${alimento.calorias} kcal</p>
                </div>
                <button class="btn-calcular" onclick="calcularValores('${categoria}', '${alimento.nombre}')">
                    Calcular Valores Nutricionales
                </button>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    document.getElementById('contenido-alimentos').innerHTML = html;
}

function calcularValores(categoria, nombreAlimento) {
    const alimento = alimentosDB[categoria].find(a => a.nombre === nombreAlimento);
    if (!alimento) return;

    const gramos = prompt(`Ingresa la cantidad en gramos de ${nombreAlimento}:`);
    
    if (gramos === null || gramos === '') {
        return;
    }

    const cantidad = parseFloat(gramos);
    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert('Por favor ingresa un número válido mayor a 0');
        return;
    }

    const factor = cantidad / 100;
    
    const proteinas = (alimento.proteinas * factor).toFixed(1);
    const carbohidratos = (alimento.carbohidratos * factor).toFixed(1);
    const grasas = (alimento.grasas * factor).toFixed(1);
    const calorias = (alimento.calorias * factor).toFixed(0);

    const resultado = `
VALORES NUTRICIONALES PARA ${cantidad}g DE ${nombreAlimento.toUpperCase()}:

• Proteínas: ${proteinas}g
• Carbohidratos: ${carbohidratos}g
• Grasas: ${grasas}g
• Calorías: ${calorias} kcal

Puntos fuertes de este alimento:
${alimento.puntosFuertes.map(punto => `• ${punto}`).join('\n')}
    `;

    alert(resultado);
}
// 
function manejarClickCategoria() {
    const categorias = document.querySelectorAll('.card-category');
    
    categorias.forEach(categoria => {
        categoria.addEventListener('click', function() {
            const clases = this.className.split(' ');
            const tipoCategoria = clases[1].replace('category-', '');
            mostrarAlimentos(tipoCategoria);
        });
    });
}

function inicializar() {
    const main = document.querySelector('main') || document.body;
    const contenedorAlimentos = document.createElement('div');
    contenedorAlimentos.id = 'contenido-alimentos';
    contenedorAlimentos.style.padding = '2rem';
    main.appendChild(contenedorAlimentos);

    const estilos = document.createElement('style');
    estilos.textContent = `
        .alimentos-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .alimentos-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .alimento-card {
            background: #fff;
            border-radius: 1rem;
            padding: 1.5rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            border: 1px solid #e0e0e0;
        }
        
        .alimento-card h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-size: 1.8rem;
        }
        
        .puntos-fuertes {
            margin-bottom: 1.5rem;
        }
        
        .puntos-fuertes h4 {
            color: #333;
            margin-bottom: 0.5rem;
            font-size: 1.4rem;
        }
        
        .puntos-fuertes ul {
            list-style: none;
            padding: 0;
        }
        
        .puntos-fuertes li {
            background: #f0f8ff;
            padding: 0.3rem 0.8rem;
            margin: 0.3rem 0;
            border-radius: 0.5rem;
            font-size: 1.2rem;
            color: #555;
        }
        
        .valores-base {
            background: #f9f9f9;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1.5rem;
        }
        
        .valores-base p {
            margin: 0.3rem 0;
            font-size: 1.3rem;
        }
        
        .btn-calcular {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            cursor: pointer;
            font-size: 1.3rem;
            width: 100%;
            transition: background-color 0.3s;
        }
        
        .btn-calcular:hover {
            background-color: #2a8bb8;
        }
        
        @media (max-width: 768px) {
            .alimentos-grid {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(estilos);

    manejarClickCategoria();
    document.getElementById('contenido-alimentos').innerHTML = `
        <div style="text-align: center; padding: 3rem; color: #666;">
            <h2>Selecciona una categoría para ver los alimentos</h2>
            <p>Haz click en cualquier categoría de arriba para explorar los alimentos disponibles</p>
        </div>
    `;
}
document.addEventListener('DOMContentLoaded', inicializar);

