import { UserProfile } from "@clerk/nextjs";
import react from "react";

function ProfilePage() {
    return (
        <div className="flex justify-center items-center">
            <UserProfile />
        </div>
    );
}

export default ProfilePage;