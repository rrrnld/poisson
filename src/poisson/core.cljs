(ns poisson.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

;; FIXME: Clearly something happens at the border. I will have to figure out what exactly

(def r 10) ;; determines grid size
(def k 30) ;; iteration steps until we pick a sample
(def w (/ r (Math/sqrt 2)))

(defn make-grid [width height]
  ;; STEP 0
  (let [cols (Math/floor (/ width w))
        rows (Math/floor (/ height w))]
    (vec (repeat (* cols rows) nil))))

(defn pos->idx
  "Takes a vector and returns the corresponding index in our grid"
  [[x y] width]
  (+ (Math/floor (/ x w)) (* (Math/floor (/ y w)) (Math/floor (/ width w)))))

(defn pick-sample
  [width height]
  (let [x (rand width)
        y (rand height)
        pos [x y]]
    [x y]))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (let [width (q/width)
        height (q/height)
        sample (pick-sample width height)]
    ;; initialize our grid and pick our first element randomly
    {:grid (-> (make-grid width height)
               (assoc (pos->idx sample width) sample))
     :active [sample]}))

(defn spawn-vector
  "Generates a random 2-dimensional vector at x, y with the specified length"
  [[x y] length]
  (let [[v1 v2] (q/random-2d)]
    [(+ x (* v1 length)) (+ y (* v2 length))]))

(defn neighbors
  "Returns all non-nil neighbors for a vector in `grid`"
  [[x y] grid width height]
  (let [col (Math/floor (/ x w))
        row (Math/floor (/ y w))]
    (->> (for [j (range -1 2)
               i (range -1 2)]
           (let [col (+ col i)
                 row (+ row j)]
             (when (and (< -1 col width) (< -1 row height))
               (+ col (* row (Math/floor (/ width w)))))))
         (keep (partial nth grid)))))

(defn dist
  "Returns the distance between two 2-dimensional vectors"
  [[a b] [c d]]
  (Math/sqrt (+ (* (- c a) (- c a)) (* (- d b) (- d b)))))

(defn vec-remove
  "Remove item at idx from coll, where coll is an IPersistentVector"
  [coll idx]
  (vec (concat (subvec coll 0 idx) (subvec coll (inc idx)))))

(defn dprint
  "Prints and returns a value, optionally with a given `label`"
  ([label x] (println label x) x)
  ([x] (println x) x))

(defn update-state [{:keys [grid active] :as state}]
  (if (seq active)
    ;; choose next sample
    (let [idx (rand-int (count active))
          pos (nth active idx)
          width (q/width)
          height (q/height)
          sample (->>
                  ;; generate up to k samples
                  (for [_ (range k)]
                    (spawn-vector pos (+ r (rand r))))
                  ;; for every sample we generated, we check whether the
                  ;; neighbors around it are spaced out far enough
                  (filter
                   (fn [s]
                     (every? #(>= (dist % s) r) (neighbors s grid width height))))
                  (first))]
      {:active (if sample
                 (conj active sample)
                 (vec-remove (vec active) idx))
       :grid (assoc grid (pos->idx sample width) sample)})
    ;; leave state untouched, we're done
    state))

(defn draw-state [state]
  (q/background 0)
  (doseq [pos (:grid state)]
    (when-let [[x y] pos]
      (q/stroke 255)
      (q/stroke-weight 4)
      (q/point x y)))
  (doseq [[x y] (:active state)]
    (q/stroke 100 255 100)
    (q/stroke-weight 4)
    (q/point x y)))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch poisson
    :host "poisson"
    :size [500 500]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
(run-sketch)
