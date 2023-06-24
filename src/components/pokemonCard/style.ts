import styled from "styled-components";

export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   transition: transform 0.3s ease;

   border-radius: 8px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

   margin-bottom: 20px;
   padding: 10px;
   width: 200px;
   height: 370px;

   &:hover {
      transform: translateY(-5px);
   }

   h2 {
      font-size: 16px;
      margin-bottom: 8px;

      color: #fff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
   }

   img {
      width: 140px;
      height: 140px;
      margin-bottom: 8px;
      border-radius: 50%;
      border: 3px solid #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
   }
`;

export const CardWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;

   min-height: 55vh;
`;

export const CardID = styled.p`
   font-size: 12px;
   margin-bottom: 2px;
   text-align: right;

   color: #fff;
   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const CardType = styled.p`
   font-size: 9px;
   margin-bottom: 2px;
   padding: 2px 4px;
   background-color: rgba(0, 0, 0, 0.4);
   border-radius: 4px;
   font-weight: bold;
   text-transform: uppercase;

   align-self: flex-start;

   color: #fff;
   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const CardLabel = styled.p`
   font-size: 12px;
   margin-bottom: 2px;
   font-weight: bold;

   color: #fff;
   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const CardValue = styled.p`
   font-size: 12px;
   margin-bottom: 2px;
   font-weight: bold;

   color: #fff;
   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const CardAbilities = styled.ul`
   display: flex;
   flex-wrap: wrap;
   margin: 0;
   padding: 0;
   gap: 5px;
   list-style-type: none;
`;

export const CardAbility = styled.li`
   font-size: 9px;
   margin-top: 5px;
   padding: 2px 4px;
   background-color: rgba(0, 0, 0, 0.4);
   border-radius: 4px;
   font-weight: bold;
   text-transform: uppercase;

   color: #fff;
   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const StyledCardLabelValue = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const StyledCardValue = styled(CardValue)`
   text-align: right;
`;
