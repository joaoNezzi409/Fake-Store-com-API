import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  ActivityIndicator,
  FlatList,
} from 'react-native';

import {
  BottomBar,
  BottomBarButton,
  BottomBarText,
  CategoryChip,
  CategoryList,
  CategoryText,
  Header,
  ProductCard,
  ProductGrid,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductRating,
  ProductTitle,
  RetryButton,
  RetryButtonText,
  ScreenContainer,
  ScreenTitle,
  SearchInput,
  StateContainer,
  StateText,
} from './styled';

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
  const [products, setProducts] =
    useState<Product[]>([]);

  const [categories, setCategories] =
    useState<string[]>([]);

  const [search, setSearch] =
    useState('');

  const [category, setCategory] =
    useState('all');

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState('');

  const [reload, setReload] =
    useState(0);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError('');

        const productsResponse =
          await fetch(
            'https://fakestoreapi.com/products'
          );

        const categoriesResponse =
          await fetch(
            'https://fakestoreapi.com/products/categories'
          );

        if (
          !productsResponse.ok ||
          !categoriesResponse.ok
        ) {
          throw new Error(
            'Erro ao carregar os dados.'
          );
        }

        const productsData: Product[] =
          await productsResponse.json();

        const categoriesData: string[] =
          await categoriesResponse.json();

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        setError(
          'Não foi possível carregar os produtos.'
        );
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [reload]);

  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (product) =>
          category === 'all' ||
          product.category === category
      )
      .filter((product) =>
        product.title
          .toLowerCase()
          .includes(
            search.trim().toLowerCase()
          )
      );
  }, [
    products,
    category,
    search,
  ]);

  function renderProduct({
    item,
  }: {
    item: Product;
  }) {
    return (
      <ProductCard
        onPress={() =>
          onOpenProduct(item)
        }
      >
        <ProductImage
          source={{
            uri: item.image,
          }}
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
    );
  }

  if (loading) {
    return (
      <ScreenContainer>
        <StateContainer>
          <ActivityIndicator
            size="large"
          />

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
            {error}
          </StateText>

          <RetryButton
            onPress={() =>
              setReload(
                (value) => value + 1
              )
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

        <CategoryList
          horizontal
          showsHorizontalScrollIndicator={
            false
          }
          data={[
            'all',
            ...categories,
          ]}
          keyExtractor={(item) => item}
          renderItem={({
            item,
          }) => (
            <CategoryChip
              active={
                category === item
              }
              onPress={() =>
                setCategory(item)
              }
            >
              <CategoryText
                active={
                  category === item
                }
              >
                {item === 'all'
                  ? 'Todos'
                  : item}
              </CategoryText>
            </CategoryChip>
          )}
        />
      </Header>

      <ProductGrid
        data={filteredProducts}
        numColumns={2}
        keyExtractor={(item) =>
          String(item.id)
        }
        renderItem={
          renderProduct
        }
        columnWrapperStyle={{
          justifyContent:
            'space-between',
        }}
        contentContainerStyle={{
          padding: 12,
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={
          false
        }
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
