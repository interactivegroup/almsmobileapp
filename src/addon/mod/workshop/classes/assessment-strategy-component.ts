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

import { Input } from '@angular/core';

/**
 * Base class for component to render an assessment strategy.
 */
export class AddonModWorkshopAssessmentStrategyComponentBase {
    @Input() workshopId: number;
    @Input() assessment: any;
    @Input() edit: boolean;
    @Input() selectedValues: any[];
    @Input() fieldErrors: any;
    @Input() strategy: string;
    @Input() moduleId: number;
    @Input() courseId: number;

    constructor() {
        // Nothing to do.
    }
}
