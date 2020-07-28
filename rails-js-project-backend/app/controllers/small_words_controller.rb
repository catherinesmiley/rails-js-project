class SmallWordsController < ApplicationController
  before_action :set_small_word, only: [:show, :update, :destroy]

  # GET /small_words
  def index
    @small_words = SmallWord.all

    render json: @small_words
  end

  # GET /small_words/1
  def show
    render json: @small_word
  end

  # POST /small_words
  def create
    @small_word = SmallWord.new(small_word_params)

    if @small_word.save
      render json: @small_word, status: :created, location: @small_word
    else
      render json: @small_word.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /small_words/1
  def update
    if @small_word.update(small_word_params)
      render json: @small_word
    else
      render json: @small_word.errors, status: :unprocessable_entity
    end
  end

  # DELETE /small_words/1
  def destroy
    @small_word.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_small_word
      @small_word = SmallWord.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def small_word_params
      params.require(:small_word).permit(:name, :big_word_id)
    end
end
