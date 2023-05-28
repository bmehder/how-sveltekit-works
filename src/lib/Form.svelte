<script>
  export let apiKey = ''
</script>

<h2>Send me a message</h2>
<form action="https://formspree.io/f/{apiKey}" method="POST">
  <div>
    <label for="first-name">First Name</label>
    <input type="text" name="first-name"/>
  </div>
  <div>
    <label for="last-name">Last Name</label>
    <input type="text" name="last-name"/>
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" name="email"/>
  </div>
  <div>
    <label for="message">Message</label>
    <textarea name="message" cols="30" rows="10"></textarea>
  </div>
  <div>
    <input class="bg-accent" type="submit" value="Submit Message" />
  </div>
</form>

<style>
  form {
    max-width: 48rem;
    display: grid;
    gap: var(--size);
  }
  
  div {
    display: grid;
    gap: calc(var(--size) / 4);
  }

  input, textarea {
    padding: calc(var(--size) / 2);
  }

  input[type="submit"] {
    font-size: var(--size);
    cursor: pointer;
    border: none;

    &:hover {
      background-color: transparent;
      outline: 4px solid var(--accent);
    }
  }
</style>