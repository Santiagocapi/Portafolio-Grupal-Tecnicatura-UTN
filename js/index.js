const members = document.querySelectorAll(".member-card");

members.forEach((member) => {
   member.addEventListener("click", () => {
    const { id } = member.dataset;
    window.location.href = `profile.html?id=${encodeURIComponent(id)}`;
  });
});
