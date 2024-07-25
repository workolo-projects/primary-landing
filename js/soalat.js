document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");
  const faqItems = document.querySelectorAll(".faq-item");

  toggleButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      faqItems.forEach((item, itemIndex) => {
        const answer = item.querySelector("p");
        const question = item.querySelector("h2");
        const svg = item.querySelector("svg path");

        if (itemIndex === index) {
          const isHidden = answer.classList.toggle("hidden");

          item.classList.toggle("ring-[#8F11A6]", !isHidden);
          item.classList.toggle("ring-gray-300", isHidden);

          question.classList.toggle("text-[#8F11A6]", !isHidden);
          question.classList.toggle("text-[#403F40]", isHidden);

          button.classList.toggle("bottom-15", !isHidden);
          button.classList.toggle("bottom-5", isHidden);

          svg.setAttribute(
            "d",
            isHidden
              ? "M16.25 6.875L10 13.125L3.75 6.875"
              : "M3.75 13.125L10 6.875L16.25 13.125"
          );
          svg.setAttribute("stroke", isHidden ? "#403F40" : "#8F11A6");
        } else {
          answer.classList.add("hidden");
          item.classList.add("ring-gray-300");
          item.classList.remove("ring-[#8F11A6]");

          question.classList.add("text-[#403F40]");
          question.classList.remove("text-[#8F11A6]");

          svg.setAttribute("d", "M16.25 6.875L10 13.125L3.75 6.875");
          svg.setAttribute("stroke", "#403F40");
        }
      });
    });
  });
});
