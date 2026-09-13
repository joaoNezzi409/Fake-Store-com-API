import React, {
  useState,
} from 'react';

import { Product } from '../Home';

import {
  ScreenContainer,
  TopBar,
  BackButton,
  BackButtonText,
  ScreenTitle,
  Content,
  DetailImage,
  CategoryLabel,
  DetailTitle,
  PriceRow,
  DetailPrice,
  RatingText,
  DetailDescription,
  QuantityContainer,
  StepperButton,
  StepperText,
  QuantityValue,
  AddToCartBar,
  AddToCartButton,
  AddToCartText,
} from './styled';

interface DetailsProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (
    product: Product,
    quantity: number
  ) => void;
}

export default function Details({
  product,
  onBack,
  onAddToCart,
}: DetailsProps) {
  const [quantity, setQuantity] =
    useState(1);

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(
        quantity - 1
      );
    }
  }

  function increaseQuantity() {
    setQuantity(
      quantity + 1
    );
  }

  function handleAddToCart() {
    onAddToCart(
      product,
      quantity
    );

    onBack();
  }

  return (
    <ScreenContainer>
      <TopBar>
        <BackButton
          onPress={onBack}
        >
          <BackButtonText>
            ‹
          </BackButtonText>
        </BackButton>

        <ScreenTitle>
          Detalhe
        </ScreenTitle>
      </TopBar>

      <Content
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <DetailImage
          source={{
            uri: product.image,
          }}
          resizeMode="contain"
        />

        <CategoryLabel>
          {product.category}
        </CategoryLabel>

        <DetailTitle>
          {product.title}
        </DetailTitle>

        <PriceRow>
          <DetailPrice>
            R${' '}
            {product.price
              .toFixed(2)
              .replace('.', ',')}
          </DetailPrice>

          <RatingText>
            ★ {product.rating.rate} (
            {product.rating.count})
          </RatingText>
        </PriceRow>

        <DetailDescription>
          {product.description}
        </DetailDescription>
      </Content>

      <QuantityContainer>
        <StepperButton
          onPress={
            decreaseQuantity
          }
        >
          <StepperText>
            −
          </StepperText>
        </StepperButton>

        <QuantityValue>
          {quantity}
        </QuantityValue>

        <StepperButton
          onPress={
            increaseQuantity
          }
        >
          <StepperText>
            +
          </StepperText>
        </StepperButton>
      </QuantityContainer>

      <AddToCartBar>
        <AddToCartButton
          onPress={
            handleAddToCart
          }
        >
          <AddToCartText>
            Adicionar ao carrinho
          </AddToCartText>
        </AddToCartButton>
      </AddToCartBar>
    </ScreenContainer>
  );
}
