import { styled } from "@stitches/react";

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1100,
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",
});

export const ShoopingCartIcon = styled("span", {
  variants: {
    variantSpan: {
      empty: {
        svg: {
          color: "#8D8D99",
        },
      },

      full: {
        "& > svg": {
          color: "$gray300",
        },
      },
    },
  },

  padding: "0.75rem",
  background: "$gray800",
  borderRadius: 6,
  cursor: "pointer",
  position: "relative",

  span: {
    position: "absolute",
    right: "-0.5rem",
    top: "-0.5rem",

    background: "$green500",
    fontSize: "0.875rem",
    fontWeight: "bold",
    borderRadius: "50%",
    boxShadow: "0px 0px 0px 3px $colors$gray900",
    padding: "0.5rem",
    lineHeight: "160%",
    width: "1.5rem",
    height: "1.5rem",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
