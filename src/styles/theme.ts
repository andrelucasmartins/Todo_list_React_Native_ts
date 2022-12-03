interface ThemeProps {
  colors: {
    product: {
      purple: {
        default: string,
        dark: string
      },
      blue: {
        default: string,
        dark: string
      }
    },
    base: {
      gray: {
        700: string,
        600: string,
        500: string,
        400: string,
        300: string,
        200: string,
        100: string
      },
      danger: string
    }
  },
  fonts: {
    12: {
      regular: {
        fontFamily: string,
        fontStyle?: "normal" | "italic",
        fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
        fontSize: number,
        lineHeight: number,
      },

      bold: {
        fontFamily: string,
        fontStyle?: "normal" | "italic",
        fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
        fontSize: number,
        lineHeight: number,
      }
    },
    14: {
      regular: {
        fontFamily: string,
        fontStyle?: "normal" | "italic",
        fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
        fontSize: number,
        lineHeight: number,
      },

      bold: {
        fontFamily: string,
        fontStyle?: "normal" | "italic",
        fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
        fontSize: number,
        lineHeight: number,
      }
    },
    16: {
      regular: {
        fontFamily: string,
        fontStyle?: "normal" | "italic",
        fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
        fontSize: number,
        lineHeight: number,
      },

      bold: {
        fontFamily: string,
        fontStyle?: "normal" | "italic",
        fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
        fontSize: number,
        lineHeight?: number | string,
      }
    }
  }
}

export const theme: ThemeProps = {
  colors: {
    product: {
      purple: {
        default: "#8284FA",
        dark: "#5E60CE"
      },
      blue: {
        default: "#4EA8DE",
        dark: "#1E6F9F"
      }
    },
    base: {
      gray: {
        700: '#0D0D0D',
        600: '#1A1A1A',
        500: '#262626',
        400: '#333333',
        300: '#808080',
        200: '#D9D9D9',
        100: '#F2F2F2'
      },
      danger: '#E25858'
    }
  },
  fonts: {
    12: {
      regular: {
        fontFamily: "Inter_400Regular",
        fontStyle: "normal",
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 15,
      },

      bold: {
        fontFamily: "Inter_700Bold",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 12,
        lineHeight: 15,
      }
    },
    14: {
      regular: {
        fontFamily: "Inter_400Regular",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19.6,
      },

      bold: {
        fontFamily: "Inter_700Bold",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 19.6,
      }
    },
    16: {
      regular: {
        fontFamily: "Inter_400Regular",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19.6,
      },

      bold: {
        fontFamily: "Inter_700Bold",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 19.6,

      }
    }
  }
}