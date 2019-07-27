// signup: should make an AJAX request that creates a new user.
// login: should make an AJAX request that creates a new session.
// logout: should make an AJAX request that deletes the current session.
export const signup = user =>
  $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user }
  });

export const login = user =>
  $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user }
  });

export const logout = () =>
  $.ajax({
    url: "/api/session",
    method: "DELETE"
  });

// export const fetchAllPokemon = () => {
//     return $.ajax({
//         method: "GET",
//         url: "/api/pokemon"
//     });
