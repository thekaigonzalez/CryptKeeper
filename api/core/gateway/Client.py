from api.core.gateway.GatewayInteraction import APImethod


client = APImethod()
def onReady(method):
    print(client.asJSON())
print(client.asJSON())
