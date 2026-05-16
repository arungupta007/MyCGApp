const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userNameRegex = /^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/;

const speialRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

const verifyLink = (link: string) => {
  const regex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return link.match(regex);
};

const validators = {
  emailRegex,
  userNameRegex,
  speialRegex,
  verifyLink,
};
export default validators;
