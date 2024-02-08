## Componenten Stappenplan

1. In het begin is het verstandig om eerst de HTML en CSS van een component te maken (wanneer je hier vertrouwd mee raakt, kun je het ook direct in het component maken).
2. Maak een nieuwe map aan in de `src/components` map met de naam van het component `ComponentNaam`.
2. Maak een nieuwe `.jsx` bestand aan in de `src/components/ComponentNaam` map met de naam van de component `ComponentNaam`.
3.  Maak een nieuwe `.css` bestand aan in de `src/components/ComponentNaam` map met de naam van de component `ComponentNaam`.
4. Type: `rsf` en druk op `tab` om een React Stateless Function aan te maken in de `.jsx` bestand.
5. Verplaatst de HTML en CSS van het component naar de `.jsx` en `.css` bestanden.
6. Importeer het component in je pagina en gebruik het component.
7. Vervang de statische text en data met dynamische data en destructure deze uit het props object. Deze worden automatisch ontvangen tussen de `()` van de functie.
```jsx
const ComponentNaam = ({ title, text }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};
```
9. Voorzie de properties van het component op de pagina van de juiste waardes. 
```jsx
<ComponentNaam title="Mijn titel" text="Mijn tekst" />
```
