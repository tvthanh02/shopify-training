class AccordionItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const accordionItemTrigger = this.querySelector(".accordion__item-trigger");

    accordionItemTrigger &&
      accordionItemTrigger.addEventListener("click", (e) => {
        this.expandAccordionItem.bind(e.target.parentElement)();
      });
  }

  expandAccordionItem() {
    const accordionItems =
      this.parentElement.querySelectorAll(".accordion__item");

    const isExpandedContent = this.querySelector(
      ".accordion__item-content"
    )?.classList.contains("expanded");

    accordionItems.forEach((item) => {
      item
        .querySelector(".angle-down")
        ?.classList.toggle("expanded", item === this && !isExpandedContent);
      item
        .querySelector(".accordion__item-content")
        ?.classList.toggle("expanded", item === this && !isExpandedContent);
    });
  }
}

customElements.define("accordion-item", AccordionItem);
