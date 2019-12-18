import axios from "axios";

const instagramAuth = axios.create({
  baseUrl: "https://api.instagram.com/oauth/",
});

const instagramV1 = axios.create({
  baseUrl: "https://api.instagram.com/",
});

const instagram = axios.create({
  baseUrl: "https://graph.instagram.com/",
});

export {instagramAuth, instagramV1, instagram}
