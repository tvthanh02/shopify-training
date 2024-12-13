class AccordionItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const accordionItemTrigger = this.querySelector(".accordion__item-trigger");
    console.log(
      "🚀 ~ AccordionItem ~ connectedCallback ~ accordionItemTrigger:",
      accordionItemTrigger
    );

    accordionItemTrigger &&
      accordionItemTrigger.addEventListener("click", (e) => {
        this.expandAccordionItem(e.target.parentElement);
      });
  }

  expandAccordionItem(selectedItem) {
    const accordionItems =
      this.parentElement.querySelectorAll(".accordion__item");

    accordionItems.forEach((item) => {
      if (item !== selectedItem) {
        item.querySelector(".angle-down")?.classList.remove("expanded");
        item
          .querySelector(".accordion__item-content")
          ?.classList.remove("expanded");
      }
    });

    const iconAngleDownEle = selectedItem.querySelector(".angle-down");
    const accordionContentEle = selectedItem.querySelector(
      ".accordion__item-content"
    );

    iconAngleDownEle?.classList.toggle("expanded");
    accordionContentEle?.classList.toggle("expanded");
  }
}

customElements.define("accordion-item", AccordionItem);
