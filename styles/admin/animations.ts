export const adminAnimations = `
  @keyframes mdPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }

  @keyframes mdSlideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const animations = {
  pulse: "mdPulse 2s infinite",
  slideUp: "mdSlideUp .25s ease",
};
