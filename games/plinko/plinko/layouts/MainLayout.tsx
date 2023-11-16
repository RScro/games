import ReactHelmet from "react-helmet";
import Header from "./Header/Header";

type Props = {
  title: string;
  className?: string;
  children?: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const { title, className, children } = props;
  return (
    <>
      <ReactHelmet>
        <title>{title}</title>
      </ReactHelmet>
      <Header />
      <main className={className}>{children}</main>
    </>
  );
};

export default MainLayout;
