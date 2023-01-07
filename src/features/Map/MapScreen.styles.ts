import { makeStyles } from "~/infrastructure/theme/styles";

export const useMapScreenStyles = makeStyles(({ palette, spacing }) => ({
  container: {
    height: 180,
    flex: 1,
    backgroundColor: palette.primary.contrastText.main,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: palette.common?.black,
    fontSize: spacing(2),
    textAlign: "left",
    backgroundColor: palette.primary.contrastText.dark,
  },
  input: {
    height: spacing(5),
    width: spacing(40),
    borderWidth: spacing(0.2),
    paddingHorizontal: spacing(),
  },
}));
