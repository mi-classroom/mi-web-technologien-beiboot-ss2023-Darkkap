# AR Technology

- Status: accepted

## Context and Problem Statement

Es wird ein Web-Framework gesucht, dass speziell für die Erstellung von Augmented Reality (AR) und Virtual Reality (VR) Anwendungen im Web entwickelt wurde. Damit soll es möglich sein einen webfähigen minimalen MVP für das Projekt ARlebnispfade zu entwickeln.

## Decision Drivers

- Webbasiert
- Plattformunabhängig
- Integration von AR-Technologien
- Open Source
- Interaktive Inhalte
- Experimentierfreundlichkeit

## Considered Options

- Three.js
- A-Frame
- WebXR
- Unity WebGL

## Decision

A-Frame wurde gewählt, weil der Schwerpunkt auf Einfachheit und Abstraktion liegt. Das heißt es bietet eine deklarative Syntax, die es ermöglicht AR- und VR-Inhalte zu erstellen, ohne tieferes Wissen über 3D-Programmierung zu benötigen. Desweiteren orientiert es sich an, für Webentwickler, bekannten Webtechnologien wie HTML, CSS und JavaScript. Zudem bietet es eine einfache Integration von WebXR, was die Erstellung von AR- und VR-Inhalten im Webbrowser erleichtert, während die Konkurrenten zusätzliche Arbeit benötigen, um die WebXR-Unterstützung zu ergänzen.

## Consequences

### Three.js

- Gut, weil bietet viel Flexibilität und Kontrolle auf niedrigerer Abstraktionsebene.
- Gut, weil hat starke Community und eine Vielzahl an Ressourcen, aber die Integration von Erweiterungen kann komplexer sein.
- Gut, weil bietet Leistung und Flexibilität.
- Schlecht, weil benötigt zusätzliche Arbeit, um WebXR-Unterstützung zu ergänzen.
- Schleicht, weil benötigt mehr Entwicklungszeit und Ressourcen aufgrund der Komplexität.

### A-Frame

- Gut, weil zielt speziell auf die Entwicklung von Inhalten für den Webbrowser ab.
- Gut, weil einfaches Abstraktionsniveau.
- Gut, weil deklarative Syntax, die kein tieferes Wissen über 3D-Programmierung benötigt.
- Gut, weil konzentriert sich auf eine ausgewogene Leistung und einfache Handhabung.
- Schlecht, weil möglicherweise nicht alle Features von WebXR implementiert sind und gegebenenfalls Ergänzung durch ein weiteres Framework benötigt, um das Featureset zu erweitern.

### WebXR

- Gut, weil die technologische Grundlage für alle Konkurrenten.
- Schlecht, weil sehr niedriges Abstraktionsniveau und erfordert viel Wissen für die Umsetzung.
- Schlecht, weil eigene APIs geschrieben werden müssen, um die Bibliothek zu verwenden und das den Rahmen des Projekts sprengen würde.

### Unity WebGL

- Gut, weil kann für native AR- und VR-Anwendungen verwendet werden.
- Schlecht, weil ist eine proprietäre Engine.
- Schlecht, weil erfordert Erfahrung in der Spieleentwicklung.
