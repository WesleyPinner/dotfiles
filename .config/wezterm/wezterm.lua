local wezterm = require 'wezterm'

local config = wezterm.config_builder()

-- Appearance
config.color_scheme = "Catppuccin Mocha"
config.window_background_opacity = 0.8
config.enable_tab_bar = false
config.default_cursor_style = 'BlinkingBar'
config.animation_fps = 144
config.cursor_blink_rate = 950

-- Font
config.font = wezterm.font 'Iosevka Nerd Font'

-- Make sure bash is interactive
config.default_prog = {"/bin/bash"}

return config
