tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          openSans: ["Open Sans", "sans-serif"],
        },
        colors: {
          renaissance_Primary_black: "#1A1A1A",
          renaissance_black: "#383838",
          renaissance_white: "#FCFCFC",
          renaissance_gray_1: "#73797F",
          renaissance_gray_3: "#ABAFB2",
          Renaissance_gray_4: '#C7C9CC',
          purple_2: "#6145D0",
          green_600: "#00B058",
        },
        boxShadow: {
          "3xl": "0px 1px 0px 0px rgba(27, 31, 35, 0.05)",
          inputShadow: `0px 1px 24px 0px rgba(97, 69, 208, 0.14)`,
        },
        borderRadius: {
          "4xl": "80px",
          "5xl": "48px",
        },
      },
    },
  };