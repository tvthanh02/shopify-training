class Accordion extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // const mocksData = [
    //   {
    //     subject: "Is it accessible?",
    //     content: "Yes. It adheres to the WAI-ARIA design pattern.",
    //   },
    //   {
    //     subject: "Is it styled?",
    //     content:
    //       "Yes. It comes with default styles that matches the other components' aesthetic.",
    //   },
    //   {
    //     subject: "Is it animated?",
    //     content:
    //       "Yes. It's animated by default, but you can disable it if you prefer.",
    //   },
    // ];
  }
}

customElements.define("accordion-custom", Accordion);
