interface IMainPublicProps {
  children: React.ReactNode;
}

export const MainPublic = ({ children }: IMainPublicProps) => {
  return <main>{children}</main>;
};
