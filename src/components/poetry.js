// Poetry Component
const Poetry = ({ poems }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-yellow-300">Poems</h2>
      <div className="mt-6">
        {poems && poems.length > 0 ? (
          poems.map((poem, index) => (
            <div key={index} className="poetry-text mb-6">
              <h3 className="text-xl font-semibold">{poem.title}</h3>
              <p className="text-lg">{poem.content}</p>
            </div>
          ))
        ) : (
          <p>No poems available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Poetry