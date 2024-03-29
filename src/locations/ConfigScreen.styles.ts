import tokens from "@contentful/forma-36-tokens";
import { css } from "@emotion/css";

export const styles = {
  body: css({
    height: "auto",
    minHeight: "65vh",
    margin: "0 auto",
    marginTop: tokens.spacingXl,
    maxWidth: tokens.contentWidthText,
    backgroundColor: tokens.colorWhite,
    zIndex: 2,
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "2px",
  }),
  content: css({
    padding: `${tokens.spacingXl} ${tokens.spacing2Xl}`,
  }),
  background: css({
    display: "block",
    position: "absolute",
    left: 0,
    zIndex: -1,
    top: 0,
    width: "100%",
    height: "300px",
    backgroundColor: "#666eff",
    // backgroundColor: "#212f3f",
  }),
  section: css({
    margin: `${tokens.spacingXl} 0`,
  }),
  splitter: css({
    marginTop: tokens.spacingL,
    marginBottom: tokens.spacingL,
    border: 0,
    height: "1px",
    backgroundColor: tokens.gray300,
  }),
  icon: css({
    display: "flex",
    justifyContent: "center",
    "> img": {
      display: "block",
      width: "70px",
      margin: `${tokens.spacingXl} 0`,
    },
  }),
};
