import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ScreenContainer =
  styled(SafeAreaView)`
    flex: 1;
    background-color: #ffffff;
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

export const Content =
  styled.ScrollView`
    flex: 1;
    padding: 20px;
  `;

export const DetailImage =
  styled.Image`
    width: 100%;
    height: 280px;
  `;

export const CategoryLabel =
  styled.Text`
    font-size: 14px;

    color: #777777;

    margin-top: 20px;

    text-transform: capitalize;
  `;

export const DetailTitle =
  styled.Text`
    font-size: 25px;
    font-weight: bold;

    color: #222222;

    margin-top: 8px;
  `;

export const PriceRow =
  styled.View`
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    margin-top: 16px;
  `;

export const DetailPrice =
  styled.Text`
    font-size: 24px;
    font-weight: bold;

    color: #111111;
  `;

export const RatingText =
  styled.Text`
    font-size: 14px;
    color: #555555;
  `;

export const DetailDescription =
  styled.Text`
    font-size: 16px;
    line-height: 25px;

    color: #555555;

    margin-top: 20px;
  `;

export const QuantityContainer =
  styled.View`
    height: 60px;

    flex-direction: row;

    align-items: center;
    justify-content: center;

    border-top-width: 1px;
    border-top-color: #eeeeee;

    background-color: #ffffff;
  `;

export const StepperButton =
  styled.Pressable`
    width: 42px;
    height: 42px;

    border-radius: 21px;

    background-color: #eeeeee;

    align-items: center;
    justify-content: center;
  `;

export const StepperText =
  styled.Text`
    font-size: 22px;
    color: #222222;
  `;

export const QuantityValue =
  styled.Text`
    font-size: 18px;
    font-weight: bold;

    margin: 0 20px;
  `;

export const AddToCartBar =
  styled.View`
    background-color: #ffffff;

    padding: 12px 16px 12px;
  `;

export const AddToCartButton =
  styled.Pressable`
    height: 52px;

    background-color: #222222;

    border-radius: 12px;

    align-items: center;
    justify-content: center;
  `;

export const AddToCartText =
  styled.Text`
    color: #ffffff;

    font-size: 16px;
    font-weight: bold;
  `;
