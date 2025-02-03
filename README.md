## EcomArts

EcomArts is an e-commerce website that sells art pieces. The website is built using Django and Bootstrap. The website has the following features:

Title

```tsx
initial={{ opacity: 0, y: 25 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
viewport={{ once: true }}
```

```tsx
const TARGET_DATE = new Date();
TARGET_DATE.setDate(TARGET_DATE.getDate() + 3);
const TARGET_DATE_STRING =
   TARGET_DATE.toISOString().split("T")[0] + "T23:59:59";

const [timeLeft, setTimeLeft] = useState<TimeLeft>(
   calculateTimeLeft(TARGET_DATE_STRING)
);

useEffect(() => {
   const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(TARGET_DATE_STRING));
   }, 1000);
   return () => clearTimeout(timer);
});
```
