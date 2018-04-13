import { element, by } from 'protractor';

export class EntryComponentsPage {
    createButton = element(by.css('#jh-create-entity'));
    title = element.all(by.css('jhi-entry div h2#page-heading span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class EntryUpdatePage {
    PageTitle = element(by.css('h2#jhi-entry-heading'));
    saveButton = element(by.css('#save-entity'));
    cancelButton = element(by.css('#cancel-save'));
    titleInput = element(by.css('input#field_title'));
    contentInput = element(by.css('textarea#field_content'));
    dateInput = element(by.css('input#field_date'));
    blogSelect = element(by.css('select#field_blog'));
    tagSelect = element(by.css('select#field_tag'));

    getPageTitle() {
        return this.PageTitle.getAttribute('jhiTranslate');
    }

    setTitleInput(title) {
        this.titleInput.sendKeys(title);
    }

    getTitleInput() {
        return this.titleInput.getAttribute('value');
    }

    setContentInput(content) {
        this.contentInput.sendKeys(content);
    }

    getContentInput() {
        return this.contentInput.getAttribute('value');
    }

    setDateInput(date) {
        this.dateInput.sendKeys(date);
    }

    getDateInput() {
        return this.dateInput.getAttribute('value');
    }

    blogSelectLastOption() {
        this.blogSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    blogSelectOption(option) {
        this.blogSelect.sendKeys(option);
    }

    getBlogSelect() {
        return this.blogSelect;
    }

    getBlogSelectedOption() {
        return this.blogSelect.element(by.css('option:checked')).getText();
    }

    tagSelectLastOption() {
        this.tagSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    tagSelectOption(option) {
        this.tagSelect.sendKeys(option);
    }

    getTagSelect() {
        return this.tagSelect;
    }

    getTagSelectedOption() {
        return this.tagSelect.element(by.css('option:checked')).getText();
    }

    save() {
        this.saveButton.click();
    }

    cancel() {
        this.cancelButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
