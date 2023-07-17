const SidebarBtn = ({ img, title }) => {
  return (
    <button className="btn sidebar_btn">
      <span className="img">{img}</span>
      <span>{title}</span>
    </button>
  );
};

export default SidebarBtn;
