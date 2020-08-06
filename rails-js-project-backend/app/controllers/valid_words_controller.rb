class ValidWordsController < ApplicationController
  before_action :set_valid_word, only: [:show, :update, :destroy]

  # GET /valid_words
  def index
    @valid_words = ValidWord.all

    render json: @valid_words, include: [:word]
  end

  # GET /valid_words/1
  def show
    render json: @valid_word
  end

  # POST /valid_words
  def create
    @valid_word = ValidWord.new(valid_word_params)

    if @valid_word.save
      render json: @valid_word, status: :created, location: @valid_word
    else
      render json: @valid_word.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /valid_words/1
  def update
    if @valid_word.update(valid_word_params)
      render json: @valid_word
    else
      render json: @valid_word.errors, status: :unprocessable_entity
    end
  end

  # DELETE /valid_words/1
  def destroy
    @valid_word.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_valid_word
      @valid_word = ValidWord.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def valid_word_params
      params.require(:valid_word).permit(:name, :word_id)
    end
end
