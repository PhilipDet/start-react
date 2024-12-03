import "./app.scss";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Main } from "./components/main/main";

export const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};
