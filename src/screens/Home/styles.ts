import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding-left: 24px;
  padding-right: 24px;
`;

export const ProductCard = styled.View`
  flex: 1;
  background-color: #fff;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;

  border-radius: 12px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 130px;
  border-radius: 12px;
`;

export const DetailsContainer = styled.View`
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  min-height: 36px;
`;

export const Price = styled.Text`
  font-size: 15px;
  font-weight: 800;
  color: #1a8927;
  margin-top: 4px;
`;

export const Header = styled.View`
  margin-bottom: 16px;
`;

export const ScreenTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const SearchInput = styled.TextInput`
  border-width: 1px;
  border-color: #ddd;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 12px;
`;

export const CategoriesContainer = styled.ScrollView`
  margin-bottom: 12px;
`;

export const CategoryChip = styled.View`
  background-color: #ececec;
  padding: 8px 16px;
  border-radius: 20px;
  margin-right: 8px;
`;

export const CategoryText = styled.Text`
  font-size: 13px;
`;

export const Rating = styled.Text`
  color: #666;
  margin-top: 4px;
`;

export const BottomBar = styled.View`
  height: 60px;
  border-top-width: 1px;
  border-top-color: #ddd;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const BottomButton = styled.Text`
  font-weight: bold;
`;
