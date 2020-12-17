import { googleAuth } from "./auth/google.auth";

export function AuthService(provider: string) {
    switch (provider) {
        case "google": {
            return googleAuth();
        }
        default: {
            return googleAuth();
        }
    }
}
