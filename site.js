const form=document.querySelector('.cargo-order form');const summary=document.querySelector('#cargo-summary');const type=form.querySelector('#type');const mark=form.querySelector('#marking');const qty=form.querySelector('#units');function update(){const size=mark.value.trim();const count=qty.value&&qty.validity.valid?qty.value:'';const draft='Здравствуйте! Планирую заезд на Ярославского: '+type.value.toLowerCase()+(size?', шины '+size:'')+(count?', колёс: '+count:'')+'. Можно согласовать время и условия заезда?';
  summary.textContent = draft;
  document.querySelector('#cargo-telegram').href = 'https://t.me/+79148954966?text=' + encodeURIComponent(draft);
}form.addEventListener('input',update);form.addEventListener('submit',event=>event.preventDefault());update();
