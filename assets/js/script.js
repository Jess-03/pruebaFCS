const apiUrl = 'https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport'; 
let courseImage = document.querySelector('.course-img');
let courseTitle = document.querySelector('.course-title');
let courseAdvance = document.querySelector('.course-advance');
let scoreCourse = document.querySelector('.score');
let backgroundColorNum= document.querySelectorAll('.bg-circle');

fetch(apiUrl)
  .then(response => response.json())
  .then(response => {
    // Actualizar el contenido de los elementos HTML con los datos de la API
    document.getElementById('userName').textContent = response.people[0].name + ' ' + response.people[0].lastName;
    document.getElementById('email').textContent = response.email;
    
    let colorTheme = response.inscriptions[0].course.sector.colorTheme;

    //Imagen del curso
    courseImage.src = response.inscriptions[0].course.imageUrl;
    courseImage.style.backgroundColor = colorTheme;

    //Título
    courseTitle.innerHTML = response.inscriptions[0].course.name;
    courseTitle.style.color = colorTheme;
    courseTitle.style.textShadow =` 0px 0px 20px ${colorTheme}`;
    
    //Avance del curso
    courseAdvance.style.backgroundColor = colorTheme;
    courseAdvance.innerHTML= response.inscriptions[0].advance + '%' + ' '+ 'avance'; 

    //Color de fondo para los números
    backgroundColorNum.forEach(response => {
      response.style.background = `
      radial-gradient(
        circle 31px, 
        ${colorTheme}69,
        #ffffff00)`;
    });

    //Promedio del curso
    scoreCourse.innerHTML = response.inscriptions[0].scoreCourse;
  })

  .catch(error => {
    console.error('Error al llamar a la API:', error);
  });
