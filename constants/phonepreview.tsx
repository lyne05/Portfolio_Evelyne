import { useEffect, useRef } from "react";
import { useWindowDimensions } from "react-native";
import { colors } from "../constants/colors";
import { projectDetails } from "../constants/data";

type PhonePreviewProps = {
  projectId: number;
  onClose: () => void;
};

export default function PhonePreview({
  projectId,
  onClose,
}: PhonePreviewProps) {
  const { width, height } = useWindowDimensions();
  const project = projectDetails.find((p) => p.id === projectId);
  const url = project?.link || "https://google.com";
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const W = 400;
  const H = 800;
  const SCALE = Math.min(0.7, (width - 32) / W, (height - 32) / H);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleBack = () => {
    try {
      iframeRef.current?.contentWindow?.history.back();
    } catch {}
  };

  const handleHome = () => {
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }
  };

  const navBtnStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px 16px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.15s",
    color: "#9a9a9a",
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: colors.lightCream,
        background: "rgba(89,144,192,0.15)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        zIndex: 10000,
      }}
    >
      <div
        style={{
          width: `${W * SCALE}px`,
          height: `${H * SCALE}px`,
          position: "relative",
          flexShrink: 0,
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: `${W}px`,
            height: `${H}px`,
            borderRadius: "40px",
            background: "#1c1c1e",
            boxShadow: `
              0 0 0 1px #3a3a3c,
              0 0 0 2px #2a2a2c,
              inset 0 1px 0 rgba(255,255,255,0.08),
              inset 0 -1px 0 rgba(0,0,0,0.5),
              0 40px 80px rgba(0,0,0,0.8),
              0 8px 24px rgba(0,0,0,0.4)
            `,
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            transformOrigin: "top left",
            transform: `scale(${SCALE})`,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "-4px",
              top: "130px",
              width: "4px",
              height: "34px",
              borderRadius: "2px 0 0 2px",
              background: "#2a2a2c",
              boxShadow: "inset -1px 0 0 rgba(255,255,255,0.05)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "-4px",
              top: "176px",
              width: "4px",
              height: "34px",
              borderRadius: "2px 0 0 2px",
              background: "#2a2a2c",
              boxShadow: "inset -1px 0 0 rgba(255,255,255,0.05)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "-4px",
              top: "158px",
              width: "4px",
              height: "58px",
              borderRadius: "0 2px 2px 0",
              background: "#2a2a2c",
              boxShadow: "inset 1px 0 0 rgba(255,255,255,0.05)",
            }}
          />

          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "36px",
              background: "#111113",
              padding: "6px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "999px",
                  background: "#2a2a2c",
                  border: "1px solid #3a3a3c",
                  boxShadow: "inset 0 0 2px rgba(0,0,0,0.8)",
                }}
              />
              <div
                style={{
                  width: "62px",
                  height: "6px",
                  borderRadius: "999px",
                  background: "#1e1e20",
                  border: "1px solid #2e2e30",
                }}
              />
            </div>

            <div
              style={{
                flex: 1,
                borderRadius: "20px",
                overflow: "hidden",
                background: colors.lightCream,
                marginTop: "16px",
                position: "relative",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.15)",
              }}
            >
              <iframe
                ref={iframeRef}
                src={url}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "white",
                }}
              />
            </div>

            <div
              style={{
                height: "52px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                paddingBottom: "4px",
                borderTop: "1px solid #2a2a2c",
              }}
            >
              <button
                onClick={handleBack}
                title="Back"
                style={navBtnStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.07)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "none")
                }
                onMouseDown={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
                }
                onMouseUp={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.07)")
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                onClick={handleHome}
                title="Home"
                style={navBtnStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.07)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "none")
                }
                onMouseDown={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
                }
                onMouseUp={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.07)")
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="7" />
                </svg>
              </button>

              <button
                title="Recents"
                style={navBtnStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.07)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "none")
                }
                onMouseDown={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
                }
                onMouseUp={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.07)")
                }
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
