const funcLocationGenerator = (baseLocoation, title) => {
  // create new location
  const newLocation = {
    id: baseLocoation.length + 1,
    name: title,
    link: typeof window !== "undefined" && window.location.pathname,
  };

  // create dynamic location
  const dynamicLocation = [...baseLocoation, newLocation];

  return dynamicLocation;
};

export default funcLocationGenerator;
