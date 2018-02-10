## ractive-moneyinput

输入框过滤规则：

- 最多两位小数
- 如输入大于设置的最大值，仅展示最大值
- 只能包含 `[0-9.]`
- 数值超过2位的情况下，不可以0开头

#### 安装

```bash
npm install ractive-moneyinput --save
```

#### 使用

```
const MoneyInput = require('ractive-moneyinput');

Ractive({
  target: '#J_target',
  template: `
    <MoneyInput on-input="@this.fire('input')" max="100000" name="money" value="{{moneyValue}}" placeholder="最低充值金额50美元起" autocomplete="off" autofocus tabindex="0" />
  `,
  components: {
    MoneyInput,
  },
  data: {
    moneyValue: '',
  },
  on: {
    input() {
      console.log(this.get('moneyValue'))
    }
  }
});
```