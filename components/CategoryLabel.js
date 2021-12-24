const CategoryLabel = ({ children }) => {
  const colorKey = {
    JavaScript: "yellow",
    CSS: "blue",
    Python: "green",
    PHP: "purple",
  };
  return (
    <span
      className={`px-2 py-1 text-xs text-white ${`bg-${colorKey[children]}-500`} rounded-lg bold`}
    >
      {children}
    </span>
  );
};

export default CategoryLabel;
