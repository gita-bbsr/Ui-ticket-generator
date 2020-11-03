import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Rotate90DegreesCcw } from "@material-ui/icons";
import { start } from "repl";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
        marginBottom: 8,
        lineHeight: 1
    },
    subTitle: {
        marginBottom: 50,
        lineHeight: 1.2
    },
    logo: {
      transform: "rotate(-45deg)",
      marginBottom: 100,
      marginLeft: -10,
      marginTop: -30,
    },
    wrapper: {
      overflow: "hidden",
      margin: 0,
      padding: 0,
    },
    box: {
      height: "100vh",
      padding: theme.spacing(2),
      display: "grid",
    },
    innerBox: {
        placeSelf: "center",
        maxWidth: 550
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  })
);

export default useStyles;