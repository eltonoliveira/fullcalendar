import { defineLocale } from 'fullcalendar';

defineLocale("pt-br", {
  buttonText: {
    prevText: "Anterior",
    nextText: "Próximo",
    currentText: "Hoje",
    month: "Mês",
    week: "Semana",
    day: "Dia",
    list: "Compromissos"
  },
  weekHeader: "Sm",
  allDayText: "dia inteiro",
  eventLimitText: function(n) {
    return "mais +" + n;
  },
  noEventsMessage: "Não há eventos para mostrar"
});