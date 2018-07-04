(ns poisson.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

;; FIXME: The problem is that len(grid) < x + (y * height), but if we initialize grid width cols + cols * rows we get weird artifacts

(def r 10) ;; minimum distance between samples
(def k 30) ;; limit of samples to choose before rejection
(def n 2)  ;; number of dimensions
(def w (/ r (Math/sqrt n)))

(defn col
  "Returns the column for a given x-coordinate"
  [x]
  (Math/floor (/ x w)))

(defn row
  "Returns the row for a given y-coordinate"
  [y]
  (Math/floor (/ y w)))

(defn make-grid
  "Initialize our background grid"
  [width height]
  (let [ncols (inc (col width))
        nrows (inc (row height))]
    (vec (repeat (* ncols nrows) nil))))

(defn into-grid
  "Inserts a point at the correct location in the grid"
  [grid width pos]
  (let [[x y] pos
        idx (+ (col x) (* (row y) (col width)))]
    (try
      (assoc grid idx pos)
      (catch js/Error e
        (println "into-grid failed:" "width" width "pos" pos "idx" idx
                 "col" (col x) "row" (row y))
        (throw e)))))

(defn neighbors
  "Returns non-empty cells in a 3x3 neighborhood"
  [grid width height [x y]]
  (let [c (col x)
        r (row y)
        cols (col width)
        rows (row height)]
    (->>
     (for [j (range (dec r) (+ r 2))
           i (range (dec c) (+ c 2))]
       [i j])
     (filter (fn [[i j]]
               (and (< -1 i cols) (< -1 j rows))))
     (keep (fn [[i j]]
             (nth grid (+ i (* j cols))))))))

(defn rand-around
  "Generates in a given distance around a point"
  [[x y] min-dist max-dist]
  (let [dist (+ min-dist (rand (- max-dist min-dist)))
        a (rand (* Math/PI 2))
        off-x (* dist (Math/cos a))
        off-y (* dist (Math/sin a))]
    [(+ x off-x) (+ y off-y)]))

(defn distance
  "Calculates the distance between two two-dimensional vectors"
  [[a1 a2] [b1 b2]]
  (Math/sqrt (* (- a1 b1) (- a1 b1)) (* (- a2 b2) (- a2 b2))))

(defn init-with-point
  "Returns the initial state"
  [pos width height]
  {:grid (into-grid (make-grid width height) width pos)
   :active #{pos}})

(defn setup []
  (q/frame-rate 60)
  (q/color-mode :hsb)
  (let [width (q/width)
        height (q/height)
        pos [(q/random width) (q/random height)]]
    (init-with-point pos width height)))

(defn pick-samples [state]
  ;; while the active list is not empty...
  (if (seq (:active state))
    (let [width (q/width)
          height (q/height)
          chosen (rand-nth (seq (:active state)))
          next (->>
                ;; generate k points
                (take k (->> (repeatedly #(rand-around chosen r (* 2 r)))
                             ;; keep only the ones in our screen space
                             (filter (fn [[x y]]
                                       (and (<= 0 x (dec width))
                                            (<= 0 y (dec height)))))))
                ;; for each point, check if it is within distance r of existing
                ;; samples if it is far enough, emit it as a sample and add it
                ;; to the active list
                (reduce (fn [state sample]
                          (let [neighborhood (neighbors (:grid state) width height sample)]
                            (if (every? #(>= (distance sample %) r) neighborhood)
                              (-> state
                                  (update :grid into-grid width sample)
                                  (update :active conj sample))
                              state)))
                        state))]
      ;; if after k attempts no such point is found, instead remove our random
      ;; active point
      (if (= state next)
        (update state :active disj chosen)
        next))
    state))

(defn update-state [state]
  (first (drop 24 (iterate pick-samples state))))

(defn reset-state [state event]
  (init-with-point [(:x event) (:y event)] (q/width) (q/height)))

(defn draw-state [state]
  (q/background 20)
  (q/stroke-weight 4)
  (q/stroke 255)
  (doseq [[x y] (remove nil? (:grid state))]
    (q/point x y))
  (q/stroke 20 255 255)
  (doseq [[x y] (:active state)]
    (q/point x y)))

(defn fullscreen []
  [(.. js/document -body -offsetWidth) (.. js/document -body -offsetHeight)])

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch poisson
    :host "poisson"
    :size (fullscreen)
    :setup setup
    :update update-state
    :mouse-pressed reset-state
    :draw draw-state
    :renderer :p2d
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch on save
(run-sketch)
