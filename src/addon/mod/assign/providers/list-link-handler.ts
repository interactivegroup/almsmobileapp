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
import { CoreContentLinksModuleListHandler } from '@core/contentlinks/classes/module-list-handler';
import { CoreContentLinksHelperProvider } from '@core/contentlinks/providers/helper';
import { TranslateService } from '@ngx-translate/core';
import { AddonModAssignProvider } from './assign';

/**
 * Handler to treat links to assign list page.
 */
@Injectable()
export class AddonModAssignListLinkHandler extends CoreContentLinksModuleListHandler {
    name = 'AddonModAssignListLinkHandler';

    constructor(linkHelper: CoreContentLinksHelperProvider, translate: TranslateService,
            protected assignProvider: AddonModAssignProvider) {
        super(linkHelper, translate, 'AddonModAssign', 'assign');
    }

    /**
     * Check if the handler is enabled on a site level.
     *
     * @return Whether or not the handler is enabled on a site level.
     */
    isEnabled(): boolean {
        return this.assignProvider.isPluginEnabled();
    }
}
