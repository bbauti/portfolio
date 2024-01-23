export const changeTheme = (theme) => {
  const html = document.querySelector('html');
  if (theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  } else {
    html.classList.toggle('dark')
  }
};
