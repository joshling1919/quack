export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data:user,
  })
);