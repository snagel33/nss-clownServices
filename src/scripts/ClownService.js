import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"

export const ClownService = () => {
    return `
        <h1 style="font-family:fantasy;"><img src="https://lh3.googleusercontent.com/proxy/CtSniitVzLdFhnYvekRbAWWS_6QGnygXzXeTiWxVFmj7MxoF9E4epW2G_sxqc_unJkmT7SVpQq4DpHZ0yiaXeF-E8suVy60vrMy2ABLTVydT" alt="clowns" style="width:80px;height:80px;"> Buttons & Lollipop Clown Services</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Clown Service Requests</h2>
            ${Requests()}
        </section>
    `
}