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

import { NgModule } from '@angular/core';
import { CoreFilterProvider } from './providers/filter';
import { CoreFilterDelegate } from './providers/delegate';
import { CoreFilterDefaultHandler } from './providers/default-filter';
import { CoreFilterHelperProvider } from './providers/helper';

// List of providers (without handlers).
export const CORE_FILTER_PROVIDERS: any[] = [
    CoreFilterProvider,
    CoreFilterDelegate,
    CoreFilterHelperProvider
];

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [
        CoreFilterProvider,
        CoreFilterDelegate,
        CoreFilterHelperProvider,
        CoreFilterDefaultHandler,
    ]
})
export class CoreFilterModule { }
