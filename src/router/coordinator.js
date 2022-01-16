export const goToProfilePage = (history) => {
  history.push('/');
};

export const goToMoviePage = (history, id) => {
  history.push(`/${id}`);
};

export const goToBack = (history) => {
  history.goBack();
};
