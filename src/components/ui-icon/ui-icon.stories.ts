export default {
  title: 'UI Icon',
  component: 'ui-icon',
};

export const UIIcon = ({ icon, color, size }) => {
  return `<ui-icon icon="${icon}" color="${color}" size="${size}"></ui-icon>`;
};

UIIcon.args = {
  icon: 'heart',
  color: 'black',
  size: 24
};

UIIcon.argTypes = {
  icon: {
    options: ["add_to_cart", "added_to_cart", "empty_cart", "clock", "arrow_left", "arrow_right", "arrow_top", "arrow_down", "check", "chevron_down", "chevron_up", "chevron_left", "chevron_right", "cross", "heart", "heart_fill", "home", "home_fill", "store", "menu", "message", "search", "profile", "profile_fill", "newsletter", "info", "info_circle", "info_shield", "error", "question_mark", "mail", "marker", "marker_fill", "minus", "plus", "more", "credits", "rewards", "shipping", "return", "safety", "star", "show_password", "phone", "drag", "list", "tiles", "filter", "filter2", "sort", "account", "login", "logout", "gift"],
    control: 'select'
  },
  color: { control: 'color' },
};
