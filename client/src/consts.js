declare var process: {
    env: {
        NODE_ENV: string
    }
}

export const API_URL = process.env.NODE_ENV === "development" ? "http://localhost:4000/api" : "deployedApiURLplaceholder"

