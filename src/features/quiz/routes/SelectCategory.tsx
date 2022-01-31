import { categories } from "../data/categories";
import { useNavigate } from "react-router-dom";
import { Page } from "@components";
import { Category } from "../components";

/**
 * @component
 *
 * @description
 *   Component used to display a list of categories.
 *   This is the first page the user sees when they open the app. (home page).
 *
 * @returns {JSX.Element}
 */

export function SelectCategory() {
  const navigate = useNavigate();

  return (
    <Page>
      {categories.map((category) => (
        <Category
          key={category.code}
          title={category.title}
          code={category.code}
          icon={category.icon}
          onClick={() => navigate(`/quiz/${category.code}`)}
        />
      ))}
    </Page>
  );
}
