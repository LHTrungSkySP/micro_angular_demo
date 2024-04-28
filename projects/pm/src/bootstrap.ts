import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { TestModule } from "./app/test/test.module";

platformBrowserDynamic().bootstrapModule(TestModule).catch(err => console.error(err));