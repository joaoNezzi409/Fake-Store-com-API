import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView } from "react-native";

import {
  BottomBar,
  BottomButton,
  CategoryChip,
  CategoryText,
  Container,
  DetailsContainer,
  Header,
  Price,
  ProductCard,
  ProductImage,
  Rating,
  ScreenTitle,
  SearchInput,
  Title,
} from "./styles";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }

        const data = await response.json();

        setProducts(data);
      } catch (err) {
        setError("Não foi possível carregar os produtos.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <Container
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title>{error}</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <ScreenTitle>Loja</ScreenTitle>

        <SearchInput placeholder="Pesquisar produtos" />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <CategoryChip>
            <CategoryText>Todos</CategoryText>
          </CategoryChip>

          <CategoryChip>
            <CategoryText>Eletrônicos</CategoryText>
          </CategoryChip>

          <CategoryChip>
            <CategoryText>Joias</CategoryText>
          </CategoryChip>

          <CategoryChip>
            <CategoryText>Masculino</CategoryText>
          </CategoryChip>

          <CategoryChip>
            <CategoryText>Feminino</CategoryText>
          </CategoryChip>
        </ScrollView>
      </Header>

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 12,
        }}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard>
            <ProductImage
              source={{ uri: item.image }}
              resizeMode="contain"
            />

            <DetailsContainer>
              <Title numberOfLines={2}>
                {item.title}
              </Title>

              <Price>
                R$ {item.price.toFixed(2)}
              </Price>

              <Rating>
                ⭐ {item.rating.rate} ({item.rating.count} avaliações)
              </Rating>
            </DetailsContainer>
          </ProductCard>
        )}
      />

      <BottomBar>
        <BottomButton>Início</BottomButton>
        <BottomButton>Pesquisar</BottomButton>
        <BottomButton>Carrinho</BottomButton>
        <BottomButton>Perfil</BottomButton>
      </BottomBar>
    </Container>
  );
}
