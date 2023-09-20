# AR Technology

- Status: accepted

## Context and Problem Statement

Es wird ein Hosting oder Tunneling Dienst benötigt, der es ermöglicht das Projekt auf mobilen Endgeräten auszuführen. Dabei soll auf Einfachheit und Robustheit verglichen werden.

## Decision Drivers

- Hosting/Tunneling von Websites
- Sicherheit (HTTPS)
- Debugging und Testing

## Considered Options

- GitHub Pages
- Ngrok

## Decision

Ngrok wurde gewählt, weil die lokal ausgeführte Entwicklungsumgebung immer up-to-date ist und es existiert keine Build-Verzögerung für Debugging/Testing. Zudem ist das einrichten eines Ngrok Tunnels sehr einfach und über einen einzigen Kommandozeilenbefehl erreichbar ohne eine Installation der Software vorauszusetzen.

## Consequences

### GitHub Pages

- Gut, weil bietet die Möglichkeit Repositorys kostenlos zu hosten.
- Gut, weil Integration mit GitHub.
- Gut, weil einfache Konfiguration.
- Schlecht, weil erlaubt keine serverseitige Logik.
- Schlecht, weil es kann zu Build-Verzögerungen kommen.
- Schlecht, weil es bietet keine Datenbankunterstützung.

### Ngrok

- Gut, weil ermöglicht es lokale Entwicklungsserver temporär über das Internet zugänglich zu machen.
- Gut, weil einfach einzurichten.
- Gut, weil lokale Dienste auf mehrere Ports verteilt und freigegeben werden können.
- Gut, weil erlaubt ohne Build-Verzögerung auf Remote-Geräten den aktuellsten Build zu testen.
- Schlecht, weil hat eine Bandbreitenbeschränkung.