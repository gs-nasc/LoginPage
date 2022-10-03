const Page = {
  form: {
    start: () => {
      Page.form.events.register();
    },
    events: {
      register: () => {
        document.querySelectorAll("input").forEach((i) => {
          i.addEventListener("keyup", Page.form.events.upLabel);
        });
        document.querySelectorAll(".see-pass").forEach((i) => {
          i.addEventListener("click", Page.form.events.seePassword);
        });
      },
      upLabel: (ev) => {
        if (ev instanceof KeyboardEvent) {
          const target = ev.target;

          const parent = target.parentNode;

          if (parent instanceof HTMLDivElement) {
            const label = parent.querySelector("label");

            if (target.value.length > 0) label.classList.add("active");
            else label.classList.remove("active");
          }
        }
      },
      seePassword: (ev) => {
        if (ev instanceof MouseEvent) {
          const target = ev.target;

          let parent = target;
          let input = null;

          while (input == null) {
            parent = parent.parentNode;
            input = parent.querySelector("input");
          }

          if (input instanceof HTMLInputElement) {
            const slashed = parent.querySelector("#slashed");
            const unslashed = parent.querySelector("#unslashed");
            if (input.type === "text") {
              slashed.classList.add("active");
              unslashed.classList.remove("active");
              unslashed.classList.add("inactive");
              slashed.classList.remove("inactive");
              input.type = "password";
            } else {
              slashed.classList.add("inactive");
              unslashed.classList.remove("inactive");
              unslashed.classList.add("active");
              slashed.classList.remove("active");
              input.type = "text";
            }
          }
        }
      },
    },
  },
  start: () => {
    Page.form.start();
  },
};

(() => {
  Page.start();
})();
