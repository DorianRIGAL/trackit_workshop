type Receipe = {
  id: string;
  name: string;
  description: string;
  pictureUrl: string;
  steps: string[];
  ingredients: string[];
};

export function Receipe() {
  return <span>Receipe</span>;
}

export default Receipe;
