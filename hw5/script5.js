
let month = Number(prompt('Номер месяца'));
switch (month) {
  case 'month >=3 && month <=5':
    console.log('Весна');
    break;
    case 'month >=6 && month <=8':
      console.log('Лето');
      break;
      case 'month >=9 && month <=11':
      console.log('Осень');
      break;
      case 'month >=12 && month <=2':
      console.log('Зима');
      break;

  default:
    break;
}
