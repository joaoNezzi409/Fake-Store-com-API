import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ScreenContainer =
  styled(SafeAreaView)`
    flex: 1;
    background-color: #f5f5f5;
  `;

export const TopBar = styled.View`
  height: 60px;

  flex-direction: row;
  align-items: center;

  padding: 0 16px;

  background-color: #ffffff;

  border-bottom-width: 1px;
  border-bottom-color: #eeeeee;
`;

export const BackButton =
  styled.Pressable`
    width: 40px;
    height: 40px;

    align-items: center;
    justify-content: center;
  `;

export const BackButtonText =
  styled.Text`
    font-size: 36px;
    color: #222222;
  `;

export const ScreenTitle =
  styled.Text`
    font-size: 20px;
    font-weight: bold;

    color: #222222;

    margin-left: 10px;
  `;

export const CartList = styled(
  FlatList as new () => FlatList<any>
)`
  flex: 1;
`;

export const ItemContainer =
  styled.View`
    flex-direction: row;

    background-color: #ffffff;

    border-radius: 14px;

    padding: 12px;

    margin-bottom: 12px;
  `;

export const ItemImage =
  styled.Image`
    width: 95px;
    height: 120px;
  `;

export const ItemInfo =
  styled.View`
    flex: 1;

    margin-left: 12px;
  `;

export const ItemTitle =
  styled.Text`
    font-size: 14px;
    font-weight: 600;

    color: #222222;
  `;

export const ItemPrice =
  styled.Text`
    font-size: 17px;
    font-weight: bold;

    color: #111111;

    margin-top: 8px;
  `;

export const QuantityContainer =
  styled.View`
    flex-direction: row;

    align-items: center;

    margin-top: 12px;
  `;

export const StepperButton =
  styled.Pressable`
    width: 32px;
    height: 32px;

    border-radius: 16px;

    background-color: #eeeeee;

    align-items: center;
    justify-content: center;
  `;

export const StepperText =
  styled.Text`
    font-size: 20px;
    color: #222222;
  `;

export const QuantityValue =
  styled.Text`
    font-size: 16px;
    font-weight: bold;

    margin: 0 14px;
  `;

export const RemoveButton =
  styled.Pressable`
    margin-top: 8px;
  `;

export const RemoveText =
  styled.Text`
    color: #c62828;

    font-size: 13px;
    font-weight: bold;
  `;

export const CartSummary =
  styled.View`
    background-color: #ffffff;

    padding: 18px 16px 12px;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  `;

export const SummaryRow =
  styled.View`
    flex-direction: row;

    justify-content: space-between;

    margin-bottom: 10px;
  `;

export const SummaryLabel =
  styled.Text`
    font-size: 15px;

    color: #666666;
  `;

export const SummaryValue =
  styled.Text`
    font-size: 15px;

    color: #222222;
  `;

export const TotalRow =
  styled.View`
    flex-direction: row;

    justify-content: space-between;

    margin-top: 8px;

    margin-bottom: 18px;
  `;

export const TotalLabel =
  styled.Text`
    font-size: 20px;

    font-weight: bold;

    color: #222222;
  `;

export const TotalValue =
  styled.Text`
    font-size: 20px;

    font-weight: bold;

    color: #222222;
  `;

export const CheckoutButton =
  styled.Pressable`
    height: 52px;

    border-radius: 12px;

    background-color: #222222;

    align-items: center;
    justify-content: center;
  `;

export const CheckoutText =
  styled.Text`
    color: #ffffff;

    font-size: 16px;

    font-weight: bold;
  `;

export const EmptyContainer =
  styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;
  `;

export const EmptyText =
  styled.Text`
    font-size: 18px;

    color: #666666;
  `;
