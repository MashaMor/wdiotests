import Page from './page';

class ProfilePage extends Page {
    get iconUser () { return $('.ant-avatar-square'); }

    isOpen () {
        expect(browser).toHaveUrlContaining('/profile/');
        expect(this.iconUser).toBeDisplayed();
    }
}

export default new ProfilePage();