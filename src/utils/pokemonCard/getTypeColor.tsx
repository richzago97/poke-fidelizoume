const getTypeColor = (type: string) => {
   switch (type) {
      case "fire":
         return "#FF3B30";
      case "poison":
         return "#B97FC9";
      case "grass":
         return "#4CAF50";
      case "bug":
         return "#4CAF50";
      case "water":
         return "#007AFF";
      case "ground":
         return "#D3B357";
      case "electric":
         return "#FFC400";
      case "ice":
         return "#7ED4FF";
      default:
         return "#CCCCCC";
   }
};

export default getTypeColor;
