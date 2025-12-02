import jsonwebtoken from 'jsonwebtoken'

/*
* TO DO - The JWT must be initialized along the object constructor, so we can reutilize it as "this.jwt"
 * import { JWTconfig } from './jwt-config'
 */
import { randomUUID } from 'crypto'

export class JWTService {
    constructor(private readonly secret: string = process.env.JWT_SECRET || "") {
    if (!this.secret) {
        throw new Error("JWT_SECRET must be provided in environment variables.");
    }
}

    signToken(payload: object) {
        let id = randomUUID()
        let operation = jsonwebtoken.sign(payload, this.secret, {
            algorithm: "HS256", // temporary symetric algorithm - We must change it to asymetric algorithm ASP
            issuer: "greenai",
            jwtid: id,
            expiresIn: "90d"
        })
        return operation
    }

    verifyToken(token: string) {
        try {
          let operation = jsonwebtoken.verify(token, this.secret, { issuer: "greenai", algorithms: ["HS256"] })
          return true  
        } catch(error) {
            return false
        }
        
    }
}