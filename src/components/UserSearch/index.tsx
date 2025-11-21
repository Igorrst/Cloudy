import { useState, useEffect, useRef } from "react";
import { SearchContainer, SearchInput, SearchResults, UserResult, UserInfo, UserName, UserBio, EmptyResults } from "./styles";
import { Search } from "lucide-react";
import Avatar from "../Avatar";
import { searchUsers } from "../../services/userService";
import { useNavigate } from "react-router-dom";

interface SearchUser {
  id: string;
  name: string;
  email: string;
  bio?: string;
  profilePhoto?: string;
}

const UserSearch = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState<SearchUser[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const search = async () => {
      if (searchTerm.trim().length === 0) {
        setUsers([]);
        setIsSearching(false);
        setShowResults(false);
        return;
      }

      setIsSearching(true);
      try {
        const response = await searchUsers(searchTerm.trim(), 1);
        setUsers(response.users);
        setShowResults(true);
      } catch (error) {
        setUsers([]);
      } finally {
        setIsSearching(false);
      }
    };

    const timeoutId = setTimeout(search, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleUserClick = (userId: string) => {
    navigate(`/profile/${userId}`);
    setSearchTerm("");
    setShowResults(false);
  };

  return (
    <SearchContainer ref={searchRef}>
      <SearchInput
        type="text"
        placeholder="Buscar usuários..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => {
          if (users.length > 0) {
            setShowResults(true);
          }
        }}
      />
      <Search size={20} />
      {showResults && (
        <SearchResults>
          {isSearching ? (
            <EmptyResults>Buscando...</EmptyResults>
          ) : users.length > 0 ? (
            users.map((user) => (
              <UserResult key={user.id} onClick={() => handleUserClick(user.id)}>
                <Avatar
                  name={user.name}
                  size={40}
                  isNavigation={false}
                  profilePhoto={user.profilePhoto}
                />
                <UserInfo>
                  <UserName>{user.name}</UserName>
                  {user.bio && <UserBio>{user.bio}</UserBio>}
                </UserInfo>
              </UserResult>
            ))
          ) : (
            <EmptyResults>Nenhum usuário encontrado</EmptyResults>
          )}
        </SearchResults>
      )}
    </SearchContainer>
  );
};

export default UserSearch;

