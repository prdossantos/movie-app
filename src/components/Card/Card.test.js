import { render } from "@testing-library/react";
import CardComponent from ".";

test("1. renderizando o componente", async () => {
    const { findByText } = render(<CardComponent title="Teste" description="asf" srcImg=""/>);

    expect(await findByText("Teste")).toBeTruthy();
});
