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

            items: [{ label: ' El TP del armonic puro en -30 dBm' }],

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
            heading: 'Medicion, calculo teorico de perdidas, evaluacion diagnostica',
            intro: 'Es impresindible un buen diagnostico de los niveles y formas onda en la entrada para poder ajustar adecuadamente la/s salida',
            sectionTitle: 'Procedimiento Técnico',
            items: [
                { label: 'Observacion importante:', description: 'En redes de 42 MHz SI se pueden utilizar modulos de 85 MHz' },
                { label: 'Paso 1:', description: 'Revisar lapida de plano y plano evaluando conincidencias o no coincidencias' },
                { label: 'Paso 2:', description: 'Medir los niveles a la entrada en los HGD y HGBT no pueden ser menores a 16 dBmV en ningun canal.' },
                { label: 'Paso 3:', description: 'Comparar la entrada medida con la entrada calculada desde el activo anterior, esta no debe diferir en +/- 2 dBmV y la pendiente parecida a la terorica calculada' },
                { label: 'Paso 4:', description: 'De ser coincidente proceder al ajuste si no revisar los pasivos del recorrido segun criterios generales' },
                { label: 'Paso 5:', description: 'Ajustar en modo normal 1 a niveles de salida, todas las salidas, segun lapida y pasar a modo AGC 3' },
                { label: 'Paso 6:', description: 'Revisar que el pad del AGC sea de 15db en redes de 42 MHz' },
                { label: 'Paso 7:', description: 'Ajustar en modo AGC 3 a niveles de salida segun lapida de plano' }
            ],
            conclusion: 'NOTA IMPORTANTE: Nunca se debe dejar el selector en modo 2, el modo no es utilizado en las redes de telecentro'


        }
    },
    {
        id: 'screen6',
        icon: '/images.png',
        title: 'Equipos HGD y HGBT 85',
        subtitle: 'Pasos de ajuste y niveles',
        content: {
            heading: 'Medicion, calculo teorico de perdidas, evaluacion diagnostica',
            intro: 'Es impresindible un buen diagnostico de los niveles y formas onda en la entrada para poder ajustar adecuadamente la/s salida',
            sectionTitle: 'Procedimiento Técnico',
            items: [
                { label: 'Observacion importante:', description: 'En redes de 85 MHz NO se pueden utilizar modulos de 42 MHz' },
                { label: 'Paso 1:', description: 'Revisar lapida de plano y plano evaluando conincidencias o no coincidencias' },
                { label: 'Paso 2:', description: 'Medir los niveles a la entrada en los HGD y HGBT no pueden ser menores a 16 dBmV en ningun canal.' },
                { label: 'Paso 3:', description: 'Comparar la entrada medida con la entrada calculada desde el activo anterior, esta no debe diferir en +/- 2 dBmV y la pendiente parecida a la terorica calculada' },
                { label: 'Paso 4:', description: 'De ser coincidente proceder al ajuste si no revisar los pasivos del recorrido segun criterios generales' },
                { label: 'Paso 5:', description: 'Ajustar en modo normal 1 a niveles de salida, todas las salidas, segun lapida y pasar a modo AGC 3' },
                { label: 'Paso 6:', description: 'Revisar que el pad sea de 13db para equipos de 85 MHz' },
                { label: 'Paso 7:', description: 'Ajustar en modo AGC 3 a niveles de salida segun lapida de plano' }
            ],
            conclusion: 'NOTA IMPORTANTE: Nunca se debe dejar el selector en modo 2, el modo no es utilizado en las redes de telecentro'
        }
    },
    {
        id: 'screen7',
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
        id: 'screen8',
        icon: '/libros.webp',
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
    },
    {
        id: 'screen9',
        icon: '/lapida.gif',
        title: 'Lápidas',
        subtitle: 'Manuales y Guías PDF',
        content: {
            heading: 'Manuales de Usuario',
            intro: 'Selecciona el documento que deseas visualizar. Los archivos se abrirán en una nueva pestaña.',
            sectionTitle: 'Documentos Disponibles',
            items: [
                {
                    label: 'Lápida de Referencia 1:',
                    description: 'Valores estándar para nodos Legacy.',
                    image: '/images/lapida_legacy.png'
                },
                {
                    label: 'Lápida de Referencia 2:',
                    description: 'Configuración típica para Remote Phy.',
                    image: '/images/lapida_rphy.png'
                },
                {
                    label: 'Lápida de Referencia 3:',
                    description: 'Niveles óptimos para HGD/HGBT.',
                    image: '/images/lapida_hgd.png'
                }
            ],
            conclusion: 'Estas lápidas sirven como referencia visual para los ajustes en campo.'
        }
    }
];
