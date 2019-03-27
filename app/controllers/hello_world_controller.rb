# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"
  skip_before_action :authenticate_request

  def index
    @hello_world_props = { name: "Stranger" }
  end
end
