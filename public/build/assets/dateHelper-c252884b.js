function o(n){const e={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},t=new Date(n);return new Intl.DateTimeFormat("en-US",e).format(t)}export{o as f};
