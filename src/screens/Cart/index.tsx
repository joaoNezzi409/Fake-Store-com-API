import React from 'react';
import { FlatList } from 'react-native';

import { Product } from '../Home';

import {
  ScreenContainer,
  TopBar,
  BackButton,
  BackButtonText,
  ScreenTitle,
  ItemContainer,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  QuantityContainer,
  StepperButton,
  StepperText,
  QuantityValue,
  RemoveButton,
  RemoveText,
  CartSummary,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  TotalRow,
  TotalLabel,
  TotalValue,
  CheckoutButton,
  CheckoutText,
  EmptyContainer,
  EmptyText,
} from './styles';

export interface CartProduct extends Product {
  quantity: number;
}

interface CartProps {
  items: CartProduct[];
  onBack: () => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function Cart({
  items,
  onBack,
  onIncrease,
  onDecrease,
  onRemove,
}: CartProps) {
  const subtotal = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const shipping =
    items.length > 0 ? 12 : 0;

  const total = subtotal + shipping;

  return (
    <ScreenContainer>
      <TopBar>
        <BackButton onPress={onBack}>
          <BackButtonText>
            ‹
          </BackButtonText>
        </BackButton>

        <ScreenTitle>
          Carrinho
        </ScreenTitle>
      </TopBar>

      {items.length === 0 ? (
        <EmptyContainer>
          <EmptyText>
            Seu carrinho está vazio.
          </EmptyText>
        </EmptyContainer>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) =>
              String(item.id)
            }
            contentContainerStyle={{
              padding: 16,
              paddingBottom: 20,
            }}
            renderItem={({ item }) => (
              <ItemContainer>
                <ItemImage
                  source={{
                    uri: item.image,
                  }}
                  resizeMode="contain"
                />

                <ItemInfo>
                  <ItemTitle numberOfLines={2}>
                    {item.title}
                  </ItemTitle>

                  <ItemPrice>
                    R${' '}
                    {item.price
                      .toFixed(2)
                      .replace('.', ',')}
                  </ItemPrice>

                  <QuantityContainer>
                    <StepperButton
                      onPress={() =>
                        onDecrease(item.id)
                      }
                    >
                      <StepperText>
                        −
                      </StepperText>
                    </StepperButton>

                    <QuantityValue>
                      {item.quantity}
                    </QuantityValue>

                    <StepperButton
                      onPress={() =>
                        onIncrease(item.id)
                      }
                    >
                      <StepperText>
                        +
                      </StepperText>
                    </StepperButton>
                  </QuantityContainer>

                  <RemoveButton
                    onPress={() =>
                      onRemove(item.id)
                    }
                  >
                    <RemoveText>
                      Remover
                    </RemoveText>
                  </RemoveButton>
                </ItemInfo>
              </ItemContainer>
            )}
          />

          <CartSummary>
            <SummaryRow>
              <SummaryLabel>
                Subtotal
              </SummaryLabel>

              <SummaryValue>
                R${' '}
                {subtotal
                  .toFixed(2)
                  .replace('.', ',')}
              </SummaryValue>
            </SummaryRow>

            <SummaryRow>
              <SummaryLabel>
                Frete
              </SummaryLabel>

              <SummaryValue>
                R${' '}
                {shipping
                  .toFixed(2)
                  .replace('.', ',')}
              </SummaryValue>
            </SummaryRow>

            <TotalRow>
              <TotalLabel>
                Total
              </TotalLabel>

              <TotalValue>
                R${' '}
                {total
                  .toFixed(2)
                  .replace('.', ',')}
              </TotalValue>
            </TotalRow>

            <CheckoutButton
              onPress={() => {}}
            >
              <CheckoutText>
                Finalizar compra
              </CheckoutText>
            </CheckoutButton>
          </CartSummary>
        </>
      )}
    </ScreenContainer>
  );
}
