import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAttendees">Number of Attendees</label>
            <input type="number" name="partyAttendees" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Party Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Date needed</label>
            <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyLength">Length of Reservation (in minutes)</label>
            <input type="number" name="partyLength" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userPartyAttendees = document.querySelector("input[name='partyAttendees']").value
        const userPartyAddress = document.querySelector("input[name='partyAddress']").value
        const userPartyDate = document.querySelector("input[name='partyDate']").value
        const userPartyLength = document.querySelector("input[name='partyLength']").value

        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            attendees: userPartyAttendees,
            address: userPartyAddress,
            date: userPartyDate,
            length: userPartyLength
        }

        sendRequest(dataToSendToAPI)
    }
})