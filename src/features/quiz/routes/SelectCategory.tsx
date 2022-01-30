import categories from "../data/categories.json";
import { useNavigate } from "react-router-dom";
import { Page } from "@components";
import { Category } from "../components";

export function SelectCategory() {
  const navigate = useNavigate();

  return (
    <Page>
      {categories.map((category) => (
        <Category
          key={category.code}
          title={category.title}
          code={category.code}
          onClick={() => null}
          // onClick={() => navigate(`/quiz/${category.code}`)}
        />
      ))}
    </Page>
  );
}
