import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CARD_SX = {
    borderRadius: 4,
    p: { xs: 2.25, sm: 2.75, md: 3 },
    background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: `
    0 0 0 1px rgba(255,255,255,0.06),
    0 0 48px rgba(97,218,251,0.14)
  `,
};

const CHIP_SX = (shadow) => ({
    px: 1.5,
    py: 0.9,
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.14)",
    bgcolor: "rgba(0,0,0,0.35)",
    boxShadow: `0 0 28px ${shadow}`,
});

const inputBaseSx = {
    "& .MuiInputLabel-root": {
        color: "rgba(255,255,255,0.55)",
        letterSpacing: "0.12em",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "rgba(97,218,251,0.85)",
    },
    "& .MuiOutlinedInput-root": {
        borderRadius: 3,
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(8px)",
        transition: "border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease",
        "& fieldset": { borderColor: "rgba(255,255,255,0.14)" },
        "&:hover fieldset": { borderColor: "rgba(255,255,255,0.22)" },
        "&.Mui-focused": {
            transform: "translateY(-1px)",
            boxShadow: "0 0 0 1px rgba(97,218,251,0.18), 0 0 32px rgba(97,218,251,0.18)",
        },
        "&.Mui-focused fieldset": { borderColor: "rgba(97,218,251,0.35)" },
    },
    "& .MuiOutlinedInput-input": {
        color: "rgba(255,255,255,0.90)",
        letterSpacing: "0.01em",
    },
    "& .MuiOutlinedInput-input::placeholder": {
        color: "rgba(255,255,255,0.35)",
        opacity: 1,
    },
    "& .MuiFormHelperText-root": { color: "rgba(255,255,255,0.45)" },
};

export default function ContactForm() {
    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const [values, setValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        botcheck: "", // honeypot
    });

    const [status, setStatus] = useState({ state: "idle", msg: "" }); // idle | sending | success | error

    const canSubmit = useMemo(() => {
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim());
        return (
            values.name.trim() &&
            emailOk &&
            values.subject.trim() &&
            values.message.trim() &&
            status.state !== "sending"
        );
    }, [values, status.state]);

    function handleChange(e) {
        const { name, value } = e.target;
        setValues((v) => ({ ...v, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!ACCESS_KEY) {
            setStatus({ state: "error", msg: "Missing Web3Forms config (env var)." });
            return;
        }

        if (values.botcheck) {
            setStatus({ state: "success", msg: "Sent. I’ll get back to you soon." });
            return;
        }

        setStatus({ state: "sending", msg: "" });

        try {
            const payload = {
                access_key: ACCESS_KEY,
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message,
                from_name: "Portfolio Contact Form",
            };

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (data?.success) {
                setStatus({ state: "success", msg: "Sent. I’ll get back to you soon." });
                setValues({ name: "", email: "", subject: "", message: "", botcheck: "" });
            } else {
                setStatus({
                    state: "error",
                    msg: data?.message || "Something went wrong. Please try again.",
                });
            }
        } catch {
            setStatus({ state: "error", msg: "Network error. Please try again." });
        }
    }

    return (
        <Box
            id="contact"
            sx={{
                bgcolor: "#000",
                py: { xs: 8, md: 12 },
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background: `
            radial-gradient(900px 320px at 50% 10%, rgba(97,218,251,0.10), transparent 60%),
            radial-gradient(700px 280px at 20% 70%, rgba(70,120,255,0.08), transparent 60%),
            radial-gradient(700px 280px at 85% 55%, rgba(255,70,210,0.07), transparent 60%)
          `,
                    opacity: 0.55,
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative" }}>
                <Typography
                    variant="overline"
                    sx={{
                        display: "block",
                        textAlign: "center",
                        letterSpacing: "0.22em",
                        opacity: 0.72,
                        mb: 1,
                    }}
                >
                    CONTACT
                </Typography>

                <Typography
                    variant="h2"
                    sx={{
                        textAlign: "center",
                        fontSize: { xs: "2.1rem", sm: "2.6rem", md: "3.1rem" },
                        mb: 1.25,
                    }}
                >
                    Connect with me
                </Typography>

                <Typography
                    sx={{
                        textAlign: "center",
                        color: "text.secondary",
                        fontSize: { xs: "1.05rem", md: "1.1rem" },
                        maxWidth: "70ch",
                        mx: "auto",
                        lineHeight: 1.7,
                        mb: { xs: 4, md: 6 },
                    }}
                >
                    Contact Form + Quick Links
                </Typography>

                <Box
                    sx={{
                        mx: "auto",
                        maxWidth: 1100,
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
                        gap: { xs: 2.5, md: 3 },
                        alignItems: "start",
                    }}
                >
                    {/* LEFT: Contact Form */}
                    <Box sx={CARD_SX}>
                        <Typography
                            sx={{
                                fontWeight: 750,
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                                fontSize: { xs: "1.25rem", sm: "1.35rem", md: "1.45rem" },
                            }}
                        >
                            Contact Form
                        </Typography>

                        <Typography
                            sx={{
                                mt: 0.75,
                                color: "text.secondary",
                                lineHeight: 1.7,
                                mb: 2.5,
                                maxWidth: "75ch",
                            }}
                        >
                            Send a message — I usually reply within a day or two.
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                display: "grid",
                                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                                gap: 2,
                            }}
                        >
                            {/* honeypot */}
                            <input
                                name="botcheck"
                                value={values.botcheck}
                                onChange={handleChange}
                                style={{ display: "none" }}
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            <TextField
                                name="name"
                                label="Name"
                                placeholder="Your name"
                                variant="outlined"
                                fullWidth
                                sx={inputBaseSx}
                                value={values.name}
                                onChange={handleChange}
                            />

                            <TextField
                                name="email"
                                label="Email"
                                placeholder="you@domain.com"
                                variant="outlined"
                                fullWidth
                                sx={inputBaseSx}
                                value={values.email}
                                onChange={handleChange}
                            />

                            <Box sx={{ gridColumn: "1 / -1" }}>
                                <TextField
                                    name="subject"
                                    label="Subject"
                                    placeholder="What’s this about?"
                                    variant="outlined"
                                    fullWidth
                                    sx={inputBaseSx}
                                    value={values.subject}
                                    onChange={handleChange}
                                />
                            </Box>

                            <Box sx={{ gridColumn: "1 / -1" }}>
                                <TextField
                                    name="message"
                                    label="Message"
                                    placeholder="Write your message..."
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    minRows={5}
                                    sx={inputBaseSx}
                                    value={values.message}
                                    onChange={handleChange}
                                />
                            </Box>

                            <Box
                                sx={{
                                    gridColumn: "1 / -1",
                                    mt: 1,
                                    display: "flex",
                                    gap: 1.5,
                                    alignItems: "center",
                                }}
                            >
                                <Button
                                    type="submit"
                                    disabled={!canSubmit}
                                    sx={{
                                        textTransform: "none",
                                        bgcolor: "#fff",
                                        color: "#000",
                                        borderRadius: 999,
                                        px: 2.5,
                                        fontWeight: 500,
                                        "&:hover": { bgcolor: "rgba(255,255,255,0.85)" },
                                        "&.Mui-disabled": {
                                            bgcolor: "rgba(255,255,255,0.25)",
                                            color: "rgba(0,0,0,0.55)",
                                        },
                                    }}
                                >
                                    {status.state === "sending" ? "Sending..." : "Submit"}
                                </Button>

                                {status.state !== "idle" && (
                                    <Typography
                                        sx={{
                                            color:
                                                status.state === "success"
                                                    ? "rgba(160,255,200,0.90)"
                                                    : "rgba(255,160,200,0.90)",
                                            fontSize: "0.95rem",
                                        }}
                                    >
                                        {status.msg}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </Box>

                    {/* RIGHT: Quick Links */}
                    <Box sx={CARD_SX}>
                        <Typography
                            sx={{
                                fontWeight: 750,
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                                fontSize: { xs: "1.25rem", sm: "1.35rem", md: "1.45rem" },
                            }}
                        >
                            Quick Links
                        </Typography>

                        <Typography
                            sx={{
                                mt: 0.75,
                                color: "text.secondary",
                                lineHeight: 1.7,
                                mb: 2.25,
                            }}
                        >
                            Connect with me across platforms.
                        </Typography>

                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                            <Box sx={CHIP_SX("rgba(70,120,255,0.16)")}>
                                <Typography
                                    component="a"
                                    href="https://www.linkedin.com/in/abiel-source/"
                                    target="_blank"
                                    rel="noreferrer"
                                    variant="overline"
                                    sx={{
                                        textDecoration: "none",
                                        color: "rgba(255,255,255,0.90)",
                                        letterSpacing: "0.22em",
                                        opacity: 0.9,
                                    }}
                                >
                                    LinkedIn
                                </Typography>
                            </Box>

                            <Box sx={CHIP_SX("rgba(255,70,210,0.14)")}>
                                <Typography
                                    component="a"
                                    href="https://github.com/abiel-source"
                                    target="_blank"
                                    rel="noreferrer"
                                    variant="overline"
                                    sx={{
                                        textDecoration: "none",
                                        color: "rgba(255,255,255,0.90)",
                                        letterSpacing: "0.22em",
                                        opacity: 0.9,
                                    }}
                                >
                                    GitHub
                                </Typography>
                            </Box>

                            <Box sx={CHIP_SX("rgba(97,218,251,0.14)")}>
                                <Typography
                                    component="a"
                                    href="https://linktr.ee/abielkim"
                                    target="_blank"
                                    rel="noreferrer"
                                    variant="overline"
                                    sx={{
                                        textDecoration: "none",
                                        color: "rgba(255,255,255,0.90)",
                                        letterSpacing: "0.22em",
                                        opacity: 0.9,
                                    }}
                                >
                                    LinkTree
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ mt: 2.5, pt: 2.25, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                            <Typography variant="overline" sx={{ letterSpacing: "0.22em", opacity: 0.75 }}>
                                EMAIL
                            </Typography>
                            <Typography sx={{ mt: 0.5, color: "rgba(255,255,255,0.88)" }}>
                                abielkim.tech@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
