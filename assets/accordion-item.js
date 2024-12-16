class AccordionItem extends HTMLDetailsElement {
  static observedAttributes = ["open"];

  constructor() {
    super();
  }

  attributeChangedCallback(name, _, __) {
    if (name === "open") {
      const isExpandedContent = this.hasAttribute("open");
      const accordionItems =
        this.parentElement.querySelectorAll(".accordion__item");

      accordionItems.forEach((item) => {
        if (item === this) {
          item
            .querySelector(".angle-down")
            ?.classList.toggle("expanded", isExpandedContent);
          return;
        }
        item.hasAttribute("open") && item.removeAttribute("open");
        item.classList.contains("expanded") &&
          item.querySelector(".angle-down")?.classList.remove("expanded");
      });
    }
  }
}

customElements.define("accordion-item", AccordionItem, { extends: "details" });
