import Head from "next/head";

const CustomHead = ({ data }) => {
  // destructure data
  const { title, metas } = data;

  return (
    <Head>
      <title>{title}</title>
      {metas.map(({ id, ...rest }) => (
        <meta key={id} {...rest} />
      ))}
    </Head>
  );
};

export default CustomHead;
