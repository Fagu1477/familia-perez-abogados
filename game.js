(() => {
const ruralQuestions = [
  {
    category: 'REVISIÓN DE DOCUMENTOS',
    question: 'Antes de negociar la compra de un predio rural, ¿qué conviene revisar primero?',
    options: [
      'Solo el recibo de servicios más reciente.',
      'El certificado de tradición y libertad y la situación jurídica del predio.',
      'Únicamente las fotografías del terreno.'
    ],
    answer: 1,
    explanation: 'Revisar la tradición y la situación jurídica ayuda a conocer titulares, limitaciones y antecedentes antes de avanzar.'
  },
  {
    category: 'LINDEROS Y ÁREA',
    question: 'Los linderos encontrados en campo no coinciden con los documentos. ¿Cuál es el mejor siguiente paso?',
    options: [
      'Acordar una nueva cerca sin dejar constancia.',
      'Ignorar la diferencia si el terreno parece tener el área correcta.',
      'Verificar la información con apoyo topográfico y asesoría profesional.'
    ],
    answer: 2,
    explanation: 'Una diferencia de área o linderos debe aclararse con información técnica y documental antes de cerrar acuerdos.'
  },
  {
    category: 'ALERTAS EN EL FOLIO',
    question: 'En la revisión aparece un gravamen que no conocía. ¿Qué decisión es más prudente?',
    options: [
      'Pausar la negociación y pedir que se aclare con acompañamiento jurídico.',
      'Firmar primero y revisar el gravamen después.',
      'Entregar el pago total para reservar el predio.'
    ],
    answer: 0,
    explanation: 'Es mejor comprender el alcance de una anotación y sus efectos antes de firmar o entregar dinero.'
  },
  {
    category: 'TITULARIDAD',
    question: 'La persona que ofrece el predio no aparece como titular en los documentos consultados. ¿Qué conviene hacer?',
    options: [
      'Verificar la titularidad y las facultades para vender antes de avanzar.',
      'Aceptar su palabra si conoce bien el terreno.',
      'Pagar una parte para reservarlo mientras se aclara.'
    ],
    answer: 0,
    explanation: 'Conviene confirmar quién puede disponer del predio y revisar los soportes antes de asumir compromisos.'
  },
  {
    category: 'ANOTACIONES',
    question: 'Encuentra una anotación en el certificado que no logra interpretar. ¿Cuál es el paso prudente?',
    options: [
      'Ignorarla si el vendedor dice que no tiene importancia.',
      'Firmar y pedir una explicación después.',
      'Solicitar una revisión jurídica actualizada antes de firmar o pagar.'
    ],
    answer: 2,
    explanation: 'Una anotación puede tener efectos distintos según su contenido; es mejor entenderla con apoyo profesional antes de continuar.'
  },
  {
    category: 'ÁREA DEL PREDIO',
    question: 'El área catastral y la que aparece en otros documentos no coincide. ¿Qué debería hacer?',
    options: [
      'Quedarse con el dato que indique el vendedor.',
      'Contrastar los documentos y pedir una revisión técnica y jurídica.',
      'Tomar el área aproximada desde una aplicación de mapas.'
    ],
    answer: 1,
    explanation: 'Las diferencias deben verificarse con fuentes oficiales, documentos y apoyo técnico antes de tomar una decisión.'
  },
  {
    category: 'ACUERDOS',
    question: 'Ya acordaron precio y fechas de palabra. ¿Cómo pueden reducir malentendidos?',
    options: [
      'Dejar por escrito las condiciones y revisar el documento antes de firmarlo.',
      'Confiar en que ambas partes recuerden lo mismo.',
      'Entregar el pago total para demostrar compromiso.'
    ],
    answer: 0,
    explanation: 'Un acuerdo claro por escrito permite revisar obligaciones, fechas y condiciones con anticipación.'
  },
  {
    category: 'ACCESO AL TERRENO',
    question: 'El único camino de entrada cruza un predio vecino. ¿Qué debería verificar?',
    options: [
      'Si el camino se ve transitable en época seca.',
      'Si los vecinos dicen que siempre se ha usado.',
      'Qué soporte existe para el acceso y si está documentado o reconocido.'
    ],
    answer: 2,
    explanation: 'El acceso debe revisarse con documentos y asesoría; el uso de hecho por sí solo puede no resolver todas las dudas.'
  },
  {
    category: 'SUCESIONES',
    question: 'Una familia quiere vender un predio heredado, pero la sucesión aún no está clara. ¿Qué sigue?',
    options: [
      'Que firme únicamente quien vive en el predio.',
      'Aclarar la sucesión, los titulares y las facultades antes de negociar.',
      'Hacer un recibo informal y completar documentos después.'
    ],
    answer: 1,
    explanation: 'Es importante aclarar quiénes tienen derechos y quién puede participar en la disposición del predio.'
  },
  {
    category: 'LEVANTAMIENTO TOPOGRÁFICO',
    question: '¿Para qué sirve un levantamiento topográfico al revisar un predio?',
    options: [
      'Para reemplazar todos los documentos de propiedad.',
      'Para garantizar por sí solo que no existen conflictos.',
      'Para aportar información técnica sobre medidas y linderos, junto con la revisión documental.'
    ],
    answer: 2,
    explanation: 'La información topográfica ayuda a entender el terreno, pero debe analizarse junto con los documentos y la situación jurídica.'
  },
  {
    category: 'PAGOS Y RESERVAS',
    question: 'Le piden consignar una suma para reservar el predio antes de mostrarle los documentos. ¿Qué hace?',
    options: [
      'Consignar de inmediato para que no se lo ganen.',
      'Esperar a verificar identidad, documentos y condiciones del acuerdo.',
      'Enviar el dinero a una cuenta de un tercero recomendado.'
    ],
    answer: 1,
    explanation: 'Antes de entregar dinero, verifique con quién negocia, qué está aceptando y qué documentos respaldan la operación.'
  },
  {
    category: 'USO DEL SUELO',
    question: 'El proyecto contempla construir o cambiar el uso actual del terreno. ¿Qué conviene consultar?',
    options: [
      'Las normas de uso del suelo y las posibles restricciones ambientales ante fuentes oficiales.',
      'Solo la opinión de los futuros vecinos.',
      'Únicamente el precio de predios cercanos.'
    ],
    answer: 0,
    explanation: 'El uso permitido puede depender de normas territoriales y ambientales que deben verificarse para el lugar concreto.'
  }
];

const questionsPerRound = 5;
const gameStep = document.getElementById('game-step');
const gameScore = document.getElementById('game-score');
const gameProgress = document.querySelector('.game-progress');
const gameProgressFill = document.getElementById('game-progress-fill');
const gameCategory = document.getElementById('game-category');
const gameQuestion = document.getElementById('game-question');
const gameOptions = document.getElementById('game-options');
const gameFeedback = document.getElementById('game-feedback');
const gameNext = document.getElementById('game-next');
let roundQuestions = [];
let currentOptions = [];
let currentCase = 0;
let points = 0;
let hasAnswered = false;

function shuffle(items) {
  const shuffledItems = [...items];
  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledItems[index], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[index]];
  }
  return shuffledItems;
}

function startRound() {
  roundQuestions = shuffle(ruralQuestions).slice(0, questionsPerRound);
  currentCase = 0;
  points = 0;
  renderCase();
}

function renderCase() {
  const caseData = roundQuestions[currentCase];
  currentOptions = shuffle(caseData.options.map((text, index) => ({
    text,
    correct: index === caseData.answer
  })));
  hasAnswered = false;
  gameStep.textContent = `PREGUNTA ${currentCase + 1} DE ${roundQuestions.length}`;
  gameScore.textContent = `${points} / ${roundQuestions.length * 100} PUNTOS`;
  gameCategory.textContent = caseData.category;
  gameQuestion.textContent = caseData.question;
  gameOptions.replaceChildren();
  gameFeedback.hidden = true;
  gameFeedback.classList.remove('is-success');
  gameFeedback.textContent = '';
  gameNext.hidden = true;
  gameNext.innerHTML = currentCase === roundQuestions.length - 1
    ? 'Ver resultado <i class="fa-solid fa-flag-checkered" aria-hidden="true"></i>'
    : 'Siguiente caso <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>';
  gameProgress.setAttribute('aria-valuenow', String(currentCase));
  gameProgress.setAttribute('aria-valuemax', String(roundQuestions.length));
  gameProgressFill.style.width = `${(currentCase / roundQuestions.length) * 100}%`;
  gameOptions.hidden = false;

  currentOptions.forEach((option, optionIndex) => {
    const button = document.createElement('button');
    const letter = document.createElement('span');
    const text = document.createElement('span');
    button.type = 'button';
    button.className = 'game-answer';
    letter.className = 'game-answer-letter';
    letter.textContent = String.fromCharCode(65 + optionIndex);
    text.className = 'game-answer-text';
    text.textContent = option.text;
    button.append(letter, text);
    button.addEventListener('click', () => chooseAnswer(optionIndex));
    gameOptions.append(button);
  });
}

function chooseAnswer(selectedIndex) {
  if (hasAnswered) return;
  hasAnswered = true;
  const caseData = roundQuestions[currentCase];
  const answerButtons = [...gameOptions.querySelectorAll('.game-answer')];
  const correctIndex = currentOptions.findIndex((option) => option.correct);
  const isCorrect = currentOptions[selectedIndex].correct;

  answerButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === correctIndex) button.classList.add('is-correct');
    if (index === selectedIndex && !isCorrect) button.classList.add('is-incorrect');
  });

  if (isCorrect) points += 100;
  gameScore.textContent = `${points} / ${roundQuestions.length * 100} PUNTOS`;
  gameProgress.setAttribute('aria-valuenow', String(currentCase + 1));
  gameProgressFill.style.width = `${((currentCase + 1) / roundQuestions.length) * 100}%`;
  gameFeedback.textContent = `${isCorrect ? '¡Respuesta acertada! ' : 'Tome nota. '}${caseData.explanation}`;
  gameFeedback.classList.toggle('is-success', isCorrect);
  gameFeedback.hidden = false;
  gameNext.hidden = false;
  gameNext.focus();
}

function showResult() {
  gameStep.textContent = 'RETO COMPLETADO';
  gameCategory.textContent = 'EXPEDIENTE RURAL';
  gameQuestion.textContent = `Su puntaje: ${points} de ${roundQuestions.length * 100} puntos`;
  gameOptions.hidden = true;
  gameFeedback.textContent = points === roundQuestions.length * 100
    ? '¡Excelente criterio! Recuerde confirmar cada detalle con profesionales y documentos actualizados.'
    : 'Cada predio tiene su historia. Verifique la información y busque orientación profesional antes de tomar decisiones.';
  gameFeedback.classList.add('is-success');
  gameFeedback.hidden = false;
  gameNext.innerHTML = 'Jugar otra vez <i class="fa-solid fa-rotate-right" aria-hidden="true"></i>';
  gameNext.hidden = false;
}

gameNext.addEventListener('click', () => {
  if (gameOptions.hidden) {
    startRound();
  })();
    gameQuestion.focus({ preventScroll: true });
  } else if (currentCase < roundQuestions.length - 1) {
    currentCase += 1;
    renderCase();
    gameQuestion.focus({ preventScroll: true });
  } else {
    showResult();
  }
});

startRound();