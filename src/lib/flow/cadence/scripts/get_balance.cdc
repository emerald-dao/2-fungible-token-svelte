// This script reads the balance field of an account's FlowToken Balance
import "ExampleToken"
import "FungibleToken"

pub fun main(account: Address): UFix64 {
    let vaultRef = getAccount(account).getCapability(ExampleToken.VaultBalancePath)
                    .borrow<&ExampleToken.Vault{FungibleToken.Balance}>()
                    ?? panic("Could not borrow Balance reference to the Vault")

    return vaultRef.balance
}