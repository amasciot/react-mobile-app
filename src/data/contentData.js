export const screens = [
    {
        id: 'screen1',
        icon: '/images.png',
        title: 'Nodos Legacy',
        subtitle: 'Mediciones de potencia óptica y RF',
        content: {
            heading: 'Mediciones de potencia óptica en TP de RX y TX',
            intro: 'Instrucciones detalladas para la validación del enlace y medición en RF.',
            sectionTitle: 'Procedimiento',
            items: [
                {
                    label: 'Paso 1 (RX en nodo):',
                    description: 'Verificar voltaje con tester entre 0,9 V y 1,2 V. Si se detecta menos o más se debe ajustar con hub.'
                },
                {
                    label: 'Paso 2 (TX en nodo):',
                    description: 'Verificar voltaje con tester en 2 V. Si se detecta un valor diferente se debe reemplazar TX en nodo.'
                },
                {
                    label: 'Paso 3 (Verificación RPR en hub):',
                    description: 'Standard Gain: Requerido entre -4 y -6 dBm. High Gain: Requerido entre -10 y -14 dBm.(Validar con NOc ORE o hub)'
                },
                {
                    label: 'Paso 3 (Verificación RPR en hub):',
                    description: 'Standard Gain: Requerido entre -4 y -6 dBm. High Gain: Requerido entre -10 y -14 dBm.(Validar con NOc ORE o hub)'
                },
                {
                    label: 'Paso 4 (validar pad OIB):',
                    description: 'Validar los valores de pad OIB (RX y TX) segun tabla 4 de la seccion documentacion.'
                },
                {
                    label: 'Paso 5 (RF en Directa):',
                    description: 'Medir en el TP de salida del RX en modo "Experto de canales". Se deben medir a la salida 27 +/- 1 dBm planos en portadoras piloto y un MER >= a 40 dB. Ajustar los atenuadores en los 4 puertos al valor de la lápida del plano. Verificar los valores de ecualizadores de fabrica del modulo (estos deben ser de los originales y no se deben cambiar).'
                },
                {
                    label: 'IMPORTANTE',
                    description: 'Se debe medir así para verificar que la salida es plana en todo el espectro  Los canales digitales se deben encontrar aprox 6 dBmV por debajo de los pilotos de ajuste.'
                },
                {
                    label: 'Paso 7 (RF Retorno):',
                    description: 'Medir inyectando portadora en cada puerto y ajustando con Hub; los pads del módulo se deben poner en cero. Si no da balanceado entre todas las salidas cambiar el modulo en caso de falta de modulo de RF.'
                }
            ],
            conclusion: 'NOTA IMPORTANTE: Ante dudas consultar al supervisor y el si no tiene respuesta consultara al PM.'
        }
    },
    {
        id: 'screen2',
        icon: '/images.png',
        title: 'Nodos Remote Phy Cisco',
        subtitle: 'Ajuste con ORE por MDA Técnica',
        content: {
            heading: 'Validación de Enlace',
            intro: 'Mediciones de potencia óptica consultando al operador tanto lado hub como lado nodo. Revisar la tabla de niveles de trabajo para los que sean SFP.',
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
        title: 'Nodos VCCAP Harmonic Puros',
        subtitle: 'Nodos VCCAP Harmonic Puros (no hibridos)',
        content: {
            heading: 'Validación de Enlace Optico',
            intro: 'Mediciones de potencia optica consultando al operador tanto de lado hub como de lado nodo. Ver tabla de valores de trabajo para los SFP',
            sectionTitle: 'Validacion de RF',
            items: [
                {
                    
                    description: 'Se debe medir las salidas de RF para verificar niveles correctos tanto en directa como en retorno segúnlapida del plano.'
                },
                {
                    label: 'IMPORTANTE',
                    description: 'En Harmonic puro el TP de RF es de -30 dBmV'
                },
         
            ],
            conclusion: 'En caso de detectar anomalias se deben referir al Supervisor y operar con ORE para gestionar su ajsute definitivo via Noc'
        }
    },      
    {
        id: 'screen4',
        icon: '/collage.png',
        title: 'Nodos VCCAP Armonic Hibridos',
        subtitle: 'Son nodos legacy CISCO a los que se les cambio la parte optica por un VCCAP Harmonic',
        content: {
            heading: 'Procedimiento de Ajuste',
            sectionTitle: 'Procedimiento de Ajuste',
            items: [
                {
                    label: 'Fibra Óptica:',
                    description: 'Mediciones de potencia óptica consultando al operador tanto lado hub como lado nodo. Ver tabla de niveles de trabajo para los SFP'
                },
                {
                    label: 'Ajuste de RF ',
                    description: 'Los pasos son similares al módulo Legacy, pero con distintas herramientas de monitoreo. Los niveles deben respetar a los de diseño por plano'
                },
                {
                    label: 'RF Directa:',
                    description: 'Ajustar la directa en los 4 puertos para dejarlos según plano.'
                },
                {
                    label: 'RF Retorno:',
                    description: 'Inyectar portadora y verificar en Sonar que los 4 puertos se encuentren dentro de los valores de diseño. Los pads de retorno en cada puerto deben ir en cero.'
                },
               
            ],
            conclusion: 'IMPORTANTE: Los equipos Híbridos con módulos de RF Cisco tienen valores de TP de -20 dBm.'
        }
    },
    {
        id: 'screen5',
        icon: '/images.png',
        title: 'Amplificadores con modulo HGD y HGBT 42/54',
        subtitle: 'Procedimiento de Ajuste',
        content: {
            heading: 'Medicion, calculo teorico de perdidas, evaluacion diagnostica',
            intro: 'Es impresindible un buen diagnostico de los niveles y formas onda en la entrada para poder ajustar adecuadamente la/s salida',
            sectionTitle: 'Procedimiento para el ajuste',
            items: [
                { label: 'Observacion importante:', description: 'En redes de 42 MHz SI se pueden utilizar modulos de 85 MHz. Consultar apartado de modulos de 85/102' },
                { label: 'Paso 1:', description: 'Los nivels de ajuste se deben respetar segùn el diseño que figura en el plano' },
                { label: 'Paso 2:', description: 'Medir los niveles a la entrada en los HGD y HGBT no pueden ser menores a 16 dBmV en ningun canal piloto.' },
                { label: 'Paso 3:', description: 'Comparar la entrada medida con la entrada medido con el valor de entrada indicado en el plano y la pendiente debe ser similar a la indicada en la lápida, en caso de encontrar diferencias revisar problemas "aguas arriba" ' },
                { label: 'Paso 4:', description: 'Ajustar siempre los niveles de directa con el selector SW1 en paso 1. Todas las salidas deneran quedar ajustadas segùn lapida' },
                { label: 'Paso 5:', description: 'Una vez ajustada la directa se debe ajustar el pad de AGC midiendo para estos módulos el nivel de canal 70 y restarle 34 dBmV. Luego cambiar el SW1 a paso 3. Con el preset AGC GAIN ajustar la salida a los mismos niveles de ajuste manual.' },
                { label: 'Paso 6:', description: 'Revisar que el pad de AGC debe resultar de 15 dB en equipos de 42 MHz. Para los diseños N+1' }
            ],
            conclusion: 'NOTA IMPORTANTE: Nunca se debe dejar el selector en modo 2, dicho modo no es utilizado en las redes de telecentro'


        }
    },
    {
        id: 'screen6',
        icon: '/images.png',
        title: 'Amplificadores con modulo HGD y HGBT 85/102',
        subtitle: 'Procedimiento de Ajuste',
        content: {
            heading: 'Medicion, calculo teorico de perdidas, evaluacion diagnostica',
            intro: 'Es impresindible un buen diagnostico de los niveles y formas onda en la entrada para poder ajustar adecuadamente la/s salida',
            sectionTitle: 'Procedimiento para el ajuste',
            items: [
                { label: 'Observacion importante:', description: 'En redes de 85 MHz NO se pueden utilizar modulos de 42 MHz' },
                { label: 'Paso 1:', description: 'Los nivels de ajuste se deben respetar segùn el diseño que figura en el plano' },
                { label: 'Paso 2:', description: 'Medir los niveles a la entrada en los HGD y HGBT no pueden ser menores a 16 dBmV en ningun canal piloto.' },
                { label: 'Paso 3:', description: 'Comparar la entrada medida con la entrada medido con el valor de entrada indicado en el plano y la pendiente debe ser similar a la indicada en la lápida, en caso de encontrar diferencias revisar problemas "aguas arriba" ' },
                { label: 'Paso 4:', description: 'Ajustar siempre los niveles de directa con el selector SW1 en paso 1. Todas las salidas deneran quedar ajustadas segùn lapida' },
                { label: 'Paso 5:', description: 'Una vez ajustada la directa se debe ajustar el pad de AGC midiendo para estos módulos el nivel de canal 110 y restarle 34 dBmV. Luego cambiar el SW1 a paso 3. Con el preset AGC GAIN ajustar la salida a los mismos niveles de ajuste manual.' },
                { label: 'Paso 6:', description: 'Revisar que el pad de AGC debe resultar de 15 dB en equipos de 42 MHz. Para los diseños N+1' }
            ],
            conclusion: 'NOTA IMPORTANTE: Nunca se debe dejar el selector en modo 2, dicho modo no es utilizado en las redes de telecentro'
        }
    },
    {
        id: 'screen7',
        icon: '/images.png',
        title: 'Amplificadores Line Extender 42/54',
        subtitle: 'Procedimiento para el ajuste',
        content: {
            heading: 'Configuración de Line Extender',
            intro: 'Pasos críticos para asegurar que la cascada de amplificadores mantenga los niveles adecuados.',
            sectionTitle: 'Procedimiento',
            items: [
                { label: 'Observacion importante:', description: 'En redes de 42 MHz SI se pueden utilizar modulos de 85 MHz.(Consultar apartado de módulos de 85/102)' },
                { label: 'Paso 1:', description: 'Los nivels de ajuste se deben respetar segùn el diseño que figura en el plano' },
                { label: 'Paso 2:', description: 'Medir los niveles a la entrada en los LE no pueden ser menores a 20 dBmV en ningún canal piloto.' },
                { label: 'Paso 3:', description: 'Comparar la entrada medida con el valor de entrada indicado en el plano y la pendiente debe ser similar a la indicada en la lápida. En caso de encontrar diferencias revisar problemas “aguas arriba” ' },
                { label: 'Paso 4:', description: 'Ajustar siempre los niveles de directa con el selector SW1 en paso 1. Todas las salidas, deben quedar ajustadas según lapida. ' },
                { label: 'Paso 5:', description: 'Una vez ajustada la directa se debe ajustar el pad de AGC midiendo para estos módulos el nivel del canal 70 y restarle 29dB. Luego cambiar el SW1 a paso 3. Con el preset AGC GAIN ajustar la salida a los mismos niveles del ajuste manual. ' },
                { label: 'Paso 6:', description: 'Revisar que el pad del AGC debe resultar de 17db en equipos de 42 MHz. Para los diseños N+1 ' }
            ],
            conclusion: 'Nunca se debe dejar el selector en modo 2, dicho modo no es utilizado en las redes de telecentro.'
        }
    },
    {
        id: 'screen8',
        icon: '/images.png',
        title: 'Amplificadores Line Extender 85/102',
        subtitle: 'Procedimiento para el ajuste',
         content: {
            heading: 'Configuración de Line Extender',
            intro: 'Pasos críticos para asegurar que la cascada de amplificadores mantenga los niveles adecuados.',
            sectionTitle: 'Procedimiento',
            items: [
                { label: 'Observacion importante:', description: 'En redes de 85 MHz NO se pueden utilizar modulos de 42 MHz.(Consultar apartado de módulos de 85/102)' },
                { label: 'Paso 1:', description: 'Los nivels de ajuste se deben respetar segùn el diseño que figura en el plano' },
                { label: 'Paso 2:', description: 'Medir los niveles a la entrada en los LE no pueden ser menores a 20 dBmV en ningún canal piloto.' },
                { label: 'Paso 3:', description: 'Comparar la entrada medida con el valor de entrada indicado en el plano y la pendiente debe ser similar a la indicada en la lápida. En caso de encontrar diferencias revisar problemas “aguas arriba” ' },
                { label: 'Paso 4:', description: 'Ajustar siempre los niveles de directa con el selector SW1 en paso 1. Todas las salidas, deben quedar ajustadas según lapida. ' },
                { label: 'Paso 5:', description: 'Una vez ajustada la directa se debe ajustar el pad de AGC midiendo para estos módulos el nivel del canal 110 y restarle 29dB. Luego cambiar el SW1 a paso 3. Con el preset AGC GAIN ajustar la salida a los mismos niveles del ajuste manual. ' },
                { label: 'Paso 6:', description: 'Revisar que el pad del AGC debe resultar de 14db en equipos de 85 MHz. Para los diseños N+1 ' }
            ],
            conclusion: 'Nunca se debe dejar el selector en modo 2, dicho modo no es utilizado en las redes de telecentro.'
        }
    },
    {
        id: 'screen9',
        icon: '/libros.webp',
        title: 'Documentación',
        subtitle: 'Manuales y Guías PDF',
        content: {
            heading: 'Manuales de Usuario',
            intro: 'Selecciona el documento que deseas visualizar. Los archivos se abrirán en una nueva pestaña.',
            sectionTitle: 'Documentos Disponibles',
            items: [
                { label: 'Cable .750:', description: 'Perdidas en cables de .750 P3', file: '/docs/manual1.pdf' },
                { label: 'Cables Drop:', description: 'Perdidas en cables drop', file: '/docs/manual2.pdf' },
                { label: 'Cable .500:', description: 'Perdidas en cables .500', file: '/docs/manual3.pdf' },
                { label: 'Manual AGC:', description: 'Procedimiento de ajuste AGC', file: '/docs/manual4.pdf' }
            ],
            conclusion: 'Si necesitas manuales adicionales, por favor contacta al administrador de este sistema. mail: amasciotra@telecentro.net.ar'
        }
    },
    {
        id: 'screen10',
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
                    description: 'Lapidas de formato 1',
                    image: '/Lapida1.jpeg'
                },
                {
                    label: 'Lápida de Referencia 2:',
                    description: 'Lapidas con formato 2',
                    image: '/Lapida2.jpeg'
                },
                {
                    label: 'Lápida de Referencia 3:',
                    description: 'Lapidas con formato 3',
                    image: '/Lapida3.jpeg'
                },
                {
                    label: 'Lápida de Referencia 4:',
                    description: 'Lapidas con formato 4',
                    image: '/Lapida4.jpeg'
                }
            ],
            conclusion: 'Estas lápidas sirven como referencia visual para los ajustes en campo.'
        }
    }
];
