function formatInputMoney(money) {
  if (!/^\d+\.?\d{0,2}$/.test(money)) {
    if (money.charAt(0) === '.') {
      return '';
    }
    if (money.indexOf('.') > 0) {
      money = money.substring(0, money.indexOf('.') + 3);
    }
    let newValue = '';
    for (let i = 0; i < money.length; i++) {
      const char = money.charAt(i);
      if (/^\d$/.test(char) || char === '.' && newValue.indexOf('.') < 0) {
        newValue += char;
      }
    }
    return newValue;
  }
  if (money.length >= 2 && money.charAt(0) === '0' && money.charAt(1) !== '.') {
    return money.charAt(1);
  }
  return money;
}

export default Ractive.extend({
  template: '<input class="{{class}}" on-input="@this.fire(\'input\')" type="text" value="{{value}}" name="{{name}}" placeholder="{{placeholder}}" autocomplete="{{autocomplete}}" autofocus="{{autofocus}}" tabindex="{{tabindex}}" />',
  on: {
    input() {
      const maxMoney = this.get('max');
      const inputMoney = this.get('value');
      let formatMoney = formatInputMoney(inputMoney);
      if (formatMoney > maxMoney) {
        formatMoney = maxMoney;
      }
      if (formatMoney !== inputMoney) {
        this.set('value', formatMoney);
      }
    },
  },
});

