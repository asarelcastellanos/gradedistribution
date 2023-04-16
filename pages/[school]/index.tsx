import { useRouter } from "next/router"

export default function School() {

    const router = useRouter();
    const school_name = router.query.school as string;

    return (
        <div>
            <p>School Page of {school_name}</p>
        </div>
    )
}