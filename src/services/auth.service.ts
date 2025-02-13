import supabase from "../config/database";

class AuthService {
  static async register({ email, password }: { email: string; password: string }) {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) throw new Error(error.message);
    return user;
  }

  static async login({ email, password }: { email: string; password: string }) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
    return data;
  }

  static async refreshToken(refreshToken: string) {
    const { data, error } = await supabase.auth.refreshSession({ refresh_token: refreshToken });
    if (error) throw new Error(error.message);
    return data;
  }
}

export default AuthService;
