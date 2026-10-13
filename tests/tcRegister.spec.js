// import {test,expect} from '@playwright/test'
// import { HomePage } from '../Page objects/homepage'
// import { RegistrationPage } from '../Page objects/RegistrationPage'

// test('tcregister', async ({ page }) => {
    
//     const homepage = new HomePage(page)

//     await homepage.goTo()
//     await homepage.ClickRegisterLink()

//     const registerpage = new RegistrationPage(page)
//     await registerpage.registeruser('nonny', 'brs', 'stuttgart', 'germany', 'usa',
//         '1234567', '91234567', '0109090','brs12','xyz')

//         await registerpage.ClickonRegisterbutton()
//         await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/index.htm')
//         await page.waitForTimeout(2000)
// })

import {test,expect} from '@playwright/test'
import { POManager } from '../Page objects/POManager'

test('tcregister', async ({ page }) => {
    
    const pomanager=new POManager(page)
    const homepage=pomanager.getHomePage()

    await homepage.goTo()
    await homepage.ClickRegisterLink()

    const registerpage = pomanager.getRegistrationPage()
    await registerpage.registeruser('shannu', 'mary', 'stuttgart', 'germany', 'usa',
        '1234567', '91234567', '0109090','becky','abcd')

        await registerpage.ClickonRegisterbutton()
        await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
        await page.waitForTimeout(2000)
})
