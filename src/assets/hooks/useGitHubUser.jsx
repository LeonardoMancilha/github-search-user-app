import { useState, useEffect, useRef } from "react";

export function useGitHubUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
    const handleKeyDown = (event) => {
      // Verifica se o foco não está no campo de input
      if (event.target.tagName === "INPUT") {
        return; // Se o foco está no campo de input, não faz nada
      }

      // Verifica se a tecla pressionada é "P" e há um termo de pesquisa válido
      if (event.key.toLowerCase() === "p" && searchTerm.trim()) {
        event.preventDefault(); // Impede o comportamento padrão da tecla
        handleSearch(searchTerm); // Chama a busca
      }
    };

    // Adiciona o evento de keydown
    window.addEventListener("keydown", handleKeyDown);

    // Limpeza do evento
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchTerm]); // A dependência é apenas o searchTerm

  return { user, loading, handleSearch, searchTerm, setSearchTerm, inputRef };
}
