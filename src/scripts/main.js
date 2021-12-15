import { ClownService } from "./ClownService.js"
import { fetchRequests, deleteRequest } from "./dataAccess.js"


export const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ClownService()
        }
    )
}

render()