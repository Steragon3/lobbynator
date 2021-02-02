class LobbyController < ApplicationController
    def index
        @lobbies = Lobby.all
      end
end
