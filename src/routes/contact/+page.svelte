<script>
  const formId = 'mzbelyay'
</script>

<h1>Contact</h1>

<h2>Send us a message</h2>

<form action="https://formspree.io/f/{formId}" method="post">
  <div>
    <label for="name">Your Name</label>
    <input
      name="name"
      id="name"
      type="text"
      minlength="5"
      required
      placeholder="John Doe"
    />
  </div>

  <div>
    <label for="email">Your Email</label>
    <input name="email" id="email" type="email" required placeholder="john@doe.com" />
  </div>

  <div>
    <label for="message">Your Message</label>
    <textarea name="message" id="message" rows="10" required />
  </div>

  <div>
    <button type="submit">Submit</button>
  </div>
</form>

<style>
  form,
  div {
    display: grid;
    gap: 1.5rem;
    font-weight: bold;
  }

  label {
    font-size: 1.25rem;
  }

  input,
  textarea,
  button {
    font-size: 1.25rem;
    padding: 1.25rem;
  }

  @media (min-width: 48rem) {
    form {
      max-width: 50%;
    }
  }
</style>
