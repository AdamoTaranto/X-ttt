import { test, expect, Page, firefox } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3001/");
});

test.describe("Test", () => {
  test("Should host and join a game from different browsers", async ({ page }) => {
    await page.goto("http://localhost:3001/");

    await page.waitForSelector("text=PLAY", { state: "visible" });
    await page.locator('button:has-text("PLAY")').click();
    await page.locator('input').fill('testUser1');
    await page.locator('button:has-text("SAVE")').click();

    // host game
    await page.locator('button:has-text("Host game")').click();
    const text = await (await page.locator('p:has-text("Share code")').innerText()).split(' ');
    const shareCode = text[text.length-1];

    const firefoxBrowser = await firefox.launch();
    const firefoxPage = await firefoxBrowser.newPage();
    await firefoxPage.goto("http://localhost:3001/");

    await firefoxPage.waitForSelector("text=PLAY", { state: "visible" });
    await firefoxPage.locator('button:has-text("PLAY")').click();
    await firefoxPage.locator('input').fill('testUser2');
    await firefoxPage.locator('button:has-text("SAVE")').click();

    // join game
    await firefoxPage.locator('button:has-text("Join game")').click();
    await firefoxPage.locator('[placeholder="enter code"]').fill(shareCode);
    await firefoxPage.locator('button:has-text("enter")').click();

    // player 1 vs player 2
    await firefoxPage.locator('#game_board-c1').click();
    await page.locator('#game_board-c2').click();

    await firefoxPage.locator('#game_board-c5').click();
    await page.locator('#game_board-c3').click();
    await firefoxPage.locator('#game_board-c9').click();

    await firefoxPage.waitForTimeout(1000);
    expect(await firefoxPage.screenshot({ fullPage: true })).toMatchSnapshot('hosted-game-win.png', { maxDiffPixelRatio: 0.02 });
  });

});
