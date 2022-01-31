import React from "react";

// Custom Components
import Layout from "@/components/layout/layout";

type Props = {

}
type PropsLeft = {


}
const LeftSideComponent = ({ }: PropsLeft) => {
  return (
    <div>
      This shouldbe on the left side
    </div>
  );
}

const ContatoPage = ({ }: Props) => {

  return (
    <Layout contextLeft={<LeftSideComponent />}>
      página de contato
    </Layout>
  );
}
export default ContatoPage;