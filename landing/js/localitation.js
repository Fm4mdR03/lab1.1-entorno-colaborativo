/**
 * Laboratorio DSG - Ingeniería de Procesos: Internacionalización (i18n)
 * Equipo: Miguel Morales, Mateo Medina, Brian Flores
 * Objetivo: Externalizar todas las cadenas de texto del HTML.
 * Este proceso prepara la arquitectura del software para la Localización (L10n).
 */

// 1. Objeto de Recursos (Cadenas Externalizadas - Basado en JSON/Bundle)
// Actualmente solo en ESPAÑOL (es). La tarea de L10n sería agregar el objeto 'en'.
const resources = {
    'es': {
        'title-page': 'Equipo - Desarrollo de Software Aplicado',
        'header-title': 'Equipo de Trabajo',
        'header-subtitle': 'Materia: DESARROLLO DE SOFTWARE APLICADO',
        'age-label': 'Edad',
        'career-label': 'Carrera',
        'subject-label': 'Materia',
        'footer-text': '© Equipo - Desarrollo de Software Aplicado'
    },
    // El equipo de Madrid (o un traductor) implementaría 'en' en el futuro
    'en': {
        'title-page': 'Team - Applied Software Development',
        'header-title': 'Work Team',
        'header-subtitle': 'Subject: APPLIED SOFTWARE DEVELOPMENT',
        'age-label': 'Age',
        'career-label': 'Career',
        'subject-label': 'Subject',
        'footer-text': '© Team - Applied Software Development'
    }
};

// 2. Lógica de Aplicación
function applyLocalization(langCode) {
    const strings = resources[langCode];

    if (!strings) {
        console.error(`Error de L10n: Código de idioma '${langCode}' no soportado.`);
        return;
    }

    // Aplicar al Título, Header y Footer
    document.getElementById('title-page').textContent = strings['title-page'];
    document.getElementById('header-title').textContent = strings['header-title'];
    document.getElementById('header-subtitle').textContent = strings['header-subtitle'];
    document.getElementById('footer-text').textContent = strings['footer-text'];
    
    // Aplicar a las etiquetas de las tarjetas (simulando una adaptación por componente)
    document.getElementById('age-label-miguel').textContent = strings['age-label'];
    document.getElementById('career-label-miguel').textContent = strings['career-label'];
    document.getElementById('subject-label-miguel').textContent = strings['subject-label'];

    document.getElementById('age-label-mateo').textContent = strings['age-label'];
    document.getElementById('career-label-mateo').textContent = strings['career-label'];
    document.getElementById('subject-label-mateo').textContent = strings['subject-label'];

    document.getElementById('age-label-brian').textContent = strings['age-label'];
    document.getElementById('career-label-brian').textContent = strings['career-label'];
    document.getElementById('subject-label-brian').textContent = strings['subject-label'];
}

// 3. Inicialización: Simular la carga del idioma (por defecto 'es')
// En una aplicación real, este código obtendría el idioma del navegador o de la configuración del usuario.
const defaultLanguage = 'es';
applyLocalization(defaultLanguage);

// ******************************************************************************
// SIMULACIÓN DE QA/VERIFICACIÓN (Prueba de Internacionalización)
// Para verificar el i18n, se puede ejecutar el siguiente código en la consola:
// applyLocalization('en');
// Esto simula que un usuario de otro país requiere el idioma inglés.
// ******************************************************************************