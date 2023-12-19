import MealItem from './MealItem';
import useHttp from '../hooks/useHttp';

const requesrConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requesrConfig, []);

  console.log(loadedMeals);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }

  return (
    <ul id='meals'>
      {loadedMeals.map((meal) => (
        <MealItem
          key={meal.id}
          meal={meal}
        />
      ))}
    </ul>
  );
}
