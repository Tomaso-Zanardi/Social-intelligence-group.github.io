# Social intelligence group


## How to serve site locally

To serve the site locally, you need to run the following command:

```bash
bundle exec jekyll serve
```

and then open the site in your browser: `http://localhost:4000`

For more information see [Installation](https://github.com/mmistakes/minimal-mistakes#Installation) **Gem-based method**
section to serve the site locally. These lines should be added to `Gemfile` file:

```
source "https://rubygems.org"
gem "jekyll"
gem "minimal-mistakes-jekyll"
gem "webrick", "~> 1.7"
```

And `_config.yml` file should be updated:

```yaml
theme                    : "minimal-mistakes-jekyll"
```


To host the site on a GitHub, see **Remote theme method** section.  These lines should be added to `Gemfile` file:

```
source "https://rubygems.org"
gem "github-pages", "~> 	219", group: :jekyll_plugins
gem "jekyll-include-cache", group: :jekyll_plugins
```

And `_config.yml` file should be updated:

```yaml
remote_theme             : "mmistakes/minimal-mistakes@4.24.0"
```
