import "./app.css"
import "/node_modules/carbon-components-svelte/css/all.css"
import App from "./App.svelte"

const app = new App({
  target: document.getElementById("app"),
})

export default app
