import { Summary } from "../Summary";
import { TranslactionTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary/>
      <TranslactionTable/>
    </Container>
  );
}