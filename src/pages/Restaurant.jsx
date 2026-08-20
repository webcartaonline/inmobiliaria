import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/restaurant.css";

const translations = {
  "Air fryer patatas bravas": "Patatas bravas en freidora de aire",
  "Ajo blanco": "Ajoblanco",
  "Arroz al horno (baked rice)": "Arroz al horno",
  "Arroz con gambas y calamar": "Arroz con gambas y calamar",
  "Chicken & chorizo rice pot": "Arroz con pollo y chorizo",
  "Chicken with saffron, raisins & pine nuts":
    "Pollo al azafrán con pasas y piñones",
  "Chickpea, chorizo & spinach stew": "Guiso de garbanzos, chorizo y espinacas",
  "Chocolate churros with chocolate & salted caramel sauce":
    "Churros de chocolate con salsa de caramelo salado",
  "Chorizo & chickpea soup": "Sopa de chorizo y garbanzos",
  "Chorizo & soft-boiled egg salad":
    "Ensalada de chorizo y huevo pasado por agua",
  "Chorizo & tomato salad": "Ensalada de chorizo y tomate",
  "Chorizo, potato & cheese omelette":
    "Tortilla de patatas con chorizo y queso",
  Churros: "Churros tradicionales",
  "Clam, chorizo & white bean stew":
    "Guiso de alubias blancas con almejas y chorizo",
  "Crema Catalana": "Crema Catalana",
  "Easy Spanish chicken": "Pollo al estilo español fácil",
  Ensaimada: "Ensaimada",
  "Fried calamari": "Calamares fritos",
  "Gambas al ajillo": "Gambas al ajillo",
  "Garlicky prawns with sherry": "Gambas al jerez con ajo",
  "Ham croquetas": "Croquetas de jamón",
  "Jamon & wild garlic croquetas": "Croquetas de jamón y ajo silvestre",
  Migas: "Migas",
  "Padron peppers": "Pimientos del Padrón",
  Paella: "Paella marinera",
  "Pan-fried hake, white bean & chorizo broth":
    "Merluza a la plancha con caldo de alubias y chorizo",
  "Patatas bravas": "Patatas bravas tradicionales",
  "Pisto con huevos": "Pisto manchego con huevos",
  "Pollo en pepitoria": "Pollo en pepitoria",
  "Prawns with Romesco sauce": "Gambas con salsa Romesco",
  "Quick gazpacho": "Gazpacho andaluz rápido",
  "Roast fennel and aubergine paella": "Paella de hinojo asado y berenjena",
  "Salt cod tortilla": "Tortilla de bacalao",
  "Seafood fideuà": "Fideuá de marisco",
  "Seafood rice": "Arroz marinero",
  "Spaghetti with Spanish flavours": "Espaguetis a la española",
  "Spanish beans with chicken & chorizo":
    "Alubias al estilo español con pollo y chorizo",
  "Spanish Chicken": "Pollo a la española",
  "Spanish chicken pie": "Empanada de pollo a la española",
  "Spanish fig & almond balls": "Bolitas de higo y almendra",
  "Spanish meatballs with clams, chorizo & squid":
    "Albóndigas con almejas, chorizo y calamares",
  "Spanish rice & prawn one-pot": "Arroz con langostinos en cazuela",
  "Spanish seafood rice": "Arroz con mariscos",
  "Spanish tomato bread with jamón Serrano": "Pan con tomate y jamón serrano",
  "Spanish Tortilla": "Tortilla de patatas española",
  "Spanish-style slow-cooked lamb shoulder & beans":
    "Paletilla de cordero estofada con alubias",
  "Spiced tortilla": "Tortilla especiada",
  "Torrijas with sherry": "Torrijas al jerez",
};

const Restaurant = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const restaurantInfo = {
    name: "Restaurante Los Mascarones",
    location: "Albaicín, Granada (España)",
  };

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Spanish")
      .then((response) => {
        setMeals(response.data.meals || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los platos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="restaurantLoading">
        <h2>Cargando la carta del restaurante...</h2>
      </div>
    );
  }

  return (
    <section className="restaurantPage">
      <div className="restaurantHeader">
        <h1 className="restaurantTitle">{restaurantInfo.name}</h1>
        <p className="restaurantLocation">📍 {restaurantInfo.location}</p>
        <p className="restaurantSubtitle">
          Menús tradicionales de comida española
        </p>
      </div>

      <div className="restaurantGrid">
        {meals.map((meal) => {
          const spanishName = translations[meal.strMeal] || meal.strMeal;

          return (
            <div key={meal.idMeal} className="mealCard">
              <img
                src={meal.strMealThumb}
                alt={spanishName}
                className="mealImage"
              />

              <div className="mealInfo">
                <h3 className="mealName">{spanishName}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Restaurant;
