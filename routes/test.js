route.get("/popular", async (req, res) => {
    try {
      const response = await axios({
        url: baseUrl,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: {
          query: searchQueryStrings.PopularAnimeQuery,
          variables: {
            page: req.query.page === undefined ? 1 : req.query.page,
            perPage: req.query.count === undefined ? 10 : req.query.count,
          },
        },
      }).catch((err) => {
        res.status(404).json(err);
      });
      if (response === undefined || response === null) {
        res.status(404).json({
          data: "No response",
        });
      }
      res.status(200).json(response.data);
    } catch (err) {
      console.log("Error from Popular Anime Route", err);
    }
  });