import useModalStore from "../../stores/modalStore";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ConfigTrigger,
  ModalContainer,
  OptionRow,
  Separator,
  ReportSection,
  Textarea,
  ReportButton,
  LogoutButton,
  UserInfo,
  ArrowIcon,
  VerticalSeparator,
  ClickableRow,
  ConfirmModalOverlay,
  ConfirmModalContent,
  ConfirmModalTitle,
  ConfirmModalButtons,
  ConfirmButton,
  CancelButton,
  ReportsModalOverlay,
  ReportsModalContent,
  ReportsModalHeader,
  ReportsModalTitle,
  ReportsModalCloseButton,
  ReportsList,
  ReportItem,
  ReportText,
  ReportDate,
  ReportActions,
  EditButton,
  DeleteButton,
  EmptyReports,
  EditReportSection,
  EditTextarea,
  SaveButton,
  CancelEditButton,
} from "./styles";
import SwitchButton from "../SwitchButton";
import { LogOut, Moon, ChevronDown, X, Bug, Edit2, Trash2, Save } from "lucide-react";
import Avatar from "../Avatar";
import useThemeStore from "../../stores/themeStore";
import { getCurrentUser } from "../../services/userService";
import { createReport, getReports, updateReport, deleteReport, Report } from "../../services/reportService";
import { getUserIdFromToken } from "../../utils/auth";

const Configurations: React.FC = () => {
  const { isModalOpen, toggleModal } = useModalStore();
  const navigate = useNavigate();
  const [reportText, setReportText] = useState("");
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);
  const [currentUserName, setCurrentUserName] = useState<string>("Usuário");
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const [showReportsModal, setShowReportsModal] = useState(false);
  const [reports, setReports] = useState<Report[]>([]);
  const [isLoadingReports, setIsLoadingReports] = useState(false);
  const [editingReportId, setEditingReportId] = useState<string | null>(null);
  const [editReportText, setEditReportText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const isNight = useThemeStore((state) => state.isNight);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    const loadCurrentUser = async () => {
      try {
        const userIdFromToken = getUserIdFromToken();
        if (userIdFromToken) {
          setCurrentUserId(userIdFromToken);
        }
        const user = await getCurrentUser();
        if (user) {
          setCurrentUserName(user.name);
          if (user.id) {
            setCurrentUserId(user.id);
          }
        }
      } catch (error) {
        const userIdFromToken = getUserIdFromToken();
        if (userIdFromToken) {
          setCurrentUserId(userIdFromToken);
        }
      }
    };
    loadCurrentUser();
  }, []);

  const loadReports = useCallback(async () => {
    const userIdToUse = currentUserId || getUserIdFromToken();
    if (!userIdToUse) return;
    
    setIsLoadingReports(true);
    try {
      const userReports = await getReports(userIdToUse);
      const filteredReports = Array.isArray(userReports) 
        ? userReports.filter((report: Report) => report.userId === userIdToUse)
        : [];
      setReports(filteredReports);
    } catch (error) {
      console.error("Erro ao carregar reportes:", error);
      alert("Erro ao carregar reportes. Tente novamente.");
    } finally {
      setIsLoadingReports(false);
    }
  }, [currentUserId]);

  useEffect(() => {
    if (showReportsModal) {
      const userIdToUse = currentUserId || getUserIdFromToken();
      if (userIdToUse) {
        loadReports();
      }
    }
  }, [showReportsModal, currentUserId, loadReports]);

  const handleReportChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReportText(event.target.value);
  };

  const handleSubmitReport = async () => {
    if (!reportText.trim()) {
      alert("Por favor, descreva o problema encontrado.");
      return;
    }

    const userIdToUse = currentUserId || getUserIdFromToken();
    if (!userIdToUse) {
      alert("Erro: usuário não identificado. Por favor, faça login novamente.");
      return;
    }

    setIsSubmitting(true);
    try {
      await createReport({ text: reportText.trim() });
      setReportText("");
      alert("Reporte enviado com sucesso!");
      if (showReportsModal) {
        setTimeout(() => {
          loadReports();
        }, 300);
      }
    } catch (error) {
      console.error("Erro ao enviar reporte:", error);
      alert("Erro ao enviar reporte. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShowReports = () => {
    setShowReportsModal(true);
  };

  const handleCloseReports = () => {
    setShowReportsModal(false);
    setEditingReportId(null);
    setEditReportText("");
  };

  const handleEditReport = (report: Report) => {
    setEditingReportId(report.id);
    setEditReportText(report.text);
  };

  const handleCancelEdit = () => {
    setEditingReportId(null);
    setEditReportText("");
  };

  const handleSaveEdit = async (reportId: string) => {
    if (!editReportText.trim()) {
      alert("O reporte não pode estar vazio.");
      return;
    }

    try {
      await updateReport(reportId, { text: editReportText.trim() });
      setEditingReportId(null);
      setEditReportText("");
      await loadReports();
      alert("Reporte atualizado com sucesso!");
    } catch (error) {
      alert("Erro ao atualizar reporte. Tente novamente.");
    }
  };

  const handleDeleteReport = async (reportId: string) => {
    if (!window.confirm("Tem certeza que deseja excluir este reporte?")) {
      return;
    }

    setIsDeleting(reportId);
    try {
      await deleteReport(reportId);
      await loadReports();
      alert("Reporte excluído com sucesso!");
    } catch (error) {
      alert("Erro ao excluir reporte. Tente novamente.");
    } finally {
      setIsDeleting(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const goToProfile = () => {
    toggleModal();
    navigate("/profile");
  };

  const handleLogoutClick = () => {
    setShowConfirmLogout(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("authToken");
    toggleModal();
    setShowConfirmLogout(false);
    navigate("/");
  };

  const handleCancelLogout = () => {
    setShowConfirmLogout(false);
  };

  return (
    <>
      <ConfigTrigger onClick={toggleModal}>
        <UserInfo>
          <Avatar isNavigation={false} name={currentUserName} size={25} />
        </UserInfo>
        <VerticalSeparator />
        <ArrowIcon isOpen={isModalOpen}>
          <ChevronDown size={16} />
        </ArrowIcon>
      </ConfigTrigger>

      {isModalOpen && (
        <ModalContainer>
          <ClickableRow onClick={goToProfile}>
            <Avatar name={currentUserName} size={30} />
            <span>Perfil</span>
          </ClickableRow>

          <Separator />

          <OptionRow>
            <Moon size={25} />
            <SwitchButton isChecked={isNight} onToggle={toggleTheme} />
          </OptionRow>

          <Separator />

          <ReportSection>
            <h4>
              <Bug size={18} />
              Reportar Bug
            </h4>
            <Textarea
              value={reportText}
              onChange={handleReportChange}
              placeholder="Descreva o problema que encontrou..."
            />
            <ReportButton onClick={handleSubmitReport} disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Reporte"}
            </ReportButton>
          </ReportSection>

          <Separator />

          <ClickableRow onClick={handleShowReports}>
            <Bug size={20} />
            <span>Meus Reportes</span>
          </ClickableRow>

          <Separator />

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ width: "100%" }}
          >
            <LogoutButton onClick={handleLogoutClick}>
              <LogOut size={20} />
              <span>Sair</span>
            </LogoutButton>
          </motion.div>
        </ModalContainer>
      )}

      {showConfirmLogout && (
        <ConfirmModalOverlay onClick={handleCancelLogout}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ConfirmModalContent>
              <ConfirmModalTitle>Deseja realmente sair?</ConfirmModalTitle>
              <ConfirmModalButtons>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CancelButton onClick={handleCancelLogout}>
                    Cancelar
                  </CancelButton>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ConfirmButton onClick={handleConfirmLogout}>
                    Sair
                  </ConfirmButton>
                </motion.div>
              </ConfirmModalButtons>
            </ConfirmModalContent>
          </motion.div>
        </ConfirmModalOverlay>
      )}

      {showReportsModal && (
        <ReportsModalOverlay onClick={handleCloseReports}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ReportsModalContent>
              <ReportsModalHeader>
                <ReportsModalTitle>
                  <Bug size={24} />
                  Meus Reportes
                </ReportsModalTitle>
                <ReportsModalCloseButton onClick={handleCloseReports}>
                  <X size={20} />
                </ReportsModalCloseButton>
              </ReportsModalHeader>

              <ReportsList>
                {isLoadingReports ? (
                  <EmptyReports>Carregando...</EmptyReports>
                ) : reports.length === 0 ? (
                  <EmptyReports>Você ainda não enviou nenhum reporte.</EmptyReports>
                ) : (
                  reports.map((report) => (
                    <ReportItem key={report.id}>
                      {editingReportId === report.id ? (
                        <EditReportSection>
                          <EditTextarea
                            value={editReportText}
                            onChange={(e) => setEditReportText(e.target.value)}
                            placeholder="Descreva o problema..."
                          />
                          <ReportActions>
                            <SaveButton onClick={() => handleSaveEdit(report.id)}>
                              <Save size={16} />
                              Salvar
                            </SaveButton>
                            <CancelEditButton onClick={handleCancelEdit}>
                              Cancelar
                            </CancelEditButton>
                          </ReportActions>
                        </EditReportSection>
                      ) : (
                        <>
                          <ReportText>{report.text}</ReportText>
                          <ReportDate>{formatDate(report.createdAt)}</ReportDate>
                          <ReportActions>
                            <EditButton onClick={() => handleEditReport(report)}>
                              <Edit2 size={16} />
                              Editar
                            </EditButton>
                            <DeleteButton
                              onClick={() => handleDeleteReport(report.id)}
                              disabled={isDeleting === report.id}
                            >
                              <Trash2 size={16} />
                              {isDeleting === report.id ? "Excluindo..." : "Excluir"}
                            </DeleteButton>
                          </ReportActions>
                        </>
                      )}
                    </ReportItem>
                  ))
                )}
              </ReportsList>
            </ReportsModalContent>
          </motion.div>
        </ReportsModalOverlay>
      )}
    </>
  );
};

export default Configurations;