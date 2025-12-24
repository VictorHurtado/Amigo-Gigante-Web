import Container from "@mui/material/Container";
import LoginForm from "@/presentation/components/login/LoginForm";
import LoginHeader from "@/presentation/components/login/LoginHeader";
import LoginImageSection from "@/presentation/components/login/LoginImageSection";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <LoginHeader />
      <main className="flex flex-1 flex-col gap-8 px-4 pb-10 pt-8 lg:flex-row lg:items-stretch lg:px-8">
        <LoginImageSection />
        <section className="flex w-full items-center justify-center lg:w-1/2">
          <Container maxWidth="sm">
            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
              <LoginForm />
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
