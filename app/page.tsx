import { PeopleList } from "@/components/PeopleList";
import { people } from "@/lib/data";

export default function Home() {
  const getPeople = people;
  
  if (!getPeople) { 
    return <h1>Loading...</h1>
  }

  return (
    <main className="container py-12">
      <h1 className="text-4xl mb-4">Rendering Lists</h1>
      {/* 
      #1 Move the data into an array like:
      [{},{}] or ['string', 'number', 'more string', ...]
      #2 Map the people(array) members into a new array of JSX nodes, listItems:
      # Return listItems from your component wrapped in a <ul>:
      */}

      <PeopleList data={getPeople} />
    </main>
  );
}
