import React, { Children } from "react";
import { ContainerItens  as Container} from "./style";

function ContainerItens({children,isBlur}){


    return <Container isBlu={isBlur}>{children}</Container>

}

export default ContainerItens