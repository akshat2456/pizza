import {
  FooterContainer,
  FooterContactInfo,
  FooterProductCount,
  FooterSubscribeSection,
  FooterContentTitle,
  FooterTextItem,
  FooterSubscribeInput,
  FooterSubscribeBtn
} from "./FooterElements";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContactInfo>
        <FooterContentTitle>Contact Info</FooterContentTitle>
        <FooterTextItem>Phone : +919967374668</FooterTextItem>
        <FooterTextItem>
          Address : Vrindavan pizza, gokul road, malad(east) , mumbai ,
          maharashtra - 400093
        </FooterTextItem>
      </FooterContactInfo>
      <FooterProductCount>
        <FooterContentTitle>Products</FooterContentTitle>
        <FooterTextItem>Pizza(98)</FooterTextItem>
        <FooterTextItem>Drinks(7)</FooterTextItem>
        <FooterTextItem>Deserts(9)</FooterTextItem>
      </FooterProductCount>
      <FooterSubscribeSection>
        <FooterContentTitle>Stay In Touch</FooterContentTitle>
        <FooterTextItem>
          Be updated with our latest products and offers
        </FooterTextItem>
        <FooterSubscribeInput placeholder="Enter Your Email" />
        <FooterSubscribeBtn>Subscribe</FooterSubscribeBtn>
      </FooterSubscribeSection>
    </FooterContainer>
  );
}
