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
import { Platform } from 'ionic-angular';
import { CorePushNotificationsProvider } from './providers/pushnotifications';
import { CorePushNotificationsDelegate } from './providers/delegate';
import { CorePushNotificationsRegisterCronHandler } from './providers/register-cron-handler';
import { CorePushNotificationsUnregisterCronHandler } from './providers/unregister-cron-handler';
import { CoreCronDelegate } from '@providers/cron';
import { CoreEventsProvider } from '@providers/events';
import { CoreLoggerProvider } from '@providers/logger';
import { CoreLocalNotificationsProvider } from '@providers/local-notifications';

// List of providers (without handlers).
export const CORE_PUSHNOTIFICATIONS_PROVIDERS: any[] = [
    CorePushNotificationsProvider,
    CorePushNotificationsDelegate
];

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [
        CorePushNotificationsProvider,
        CorePushNotificationsDelegate,
        CorePushNotificationsRegisterCronHandler,
        CorePushNotificationsUnregisterCronHandler
    ]
})
export class CorePushNotificationsModule {
    constructor(platform: Platform, pushNotificationsProvider: CorePushNotificationsProvider, eventsProvider: CoreEventsProvider,
            localNotificationsProvider: CoreLocalNotificationsProvider, loggerProvider: CoreLoggerProvider,
            cronDelegate: CoreCronDelegate,
            registerCronHandler: CorePushNotificationsRegisterCronHandler,
            unregisterCronHandler: CorePushNotificationsUnregisterCronHandler) {

        const logger = loggerProvider.getInstance('CorePushNotificationsModule');

        // Register the handlers.
        cronDelegate.register(registerCronHandler);
        cronDelegate.register(unregisterCronHandler);

        // Register device on GCM or APNS server.
        platform.ready().then(() => {
            pushNotificationsProvider.registerDevice();
        });

        eventsProvider.on(CoreEventsProvider.NOTIFICATION_SOUND_CHANGED, () => {
            // Notification sound has changed, register the device again to update the sound setting.
            pushNotificationsProvider.registerDevice();
        });

        // Register device on alms site when login.
        eventsProvider.on(CoreEventsProvider.LOGIN, () => {
            pushNotificationsProvider.registerDeviceOnalms().catch((error) => {
                logger.warn('Can\'t register device', error);
            });
        });

        eventsProvider.on(CoreEventsProvider.SITE_DELETED, (site) => {
            pushNotificationsProvider.unregisterDeviceOnalms(site).catch((error) => {
                logger.warn('Can\'t unregister device', error);
            });
            pushNotificationsProvider.cleanSiteCounters(site.id);
        });

        // Listen for local notification clicks (generated by the app).
        localNotificationsProvider.registerClick(CorePushNotificationsProvider.COMPONENT, (notification: any) => {
            // Log notification open event.
            pushNotificationsProvider.logEvent('alms_notification_open', notification, true);

            pushNotificationsProvider.notificationClicked(notification);
        });

        // Listen for local notification dismissed events.
        localNotificationsProvider.registerObserver('clear', CorePushNotificationsProvider.COMPONENT, (notification: any) => {
            // Log notification dismissed event.
            pushNotificationsProvider.logEvent('alms_notification_dismiss', notification, true);
        });
    }
}
