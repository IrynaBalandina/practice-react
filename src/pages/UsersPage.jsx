import { nanoid } from "nanoid";

import AddProfileForm from "../components/AddProfileForm/AddProfileForm";
import Section from "../components/Section";
import Profile from "../components/Profile";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filter/filterReducer";
import { addUser, deleteUser } from "../redux/users/usersReducer";
import { selectFilteredUsers } from "../redux/users/userSelectors";
import { selectFilter } from "../redux/filter/filterSelectors";

const UsersPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const filteredUsers = useSelector(selectFilteredUsers);

  const onAddProfile = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    const action = addUser(finalUser);
    dispatch(action);
  };

  const onDeleteProfile = (profileId) => {
    const action = deleteUser(profileId);
    dispatch(action);
  };

  const onSayMyName = (profileName) => {
    console.log("profileName: ", profileName);
  };

  return (
    <div>
      <AddProfileForm onAddProfile={onAddProfile} />
      <Section title="Find users by (name, email, phone)">
        <input
          type="text"
          placeholder="Enter keyword to search"
          value={filter}
          onChange={(event) => {
            const action = setFilter(event.target.value);
            dispatch(action);
          }}
        />
      </Section>
      <Section title="User list">
        {filteredUsers.map((profileItem) => {
          return (
            <Profile
              key={profileItem.id}
              id={profileItem.id}
              name={profileItem.name}
              phone={profileItem.phone}
              status={profileItem.status}
              email={profileItem.email}
              hasPhysicalAddress={profileItem.hasPhysicalAddress}
              onSayMyName={onSayMyName}
              onDeleteProfile={onDeleteProfile}
            />
          );
        })}
      </Section>
    </div>
  );
};

export default UsersPage;