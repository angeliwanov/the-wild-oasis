import { styled } from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { is } from "date-fns/locale";

const FUllPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <FUllPage>
        <Spinner />
      </FUllPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
