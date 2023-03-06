import React, { useContext, useEffect, useState } from "react";
import CardExpirationDateInput from "../components/CardExpirationDateInput";
import CardNumberInput from "../components/CardNumberInput";
import CardOwnerNameInput from "../components/CardOwnerNameInput";
import CardPasswordFirstTwoDigitsInput from "../components/CardPasswordFirstTwoDigitsInput";
import CardPreview from "../components/CardPreview";
import CardSecurityCodeInput from "../components/CardSecurityCodeInput";
import DefaultLayout from "../components/common/DefaultLayout";
import { useNavigate } from "react-router-dom";
import CardSubmitButton from "../components/CardSubmitButton";
import { CardContext } from "../contexts/PaymentsCardContext";

export interface CardAddPageProps {
  handleGoBack?: () => void;
}

const CardAddPage: React.FC<CardAddPageProps> = ({ handleGoBack }) => {
  const navigate = useNavigate();
  const { cardNumber, expirationDate, securityCode, passwordFirstTwoDigits } =
    useContext(CardContext);

  const [isAllInfoEntered, setIsAllInfoEntered] = useState(false);

  useEffect(() => {
    setIsAllInfoEntered(
      cardNumber.length === 16 &&
        expirationDate.length === 5 &&
        securityCode.length === 3 &&
        passwordFirstTwoDigits.length === 2
    );
  }, [cardNumber, expirationDate, securityCode, passwordFirstTwoDigits]);

  const handleGoBackClick = () => {
    if (handleGoBack) {
      handleGoBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <DefaultLayout
      pageTitle={"카드 추가"}
      showBackButton={true}
      onBackButtonClick={handleGoBackClick}
    >
      <CardPreview isAllInfoEntered={isAllInfoEntered} />
      <CardNumberInput />
      <CardExpirationDateInput />
      <CardOwnerNameInput />
      <CardSecurityCodeInput />
      <CardPasswordFirstTwoDigitsInput />
      <CardSubmitButton disabled={!isAllInfoEntered} />
    </DefaultLayout>
  );
};

export default CardAddPage;
