class Accordion extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const mocksData = [
      {
        subject: "Is it accessible?",
        content: "Yes. It adheres to the WAI-ARIA design pattern.",
      },
      {
        subject: "Is it styled?",
        content:
          "Yes. It comes with default styles that matches the other components' aesthetic.",
      },
      {
        subject: "Is it animated?",
        content:
          "Yes. It's animated by default, but you can disable it if you prefer.",
      },
    ];

    const title = this.getAttribute("title")
      ? this.getAttribute("title")
      : "Accordion";

    const titleEle = document.createElement("h1");
    titleEle.className = "accordion__heading";
    titleEle.textContent = title;

    const contentEle = document.createElement("div");
    contentEle.className = "accordion__content";
    mocksData.forEach((data) => {
      const { subject, content } = data;
      contentEle.appendChild(this.generateAccordionItem(subject, content));
    });

    this.appendChild(titleEle);
    this.appendChild(contentEle);
  }

  generateAccordionItem(subject, content) {
    const accordionItemEle = document.createElement("div");
    accordionItemEle.className = "accordion__item";

    accordionItemEle.innerHTML = `<div class="accordion__item-trigger">
        <p class="accordion__item-trigger-subject">${subject}</p>
        <div class="angle-down">
          <svg
            viewBox="0 0 448 512"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
      </div>
      <div class="accordion__item-content">
        ${content}
      </div>`;

    accordionItemEle
      .querySelector(".accordion__item-trigger")
      .addEventListener("click", (e) => {
        this.expandAccordionItem.bind(e.currentTarget.parentElement)();
      });

    return accordionItemEle;
  }

  expandAccordionItem() {
    const iconAngleDownEle = this.querySelector(".angle-down");
    const accordionContentEle = this.querySelector(".accordion__item-content");

    iconAngleDownEle?.classList.toggle("expanded");
    accordionContentEle?.classList.toggle("expanded");
  }
}

customElements.define("accordion-custom", Accordion);
