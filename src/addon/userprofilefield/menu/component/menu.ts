// (C) Copyright 2015 Interactive Group Pvt Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Directive to render a menu user profile field.
 */
@Component({
    selector: 'addon-user-profile-field-menu',
    templateUrl: 'addon-user-profile-field-menu.html'
})
export class AddonUserProfileFieldMenuComponent implements OnInit {
    @Input() field: any; // The profile field to be rendered.
    @Input() edit = false; // True if editing the field. Defaults to false.
    @Input() disabled = false; // True if disabled. Defaults to false.
    @Input() form?: FormGroup; // Form where to add the form control.
    @Input() contextLevel?: string; // The context level.
    @Input() contextInstanceId?: number; // The instance ID related to the context.
    @Input() courseId?: number; // The course the field belongs to (if any).

    constructor(private fb: FormBuilder) { }

    /**
     * Component being initialized.
     */
    ngOnInit(): void {
        const field = this.field;

        if (field && this.edit && this.form) {
            field.modelName = 'profile_field_' + field.shortname;

            // Parse options.
            if (field.param1) {
                field.options = field.param1.split(/\r\n|\r|\n/g);
            } else {
                field.options = [];
            }

            const formData = {
                value: field.defaultdata,
                disabled: this.disabled
            };
            // Initialize the value using default data.
            this.form.addControl(field.modelName, this.fb.control(formData,
                field.required && !field.locked ? Validators.required : null));
        }

    }
}
