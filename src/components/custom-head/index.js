import Head from "next/head";

const CustomHead = (props) => {
  // destructure props
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta />
    </Head>
  );
};

export default CustomHeader;
