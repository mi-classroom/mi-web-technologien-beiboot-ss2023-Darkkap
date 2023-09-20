# AR Technology

- Status: accepted & without alternative

## Context and Problem Statement

Es wird Docker als Container-Plattform vorausgesetzt, damit der Code einfach lokal ausgeführt werden kann.

## Decision Drivers

- Möglichst einfach lokal ausführbar
- Konsistente Umgebung

## Considered Options

- Docker

## Decision

Docker wurde gewählt, weil es eine robuste und bewährte Technologie für das Deployment von Anwendungen ist. Sie ist plattformunabhängig und ermöglicht es Entwicklern, Anwendungen und ihre Abhängigkeiten in Containern zu verpacken.

## Consequences

### Docker

- Gut, weil bietet konsistente Umgebung, damit die Anwendungen in verschiedenen Umgebungen genauso funktionieren, wie sie entwickelt wurden.
- Gut, weil portabel und können auf verschiedenen Infrastrukturen und Cloud-Plattformen ausgeführt werden.
- Gut, weil skalierbar, denn Docker ermöglicht die einfache Skalierung von Anwendungen durch das Erstellen von mehreren Containern derselben Anwendung.
- Gut, weil Docker ermöglicht das schnelle Bereitstellen neuer Versionen von Anwendungen und das Aktualisieren von Containern ohne Ausfallzeiten.