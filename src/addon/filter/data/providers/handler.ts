
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

import { Injectable } from '@angular/core';
import { CoreFilterDefaultHandler } from '@core/filter/providers/default-filter';
import { CoreFilterFormatTextOptions } from '@core/filter/providers/filter';
import { CoreSite } from '@classes/site';

/**
 * Handler to support the Database auto-link filter.
 */
@Injectable()
export class AddonFilterDataHandler extends CoreFilterDefaultHandler {
    name = 'AddonFilterDataHandler';
    filterName = 'data';

    constructor() {
        super();

        // This filter is handled by alms, nothing to do in the app.
    }

    /**
     * Check if the filter should be applied in a certain site based on some filter options.
     *
     * @param options Options.
     * @param site Site.
     * @return Whether filter should be applied.
     */
    shouldBeApplied(options: CoreFilterFormatTextOptions, site?: CoreSite): boolean {
        return false;
    }
}
