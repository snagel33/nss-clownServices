import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map((request) => convertRequestsToListElement(request)).join("")
            }
        </ul>
    `

    return html
}

const convertRequestsToListElement = (request) => {
    return `
        <li> 
            ${request.parentName}
            <button class="request__delete"
                id="request--${request.id}">
                Deny
            </button>
        </li>`
} 