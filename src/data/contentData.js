export const screens = [
    {
        id: 'screen1',
        icon: '/images.png',
        title: 'Equipos Legacy',
        subtitle: 'Mediciones de potencia óptica y RF',
        content: {
            heading: 'Mediciones de potencia óptica en TP de RX y TX',
            intro: 'Instrucciones detalladas para la validación del enlace y medición en RF.',
            sectionTitle: 'Procedimiento',
            items: [
                {
                    label: 'Paso 1 (Óptica Directa):',
                    description: 'Verificar voltaje con tester entre 0,9 V y 1,2 V. Si se detecta menos o más se debe ajustar con hub.'
                },
                {
                    label: 'Paso 2 (Óptica Retorno):',
                    description: 'Verificar voltaje con tester en 2 V. Si se detecta un valor diferente se debe reemplazar en nodo.'
                },
                {
                    label: 'Paso 3 (Verificación RPR):',
                    description: 'Standard Gain: Requerido entre -4 y -6 dBm. High Gain: Requerido entre -10 y -14 dBm.'
                },
                {
                    label: 'Paso 4 (RF Directa):',
                    description: 'Medir en el TP de salida del RX en modo "Experto de canales". Se deben medir a la salida 27 dBm planos y un MER >= a 40 dB. Ajustar los atenuadores en los 4 puertos al valor de la lápida del plano.'
                },
                {
                    label: 'Paso 5 (RF Retorno):',
                    description: 'Medir inyectando portadora en cada puerto y ajustando con Hub; los pads del módulo se deben poner en cero.'
                }
            ],
            conclusion: 'IMPORTANTE: Se debe medir así para verificar que la salida es plana en todo el espectro. Validar los valores de PAD de la OIB según tabla en sección Documentación.'
        }
    },
    {
        id: 'screen2',
        icon: '/images.png',
        title: 'Equipos Remote Phy',
        subtitle: 'Ajuste con ORE por MDA Técnica',
        content: {
            heading: 'Validación de Enlace',
            intro: 'Mediciones de potencia óptica en TP de RX y TX.',
            sectionTitle: 'Procedimiento Técnico',
            items: [
                {
                    description: 'El ajuste de niveles en caso de ser necesario lo debera hacer el personal de ORE'
                },
                
            ],
            conclusion: 'IMPORTANTE: Ante la no respuesta o menor duda consultar con el Supervisor de la zona a fin de acortar los tiempos de respuesta'
        }
    },
    {
        id: 'screen3',
        icon: '/Icon.png',
        title: 'Equipos Armonic Puros',
        subtitle: 'Equipos VCCAP FP_Armonic/RF_Armonic',
        content: {
            heading: 'Se debe medir las salidas en para verificar niveles corectos, IMPORTANTE: En Armonic puro el TP es de 30 dBmV',
            intro: 'En el caso de detectar anomalias se deben referir al Supervisor y operar con ORE para gestionar su ajsute definitivo via Noc',
            
            items: [ {label: ' El TP del armonic puro en -30 dBm'} ],
            
        }
    },
    {
        id: 'screen4',
        icon: '/collage.png',
        title: 'Equipos Armonic Hibrid',
        subtitle: 'Equipos VCCAP FO_Armonic/RF_Cisco',
        content: {
            heading: 'Ajuste de Equipos Híbridos',
            intro: 'Información técnica para equipos VCCAP FO_Armonic/RF_Cisco con módulos Pebble 2.',
            sectionTitle: 'Procedimiento de Ajuste',
            items: [
                {
                    label: 'Fibra Óptica:',
                    description: 'El ajuste es nulo por parte del técnico. Solo se debe verificar que la portadora esté entre 15 y 20 dBm.'
                },
                {
                    label: 'Módulo Pebble 2:',
                    description: 'El nivel de salida es de 18 dBm (no medible desde ningún lugar del nodo).'
                },
                {
                    label: 'Ajuste General:',
                    description: 'Pasos similares al módulo Legacy, pero con distintas herramientas de monitoreo.'
                },
                {
                    label: 'RF Directa:',
                    description: 'Medir portadoras en todos los puertos. La diferencia entre ellos debe ser tolerable (rango +/- 3 dB).'
                },
                {
                    label: 'RF Retorno:',
                    description: 'Inyectar portadora y verificar en Sonar. Ajustar pads según los valores requeridos por el plano Cisco.'
                }
            ],
            conclusion: 'IMPORTANTE: Los equipos Híbridos con módulos de RF Cisco tienen valores de TP de -20 dBm.'
        }
    },
    {
        id: 'screen5',
        icon: '/images.png',
        title: 'Equipos HGD y HGBT 42',
        subtitle: 'Pasos de ajuste y niveles',
        content: {
            heading: '',
            intro: 'Cada semana trae nuevas oportunidades, descubrimientos y logros. Aquí destacamos lo más relevante e interesante que no te puedes perder.',
            sectionTitle: 'Procedimiento',
            items: [
                { label: 'Paso 1:', description: 'Nueva misión a Marte exitosa' },
                { label: 'Paso 2:', description: 'Terapia génica revolucionaria' },
                { label: 'Paso 3:', description: 'Batería de larga duración ecológica' },
                { label: 'Paso 4:', description: 'Exposición virtual inmersiva' }
            ],
            conclusion: 'Estos momentos destacados representan el increíble potencial humano para crear, innovar y mejorar nuestro mundo de maneras que antes solo podíamos imaginar.'
        }
    },
    {
        id: 'screen6',
        icon: '/images.png',
        title: 'Equipos HGD 85',
        subtitle: 'Pasos de ajuste y niveles',
        content: {
            heading: 'Información al Instante',
            intro: 'En un mundo que se mueve rápido, el acceso instantáneo a la información es crucial. Esta sección te proporciona datos rápidos y útiles cuando más los necesitas.',
            sectionTitle: 'Procedimiento',
            items: [
                { label: 'Paso 1:', description: 'Optimizado para velocidad máxima' },
                { label: 'Paso 2:', description: 'Interfaz intuitiva y fluida' },
                { label: 'Paso 3:', description: 'Actualizado en tiempo real' },
                { label: 'Paso 4:', description: 'Disponible en cualquier dispositivo' }
            ],
            conclusion: 'La velocidad no es solo una característica, es una necesidad. Cada segundo cuenta cuando buscas información importante o necesitas tomar decisiones rápidas.'
        }
    },
    {
        id: 'screen7',
        icon: '/images.png',
        title: 'Equipos HGBT 42',
        subtitle: 'Pasos de ajuste y niveles',
        content: {
            heading: 'Detalles Técnicos HGBT 42',
            intro: 'Configuración específica para equipos HGBT con rango de 42 MHz.',
            sectionTitle: 'Procedimiento',
            items: [
                { label: 'Paso 1:', description: 'Verificación de entrada de señal' },
                { label: 'Paso 2:', description: 'Ajuste de ganancia y pendiente' },
                { label: 'Paso 3:', description: 'Prueba de portadoras de retorno' },
                { label: 'Paso 4:', description: 'Cierre y sellado de equipo' }
            ],
            conclusion: 'El equipo HGBT 42 operará con máxima eficiencia tras estos ajustes.'
        }
    },
    {
        id: 'screen8',
        icon: '/images.png',
        title: 'Equipos HGBT 85',
        subtitle: 'Pasos de ajuste y niveles',
        content: {
            heading: 'Detalles Técnicos HGBT 85',
            intro: 'Optimización de equipos HGBT configurados para el estándar de 85 MHz.',
            sectionTitle: 'Procedimiento',
            items: [
                { label: 'Paso 1:', description: 'Chequeo de niveles de salida' },
                { label: 'Paso 2:', description: 'Sincronización con el nodo' },
                { label: 'Paso 3:', description: 'Calibración de ecualizadores' },
                { label: 'Paso 4:', description: 'Validación de telemetría' }
            ],
            conclusion: 'La configuración de 85 MHz asegura un ancho de banda superior.'
        }
    },
    {
        id: 'screen9',
        icon: '/images.png',
        title: 'Equipos Line Extender',
        subtitle: 'Pasos de ajuste y niveles',
        content: {
            heading: 'Configuración de Line Extender',
            intro: 'Pasos críticos para asegurar que la cascada de amplificadores mantenga los niveles adecuados.',
            sectionTitle: 'Procedimiento',
            items: [
                { label: 'Paso 1:', description: 'Medición de entrada del tramo anterior' },
                { label: 'Paso 2:', description: 'Ajuste de atenuadores inter-etapa' },
                { label: 'Paso 3:', description: 'Verificación de voltajes AC/DC' },
                { label: 'Paso 4:', description: 'Prueba de integridad de conector' }
            ],
            conclusion: 'El extensor de línea ahora compensa correctamente las pérdidas del cable.'
        }
    },
    {
        id: 'manuales',
        icon: '📚',
        title: 'Documentación',
        subtitle: 'Manuales y Guías PDF',
        content: {
            heading: 'Manuales de Usuario',
            intro: 'Selecciona el documento que deseas visualizar. Los archivos se abrirán en una nueva pestaña.',
            sectionTitle: 'Documentos Disponibles',
            items: [
                { label: 'Manual 1:', description: 'Guía técnica de equipos Legacy', file: '/docs/manual1.pdf' },
                { label: 'Manual 2:', description: 'Procedimientos Remote Phy', file: '/docs/manual2.pdf' },
                { label: 'Manual 3:', description: 'Especificaciones HGD/HGBT', file: '/docs/manual3.pdf' }
            ],
            conclusion: 'Si necesitas manuales adicionales, por favor contacta al administrador del sistema.'
        }
    }
];
