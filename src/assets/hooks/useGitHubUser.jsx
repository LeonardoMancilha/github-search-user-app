import { useState, useEffect, useRef } from "react";

export function useGitHubUser() {
  const [user, setUser] = useState(null);
  const [totalRepos] = useState(0);
  const [events] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const inputRef = useRef(null); // Referência para o campo de input

  const handleSearch = async (username) => {
    setUser(null); // Limpa os dados do usuário anterior antes de buscar
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Usuário não encontrado");

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
      setUser(null); // Se der erro, mantém os dados limpos
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Verifica se o campo de pesquisa está em foco
      if (isInputFocused) {
        return; 
      }

      if (event.key === "p" && searchTerm.trim()) {
        event.preventDefault();
        handleSearch(searchTerm);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [searchTerm, user, isInputFocused]); // Inclui isInputFocused no array de dependências

  const handleFocus = () => {
    setIsInputFocused(true); // Define o foco como verdadeiro quando o campo está em foco
  };

  const handleBlur = () => {
    setIsInputFocused(false); // Define o foco como falso quando o campo perde o foco
  };

  return { user, totalRepos, events, loading, error, handleSearch, searchTerm, setSearchTerm, inputRef, handleFocus, handleBlur };
}
