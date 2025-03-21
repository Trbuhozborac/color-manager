import ColorsList from "../src/components/ColorsList/ColorsList";
import { render, screen, fireEvent } from "@testing-library/react";

const mockSetColorToDeleteId = jest.fn();
const mockSetIsDeleteDialogOpen = jest.fn();

describe("ColorsList Component Test", () => {
  it("renders message when there are no colors", () => {
    render(
      <ColorsList
        colors={[]}
        setColorToDeleteId={mockSetColorToDeleteId}
        setIsDeleteDialogOpen={mockSetIsDeleteDialogOpen}
      />
    );

    expect(
      screen.getByText(
        "There is no any color defined yet, click Add Color button to add some :)"
      )
    ).toBeInTheDocument();
  });

  it("renders colors and delete buttons", () => {
    const colors = [
      { id: 1, name: "Red", hex: "#FF0000" },
      { id: 2, name: "Green", hex: "#00FF00" },
    ];

    render(
      <ColorsList
        colors={colors}
        setColorToDeleteId={mockSetColorToDeleteId}
        setIsDeleteDialogOpen={mockSetIsDeleteDialogOpen}
      />
    );

    colors.forEach((color) => {
      expect(screen.getByText(color.name)).toBeInTheDocument();
    });
    expect(screen.getAllByRole("button", { name: /delete/i })).toHaveLength(2);
  });

  it("calls setColorToDeleteId and setIsDeleteDialogOpen when delete button is clicked", () => {
    const colors = [{ id: 1, name: "Blue", hex: "#0000FF" }];

    render(
      <ColorsList
        colors={colors}
        setColorToDeleteId={mockSetColorToDeleteId}
        setIsDeleteDialogOpen={mockSetIsDeleteDialogOpen}
      />
    );

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(mockSetColorToDeleteId).toHaveBeenCalledWith(1);
    expect(mockSetIsDeleteDialogOpen).toHaveBeenCalledWith(true);
  });
});
