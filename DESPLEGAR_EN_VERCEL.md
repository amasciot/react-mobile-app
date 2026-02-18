# 🚀 Desplegar en Vercel

¡Es muy fácil publicar tu app en internet con Vercel!

## Paso 1: Abrir la terminal

Abre una **nueva** terminal (PowerShell o CMD) y asegúrate de estar en la carpeta del proyecto:

```powershell
cd "c:\Users\Zanino\.gemini\antigravity\scratch\code100\react-mobile-app"
```

## Paso 2: Ejecutar el comando de despliegue

Escribe el siguiente comando y presiona Enter:

```powershell
npx vercel
```

## Paso 3: Seguir las instrucciones en pantalla

La primera vez te pedirá que inicies sesión:

1. Te preguntará: `Log in to Vercel?` -> Presiona **Enter** (Yes)
2. Se abrirá una página web en tu navegador.
3. Inicia sesión con **GitHub**, **GitLab**, **Bitbucket**, o **Email**.
4. Una vez que diga "Success" en el navegador, vuelve a la terminal.

## Paso 4: Configurar el proyecto

En la terminal te hará unas preguntas rápidas. Solo presiona **Enter** para usar las opciones por defecto:

1. `Set up and deploy "~/..."?` -> **Enter** (Yes)
2. `Which scope do you want to deploy to?` -> **Enter** (Tu nombre de usuario)
3. `Link to existing project?` -> **Enter** (No)
4. `What’s your project’s name?` -> **Enter** (react-mobile-app)
5. `In which directory is your code located?` -> **Enter** (./)

## Paso 5: ¡Listo!

Vercel construirá tu app y te dará una URL (algo como `https://react-mobile-app-tu-nombre.vercel.app`).

¡Esa es la dirección pública de tu app que puedes compartir con cualquiera!

---

### 💡 Para actualizar tu app después

Si haces cambios en el código y quieres subirlos, solo ejecuta:

```powershell
npx vercel --prod
```
