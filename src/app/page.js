import TabSwitcher from "./tab_switcher";
// This component will handle data fetching on the server side
export default async function HomePage() {
  // Fetching data on the server side
  const poemsResponse = await fetch("http://localhost:3001/poetries");
  const experiencesResponse = await fetch("http://localhost:3001/experiences");

  const poemsData = await poemsResponse.json();
  const experiencesData = await experiencesResponse.json();

  // Returning the page with data passed as props
  return (
    <div className="min-h-screen relative transition-all duration-500 ease-in-out bg-gray-900 floating">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-center text-4xl font-bold text-yellow-300">Muzammal Abbas</h1>
        <p className="italic text-center text-white">Crafting Code & Weaving Words</p>
        <TabSwitcher poems={poemsData} experiences={experiencesData} />
      </div>
    </div>
  );
}
