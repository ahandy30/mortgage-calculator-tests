import { expect } from "@playwright/test"

export class CalculatorPage {
    constructor(page) {
        this.page = page

        this.title = page.getByRole('heading', { name: 'Mortgage Calculator', exact: true })
        this.homePrice = page.getByLabel('Home price', { exact: true })
        this.downPayment = page.getByLabel('Down payment', { exact: true })
        this.loanDropDown = page.getByLabel('Loan program')
        this.interestRate = page.getByLabel('Interest rate', { exact: true })
        this.breakdownTab = page.getByRole('tab', { name: 'Breakdown' })
        this.yourPaymentText = page.getByText('Your payment', { exact: true })
        this.initialPaymentAmount = page.getByText('$3,768', { exact: true })
        this.newPaymentAmount = page.getByText('$3,922', { exact: true })

    }

    getTitle = async () => {
        await this.title.waitFor({timeout: 7000})
        await expect(this.title).toBeVisible()
    }

    inputHomePrice = async (price) => {
       await this.homePrice.waitFor({timeout: 7000})
       await this.homePrice.fill(price)
    }

    inputDownPayment = async (dwnpay) => {
        await this.downPayment.waitFor({timeout: 7000})
        await this.downPayment.fill(dwnpay)
    }

    inputloanPeriod = async (period) => {
        await this.loanDropDown.waitFor()
        await this.loanDropDown.selectOption(period)
    }

    inputIntRate = async (rate) => {
        await this.interestRate.waitFor()
        await this.interestRate.clear()
        await this.interestRate.fill(rate)
    }

    viewMonthlyPay = async () => {
        await this.breakdownTab.waitFor()
        await this.breakdownTab.click()
        await expect(this.yourPaymentText).toHaveText(/Your payment/)
        await this.initialPaymentAmount.waitFor()
        await expect(this.initialPaymentAmount).toHaveText(/\$3,768/)
    }

    viewNewMonthlyPay = async () => {
        await this.inputIntRate("5")
        await this.breakdownTab.click()
        await this.newPaymentAmount.waitFor()
        await expect(this.newPaymentAmount).toHaveText(/\$3,922/)
    }
}
