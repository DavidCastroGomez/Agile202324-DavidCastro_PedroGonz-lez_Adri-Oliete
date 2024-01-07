class MoneySystem {

    constructor() {
        this.money = gamePrefs.heroMoney;
    }

    AddMoney(_money) {
        this.money += _money;
        gamePrefs.heroMoney = this.money;
    }

    GetMoney() {
        return this.money;
    }
}