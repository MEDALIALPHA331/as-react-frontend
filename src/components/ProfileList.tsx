import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { useQuery } from "@tanstack/react-query";

export type Profile = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
};

function ProfileList() {
  // const [profiles, setProfiles] = useState<Profile[]>([]);

  const { data: profiles, isLoading } = useQuery(["data"], async () => {
    const response = await fetch("http://localhost:8000/profiles");
    const data = (await response.json()) as Profile[];
    return data;
  });

  // async function fetchData() {
  //   const response = await fetch("http://localhost:8000/profiles");
  //   const data = await response.json();
  //   setProfiles(data);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <ul className="m-2 grid grid-cols-2 gap-2 text-white/90 md:grid-cols-3 xl:grid-cols-4">
      {profiles ? (
        profiles.map((profile) => <ListItem key={profile.id} data={profile} />)
      ) : (
        <p className="text-4xl text-red-400">No Content</p>
      )}
    </ul>
  );
}

export default ProfileList;
