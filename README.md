# Web Technologien // begleitendes Projekt Sommersemester 2023

### Zeitaufwand
| Issue 1 | Issue 2 | Issue 3 | Issue 4 |
|---|---|---|---|
| 5 Stunden | - | -  | - |

### Tests und Erkenntnisse

- Wie nah muss ich an einen Marker heran gehen, damit die Visualisierung aktiviert wird?
  
Das hängt von mehreren Faktoren ab, wie der Markergröße, Kameraleistung, die Markererkennung und die Umgebungsbedingungen ab. Es hat sich gezeigt, dass bei optimalen Lichtverhältnissen und einer Markergröße von einem Durchmesser von 20cm die Distanz bis zur Erkennung des Markers bei ca. 1,5m lag. Vorausgesetzt, dass das verwendete Endgerät eine hochauflösende Kamera verbaut hat und die Markererkennung ihren Dienst tut. Aber eine generelle Antwort auf die Antwort konnte ich nicht ermitteln, da weitere Endgeräte für Tests fehlen.

- Wie weit kann ich das Gerät vom Marker entfernen?
  
Das Objekt fängt schon ab ca. 50cm an die Position zum Marker nicht mehr korrekt zu identifizieren und im Bild zu springen.

- Welche Auswirkungen haben der Winkel, das Licht, weitere Marker in der Nähe, etc.

Solange der Markererkennungsalgorithmus den Marker erkennt d.h. ein volles Bild des Markers zu sehen ist funktionierte die Markererkennung relativ verlässlich mit Positionierungsproblemen.

- Wie genau wird das GPS positioniert?

Das GPS war bisher das schwierigste Problem. Eine korrekte Angabe von Lat/Lng führte nicht immer zum gewünschten Ergebnis, da die Browserunterstützung für einen "Genauen Standort" gegeben sein sollte. Da zeigten sich unterschiede auf iOS zwischen Firefox und Chrome. Der Chrome war in dem Fall verlässlicher. Man sollte auch beachten, dass in A-Frame auch eine Angabe des Meeresspiegels und eine Skalierung notwendig ist, damit die GPS gebundenen Marker/Objekte in der Nähe angezeigt werden.

- Was passiert bei Änderungen der Position.

Der Marker oder das Objekt bleiben an Ort und Stelle (an Lat/Lng gebunden) stehen und man kann sich darauf zu- oder hinwegbewegen. Es wird auf weiterer Entfernung zum Objekt hin und wieder zum stottern des Objekts kommen.