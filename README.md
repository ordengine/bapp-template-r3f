bapp-template-r3f (React-Three-Fiber)

---------

dev: `yarn dev`

dev with host + custom port: `yarn dev --host --port 1337`

---------

build: `yarn build`

outputs:
> ***bapp.html***
>
> a ready-to-inscribe, all-in-one HTML file.  use this to make an HTML inscription bapp
>
> - test here first before inscribing: https://ordinals.com/inscription/33633842

----

> ***bappModule.mjs***
>
> a module that exports your bapp and all components, classes etc that are exported in your project (optional, this is **not** required for the .html output)
>
> - allows for other bapps to reuse the exports provided by the module via /content/id (or /r/undelegated-content/id if using a delegate renderer)
>
> - inscribe with a delegate renderer to make it a viewable inscription

---

> you can use inscribed content with recursive links just like you would on-chain (/content/<inscriptionId.>) (no origin required for dev).  during local development, they get proxied to ordinals.com automatically (see vite server config)

****using inscribed libraries that aren't in the provided import map****

add an entry to 'inscriptions' in package.json

example:

`"react-pinch-pan-zoom": "/content/43218d749f1ada24a71e21026c48482068a73346a01b935c322499498cf66f8bi0",`

this allows you to use its import identifier like:

`import { MiniMap, TransformComponent, TransformWrapper } from 'react-pinch-pan-zoom';`

----

****using NPM libraries that aren't inscribed****

if you add an NPM package to the project that is not found in the import map or 'inscriptions' part of package.json, it will still work fine and just get bundled in automatically when you run `yarn build`
