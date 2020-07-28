class BigWordsController < ApplicationController
  before_action :set_big_word, only: [:show, :update, :destroy]

  # GET /big_words
  def index
    @big_words = BigWord.all

    render json: @big_words
  end

  # GET /big_words/1
  def show
    render json: @big_word
  end

  # POST /big_words
  def create
    @big_word = BigWord.new(big_word_params)

    if @big_word.save
      render json: @big_word, status: :created, location: @big_word
    else
      render json: @big_word.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /big_words/1
  def update
    if @big_word.update(big_word_params)
      render json: @big_word
    else
      render json: @big_word.errors, status: :unprocessable_entity
    end
  end

  # DELETE /big_words/1
  def destroy
    @big_word.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_big_word
      @big_word = BigWord.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def big_word_params
      params.require(:big_word).permit(:name)
    end
end
