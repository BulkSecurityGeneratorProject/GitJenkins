import { NgModule } from '@angular/core';

import { GitJenkinsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GitJenkinsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GitJenkinsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GitJenkinsSharedCommonModule {}
