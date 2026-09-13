import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ScreenContainer =
  styled(SafeAreaView)`
    flex: 1;
    background-color: #f5f5f5;
  `;

export const Header = styled.View`
  padding: 20px 16px 10px;
  background-color: #ffffff;
`;

export const ScreenTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #222222;
  margin-bottom: 15px;
`;

export const SearchInput =
  styled.TextInput`
    height: 48px;
    background-color: #f0f0f0;
    border-radius: 12px;
    padding: 0 16px;
    font-size: 16px;
    color: #222222;
    margin-bottom: 15px;
  `;

export const CategoryList = styled(
  FlatList as new () => FlatList<string>
)`
  margin-bottom: 5px;
`;

interface CategoryChipProps {
  active?: boolean;
}

export const CategoryChip =
  styled.Pressable<CategoryChipProps>`
    padding: 10px 16px;
    border-radius: 20px;
    margin-right: 8px;

    background-color: ${({ active }) =>
      active
        ? '#222222'
        : '#eeeeee'};
  `;

export const CategoryText =
  styled.Text<CategoryChipProps>`
    color: ${({ active }) =>
      active
        ? '#ffffff'
        : '#333333'};

    font-size: 13px;
    font-weight: 600;
  `;

export const ProductGrid = styled(
  FlatList as new () => FlatList<any>
)`
  flex: 1;
`;

export const ProductCard =
  styled.Pressable`
    width: 48%;
    min-height: 330px;

    background-color: #ffffff;

    border-radius: 14px;

    padding: 12px;

    margin-bottom: 14px;
  `;

export const ProductImage =
  styled.Image`
    width: 100%;
    height: 170px;
    margin-bottom: 10px;
  `;

export const ProductInfo =
  styled.View`
    flex: 1;
  `;

export const ProductTitle =
  styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: #222222;

    min-height: 42px;
  `;

export const ProductPrice =
  styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #111111;

    margin-top: 8px;
  `;

export const ProductRating =
  styled.Text`
    font-size: 13px;
    color: #666666;

    margin-top: 6px;
  `;

export const BottomBar =
  styled.View`
    height: 60px;

    flex-direction: row;

    background-color: #ffffff;

    border-top-width: 1px;
    border-top-color: #dddddd;
  `;

export const BottomBarButton =
  styled.Pressable`
    flex: 1;

    align-items: center;
    justify-content: center;
  `;

interface ActiveProps {
  active?: boolean;
}

export const BottomBarText =
  styled.Text<ActiveProps>`
    color: ${({ active }) =>
      active
        ? '#111111'
        : '#777777'};

    font-weight: ${({ active }) =>
      active
        ? 'bold'
        : 'normal'};

    font-size: 14px;
  `;

export const StateContainer =
  styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;

    padding: 30px;
  `;

export const StateText =
  styled.Text`
    font-size: 16px;
    color: #555555;

    text-align: center;

    margin-top: 12px;
  `;

export const RetryButton =
  styled.Pressable`
    background-color: #222222;

    padding: 12px 20px;

    border-radius: 10px;

    margin-top: 20px;
  `;

export const RetryButtonText =
  styled.Text`
    color: #ffffff;

    font-weight: bold;
  `;
