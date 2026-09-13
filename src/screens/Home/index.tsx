import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
} from 'react-native';

import {
  ScreenContainer,
  Header,
  ScreenTitle,
  SearchInput,
  CategoryChip,
  CategoryText,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductRating,
  BottomBar,
  BottomBarButton,
  BottomBarText,
  StateContainer,
  StateText,
  RetryButton,
  RetryButtonText,
} from './styles';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface HomeProps {
  onOpenProduct: (product: Product) => void;
  onOpenCart: () => void;
  cartItemsCount: number;
}

export default function Home({
  onOpenProduct,
  onOpenCart,
  cartItemsCount,
}: HomeProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(false);

        const productsResponse = await fetch(
          'https://fakestoreapi.com/products'
        );

        const categoriesResponse = await fetch(
          'https://fakestoreapi.com/products/categories'
        );

        if (
          !productsResponse.ok ||
          !categoriesResponse.ok
        ) {
          throw new Error('Erro ao carregar os dados');
        }

        const productsData: Product[] =
          await productsResponse.json();

        const categoriesData: string[] =
          await categoriesResponse.json();

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [reload]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        return (
          category === 'all' ||
          product.category === category
        );
      })
      .filter((product) => {
        return product.title
          .toLowerCase()
          .includes(
            search.trim().toLowerCase()
          );
      });
  }, [products, category, search]);

  if (loading) {
    return (
      <ScreenContainer>
        <StateContainer>
          <ActivityIndicator size="large" />

          <StateText>
            Carregando produtos...
          </StateText>
        </StateContainer>
      </ScreenContainer>
    );
  }

  if (error) {
    return (
      <ScreenContainer>
        <StateContainer>
          <StateText>
            Não foi possível carregar os produtos.
          </StateText>

          <RetryButton
            onPress={() =>
              setReload((value) => value + 1)
            }
          >
            <RetryButtonText>
              Tentar novamente
            </RetryButtonText>
          </RetryButton>
        </StateContainer>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <Header>
        <ScreenTitle>
          Loja
        </ScreenTitle>

        <SearchInput
          placeholder="Buscar produtos"
          placeholderTextColor="#888888"
          value={search}
          onChangeText={setSearch}
        />

        <FlatList
          horizontal
          data={['all', ...categories]}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryChip
              active={category === item}
              onPress={() => setCategory(item)}
            >
              <CategoryText
                active={category === item}
              >
                {item === 'all'
                  ? 'Todos'
                  : item}
              </CategoryText>
            </CategoryChip>
          )}
        />
      </Header>

      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={(item) =>
          String(item.id)
        }
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          padding: 12,
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            onPress={() =>
              onOpenProduct(item)
            }
          >
            <ProductImage
              source={{ uri: item.image }}
              resizeMode="contain"
            />

            <ProductInfo>
              <ProductTitle numberOfLines={2}>
                {item.title}
              </ProductTitle>

              <ProductPrice>
                R${' '}
                {item.price
                  .toFixed(2)
                  .replace('.', ',')}
              </ProductPrice>

              <ProductRating>
                ★ {item.rating.rate} (
                {item.rating.count})
              </ProductRating>
            </ProductInfo>
          </ProductCard>
        )}
        ListEmptyComponent={
          <StateContainer>
            <StateText>
              Nenhum produto encontrado.
            </StateText>
          </StateContainer>
        }
      />

      <BottomBar>
        <BottomBarButton>
          <BottomBarText active>
            Início
          </BottomBarText>
        </BottomBarButton>

        <BottomBarButton
          onPress={onOpenCart}
        >
          <BottomBarText>
            Carrinho
            {cartItemsCount > 0
              ? ` (${cartItemsCount})`
              : ''}
          </BottomBarText>
        </BottomBarButton>
      </BottomBar>
    </ScreenContainer>
  );
}
