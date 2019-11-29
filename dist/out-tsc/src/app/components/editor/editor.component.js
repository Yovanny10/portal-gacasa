import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
let EditorComponent = class EditorComponent {
    constructor(fb) {
        //declarations
        this.title = 'Quill works!';
        this.hide = false;
        this.isReadOnly = false;
        this.form = fb.group({
            editor: ['test']
        });
    }
    ngOnInit() {
        this.form
            .controls
            .editor
            .valueChanges.pipe(debounceTime(400), distinctUntilChanged())
            .subscribe(data => {
            console.log('native fromControl value changes with debounce', data);
        });
        this.editor
            .onContentChanged
            .pipe(debounceTime(400), distinctUntilChanged())
            .subscribe(data => {
            console.log('view child + directly subscription', data);
        });
    }
    //events starts
    setFocus($event) {
        $event.focus();
    }
    patchValue() {
        this.form.controls['editor'].patchValue(`${this.form.controls['editor'].value} patched!`);
    }
    toggleReadOnly() {
        this.isReadOnly = !this.isReadOnly;
    }
    logChange($event) {
        //your code here
    }
    logSelection($event) {
        //your code here
    }
};
tslib_1.__decorate([
    ViewChild('editor', { static: true }),
    tslib_1.__metadata("design:type", QuillEditorComponent)
], EditorComponent.prototype, "editor", void 0);
EditorComponent = tslib_1.__decorate([
    Component({
        selector: 'app-editor',
        templateUrl: './editor.component.html',
        styleUrls: ['./editor.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder])
], EditorComponent);
export { EditorComponent };
//# sourceMappingURL=editor.component.js.map