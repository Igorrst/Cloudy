import { useState, useEffect, useRef, useCallback } from "react";
import { Container, TopBar, BackButton, ProfileHeader, ProfileInfo, BioSection, BioContent, BioText, BioTextarea, BioActions, EditButton, SaveButton, CancelButton, PostsScrollContainer, PostsGrid, PostItem, EmptyState, StatsSection, StatItem, EmojiButton, EmojiPickerContainer, SearchWrapper, FollowButton, UnfollowButton, ModalOverlay, ModalContent, ModalHeader, ModalTitle, ModalCloseButton, ModalList, ModalUserItem, ModalEmptyState } from "./styles";
import Configurations from "../../components/Configurations";
import Avatar from "../../components/Avatar";
import PostCard from "../../components/PostCard";
import UserSearch from "../../components/UserSearch";
import { ArrowLeft, UserPlus, UserMinus, X, Smile, Edit2, Check } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrentUser, getUserById, updateUser, followUser, unfollowUser } from "../../services/userService";
import { getPosts, likePost, unlikePost, updatePost, deletePost } from "../../services/postService";
import { createComment, updateComment, deleteComment, likeComment, unlikeComment } from "../../services/commentService";
import EmojiPicker, { EmojiClickData, Theme, Categories } from "emoji-picker-react";
import useThemeStore from "../../stores/themeStore";
import { Post, PostComment, UserProfile, ApiPostsResponse, ApiPostResponse, ApiCommentResponse, isApiError } from "../../types";
import { getUserIdFromToken } from "../../utils/auth";
import { validateContent } from "../../utils/contentFilter";

const Profile = () => {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId?: string }>();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bioText, setBioText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isFollowingLoading, setIsFollowingLoading] = useState(false);
  const [currentUserName, setCurrentUserName] = useState<string>("");
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);
  const bioTextareaRef = useRef<HTMLTextAreaElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isNight = useThemeStore((state) => state.isNight);
  const currentUserId = getUserIdFromToken();
  const isOwnProfile = !userId || userId === currentUserId;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const loadCurrentUser = async () => {
      if (currentUserId) {
        try {
          const currentUser = await getCurrentUser();
          if (currentUser) {
            setCurrentUserName(currentUser.name);
          }
        } catch (error) {
        }
      }
    };
    loadCurrentUser();
  }, [currentUserId]);

  useEffect(() => {
    loadProfile();
  }, [userId, currentUserId]);

  useEffect(() => {
    if (showEmojiPicker && emojiPickerRef.current) {
      const translateEmojiPicker = () => {
        const container = emojiPickerRef.current;
        if (!container) return;

        const inputs = container.querySelectorAll('input[placeholder="Search"], input[placeholder*="Search"]');
        inputs.forEach((input) => {
          if (input instanceof HTMLInputElement && input.placeholder === "Search") {
            input.placeholder = "Buscar";
          }
        });
      };

      const timeoutId = setTimeout(translateEmojiPicker, 300);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showEmojiPicker]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node) &&
        bioTextareaRef.current &&
        !bioTextareaRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('button[aria-label="emoji"]')
      ) {
        setShowEmojiPicker(false);
      }
    };

    if (showEmojiPicker) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showEmojiPicker]);

  useEffect(() => {
    const handleScroll = () => {
      if (isLoadingMore || !hasMorePosts || !user || !scrollContainerRef.current) return;

      const scrollContainer = scrollContainerRef.current;
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight;
      const clientHeight = scrollContainer.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 200) {
        loadMorePosts();
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [isLoadingMore, hasMorePosts, user, loadMorePosts]);

  const loadUserPosts = async (ownerId: string, page: number = 1, append: boolean = false) => {
    try {
      if (append) {
        setIsLoadingMore(true);
      } else {
        setIsLoading(true);
      }
      
      const response = await getPosts(undefined, page) as ApiPostsResponse;
      const userPosts = response.posts
        .filter((post: ApiPostResponse) => post.ownerId === ownerId)
        .map((post: ApiPostResponse): Post => ({
          id: post.id,
          content: post.content,
          owner: {
            name: post.owner?.name || user?.name || "Usuário",
            id: ownerId
          },
          ownerId: post.ownerId,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
          likes: post.likes || [],
          comments: (post.comments || []).map((comment: ApiCommentResponse): PostComment => ({
            id: comment.id,
            content: comment.content,
            owner: {
              name: comment.owner?.name || "Usuário",
              id: comment.ownerId
            },
            createdAt: comment.createdAt,
            updatedAt: comment.updatedAt,
            likes: comment.likes || [],
          })),
        }));
      
      if (append) {
        setPosts(prevPosts => [...prevPosts, ...userPosts]);
      } else {
        setPosts(userPosts);
      }
      
      setHasMorePosts(userPosts.length === 20);
      
      setCurrentPage(page);
    } catch (error) {
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  };

  const loadMorePosts = useCallback(async () => {
    if (!user || isLoadingMore || !hasMorePosts) return;
    
    try {
      setIsLoadingMore(true);
      const response = await getPosts(undefined, currentPage + 1) as ApiPostsResponse;
      const userPosts = response.posts
        .filter((post: ApiPostResponse) => post.ownerId === user.id)
        .map((post: ApiPostResponse): Post => ({
          id: post.id,
          content: post.content,
          owner: {
            name: post.owner?.name || user.name,
            id: user.id
          },
          ownerId: post.ownerId,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
          likes: post.likes || [],
          comments: (post.comments || []).map((comment: ApiCommentResponse): PostComment => ({
            id: comment.id,
            content: comment.content,
            owner: {
              name: comment.owner?.name || "Usuário",
              id: comment.ownerId
            },
            createdAt: comment.createdAt,
            updatedAt: comment.updatedAt,
            likes: comment.likes || [],
          })),
        }));
      
      setPosts(prevPosts => [...prevPosts, ...userPosts]);
      setHasMorePosts(userPosts.length === 20);
      setCurrentPage(prev => prev + 1);
    } catch (error) {
    } finally {
      setIsLoadingMore(false);
    }
  }, [user, isLoadingMore, hasMorePosts, currentPage]);

  const loadProfile = async () => {
    try {
      setIsLoading(true);
      let userData: UserProfile | null = null;
      
      if (userId && userId !== currentUserId) {
        userData = await getUserById(userId);
      } else {
        userData = await getCurrentUser();
      }
      
      if (userData) {
        setUser(userData);
        setBioText(userData.bio || "");
        
        if (userData.followers && currentUserId) {
          const isUserFollowing = userData.followers.some(
            (follower) => follower.follower.id === currentUserId
          );
          setIsFollowing(isUserFollowing);
        }
        
        await loadUserPosts(userData.id, 1, false);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveBio = async () => {
    if (!user || !currentUserId) return;

    try {
      await updateUser(currentUserId, { bio: bioText.trim() });
      setUser({ ...user, bio: bioText.trim() });
      setIsEditingBio(false);
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao salvar bio"
        : "Erro ao salvar bio";
      alert(errorMessage);
    }
  };

  const handleCancelEdit = () => {
    setBioText(user?.bio || "");
    setIsEditingBio(false);
    setShowEmojiPicker(false);
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    const textarea = bioTextareaRef.current;
    if (!textarea) return;

    const cursorPosition = textarea.selectionStart;
    const textBefore = bioText.substring(0, cursorPosition);
    const textAfter = bioText.substring(cursorPosition);
    const newText = textBefore + emojiData.emoji + textAfter;

    setBioText(newText);
    setShowEmojiPicker(false);

    setTimeout(() => {
      textarea.focus();
      const newCursorPosition = cursorPosition + emojiData.emoji.length;
      textarea.setSelectionRange(newCursorPosition, newCursorPosition);
    }, 0);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  const isPostLiked = (post: Post): boolean => {
    if (!currentUserId) return false;
    return post.likes.some((like) => like.id === currentUserId);
  };

  const handleLike = async (postId: string, isLiked: boolean) => {
    if (!currentUserId) return;
    
    try {
      if (isLiked) {
        await unlikePost(postId);
      } else {
        await likePost(postId);
      }
      
      setPosts(posts.map(post => {
        if (post.id === postId) {
          if (isLiked) {
            return {
              ...post,
              likes: post.likes.filter(like => like.id !== currentUserId)
            };
          } else {
            const user = posts.find(p => p.id === postId)?.owner;
            return {
              ...post,
              likes: [...post.likes, { id: currentUserId, name: user?.name || "Usuário" }]
            };
          }
        }
        return post;
      }));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao curtir post"
        : "Erro ao curtir post";
      alert(errorMessage);
    }
  };

  const handleEditPost = async (postId: string, newContent: string) => {
    const validation = await validateContent(newContent.trim());
    if (!validation.isValid) {
      alert(validation.message);
      return;
    }

    try {
      const response = await updatePost(postId, { content: newContent.trim() });
      
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            content: response.content,
            updatedAt: response.updatedAt
          };
        }
        return post;
      }));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao editar post"
        : "Erro ao editar post";
      alert(errorMessage);
    }
  };

  const handleDeletePost = async (postId: string) => {
    try {
      await deletePost(postId);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao excluir post"
        : "Erro ao excluir post";
      alert(errorMessage);
    }
  };

  const handleCommentCreate = async (postId: string, content: string) => {
    if (!currentUserId || !currentUserName) return;
    
    const validation = await validateContent(content.trim());
    if (!validation.isValid) {
      alert(validation.message);
      return;
    }
    
    try {
      const response = await createComment(postId, { content: content.trim() });
      
      const newComment: PostComment = {
        id: response.id,
        content: response.content,
        owner: {
          name: currentUserName,
          id: currentUserId
        },
        createdAt: response.createdAt,
        likes: []
      };
      
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment]
          };
        }
        return post;
      }));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao criar comentário"
        : "Erro ao criar comentário";
      alert(errorMessage);
    }
  };

  const handleCommentEdit = async (postId: string, commentId: string, content: string) => {
    const validation = await validateContent(content.trim());
    if (!validation.isValid) {
      alert(validation.message);
      return;
    }

    try {
      const response = await updateComment(postId, commentId, { content: content.trim() });
      
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.map(comment => {
              if (comment.id === commentId) {
                return {
                  ...comment,
                  content: response.content,
                  updatedAt: response.updatedAt
                };
              }
              return comment;
            })
          };
        }
        return post;
      }));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao editar comentário"
        : "Erro ao editar comentário";
      alert(errorMessage);
    }
  };

  const handleCommentDelete = async (postId: string, commentId: string) => {
    try {
      await deleteComment(postId, commentId);
      
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.filter(comment => comment.id !== commentId)
          };
        }
        return post;
      }));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao excluir comentário"
        : "Erro ao excluir comentário";
      alert(errorMessage);
    }
  };

  const handleCommentLike = async (postId: string, commentId: string, isLiked: boolean) => {
    if (!currentUserId || !currentUserName) return;
    
    try {
      if (isLiked) {
        await unlikeComment(postId, commentId);
      } else {
        await likeComment(postId, commentId);
      }
      
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.map(comment => {
              if (comment.id === commentId) {
                if (isLiked) {
                  return {
                    ...comment,
                    likes: (comment.likes || []).filter(like => like.id === currentUserId)
                  };
                } else {
                  return {
                    ...comment,
                    likes: [...(comment.likes || []), { id: currentUserId, name: currentUserName }]
                  };
                }
              }
              return comment;
            })
          };
        }
        return post;
      }));
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao curtir comentário"
        : "Erro ao curtir comentário";
      alert(errorMessage);
    }
  };

  const handleFollow = async () => {
    if (!user || !currentUserId || isFollowingLoading) return;
    
    try {
      setIsFollowingLoading(true);
      if (isFollowing) {
        await unfollowUser(user.id);
        setIsFollowing(false);
        if (user.followers) {
          setUser({
            ...user,
            followers: user.followers.filter(
              (follower) => follower.follower.id !== currentUserId
            ),
          });
        }
      } else {
        await followUser(user.id);
        setIsFollowing(true);
        if (currentUserId && currentUserName) {
          setUser({
            ...user,
            followers: [
              ...(user.followers || []),
              {
                follower: {
                  id: currentUserId,
                  name: currentUserName,
                },
              },
            ],
          });
        }
      }
    } catch (error: unknown) {
      const errorMessage = isApiError(error)
        ? error.response?.data?.message || "Erro ao seguir/deixar de seguir"
        : "Erro ao seguir/deixar de seguir";
      alert(errorMessage);
    } finally {
      setIsFollowingLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Container>
        <p>Carregando perfil...</p>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container>
        <p>Erro ao carregar perfil</p>
      </Container>
    );
  }

  const followersCount = user.followers?.length || 0;
  const followingCount = user.following?.length || 0;
  const postsCount = posts.length;

  return (
    <Container>
      <TopBar>
        <Configurations />
        <BackButton onClick={() => navigate("/home")}>
          <ArrowLeft size={24} />
        </BackButton>
      </TopBar>

      <ProfileHeader>
        <Avatar name={user.name} size={90} isNavigation={false} />
        <ProfileInfo>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <h1>{user.name}</h1>
            {!isOwnProfile && currentUserId && (
              <>
                {isFollowing ? (
                  <UnfollowButton onClick={handleFollow} disabled={isFollowingLoading}>
                    <UserMinus size={18} />
                    Deixar de seguir
                  </UnfollowButton>
                ) : (
                  <FollowButton onClick={handleFollow} disabled={isFollowingLoading}>
                    <UserPlus size={18} />
                    Seguir
                  </FollowButton>
                )}
              </>
            )}
          </div>
          <StatsSection>
            <StatItem>
              <strong>{postsCount}</strong>
              <span>posts</span>
            </StatItem>
            <StatItem onClick={() => setShowFollowersModal(true)} style={{ cursor: "pointer" }}>
              <strong>{followersCount}</strong>
              <span>seguidores</span>
            </StatItem>
            <StatItem onClick={() => setShowFollowingModal(true)} style={{ cursor: "pointer" }}>
              <strong>{followingCount}</strong>
              <span>seguindo</span>
            </StatItem>
          </StatsSection>
        </ProfileInfo>
      </ProfileHeader>

      <BioSection>
        <BioContent>
          {isEditingBio ? (
            <div style={{ position: "relative", width: "100%" }}>
              <BioTextarea
                ref={bioTextareaRef}
                value={bioText}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBioText(e.target.value)}
                placeholder="Escreva sua bio..."
                maxLength={150}
                onClick={() => setShowEmojiPicker(false)}
              />
              <EmojiButton
                type="button"
                onClick={toggleEmojiPicker}
                aria-label="emoji"
              >
                <Smile size={18} />
              </EmojiButton>
              {showEmojiPicker && (
                <EmojiPickerContainer ref={emojiPickerRef}>
                  <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    theme={isNight ? Theme.DARK : Theme.LIGHT}
                    width={windowWidth <= 480 ? windowWidth - 20 : 350}
                    height={windowWidth <= 480 ? 350 : 400}
                    searchDisabled={false}
                    skinTonesDisabled={false}
                    previewConfig={{ showPreview: false }}
                    categories={[
                      { category: Categories.SUGGESTED, name: "Mais Usados" },
                      { category: Categories.SMILEYS_PEOPLE, name: "Carinhas e Pessoas" },
                      { category: Categories.ANIMALS_NATURE, name: "Animais e Natureza" },
                      { category: Categories.FOOD_DRINK, name: "Comida e Bebida" },
                      { category: Categories.TRAVEL_PLACES, name: "Viagem e Lugares" },
                      { category: Categories.ACTIVITIES, name: "Atividades" },
                      { category: Categories.OBJECTS, name: "Objetos" },
                      { category: Categories.SYMBOLS, name: "Símbolos" },
                      { category: Categories.FLAGS, name: "Bandeiras" }
                    ]}
                  />
                </EmojiPickerContainer>
              )}
              <BioActions>
                <SaveButton onClick={handleSaveBio}>
                  <Check size={16} />
                  Salvar
                </SaveButton>
                <CancelButton onClick={handleCancelEdit}>
                  <X size={16} />
                  Cancelar
                </CancelButton>
              </BioActions>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%" }}>
              <BioText>{user.bio || "Nenhuma bio ainda."}</BioText>
              {currentUserId === user.id && (
                <EditButton onClick={() => setIsEditingBio(true)}>
                  <Edit2 size={16} />
                </EditButton>
              )}
            </div>
          )}
        </BioContent>
        <SearchWrapper>
          <UserSearch />
        </SearchWrapper>
      </BioSection>

      <PostsScrollContainer ref={scrollContainerRef}>
        <PostsGrid>
          {posts.length > 0 ? (
            <>
              {posts.map((post) => (
                <PostItem key={post.id}>
                  <PostCard
                    id={post.id}
                    content={post.content}
                    owner={post.owner}
                    ownerId={post.ownerId}
                    liked={isPostLiked(post)}
                    likesCount={post.likes.length}
                    comments={post.comments}
                    onLike={() => handleLike(post.id, isPostLiked(post))}
                    onEdit={handleEditPost}
                    onDelete={handleDeletePost}
                    onCommentCreate={handleCommentCreate}
                    onCommentEdit={handleCommentEdit}
                    onCommentDelete={handleCommentDelete}
                    onCommentLike={handleCommentLike}
                  />
                </PostItem>
              ))}
              {isLoadingMore && (
                <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "20px" }}>
                  <p>Carregando mais posts...</p>
                </div>
              )}
              {!hasMorePosts && posts.length > 0 && (
                <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "20px", color: "#666" }}>
                  <p>Não há mais posts para carregar</p>
                </div>
              )}
            </>
          ) : (
            <EmptyState>
              <p>Nenhum post ainda</p>
            </EmptyState>
          )}
        </PostsGrid>
      </PostsScrollContainer>

      {showFollowersModal && (
        <ModalOverlay onClick={() => setShowFollowersModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Seguidores</ModalTitle>
              <ModalCloseButton onClick={() => setShowFollowersModal(false)}>
                <X size={20} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalList>
              {user.followers && user.followers.length > 0 ? (
                user.followers.map((follower) => (
                  <ModalUserItem
                    key={follower.follower.id}
                    onClick={() => {
                      navigate(`/profile/${follower.follower.id}`);
                      setShowFollowersModal(false);
                    }}
                  >
                    <Avatar name={follower.follower.name} size={40} isNavigation={false} />
                    <span>{follower.follower.name}</span>
                  </ModalUserItem>
                ))
              ) : (
                <ModalEmptyState>Nenhum seguidor ainda</ModalEmptyState>
              )}
            </ModalList>
          </ModalContent>
        </ModalOverlay>
      )}

      {showFollowingModal && (
        <ModalOverlay onClick={() => setShowFollowingModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Seguindo</ModalTitle>
              <ModalCloseButton onClick={() => setShowFollowingModal(false)}>
                <X size={20} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalList>
              {user.following && user.following.length > 0 ? (
                user.following.map((following) => (
                  <ModalUserItem
                    key={following.following.id}
                    onClick={() => {
                      navigate(`/profile/${following.following.id}`);
                      setShowFollowingModal(false);
                    }}
                  >
                    <Avatar name={following.following.name} size={40} isNavigation={false} />
                    <span>{following.following.name}</span>
                  </ModalUserItem>
                ))
              ) : (
                <ModalEmptyState>Não está seguindo ninguém ainda</ModalEmptyState>
              )}
            </ModalList>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Profile;
