import { Container } from "@mui/material";
import ProfileContent from "./ProfileContent";
import { api } from "../api/lib/api";
import { CompletedTest, UserInterface } from "../../../types/TypeInterfaces";


async function fetchUser() {
  const request = await api({
    method: 'get',
    url: `/user`
  });
  if (request?.status == 200) {
    return request.data;
  }
  return []
}

async function fetchComplateTests() {
  const request = await api({
    method: 'get',
    url: `/my-quizzes`
  });
  if (request?.status == 200) {
    return request.data;
  }
  return []
}

export default async function Profile() {
  const user: UserInterface = await fetchUser()
  const complateTests: CompletedTest[] = await fetchComplateTests()
  console.log(complateTests);

  return (
    <Container maxWidth="xl" sx={{ ml: 0, position: 'relative' }}>
      {/* <ProfileContent user={user} themes={complateTests} /> */}
    </Container>
  );
}
