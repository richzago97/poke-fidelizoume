import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 4.5rem;
`;

export const ChartTitle = styled.h2`
   font-size: 24px;
   font-weight: bold;
   color: #333333;
   text-transform: uppercase;
   letter-spacing: 2px;
   text-align: center;
   margin-bottom: 10px;
   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
   font-family: "Roboto", sans-serif;
`;

export const ChartContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   &:hover {
      transform: translateY(-5px);
   }

   canvas {
      width: 300px;
      height: 300px;
   }
`;

export const ChartHeader = styled.div`
   margin-bottom: 10px;

   h2 {
      font-size: 18px;
      font-weight: bold;
   }
`;
