import { Builder, By, Key } from "selenium-webdriver/index.js";
import assert from "node:assert";
import * as chai from 'chai';

const should = chai.should();

describe("add todo tests", function () {
    this.timeout(15000); // Increase timeout

    it("successfully adds a todo", async function () {
        let driver = await new Builder().forBrowser("chrome").build();
        
        try {
            await driver.get("https://aksingh-16.github.io/Student-Expense-Tracker/");
            await driver.findElement(By.id("name")).sendKeys("New Task", Key.RETURN);
            
            // Wait for element to be present
            await driver.sleep(1000);
            
            const todoText = await driver.findElement(By.xpath("//li[last()]")).getText();
            
            // Fix conflicting assertions - choose one
            assert.strictEqual(todoText, "Learn javascript");
            // OR
            //todoText.should.equal("Learn selenium");
        } finally {
            await driver.quit();
        }
    });
});