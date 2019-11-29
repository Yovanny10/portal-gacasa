import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import 'clipboard';
import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
let HighlightService = class HighlightService {
    highlightAll() {
        Prism.highlightAll();
    }
};
HighlightService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], HighlightService);
export { HighlightService };
//# sourceMappingURL=highlight.service.js.map