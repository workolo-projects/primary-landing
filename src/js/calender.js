document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('ul[role="list"] li button');
    const resetAllLi = () => {
     buttons.forEach(button => {
      const li = button.closest('li');
      li.style.borderColor = '#E5E3E5';
      li.style.boxShadow = '0 0 0 2px #E5E3E5';
      const svg = button.querySelector('svg');
      if (svg) {
        const circles = svg.querySelectorAll('circle');
        circles.forEach((circle, index) => {
          if (index === 1) { 
            circle.setAttribute('fill', '#CCCBCC');
          }
        });
      }
    });
  };

  const removeCircleC7 = () => {
    const circle = document.querySelector('circle#c7');
    if (circle) {
      circle.parentNode.removeChild(circle);
    }
  };
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      resetAllLi();
      const li = button.closest('li');
      li.style.borderColor = '#8F11A6';
      li.style.boxShadow = '0 0 0 2px rgba(143, 17, 166, 0.5)';
      const svg = button.querySelector('svg');
      if (svg) {
        const circles = svg.querySelectorAll('circle');
        circles.forEach((circle, index) => {
          if (index === 1) { 
            circle.setAttribute('fill', '#8F11A6');
          }
        });
        removeCircleC7();
        const newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        newCircle.setAttribute('id', 'c7');
        newCircle.setAttribute('cx', '18'); 
        newCircle.setAttribute('cy', '18'); 
        newCircle.setAttribute('r', '7');  
        newCircle.setAttribute('fill', '#8F11A6'); 
        svg.appendChild(newCircle);
        }
       });
     });
   });
   let btnElemMoshahede = document.getElementById('btnMoshahede');
   if (btnElemMoshahede) {
           btnElemMoshahede.addEventListener('click', clickEventMoshahede);
         } else {
         console.error('Button element not found');
          }
        function clickEventMoshahede() {
          console.log('برو به صفحه مربوطه')
           }
           let btnElemSabteNam = document.getElementById('btnSabteNam');
   if (btnElemSabteNam) {
           btnElemSabteNam.addEventListener('click', clickSabteNam);
         } else {
         console.error('Button element not found');
          }
        function clickSabteNam() {
          console.log('برو به صفحه مربوطه')
           }
           let btnElemAgahi = document.getElementById('btnAgahi');
   if (btnElemAgahi) {
           btnElemAgahi.addEventListener('click', clickEventAgahi);
         } else {
         console.error('Button element not found');
          }
        function clickEventAgahi() {
          console.log('برو به صفحه مربوطه')
           }                