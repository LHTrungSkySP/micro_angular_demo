import { loadManifest } from '@angular-architects/module-federation';
import '@angular/common/locales/global/fr';
import '@angular/common/locales/global/vi';

loadManifest('assets/mf.manifest.json')
.catch((err) => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch((err) => console.error(err));
