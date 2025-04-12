import "@/components/common/styles/skeleton.css";

const Skeleton = ({ ...props }: React.ComponentProps<"div">) => {
	return <div className="skeleton" {...props}></div>;
};

export default Skeleton;
