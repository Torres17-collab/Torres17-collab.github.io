
function mostrarAlimentos(categoria) {
    var alimentos = alimentosDB[categoria];
    if (!alimentos) {
        return;
    }
    var html = '';
    html = html + '<div class="alimentos-container">';
    html = html + '<h2>Alimentos de ' + categoria.charAt(0).toUpperCase() + categoria.slice(1) + '</h2>';
    html = html + '<div class="alimentos-grid">';
    for (var i = 0; i < alimentos.length; i++) {
        var alimento = alimentos[i];
        html = html + '<div class="alimento-card">';
        html = html + '<h3>' + alimento.nombre + '</h3>';
        html = html + '<div class="puntos-fuertes">';
        html = html + '<h4>Puntos Fuertes:</h4>';
        html = html + '<ul>';
        
        // Mostrar todos los puntos fuertes del alimento
        for (var j = 0; j < alimento.puntosFuertes.length; j++) {
            html = html + '<li>' + alimento.puntosFuertes[j] + '</li>';
        }
        
        html = html + '</ul>';
        html = html + '</div>';
        html = html + '<div class="valores-base">';
        html = html + '<p><strong>Valores por 100g:</strong></p>';
        html = html + '<p>Proteínas: ' + alimento.proteinas + 'g</p>';
        html = html + '<p>Carbohidratos: ' + alimento.carbohidratos + 'g</p>';
        html = html + '<p>Grasas: ' + alimento.grasas + 'g</p>';
        html = html + '<p>Calorías: ' + alimento.calorias + ' kcal</p>';
        html = html + '</div>';
        html = html + '<button class="btn-calcular" onclick="calcularValores(\'' + categoria + '\', \'' + alimento.nombre + '\')">Calcular Valores Nutricionales</button>';
        html = html + '</div>';
    }

    html = html + '</div>';
    html = html + '</div>';

    var contenidoAlimentos = document.getElementById('contenido-alimentos');
    contenidoAlimentos.innerHTML = html;
}

function calcularValores(categoria, nombreAlimento) {
    // Buscar los alimentos de la categoría
    var alimentos = alimentosDB[categoria];
    var alimento = null;
    
    for (var i = 0; i < alimentos.length; i++) {
        if (alimentos[i].nombre === nombreAlimento) {
            alimento = alimentos[i];
            break;
        }
    }
    if (!alimento) {
        return;
    }

    var gramos = prompt('Ingresa la cantidad en gramos de ' + nombreAlimento + ':');

    if (gramos === null || gramos === '') {
        return;
    }

    var cantidad = parseFloat(gramos);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert('Por favor ingresa un número válido mayor a 0');
        return;
    }

    var factor = cantidad / 100;

    var proteinas = (alimento.proteinas * factor).toFixed(1);
    var carbohidratos = (alimento.carbohidratos * factor).toFixed(1);
    var grasas = (alimento.grasas * factor).toFixed(1);
    var calorias = (alimento.calorias * factor).toFixed(0);

    var resultado = 'VALORES NUTRICIONALES PARA ' + cantidad + 'g DE ' + nombreAlimento.toUpperCase() + ':\n\n';
    resultado = resultado + '• Proteínas: ' + proteinas + 'g\n';
    resultado = resultado + '• Carbohidratos: ' + carbohidratos + 'g\n';
    resultado = resultado + '• Grasas: ' + grasas + 'g\n';
    resultado = resultado + '• Calorías: ' + calorias + ' kcal\n\n';
    resultado = resultado + 'Puntos fuertes de este alimento:\n';
    

    for (var i = 0; i < alimento.puntosFuertes.length; i++) {
        resultado = resultado + '• ' + alimento.puntosFuertes[i] + '\n';
    }

    alert(resultado);
}

function manejarClickCategoria() {

    var categorias = document.getElementsByClassName('card-category');

    for (var i = 0; i < categorias.length; i++) {
        var categoria = categorias[i];
        
        categoria.onclick = function() {

            var clases = this.className.split(' ');
            var tipoCategoria = clases[1].replace('category-', '');
            mostrarAlimentos(tipoCategoria);
        };
    }
}

function inicializar() {
    var main = document.getElementsByTagName('main')[0];
    if (!main) {
        main = document.body;
    }
    
    var contenedorAlimentos = document.createElement('div');
    contenedorAlimentos.id = 'contenido-alimentos';
    contenedorAlimentos.style.padding = '2rem';
    main.appendChild(contenedorAlimentos);

    var estilos = document.createElement('style');
    var cssTexto = '';
    cssTexto = cssTexto + '.alimentos-container { max-width: 1200px; margin: 0 auto; padding: 2rem; }';
    cssTexto = cssTexto + '.alimentos-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem; }';
    cssTexto = cssTexto + '.alimento-card { background: #fff; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 1px solid #e0e0e0; }';
    cssTexto = cssTexto + '.alimento-card h3 { color: var(--primary-color); margin-bottom: 1rem; font-size: 1.8rem; }';
    cssTexto = cssTexto + '.puntos-fuertes { margin-bottom: 1.5rem; }';
    cssTexto = cssTexto + '.puntos-fuertes h4 { color: #333; margin-bottom: 0.5rem; font-size: 1.4rem; }';
    cssTexto = cssTexto + '.puntos-fuertes ul { list-style: none; padding: 0; }';
    cssTexto = cssTexto + '.puntos-fuertes li { background: #f0f8ff; padding: 0.3rem 0.8rem; margin: 0.3rem 0; border-radius: 0.5rem; font-size: 1.2rem; color: #555; }';
    cssTexto = cssTexto + '.valores-base { background: #f9f9f9; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem; }';
    cssTexto = cssTexto + '.valores-base p { margin: 0.3rem 0; font-size: 1.3rem; }';
    cssTexto = cssTexto + '.btn-calcular { background-color: var(--primary-color); color: white; border: none; padding: 1rem 2rem; border-radius: 0.5rem; cursor: pointer; font-size: 1.3rem; width: 100%; transition: background-color 0.3s; }';
    cssTexto = cssTexto + '.btn-calcular:hover { background-color: #2a8bb8; }';
    cssTexto = cssTexto + '@media (max-width: 768px) { .alimentos-grid { grid-template-columns: 1fr; } }';
    
    estilos.innerHTML = cssTexto;
    
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(estilos);

    manejarClickCategoria();
    
    var contenidoInicial = '';
    contenidoInicial = contenidoInicial + '<div style="text-align: center; padding: 3rem; color: #666;">';
    contenidoInicial = contenidoInicial + '<h2>Selecciona una categoría para ver los alimentos</h2>';
    contenidoInicial = contenidoInicial + '<p>Haz click en cualquier categoría de arriba para explorar los alimentos disponibles</p>';
    contenidoInicial = contenidoInicial + '</div>';
    
    var contenidoAlimentos = document.getElementById('contenido-alimentos');
    contenidoAlimentos.innerHTML = contenidoInicial;
}

window.onload = function() {
    inicializar();
};
