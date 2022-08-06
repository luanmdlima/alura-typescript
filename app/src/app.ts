import { NegotiationController } from "./controllers/NegociationController.js";
import { NegotiationsView } from "./views/NegotiationsView.js";

const controller = new NegotiationController();
const form = document.querySelector(".form");
if (form) {
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		controller.add();
	});
} else {
	throw new Error("Form not found!");
}
