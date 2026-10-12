export class HomePage//create class
{
    constructor(page)//create a constuctor,pass page as parameter
    {
        this.page=page
        this.registerlink=page.getByRole('link', { name: 'Register' })

    }
        async goTo()
        {
            await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
        }
        async ClickRegisterLink()
        {
            await this.registerlink.click()
        }

}