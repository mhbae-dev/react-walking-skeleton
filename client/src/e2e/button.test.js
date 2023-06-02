import puppeteer from 'puppeteer'
import "@testing-library/jest-dom";

describe("App",() => {
  it("render hello world after button click", async() => {
    //render App
    //find button use onClick
    //expect hello world to be in document
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto("https://mhbae-dev.github.io/react-walking-skeleton")
    await page.waitForSelector('button')
    await page.click('button')
    const document = await page.evaluate(() => document.body.textContent);
    expect(document).toContain("hello world")
  })
})