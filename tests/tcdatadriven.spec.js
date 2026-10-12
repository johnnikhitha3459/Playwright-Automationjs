
import {test,expect} from '@playwright/test'
import { POManager } from '../Page objects/POManager'
import testData from '../utils/data.json' assert {type:'json'}
for(const data of testData)
{
test(`tcregister ${data.username}`, async ({ page }) => {
    
    const pomanager=new POManager(page)
    const homepage=pomanager.getHomePage()

    await homepage.goTo()
    await homepage.ClickRegisterLink()

    const registerpage = pomanager.getRegistrationPage()
    await registerpage.registeruser(
         data.firstname,data.lastname,data.address,data.city,data.state,data.zipcode,
         data.phonenumber,data.ssn,data.username,data.password,data.confirmpassword
    )

        await registerpage.ClickonRegisterbutton()
        await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
        await page.waitForTimeout(2000)
})
}
