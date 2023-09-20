# AR Technology

- Status: accepted

## Context and Problem Statement

Es wird ein Web-Framework benötigt, um die Kamera des Endgeräts für die AR-Bibliothek A-Frame verwenden zu können.

## Decision Drivers

- Kann problemlos mit A-Frame interagieren
- JavaScript-Bibliothek spezialisiert auf AR
- Ermöglicht die Platzierung von AR-Inhalten in der realen Welt
- Basiert auf Kameraperspektive

## Considered Options

- Three.js
- AR.js

## Decision

AR.js wurde gewählt, weil AR.js eine auf AR-Anwendungen spezialisierte Bibliothek ist. Es bietet integrierte Markererkennungsfunktionen und vereinfacht die Entwicklung von AR-Anwendungen.

## Consequences

### Three.js

- Gut, weil 3D-Grafik und Rendering-Fokus
- Gut, weil hat starke Community und eine Vielzahl an Ressourcen, aber die Integration von Erweiterungen kann komplexer sein.
- Schlecht, weil hoher Overload durch die Bibliothek und gegebenenfalls größere Performanceverluste.
- Schleicht, weil nicht auf AR spezialisiert und erfordert daher zusätzliche Arbeit Markererkennung hinzuzufügen.

### AR.js

- Gut, weil zielt speziell auf die Entwicklung von Inhalten für den Webbrowser ab.
- Gut, weil einfaches Abstraktionsniveau.
- Gut, weil bietet einfache Markererkennung.
- Schlecht, weil bietet nur begrenze Grafikoptionen d.h. wenn 3D-Grafiken und Effekte benötigt werden muss eine weitere Bibliothek verwendet werden

