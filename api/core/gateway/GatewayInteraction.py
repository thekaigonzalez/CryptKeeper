# Interactions

# Allow Interaction with user data
import json

import requests


def NoNullReactor():
    return


def gateway_init(gatewaytoken="0 0 0 0"):
    requests.get('')


class Gateway:
    class Object(object):
        def __init__(self):
            return

    def __getattr__(self):
        pass


def GetAllInteraction():
    return NoNullReactor()


class Interaction(Gateway.Object):
    def __init__(self):
        super().__init__()
        print("Loaded Gateway Interaction")


class APImethod(Gateway.Object):
    client_body = {}
    validator = ""
    token = ""
    name = ""
    valid = ""

    def __init__(self):
        super().__init__()

        validator = None
        token = None
        name = None
        valid = True
        client_body = {
            "token": token,
            "name": name,
            "isvalid?": valid,
            "validator": validator
        }

    def onReady(self):
        pass

    def asJSON(self):
        return json.load(self.client_body)

    def onLoaded(self): pass

    def ongetURL(self, url): pass
