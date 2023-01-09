import { styled } from "@stitches/react";

export const Container = styled("div", {
  background: "$gray800",
  width: "30rem",
  top: 0,
  height: "100%",
  maxHeight: "100vh",
  position: "fixed",

  zIndex: 10,

  variants: {
    variant: {
      OPEN: {
        right: 0,
        transition: "all 200ms cubic-bezier(0.765, 0.105, 0.290, 0.915)",
      },

      CLOSED: {
        right: "-30rem",
        transition: "all 200ms cubic-bezier(0.765, 0.105, 0.290, 0.915)",
      },
    },
  },

  // close button
  "& > span": {
    width: "100%",
    display: "flex",
    justifyContent: "end",
    padding: "1.5rem",
    svg: {
      cursor: "pointer",
    },
  },

  // content
  "& > div": {
    height: "100%",
    padding: "0 3rem 3rem 3rem",

    // shopping cart title
    "& > span": {
      fontSize: "$lg",
      lineHeight: "160%",
    },

    // contém a lista e a tabela
    "& > div": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      height: "100%",

      "& > div:nth-child(1)": {
        flex: 1,
      },

      // botão de finalizar comprar
      "& > div:nth-child(2) button": {
        border: "none",
        borderRadius: 8,
        padding: "1.25rem 0",
        background: "$green500",
        width: "100%",
        marginTop: "3.5rem",
        marginBottom: "7rem",

        fontWeight: "bold",
        color: "$white",
        fontSize: "$md",

        cursor: "pointer",

        "&:disabled": {
          opacity: "0.6",
          cursor: "not-allowed",
        },

        "&:not(:disabled):hover": {
          background: "$green300",
        },
      },
    },
  },
});

export const ShoppingCartList = styled("div", {
  display: "flex",

  flexDirection: "column",
  gap: "1.5rem",
  marginTop: "1.5rem",
});

export const Table = styled("table", {
  width: "100%",

  "tbody tr td:nth-child(2)": {
    textAlign: "right",
  },

  "tbody tr:nth-child(1) td:nth-child(1)": {
    fontSize: "1rem",
  },

  "tbody tr:nth-child(2) td:nth-child(1)": {
    fontSize: "$md",
    fontWeight: "bold",
  },

  "tbody tr:nth-child(2) td:nth-child(2)": {
    fontSize: "$2xl",
    fontWeight: "bold",
  },
});
