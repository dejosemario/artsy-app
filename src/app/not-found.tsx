import { redirect } from "next/navigation";

const NotFoundPage: React.FC = () => {
    redirect('/');
};

export default NotFoundPage;