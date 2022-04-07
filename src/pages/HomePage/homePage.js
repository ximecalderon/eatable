/** @jsxImportSource @emotion/react */
import SearchInput from "../../components/SearchInput";
import { FiShoppingCart } from "react-icons/fi"
import * as Styled from "./styles";
import { useState } from "react";
import CategoriesMain from "./categoriesMain";
import SearchMain from "./searchMain";

const mockProducts = [
  {
    "id": 1,
    "name": "green cream",
    "price": 3313,
    "category": "soups",
    "description": "Eveniet distinctio exercitationem. Error sed ea. Aut id eius. Atque quia enim. Est asperiores architecto. Magnam perferendis labore. Tenetur animi blanditiis. Porro nesciunt expedita. Et rem et. Eveniet quo et. Vel aliquid sit. Et consequu.",
    "picture_url": "https://img.freepik.com/free-photo/top-view-green-cream-soups_23-2148519096.jpg"
  },
  {
    "id": 2,
    "name": "organic pumpkin",
    "price": 4189,
    "category": "soups",
    "description": "Distinctio ea itaque. Sint in inventore. Distinctio consequatur repudiandae. Molestias laudantium et. Voluptatibus animi atque. Non autem aut. Modi quidem voluptas. Rerum adipisci molestiae. Consequuntur in et. Nam doloremque tempore. Dist.",
    "picture_url": "https://img.freepik.com/free-photo/organic-pumpkin-puree-white-bowl_193819-1820.jpg"
  },
  {
    "id": 3,
    "name": "broccoli soup",
    "price": 2344,
    "category": "soups",
    "description": "Omnis adipisci magnam. Sint qui voluptas. Harum ut qui. Aliquid delectus numquam. Nihil voluptate quaerat. Odit fugiat animi. Voluptatem fugiat harum. Incidunt dolorem eius. Ut architecto deserunt. Enim et id. Quisquam ipsam sunt. Qui modi.",
    "picture_url": "https://img.freepik.com/free-photo/flat-lay-homemade-soup-broccoli-spinach_23-2148452773.jpg"
  },
  {
    "id": 4,
    "name": "zucchini cream",
    "price": 4039,
    "category": "soups",
    "description": "Sint voluptatibus commodi. Perspiciatis neque molestiae. Sit ut excepturi. Ut sunt consequatur. Consequuntur dignissimos natus. Nihil quod ipsam. Dolorem quae voluptas. Ut id ea. Totam in asperiores. Et voluptatum hic. In animi quo. Odio i.",
    "picture_url": "https://img.freepik.com/free-photo/zucchini-cream-soup-with-garlic-chilli_2829-19613.jpg"
  },
  {
    "id": 5,
    "name": "asian ramen",
    "price": 1672,
    "category": "soups",
    "description": "Aliquam necessitatibus amet. Possimus tenetur sunt. Sint atque sunt. Officiis ipsa corporis. Est sunt consequatur. Iusto ipsa sit. Est voluptate repellendus. Non velit autem. Consequatur enim explicabo. Eveniet sed et. Et vitae id. Sed fug.",
    "picture_url": "https://img.freepik.com/free-photo/traditional-asian-ramen-soup-with-onion-egg-pork-corn-parsley-hot-pepper-black-bowl-black-surface-with-reflection_207126-3157.jpg"
  },
  {
    "id": 6,
    "name": "tortilla mix",
    "price": 3815,
    "category": "mexican",
    "description": "Eos omnis velit. Libero iusto cum. Rerum sed optio. Eius est aspernatur. Vel quod ea. Odio itaque et. Officia distinctio consectetur. Possimus minima soluta. Reprehenderit perferendis vel. Ipsum ducimus quis. Animi veniam iure. Dolores quo.",
    "picture_url": "https://img.freepik.com/free-photo/tortilla-with-mix-ingredients_62847-293.jpg"
  },
  {
    "id": 7,
    "name": "spicy nachos",
    "price": 2994,
    "category": "mexican",
    "description": "Illo commodi vitae. Perspiciatis eligendi impedit. Rerum aut dolorem. Repellendus quaerat voluptatem. Ipsa velit repudiandae. Aperiam velit quo. Nihil omnis voluptas. Inventore quis id. Veniam quas nam. Doloremque fugiat sit. Et velit illo.",
    "picture_url": "https://img.freepik.com/free-photo/mexican-spicy-food-nachos-top-view_23-2148224125.jpg"
  },
  {
    "id": 8,
    "name": "barquita taco",
    "price": 2506,
    "category": "mexican",
    "description": "Veniam accusamus adipisci. Aut libero quia. Quos omnis omnis. Est et officia. Iusto nihil sint. Suscipit perferendis ut. Quo est dolorem. Et culpa eligendi. Consequuntur possimus aliquam. Qui quod voluptas. Laboriosam culpa quaerat. Offici.",
    "picture_url": "https://img.freepik.com/free-photo/mexican-barquita-taco-with-beef-chilli-tomato-onion-spices-wooden-table_123827-15005.jpg"
  }
];

function HomePage({ products = mockProducts }) {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    const { value } = event.target;
    setSearch(value)
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <SearchInput placeholder="Search" onChange={(handleSearch)} />
        <FiShoppingCart css={Styled.CartButton} />
      </Styled.Header>
      {search === "" ?
        <CategoriesMain products={products} /> :
        <SearchMain products={products} search={search} />
      }
    </Styled.Container>
  )
};

export default HomePage;