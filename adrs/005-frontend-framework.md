# AR Technology

- Status: accepted

## Context and Problem Statement

Es wird ein Web-Frontend-Framework gesucht, dass eine schnelle Entwicklung und Einbindung von A-Frame ermöglicht. Dabei soll die Einrichtung bis zur Entwicklung nicht all zu lange dauern und für schnelle Prototypenerstellung geeignet sein.

## Decision Drivers

- Einfache Einrichtung
- Entwicklungsserver mit Live-Reload
- Schnelle Prototypenerstellung

## Considered Options

- Create-React-App
- Stencil.js
- Vue.js

## Decision

CRA wurde gewählt, weil eine unkomplizierte Einrichtung mit vordefinierten Build-Tools für den Prototypen ausreichend sind. Zudem existiert die meiste Erfahrung in dem Framework, daher kann die Entwicklungszeit reduziert werden.

## Consequences

### Create-React-App

- Gut, weil schnelle Einrichtung.
- Gut, weil unterstützt bewährte Praktiken und Konventionen für Projektstruktur, Datei-Setup und die Verwendung von React.
- Gut, weil starke und aktive Community.
- Gut, weil enthält bereits ein integriertes Test-Framework.
- Schlecht, weil Konfiguration ist vorgegeben und kann nur mit viel Wissen händisch verändert werden.

### Stencil.js

- Gut, weil Compiler zur Erstellung von Webkomponenten.
- Gut, weil Plattformübergreifend.
- Gut, weil sehr gut Performance, weil sehr leichtgewichtig.
- Schlecht, weil setzt auf eigenes Ökosystem, dass nicht weit verbreitet ist und daher nicht jede Bibliothek oder Framework nahtlos integriert werden kann.

### Vue.js

- Gut, weil schnelle Einrichtung.
- Gut, weil sehr gute Leistung durch Lazy Loading und virtuellem Dom.
- Schlecht, weil Routing gegebenenfalls komplexer werden kann, wenn das Projekt wächst.
- Schlecht, weil kleinere Community gegenüber React.