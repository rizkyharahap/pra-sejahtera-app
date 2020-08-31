export default function swDev() {
  const swUrl = `${process.env.PUBLIC_URL}/sw.js`;

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register(swUrl)
        .then((reg) => console.log('Success', reg.scope))
        .catch((err) => console.log('Failure', err));
    });
  }
}
