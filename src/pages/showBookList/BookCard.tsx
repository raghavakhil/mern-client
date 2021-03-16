import styled from "styled-components";

interface bookDetailsConfig {
  key: string;
  formBook: any;
}
const CardContainerStyle = styled.div`
  width: 250px;
  border: 1px solid rgba(0, 0, 0.125);
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
`;
const DescDiv = styled.div`
  height: 130px;
  padding: 10px;
`;
const H3 = styled.h3`
  color: #6c757d;
  font-size: 1em;
  padding: 10px 0 10px 0;
`;
const H2 = styled.h2`
  font-size: 1em;
  font-weight: 400;
`;
const BookCard = (props: bookDetailsConfig) => {
  const { formBook } = props;

  return (
    <CardContainerStyle>
      <img
        src="https://commapress.co.uk/books/the-life-writer/the-life-writer-high-res.jpg/image%2Fspan3"
        alt=""
      />
      <DescDiv>
        <H2>{formBook.id}</H2>
        <H3>{formBook.name}</H3>
      </DescDiv>
    </CardContainerStyle>
  );
};

export default BookCard;